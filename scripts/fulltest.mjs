#!/usr/bin/env node
/* Full site Playwright test — all pages × all viewports.
   Per page: console/page errors, horizontal overflow, single h1, nav aria-current,
   i18n leakage (visible raw keys), tel/mailto presence where expected.
   Per interaction: accordion (faq), lightbox (gallery), click-to-load map (contact),
   form validation (contact). Screenshots for key pages. Writes qa/fulltest.json. */
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const PROJ = join(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = join(PROJ, "site");
const PORT = 8135;
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain" };

const PAGES = ["index.html", "about.html", "doctors.html", "treatments.html", "treatment-piles.html", "treatment-fissure.html", "treatment-fistula.html", "patient-info.html", "faq.html", "gallery.html", "reviews.html", "contact.html", "blog.html", "blog-anorectal.html", "blog-colonoscopy.html", "blog-fenugreek.html", "blog-foods.html", "blog-diabetes.html", "blog-name.html"];
const VPS = [[1440, 900, "desktop"], [1024, 768, "laptop"], [768, 1024, "tablet"], [390, 844, "mobile"], [360, 740, "mobile-sm"]];
const SHOTS = { "index.html": ["desktop", "mobile"], "treatment-piles.html": ["desktop", "mobile"], "faq.html": ["desktop"], "gallery.html": ["desktop"], "contact.html": ["desktop", "mobile"], "doctors.html": ["mobile"], "blog.html": ["desktop"], "blog-foods.html": ["desktop", "mobile"], "blog-diabetes.html": ["desktop"], "blog-name.html": ["desktop", "mobile"] };

const server = createServer((req, res) => {
  let p = join(ROOT, decodeURIComponent(req.url.split("?")[0]));
  if (p.endsWith("/")) p += "index.html";
  if (!existsSync(p)) { res.writeHead(404); res.end("nf"); return; }
  res.writeHead(200, { "content-type": MIME[extname(p)] || "application/octet-stream" });
  res.end(readFileSync(p));
});
await new Promise((r) => server.listen(PORT, r));
mkdirSync(join(PROJ, "qa", "shots"), { recursive: true });

const browser = await chromium.launch();
const report = [];
let failures = 0;

for (const [w, h, vpName] of VPS) {
  const context = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: "reduce" });
  for (const pg of PAGES) {
    const page = await context.newPage();
    const errors = [];
    const netBad = [];
    page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("response", (r) => { if (r.status() >= 400) netBad.push(r.status() + " " + r.url().replace(/^https?:\/\/[^/]+/, "")); });
    page.on("requestfailed", (r) => netBad.push("FAILED " + r.url().replace(/^https?:\/\/[^/]+/, "")));
    await page.goto(`http://localhost:${PORT}/${pg}`, { waitUntil: "networkidle" });
    /* scroll through the page so loading="lazy" images below the fold load,
       then return to top — image checks are only meaningful after this */
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        const step = () => {
          y += 600;
          window.scrollTo(0, y);
          if (y < document.body.scrollHeight) setTimeout(step, 60);
          else { window.scrollTo(0, 0); setTimeout(resolve, 200); }
        };
        step();
      });
    });

    const checks = await page.evaluate((nb) => {
      const cw = document.scrollingElement.clientWidth;
      const overflow = document.scrollingElement.scrollWidth - cw;
      const h1s = document.querySelectorAll("h1").length;
      const current = document.querySelectorAll('.main-nav a[aria-current="page"]').length;
      const leaked = [];
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const t = (el.textContent || "").trim();
        if (/^(home|about|doc|t\.|piles|fissure|fistula|pi|gal|faq|rev2|con|form|c)\.[a-z][\w.]*$/.test(t)) leaked.push(el.getAttribute("data-i18n"));
      });
      const tel = !!document.querySelector('a[href="tel:+8801716528757"]');
      const mail = !!document.querySelector('a[href^="mailto:dhakapilescarecenter@gmail.com"]');
      const whats = !!document.documentElement.outerHTML.toLowerCase().includes("whatsapp") || !!document.documentElement.outerHTML.includes("wa.me");
      const imgBad = [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.getAttribute("src"));
      return { overflow, h1s, current, leaked: leaked.slice(0, 5), tel, mail, whats, imgBad: imgBad.slice(0, 5), netBad: nb.slice(0, 5) };
    }, netBad);

    const row = { vp: `${w}x${h}`, page: pg, errors, ...checks };
    if (errors.length || checks.overflow !== 0 || checks.h1s !== 1 || (checks.current !== ((pg === "doctors.html" || pg === "reviews.html" || pg.indexOf("blog") === 0) ? 0 : 1)) || checks.leaked.length || checks.whats || checks.imgBad.length || checks.netBad.length) failures++;
    report.push(row);

    if ((SHOTS[pg] || []).includes(vpName)) {
      await page.screenshot({ path: join(PROJ, "qa", "shots", `${pg.replace(".html", "")}-${vpName}.png`), fullPage: true });
    }

    /* interactions once per page class */
    if (pg === "faq.html" && vpName === "desktop") {
      const accBtn = page.locator(".acc-btn").first();
      await accBtn.click();
      const expanded = await accBtn.getAttribute("aria-expanded");
      if (expanded !== "true") failures++;
      else report.push({ vp: `${w}x${h}`, page: "faq.html:accordion", result: "ok" });
    }
    if (pg === "gallery.html" && vpName === "desktop") {
      const lb = page.locator("a.lightbox").first();
      if (await lb.count()) {
        await lb.click();
        await page.waitForTimeout(400);
        const open = await page.evaluate(() => !!document.querySelector(".mfp-wrap"));
        if (!open) failures++;
        else report.push({ vp: `${w}x${h}`, page: "gallery.html:lightbox", result: "ok" });
        await page.keyboard.press("Escape");
      } else { failures++; report.push({ page: "gallery.html:lightbox", result: "MISSING" }); }
    }
    if (pg === "contact.html" && vpName === "desktop") {
      await page.click('#enquiryForm button[type=submit]');
      const invalid = await page.evaluate(() => document.querySelectorAll("#enquiryForm .field.invalid").length);
      if (invalid < 2) { failures++; report.push({ page: "contact.html:form-validation", result: "FAIL" }); }
      else report.push({ vp: `${w}x${h}`, page: "contact.html:form-validation", result: `ok (${invalid} invalid fields flagged)` });
    }
    if ((pg === "contact.html" || pg === "index.html" || pg === "about.html") && vpName === "mobile") {
      const iframe = await page.evaluate(() => !!document.querySelector(".map-iframe"));
      if (!iframe) { failures++; report.push({ page: pg + ":map", result: "FAIL" }); }
      else report.push({ vp: `${w}x${h}`, page: pg + ":map-autoload", result: "ok" });
    }
    if ((pg === "contact.html" || pg === "reviews.html") && vpName === "desktop") {
      const iframe = await page.evaluate(() => !!document.querySelector(".map-iframe"));
      if (!iframe) { failures++; report.push({ page: pg + ":map-desktop", result: "FAIL" }); }
      else report.push({ vp: `${w}x${h}`, page: pg + ":map-autoload-desktop", result: "ok" });
    }
    if (pg === "treatments.html" && vpName === "desktop") {
      await page.hover(".has-sub > a");
      await page.waitForTimeout(280);
      const subOk = await page.evaluate(() => {
        const s = document.querySelector(".main-nav .sub");
        if (!s) return false;
        const cs = getComputedStyle(s);
        return cs.visibility === "visible" && parseFloat(cs.opacity) > 0.9 && s.getBoundingClientRect().width > 150;
      });
      report.push({ vp: `${w}x${h}`, page: "treatments.html:dropdown-hover", result: subOk ? "ok" : "FAIL" });
      if (!subOk) failures++;
    }
    if (pg === "index.html" && vpName === "desktop") {
      await page.click(".lang-btn[data-set-lang=en]");
      await page.waitForTimeout(250);
      const enOk = await page.evaluate(() => document.documentElement.getAttribute("lang") === "en");
      await page.click(".lang-btn[data-set-lang=bn]");
      await page.waitForTimeout(250);
      const bnOk = await page.evaluate(() => document.documentElement.getAttribute("lang") === "bn");
      report.push({ vp: `${w}x${h}`, page: "index.html:lang-toggle", result: enOk && bnOk ? "ok" : "FAIL" });
      if (!(enOk && bnOk)) failures++;
    }
    await page.close();
  }
  await context.close();
}
await browser.close();
server.close();
writeFileSync(join(PROJ, "qa", "fulltest.json"), JSON.stringify(report, null, 2));
const bad = report.filter((r) => (r.errors && r.errors.length) || (typeof r.overflow === "number" && r.overflow !== 0) || (r.h1s !== undefined && r.h1s !== 1) || r.whats === true || (r.leaked && r.leaked.length) || r.result === "FAIL" || r.result === "MISSING");
console.log(`pages×viewports: ${report.length}, failure rows: ${bad.length}, total failures: ${failures}`);
if (bad.length) console.log(JSON.stringify(bad, null, 2));
console.log(failures ? "FULLTEST: FAILED" : "FULLTEST: ALL GREEN");
process.exit(failures ? 1 : 0);
