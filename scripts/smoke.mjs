#!/usr/bin/env node
/* Playwright smoke test — serves site/, tests index.html at 5 viewports.
   Checks: console/page errors, horizontal overflow, tel link, BN→EN toggle,
   html lang attr, mobile drawer open/close, full-page screenshots. */
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const PROJ = join(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = join(PROJ, "site");
const PORT = 8123;
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain" };

const server = createServer((req, res) => {
  let p = join(ROOT, decodeURIComponent(req.url.split("?")[0]));
  if (p.endsWith("/")) p += "index.html";
  if (!existsSync(p)) { res.writeHead(404); res.end("not found"); return; }
  res.writeHead(200, { "content-type": MIME[extname(p)] || "application/octet-stream" });
  res.end(readFileSync(p));
});
await new Promise((r) => server.listen(PORT, r));
mkdirSync(join(PROJ, "qa", "shots"), { recursive: true });

const VPS = [[1440, 900, "desktop"], [1024, 768, "laptop"], [768, 1024, "tablet"], [390, 844, "mobile"], [360, 740, "mobile-sm"]];
const browser = await chromium.launch();
const report = [];

for (const [w, h, name] of VPS) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, reducedMotion: "reduce" });
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: "networkidle" });

  const overflow = await page.evaluate(() => document.scrollingElement.scrollWidth - document.scrollingElement.clientWidth);
  const wide = await page.evaluate(() => {
    const cw = document.scrollingElement.clientWidth, out = [];
    document.querySelectorAll("body *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > cw + 1) out.push(el.tagName + "." + String((el.className && el.className.baseVal !== undefined) ? el.className.baseVal : (el.className || "")).split(" ").slice(0, 2).join(".") + " w" + Math.round(r.width) + " right" + Math.round(r.right));
    });
    return out.slice(0, 10);
  });
  const tel = await page.evaluate(() => !!document.querySelector('a[href="tel:+8801716528757"]'));
  const mailto = await page.evaluate(() => !!document.querySelector('a[href^="mailto:dhakapilescarecenter@gmail.com"]'));
  const h1bn = await page.evaluate(() => (document.querySelector(".hero-title") || {}).textContent?.trim().slice(0, 26) || "");

  await page.click(".lang-btn[data-set-lang=en]");
  await page.waitForTimeout(280);
  const h1en = await page.evaluate(() => (document.querySelector(".hero-title") || {}).textContent?.trim().slice(0, 34) || "");
  const htmlLang = await page.evaluate(() => document.documentElement.getAttribute("lang"));
  const storedLang = await page.evaluate(() => localStorage.getItem("dpc_lang"));
  await page.click(".lang-btn[data-set-lang=bn]");
  await page.waitForTimeout(280);

  let drawerOk = "n/a";
  if (w < 960) {
    await page.click(".burger");
    await page.waitForTimeout(320);
    const opened = await page.evaluate(() => document.getElementById("drawer").classList.contains("open"));
    await page.keyboard.press("Escape");
    await page.waitForTimeout(320);
    const closed = await page.evaluate(() => !document.getElementById("drawer").classList.contains("open"));
    drawerOk = opened && closed ? "ok" : "FAIL";
  }

  await page.screenshot({ path: join(PROJ, "qa", "shots", `index-${name}.png`), fullPage: true });
  report.push({ vp: `${w}x${h}`, errors, overflowPx: overflow, wide, tel, mailto, h1bn, h1en, htmlLang, storedLang, drawerOk });
  await page.close();
}
await browser.close();
server.close();
writeFileSync(join(PROJ, "qa", "smoke-index.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
