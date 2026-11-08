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
await new Promise((r) => server.listen(8136, r));
mkdirSync(join(PROJ, "qa", "shots"), { recursive: true });
const b = await chromium.launch();
const page = await b.newPage({ viewport: { width: 1440, height: 500 }, reducedMotion: "reduce" });
await page.goto("http://localhost:8136/treatments.html", { waitUntil: "networkidle" });
await page.hover(".has-sub > a");
await page.waitForTimeout(350);
await page.screenshot({ path: join(PROJ, "qa", "shots", "dropdown-hover.png") });
await page.close();
for (const [w, h, name] of [[1440, 900, "desktop"], [390, 844, "mobile"]]) {
  const p2 = await b.newPage({ viewport: { width: w, height: h }, reducedMotion: "reduce" });
  await p2.goto("http://localhost:8136/doctors.html", { waitUntil: "networkidle" });
  await p2.screenshot({ path: join(PROJ, "qa", "shots", `doctors-${name}.png`), fullPage: true });
  await p2.close();
}
await b.close(); server.close();
console.log("shots done");
