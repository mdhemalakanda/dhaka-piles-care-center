import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
const PROJ = join(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = join(PROJ, "site");
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".webp": "image/webp", ".woff2": "font/woff2" };
const server = createServer((req, res) => {
  let p = join(ROOT, decodeURIComponent(req.url.split("?")[0]));
  if (p.endsWith("/")) p += "index.html";
  if (!existsSync(p)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { "content-type": MIME[extname(p)] || "application/octet-stream" });
  res.end(readFileSync(p));
});
await new Promise((r) => server.listen(8133, r));
mkdirSync(join(PROJ, "qa", "shots"), { recursive: true });
const b = await chromium.launch();
for (const pg of ["treatments", "treatment-piles", "treatment-fissure", "treatment-fistula"]) {
  for (const [w, h, name] of [[1440, 900, "desktop"], [390, 844, "mobile"]]) {
    const page = await b.newPage({ viewport: { width: w, height: h }, reducedMotion: "reduce" });
    await page.goto(`http://localhost:8133/${pg}.html`, { waitUntil: "networkidle" });
    const overflow = await page.evaluate(() => document.scrollingElement.scrollWidth - document.scrollingElement.clientWidth);
    await page.screenshot({ path: join(PROJ, "qa", "shots", `${pg}-${name}.png`), fullPage: true });
    console.log(pg, name, "overflow:", overflow);
    await page.close();
  }
}
const page = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
await page.goto("http://localhost:8133/treatments.html", { waitUntil: "networkidle" });
await page.click(".lang-btn[data-set-lang=en]");
await page.waitForTimeout(300);
await page.screenshot({ path: join(PROJ, "qa", "shots", "treatments-desktop-en.png"), fullPage: true });
console.log("treatments desktop EN shot done");
await b.close(); server.close();
