#!/usr/bin/env node
/* ============================================================
   DHAKA PILES CARE CENTER — static page builder (zero dependencies)
   Composes site/ from templates/ + src/pages/, merges i18n JSON
   dictionaries into site/assets/js/translations.js, copies assets,
   emits robots.txt + sitemap.xml.
   Run:  node scripts/build.mjs
   Serve: cd site && python3 -m http.server 8080
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, cpSync, existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const T = (p) => readFileSync(join(ROOT, "templates", p), "utf8");
const P = (p) => readFileSync(join(ROOT, "src", "pages", p), "utf8");
const CANON = "https://dhakapilescarecenter.com/";
const BUILD_DATE = "2026-11-08";

/* Page registry — one entry per output page.
   nav: nav id for aria-current. titleBn is the default (Bangla-first). */
const PAGES = {
  "index.html":              { id: "home",      nav: "home",      titleBn: "ঢাকা পাইলস কেয়ার সেন্টার — পাইলস, ফিসার ও ফিস্টুলার বিশেষজ্ঞ চিকিৎসা", titleEn: "Dhaka Piles Care Center — Specialist Piles, Fissure & Fistula Care", descBn: "২০০৩ সাল থেকে ঢাকার নর্থ বারিধারায় পাইলস, ফিসার ও ফিস্টুলার বিশেষজ্ঞ চিকিৎসা। অ্যাপয়েন্টমেন্টের জন্য কল করুন +880 1716-528757।", descEn: "Specialist care for piles, anal fissure and anal fistula in North Baridhara, Dhaka since 2003. Call +880 1716-528757 for an appointment." },
  "about.html":              { id: "about",     nav: "about",     titleBn: "আমাদের সম্পর্কে — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "About Us — Dhaka Piles Care Center", descBn: "২০০৩ সালের অক্টোবরে ডা: মর্জিনা আক্তার প্রতিষ্ঠিত অ্যানোরেক্টাল (পায়ুপথ) রোগের বিশেষজ্ঞ চিকিৎসা প্রতিষ্ঠান — পূর্বে বারিধারা পাইলস কিউর সেন্টার নামে পরিচিত।", descEn: "Anorectal specialist clinic founded in October 2003 by Dr. Morjina Akhter — formerly known as Baridhara Piles Cure Center, Dhaka." },
  "doctors.html":            { id: "doctors",   nav: "doctors",   titleBn: "আমাদের ডাক্তার — ডা: মর্জিনা আক্তার", titleEn: "Our Doctor — Dr. Morjina Akhter", descBn: "ঢাকা পাইলস কেয়ার সেন্টারের প্রতিষ্ঠাতা ডা: মর্জিনা আক্তার — পায়ুপথের রোগ, বিশেষত পাইলস ও ফিস্টুলার চিকিৎসক (২০০৩ সাল থেকে)।", descEn: "Meet Dr. Morjina Akhter, founder of Dhaka Piles Care Center — physician for anorectal diseases, piles and fistula, practising since 2003." },
  "treatments.html":         { id: "treatments",nav: "treatments",titleBn: "চিকিৎসা সেবা — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Treatments & Approach — Dhaka Piles Care Center", descBn: "পাইলস, ফিসার, ফিস্টুলা ও অন্যান্য পায়ুপথের সমস্যার পরামর্শ, পরীক্ষা-নিরীক্ষা ও আধুনিক পদ্ধতিতে চিকিৎসা — যেখানে প্রযোজ্য, ভর্তি ছাড়াই।", descEn: "Consultation, evaluation and modern treatment for piles, fissure, fistula and other anorectal problems — many procedures without hospital admission." },
  "treatment-piles.html":    { id: "piles",     nav: "piles",     titleBn: "পাইলসের চিকিৎসা (অর্শ/বোসা) — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Piles (Haemorrhoids) Treatment — Dhaka Piles Care Center", descBn: "পাইলস (অর্শ/বোসা) কী, লক্ষণ, কারণ, কখন ডাক্তার দেখাবেন ও চিকিৎসার বিকল্প — ঢাকার নর্থ বারিধারায় বিশেষজ্ঞ পরামর্শ।", descEn: "What piles (haemorrhoids) are, symptoms, causes, when to see a doctor and treatment options — specialist consultation in North Baridhara, Dhaka." },
  "treatment-fissure.html":  { id: "fissure",   nav: "fissure",   titleBn: "অ্যানাল ফিসারের চিকিৎসা (মলদ্বারে চিড়া) — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Anal Fissure Treatment — Dhaka Piles Care Center", descBn: "অ্যানাল ফিসার (মলদ্বারে চিড়া) কী, লক্ষণ, কারণ, কখন ডাক্তার দেখাবেন ও চিকিৎসার বিকল্প — ঢাকায় বিশেষজ্ঞ পরামর্শ।", descEn: "What an anal fissure is, symptoms, causes, when to see a doctor and treatment options — specialist consultation in Dhaka." },
  "treatment-fistula.html":  { id: "fistula",   nav: "fistula",   titleBn: "অ্যানাল ফিস্টুলার চিকিৎসা (ভগন্দর) — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Anal Fistula Treatment — Dhaka Piles Care Center", descBn: "অ্যানাল ফিস্টুলা (ভগন্দর) কী, লক্ষণ, কারণ, কখন ডাক্তার দেখাবেন ও চিকিৎসার বিকল্প — ঢাকায় বিশেষজ্ঞ পরামর্শ।", descEn: "What an anal fistula is, symptoms, causes, when to see a doctor and treatment options — specialist consultation in Dhaka." },
  "patient-info.html":       { id: "patient",   nav: "patient",   titleBn: "রোগীর তথ্য ও সচেতনতা — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Patient Information — Dhaka Piles Care Center", descBn: "লক্ষণ অনুযায়ী গাইড, প্রথম ভিজিটের প্রস্তুতি, কোলোনোস্কোপি ভয় কাটিয়ে ওঠা এবং পায়ুপথের রোগের সাধারণ তথ্য — রোগীর শিক্ষামূলক সেকশন।", descEn: "Symptom guide, first-visit preparation, overcoming fear of colonoscopy and general anorectal health education." },
  "faq.html":                { id: "faq",       nav: "faq",       titleBn: "সাধারণ প্রশ্নোত্তর — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Frequently Asked Questions — Dhaka Piles Care Center", descBn: "অ্যাপয়েন্টমেন্ট, চিকিৎসা পদ্ধতি, রিকভারি, গোপনীয়তা ও খরচ সম্পর্কিত সাধারণ প্রশ্নের উত্তর।", descEn: "Answers to common questions about appointments, procedures, recovery, privacy and costs." },
  "gallery.html":            { id: "gallery",   nav: "gallery",   titleBn: "গ্যালারি ও শিক্ষামূলক পোস্ট — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Gallery & Patient Education — Dhaka Piles Care Center", descBn: "অফিসিয়াল ব্র্যান্ড ছবি ও ক্লিনিকের ফেসবুক শিক্ষামূলক পোস্টসমূহ — মূল পোস্টের লিংকসহ।", descEn: "Official brand artwork and the clinic's Facebook patient-education posts, with links to the originals." },
  "reviews.html":            { id: "reviews",   nav: "reviews",   titleBn: "রিভিউ ও মতামত — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Reviews & Feedback — Dhaka Piles Care Center", descBn: "গুগল ও ফেসবুকে রোগীদের রিভিউ পড়ুন এবং আপনার অভিজ্ঞতা শেয়ার করুন — আমরা কোনো রিভিউ কপি করি না।", descEn: "Read patient reviews on Google and Facebook, and share your own experience. We never copy reviews onto this site." },
  "contact.html":            { id: "contact",   nav: "contact",   titleBn: "যোগাযোগ ও অ্যাপয়েন্টমেন্ট — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Contact & Appointment — Dhaka Piles Care Center", descBn: "কল করুন +880 1716-528757, ইমেইল করুন, বা ফর্ম পূরণ করে অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান — নর্থ বারিধারা, ঢাকা।", descEn: "Call +880 1716-528757, email us, or send an appointment request — North Baridhara (near Norda Bus Stand), Dhaka." },
  "blog.html":               { id: "blog",      nav: "blog",      titleBn: "শিক্ষামূলক লেখা — ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Education Articles — Dhaka Piles Care Center", descBn: "ক্লিনিকের শিক্ষামূলক লেখাগুলি — পাইলস, ফিসার, ফিস্টুলা, কোলোনোস্কোপি ও স্বাস্থ্যকর খাবার নিয়ে সহজ বাংলায়।", descEn: "The clinic's education articles — piles, fissure, fistula, colonoscopy and healthy foods explained in plain language." },
  "blog-anorectal.html":     { id: "bpa",       nav: "blog",      titleBn: "পায়ুপথে পাইলস ছাড়াও কী কী রোগ হয়? — শিক্ষামূলক লেখা", titleEn: "Which Diseases Besides Piles Affect the Anal Canal? — Education Article", descBn: "পায়ুপথের যেকোনো সমস্যাই পাইলস নয় — ফিসার, ফিস্টুলাসহ অন্যান্য রোগের সহজ পরিচিতি, ক্লিনিকের শিক্ষামূলক লেখা থেকে।", descEn: "Not every anal problem is piles — a plain-language overview of fissure, fistula and other anorectal conditions." },
  "blog-colonoscopy.html":   { id: "bpc",       nav: "blog",      titleBn: "কোলোনোস্কোপির ভয় কাটিয়ে উঠুন — শিক্ষামূলক লেখা", titleEn: "Overcoming Fear of Colonoscopy — Education Article", descBn: "কোলোনোস্কোপির ভয়ে ডাক্তার এড়িয়ে ফার্মেসির ওষুধে ভরসা করা কতটা ঝুঁকিপূর্ণ — ক্লিনিকের পরামর্শ ও ব্যাখ্যা।", descEn: "Why avoiding the doctor out of colonoscopy fear and relying on pharmacy medicines is risky — the clinic's advice explained." },
  "blog-fenugreek.html":     { id: "bpf",       nav: "blog",      titleBn: "মেথি কি? কেন ও কীভাবে খাবেন — শিক্ষামূলক লেখা", titleEn: "Fenugreek — What It Is and How to Eat It — Education Article", descBn: "মেথির পরিচিতি, আঁশযুক্ত খাবার হিসেবে এর ভূমিকা ও খাওয়ার সাধারণ পরামর্শ — ক্লিনিকের শিক্ষামূলক লেখা।", descEn: "An introduction to fenugreek, its role as a fibre-rich seed and general guidance — the clinic's education article." },
  "blog-foods.html":         { id: "bpd",       nav: "blog",      titleBn: "স্তন ক্যান্সারের ঝুঁকি প্রতিরোধক খাবার — শিক্ষামূলক লেখা", titleEn: "Foods That Help Reduce Breast-Cancer Risk — Education Article", descBn: "ডা: মর্জিনা আক্তারের লেখা প্রবন্ধ — ঝুঁকি কমাতে সহায়ক খাবারসমূহ নিয়ে ক্লিনিকের মূল শিক্ষামূলক পোস্ট।", descEn: "Dr. Morjina Akhter's article on foods that help reduce breast-cancer risk — the clinic's original education post." },  "blog-diabetes.html":      { id: "bpx",       nav: "blog",      titleBn: "ডায়াবেটিস ধরা পড়লে প্রথম করণীয় — শিক্ষামূলক লেখা", titleEn: "First Steps After a Diabetes Diagnosis — Education Article", descBn: "ডায়াবেটিস ধরা পড়লে প্রথম করণীয় — ডাক্তারের পরামর্শ, খাবার ও অভ্যাস, ওষুধ ও নিয়মিত পরীক্ষা নিয়ে ক্লিনিকের শিক্ষামূলক লেখা।", descEn: "First steps after a diabetes diagnosis — doctor's advice, food and habits, medicines and regular check-ups. The clinic's education article." },
  "blog-name.html":          { id: "bpn",       nav: "blog",      titleBn: "পুরনো নাম, নতুন নাম — একই ক্লিনিক | ঢাকা পাইলস কেয়ার সেন্টার", titleEn: "Old Name, New Name — the Same Clinic | Dhaka Piles Care Center", descBn: "Care না Cure, 'ঢাকা' না 'বারিধারা' — নাম নিয়ে বিভ্রান্তির ব্যাখ্যা: গুগল লিস্টিংয়ে পূর্বের নাম দেখলেও এটি এই ক্লিনিকই।", descEn: "Care or Cure, Dhaka or Baridhara — why the clinic appears under several names: the Google listing may still show its former name; it is the same clinic." },

};

const CLINIC_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Dhaka Piles Care Center",
  alternateName: ["ঢাকা পাইলস কেয়ার সেন্টার", "Baridhara Piles Cure Center"],
  url: CANON,
  telephone: "+8801716528757",
  email: "dhakapilescarecenter@gmail.com",
  foundingDate: "2003-10",
  founder: { "@type": "Person", name: "Dr. Morjina Akhter", jobTitle: "Physician — anorectal diseases (piles & fistula)" },
  medicalSpecialty: "Gastroenterologic",
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressRegion: "Dhaka Division", addressCountry: "BD" },
  geo: { "@type": "GeoCoordinates", latitude: 23.8135153, longitude: 90.4183877 },
  hasMap: "https://www.google.com/maps/search/?api=1&query=23.8135153,90.4183877",
  sameAs: ["https://www.facebook.com/dhakapilescarecenter/"],
  description: "Specialist clinic for piles (haemorrhoids), anal fissure and anal fistula in North Baridhara, Dhaka, Bangladesh. Founded October 2003 by Dr. Morjina Akhter.",
};

