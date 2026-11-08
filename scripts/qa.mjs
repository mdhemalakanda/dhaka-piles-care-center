#!/usr/bin/env node
/* ============================================================
   QA audit — run AFTER build.mjs.
   1. every data-i18n / meta key exists in BOTH bn and en dictionaries
   2. all internal links (.html) resolve to built pages
   3. all asset references resolve inside site/
   4. forbidden-content scan (fake claims / unverified channels)
   5. form -> mailto wiring present
   Run: node scripts/qa.mjs   (exit 1 on failure)
   ============================================================ */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = join(ROOT, "site");
let failures = 0;
const fail = (m) => { failures++; console.error("FAIL:", m); };

/* dictionaries */
const dict = {};
for (const lang of ["bn", "en"]) {
  dict[lang] = {};
  const dir = join(ROOT, "src", "i18n", lang);
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".json"))) {
    Object.assign(dict[lang], JSON.parse(readFileSync(join(dir, f), "utf8")));
  }
}

/* collect sources */
const pages = readdirSync(join(ROOT, "src", "pages")).filter((f) => f.endsWith(".html"));
const templates = readdirSync(join(ROOT, "templates")).filter((f) => f.endsWith(".html"));
const sources = [
  ...templates.map((f) => ["templates/" + f, readFileSync(join(ROOT, "templates", f), "utf8")]),
  ...pages.map((f) => ["src/pages/" + f, readFileSync(join(ROOT, "src", "pages", f), "utf8")]),
];

/* meta keys from registry */
const buildSrc = readFileSync(join(ROOT, "scripts", "build.mjs"), "utf8");
const metaKeys = new Set();
for (const m of buildSrc.matchAll(/"index\.html"|\{ id: "(\w+)"/g)) {
  if (m[1]) { metaKeys.add("meta." + m[1]); metaKeys.add("meta." + m[1] + "Desc"); }
}

/* 1. i18n coverage */
const used = new Set();
for (const [name, html] of sources) {
  for (const m of html.matchAll(/data-i18n(?:-ph|-alt|-aria|-meta|-html)?="([^"]+)"/g)) {
    if (m[1].includes("{{")) continue; /* template placeholders, not real keys */
    used.add(m[1]);
    if (m[1].startsWith("meta.") && !html.includes('data-i18n-meta')) { /* ok */ }
  }
}
for (const k of metaKeys) used.add(k);
for (const lang of ["bn", "en"]) {
  for (const k of used) if (!(k in dict[lang])) fail(`missing ${lang} key: ${k}`);
}
const unused = Object.keys(dict.bn).filter((k) => !used.has(k));
if (unused.length) console.warn("WARN unused keys (bn):", unused.join(", "));
console.log(`i18n: ${used.size} keys checked across bn+en`);

/* 2+3. link & asset integrity (check built site) */
const builtFiles = readdirSync(SITE).filter((f) => f.endsWith(".html"));
for (const file of builtFiles) {
  const html = readFileSync(join(SITE, file), "utf8");
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const ref = m[1];
    if (ref.startsWith("#") || ref.startsWith("tel:") || ref.startsWith("mailto:")) continue;
    if (ref.startsWith("http")) {
      if (ref.includes("wa.me") || ref.toLowerCase().includes("whatsapp")) fail(`${file}: WhatsApp link found (${ref})`);
      continue;
    }
    const target = join(SITE, ref.split("?")[0]);
    if (!existsSync(target)) fail(`${file}: broken ref "${ref}"`);
  }
}

/* 4. forbidden content */
const forbidden = [
  "100%", "guaranteed", "permanent cure", "painless forever",
  "wa.me", "WhatsApp", "whatsapp", "Always open", "24/7", "২৪/৭", "নিশ্চিত নিরাময়",
];
for (const [name, html] of sources) {
  for (const word of forbidden) {
    if (html.includes(word)) fail(`forbidden content "${word}" in ${name}`);
  }
}
for (const lang of ["bn", "en"]) {
  const raw = readFileSync(join(ROOT, "src", "i18n", lang, "_core.json"), "utf8");
  for (const word of forbidden) if (raw.includes(word)) fail(`forbidden content "${word}" in ${lang}/_core.json`);
}

/* 5. form wiring */
const mainJs = readFileSync(join(ROOT, "assets", "js", "main.js"), "utf8");
if (!mainJs.includes("mailto:dhakapilescarecenter@gmail.com")) fail("main.js: mailto wiring missing");
const contact = sources.find(([n]) => n.endsWith("contact.html"));
if (contact && !contact[1].includes('id="enquiryForm"')) fail("contact.html: enquiry form missing");
for (const k of ["form.name", "form.phone", "form.submit", "form.note"]) {
  if (contact && !contact[1].includes(`data-i18n="${k}`) && !(k in dict.bn && k in dict.en) ) {
    // form keys may live in contact.json dictionaries; check dict instead
    if (!(k in dict.bn)) fail(`missing bn form key: ${k}`);
    if (!(k in dict.en)) fail(`missing en form key: ${k}`);
  }
}

console.log(failures ? `\nQA FAILED — ${failures} issue(s)` : "\nQA PASSED — all checks green");
process.exit(failures ? 1 : 0);
