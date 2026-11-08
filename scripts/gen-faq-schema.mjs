/* Extract FAQPage JSON-LD from src/pages/faq.html + bn dictionary (keys: faq.gN.qN / .aN). */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(ROOT, "src/pages/faq.html"), "utf8");
const bn = JSON.parse(readFileSync(join(ROOT, "src/i18n/bn/faq.json"), "utf8"));
const qKeys = [...html.matchAll(/data-i18n="(faq\.[^"]+\.q\d+)"/g)].map((m) => m[1]);
const seen = new Set();
const mainEntity = [];
for (const qk of qKeys) {
  if (seen.has(qk)) continue;
  seen.add(qk);
  const ak = qk.replace(/\.q(\d+)$/, ".a$1");
  if (!(qk in bn) || !(ak in bn)) throw new Error("missing dict key for " + qk);
  mainEntity.push({ "@type": "Question", name: bn[qk], acceptedAnswer: { "@type": "Answer", text: bn[ak] } });
}
if (!mainEntity.length) throw new Error("no questions found");
const crumbs = JSON.parse(readFileSync(join(ROOT, "src/schema/faq.json"), "utf8"));
const crumbArr = Array.isArray(crumbs) ? crumbs.filter((s) => s["@type"] === "BreadcrumbList") : [crumbs];
const out = [...crumbArr, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity }];
writeFileSync(join(ROOT, "src/schema/faq.json"), JSON.stringify(out));
console.log("FAQPage schema written with", mainEntity.length, "questions");