function fill(tpl, map) {
  return tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => (map[k] !== undefined ? map[k] : `{{${k}}}`));
}

/* ---- merge i18n dictionaries (fail loudly on duplicate keys) ---- */
function mergeLang(lang) {
  const dir = join(ROOT, "src", "i18n", lang);
  const out = {};
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".json")).sort()) {
    const data = JSON.parse(readFileSync(join(dir, f), "utf8"));
    for (const [k, v] of Object.entries(data)) {
      if (k in out) throw new Error(`Duplicate i18n key "${k}" (${lang}) in ${f}`);
      out[k] = v;
    }
  }
  return out;
}
const DICTS = { bn: mergeLang("bn"), en: mergeLang("en") };

/* ---- build pages ---- */

for (const [file, cfg] of Object.entries(PAGES)) {
  const schemas = [CLINIC_SCHEMA];
  const extraPath = join(ROOT, "src", "schema", cfg.id + ".json");
  if (existsSync(extraPath)) schemas.push(JSON.parse(readFileSync(extraPath, "utf8")));

  const canon = file === "index.html" ? CANON : CANON + file;
  const head = fill(T("head.html"), {
    TITLE: cfg.titleBn,
    DESC: cfg.descBn,
    CANON: canon,
    PAGEID: cfg.id,
    SCHEMA: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas),
  });
  let header = T("header.html");
  header = header.replace(`data-nav="${cfg.nav}"`, `data-nav="${cfg.nav}" aria-current="page"`);

  const html = head + "\n" + header + "\n" + P(file) + "\n" + T("footer.html") + "\n" + T("scripts.html");
  writeFileSync(join(ROOT, "site", file), html);
  console.log("built", file);
}

