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
await new Promise((r) => server.listen(8138, r));
mkdirSync(join(PROJ, "qa", "shots"), { recursive: true });
const b = await chromium.launch();
const p2 = await b.newPage({ viewport: { width: 1440, height: 700 }, reducedMotion: "reduce" });
await p2.goto("http://localhost:8138/index.html", { waitUntil: "networkidle" });
await p2.locator("#reviews").scrollIntoViewIfNeeded();
await p2.waitForTimeout(900);
await p2.screenshot({ path: join(PROJ, "qa", "shots", "index-reviews-band.png") });
await p2.goto("http://localhost:8138/reviews.html", { waitUntil: "networkidle" });
await p2.screenshot({ path: join(PROJ, "qa", "shots", "reviews-top.png") });
await b.close(); server.close();
console.log("shots done");