/* ---- copy assets ---- */
rmSync(join(ROOT, "site", "assets"), { recursive: true, force: true });
mkdirSync(join(ROOT, "site", "assets"), { recursive: true });
for (const d of ["css", "vendor", "fonts", "images/brand", "images/media"]) {
  cpSync(join(ROOT, "assets", d), join(ROOT, "site", "assets", d), { recursive: true });
}
cpSync(join(ROOT, "assets", "js"), join(ROOT, "site", "assets", "js"), { recursive: true });

/* ---- generated translations (AFTER the asset copy so it is not wiped) ---- */
mkdirSync(join(ROOT, "site", "assets", "js"), { recursive: true });
writeFileSync(
  join(ROOT, "site", "assets", "js", "translations.js"),
  "window.DPC_T = " + JSON.stringify(DICTS) + ";\n"
);

/* ---- robots + sitemap ---- */
writeFileSync(join(ROOT, "site", "robots.txt"), "User-agent: *\nAllow: /\n\nSitemap: " + CANON + "sitemap.xml\n");
const today = BUILD_DATE;
const urls = Object.keys(PAGES)
  .map((f) =>
    `  <url><loc>${f === "index.html" ? CANON : CANON + f}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${f === "index.html" ? "1.0" : "0.8"}</priority></url>`
  )
  .join("\n");
writeFileSync(
  join(ROOT, "site", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

console.log(`i18n keys — bn: ${Object.keys(DICTS.bn).length}, en: ${Object.keys(DICTS.en).length}`);
console.log("done → site/");
