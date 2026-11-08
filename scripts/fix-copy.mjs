import { readFileSync, writeFileSync } from "node:fs";
const F = (p) => readFileSync(p, "utf8");
const W = (p, s) => writeFileSync(p, s);

/* 1. dictionaries — set patient-facing values (BN + EN) */
const bn = (p, fn) => { const o = JSON.parse(F(p)); fn(o); W(p, JSON.stringify(o, null, 2) + "\n"); };
bn("src/i18n/bn/index.json", (o) => {
  o["home.rev.lede"] = "গুগল ম্যাপ ও ফেসবুকে রোগীরা আমাদের সম্পর্কে যা বলেছেন।";
  o["home.rev.embed.eyebrow"] = "রোগীদের মতামত";
  o["home.rev.embed.t"] = "গুগল রিভিউ";
  o["home.rev.embed.d"] = "গুগল ম্যাপে রোগীরা আমাদের সম্পর্কে যা বলেছেন — রেটিং ও মতামত এখানেই দেখুন।";
  o["home.rev.more"] = "রিভিউ ও মতামত";
  o["home.edu.lede"] = "পাইলস, ফিসার, ফিস্টুলা ও স্বাস্থ্যকর অভ্যাস নিয়ে ক্লিনিকের লেখা — পুরোটা এখানেই পড়ুন।";
  o["home.doc.note"] = "ডাক্তারের বিস্তারিত যোগ্যতা শীঘ্রই যুক্ত হচ্ছে।";
});
bn("src/i18n/en/index.json", (o) => {
  o["home.rev.lede"] = "What patients say about us on Google Maps and Facebook.";
  o["home.rev.embed.eyebrow"] = "Patient feedback";
  o["home.rev.embed.t"] = "Google reviews";
  o["home.rev.embed.d"] = "What patients say about us on Google Maps — ratings and reviews, right here.";
  o["home.rev.more"] = "Reviews & feedback";
  o["home.edu.lede"] = "The clinic’s articles on piles, fissure, fistula and healthy habits — read the full text right here.";
  o["home.doc.note"] = "Detailed credentials coming soon.";
});
bn("src/i18n/bn/doctors.json", (o) => { o["doc.note"] = "ডাক্তারের বিস্তারিত যোগ্যতা ও অভিজ্ঞতা শীঘ্রই যুক্ত হচ্ছে।"; });
bn("src/i18n/en/doctors.json", (o) => { o["doc.note"] = "Detailed credentials and experience coming soon."; });
bn("src/i18n/bn/gallery.json", (o) => { o["gal.soon1.d"] = "শীঘ্রই যুক্ত হবে।"; o["gal.soon2.d"] = "শীঘ্রই যুক্ত হবে।"; });
bn("src/i18n/en/gallery.json", (o) => { o["gal.soon1.d"] = "Coming soon."; o["gal.soon2.d"] = "Coming soon."; });
bn("src/i18n/bn/reviews.json", (o) => {
  o["rev2.hero.h1"] = "রোগীদের মতামত ও রিভিউ";
  o["rev2.hero.lede"] = "গুগল ও ফেসবুকে রোগীরা আমাদের সম্পর্কে যা বলেছেন।";
  o["rev2.policy.eyebrow"] = "আমাদের প্রতিশ্রুতি";
  o["rev2.policy.title"] = "সৎ ও স্বচ্ছ তথ্য";
  o["rev2.policy.1.t"] = "সত্যিকারের মতামত";
  o["rev2.policy.1.d"] = "আমরা কোনো রিভিউ লিখি বা বানাই না — প্রতিটি মতামত রোগীদের নিজেদের লেখা, গুগল ও ফেসবুকেই রয়েছে।";
  o["rev2.embed.eyebrow"] = "রোগীদের মতামত";
  o["rev2.embed.t"] = "গুগল রিভিউ";
  o["rev2.embed.d"] = "গুগল ম্যাপে রোগীদের রেটিং ও মতামত। লিস্টিংয়ে পূর্বের নাম ‘বারিধারা পাইলস কিউর সেন্টার’ দেখালেও এটি এই ক্লিনিকই।";
});
bn("src/i18n/en/reviews.json", (o) => {
  o["rev2.hero.h1"] = "Patient reviews & feedback";
  o["rev2.hero.lede"] = "What patients say about us on Google and Facebook.";
  o["rev2.policy.eyebrow"] = "Our promise";
  o["rev2.policy.title"] = "Honest and transparent";
  o["rev2.policy.1.t"] = "Genuine feedback";
  o["rev2.policy.1.d"] = "We never write or invent reviews — every review is written by patients themselves, on Google and Facebook.";
  o["rev2.embed.eyebrow"] = "Patient feedback";
  o["rev2.embed.t"] = "Google reviews";
  o["rev2.embed.d"] = "Ratings and reviews from Google Maps. The listing may show the former name, Baridhara Piles Cure Center — it is the same clinic.";
});
bn("src/i18n/bn/_core.json", (o) => { o["meta.reviewsDesc"] = "গুগল ও ফেসবুকে রোগীদের রিভিউ পড়ুন এবং আপনার অভিজ্ঞতা শেয়ার করুন।"; });
bn("src/i18n/en/_core.json", (o) => { o["meta.reviewsDesc"] = "Read patient reviews on Google and Facebook, and share your own experience."; });

/* 2. fragment defaults — mirror the new BN values */
function rep(file, pairs) {
  let s = F(file); let n = 0;
  for (const [a, b] of pairs) { if (s.includes(a)) { s = s.split(a).join(b); n++; } else console.log("  !! not found in " + file + ": " + a.slice(0, 40)); }
  W(file, s); console.log(file, "->", n, "replacement(s)");
}
rep("src/pages/index.html", [
  ["শিক্ষাগত যোগ্যতার বিবরণ ক্লিনিক কর্তৃক নিশ্চিত হওয়ার পরে এখানে প্রকাশ করা হবে।", "ডাক্তারের বিস্তারিত যোগ্যতা শীঘ্রই যুক্ত হচ্ছে।"],
  ["ক্লিনিকের শিক্ষামূলক লেখাগুলি এখন সরাসরি এই সাইটেই — পুরো লেখা, সুন্দর বিন্যাসে।", "পাইলস, ফিসার, ফিস্টুলা ও স্বাস্থ্যকর অভ্যাস নিয়ে ক্লিনিকের লেখা — পুরোটা এখানেই পড়ুন।"],
  ["আমরা কোনো রিভিউ কপি করে এখানে দিই না। গুগল ও ফেসবুকে রোগীরা নিজেরা যা লিখেছেন, তাই সরাসরি পড়ুন।", "গুগল ম্যাপ ও ফেসবুকে রোগীরা আমাদের সম্পর্কে যা বলেছেন।"],
  [">এই সাইটেই<", ">রোগীদের মতামত<"],
  [">গুগল রিভিউ — এখানেই দেখুন<", ">গুগল রিভিউ<"],
  ["গুগল ম্যাপের অফিসিয়াল এম্বেডে ক্লিনিকের রেটিং ও রিভিউ — সাইট থেকে বের হতে হবে না।", "গুগল ম্যাপে রোগীরা আমাদের সম্পর্কে যা বলেছেন — রেটিং ও মতামত এখানেই দেখুন।"],
  ["রিভিউ নীতি সম্পর্কে জানুন", "রিভিউ ও মতামত"],
]);
rep("src/pages/doctors.html", [
  ["শিক্ষাগত যোগ্যতার বিবরণ ক্লিনিক কর্তৃক নিশ্চিত হওয়ার পরে এখানে প্রকাশ করা হবে।", "ডাক্তারের বিস্তারিত যোগ্যতা ও অভিজ্ঞতা শীঘ্রই যুক্ত হচ্ছে।"],
]);
rep("src/pages/gallery.html", [
  ["ক্লায়েন্টের অনুমোদনের পরে যুক্ত হবে।", "শীঘ্রই যুক্ত হবে।"],
  ["অনুমোদন পাওয়ার পরেই এখানে যুক্ত করা হবে।", "শীঘ্রই যুক্ত হবে।"],
]);
rep("src/pages/reviews.html", [
  ["রোগীদের রিভিউ — আমাদের সৎ নীতি", "রোগীদের মতামত ও রিভিউ"],
  ["এই পৃষ্ঠায় কোনো রিভিউ কপি করে দেখানো হয় না, বরিধারা নেই — গুগল ও ফেসবুকে রোগীরা নিজেরা যা লিখেছেন, তাই সরাসরি পড়ুন।", "গুগল ও ফেসবুকে রোগীরা আমাদের সম্পর্কে যা বলেছেন।"],
  [">রিভিউ নীতি<", ">আমাদের প্রতিশ্রুতি<"],
  ["কেন এখানে রিভিউ কপি করে দেখানো হয় না", "সৎ ও স্বচ্ছ তথ্য"],
  [">আমরা রিভিউ কপি করি না<", ">সত্যিকারের মতামত<"],
  ["এই সাইটে কোনো রিভিউ বা রেটিং কপি করে দেখানো হয় না। সব মতামত তার মূল উৎসেই থাকে — যেখানে রোগীরা নিজেরা লিখেছেন।", "আমরা কোনো রিভিউ লিখি বা বানাই না — প্রতিটি মতামত রোগীদের নিজেদের লেখা, গুগল ও ফেসবুকেই রয়েছে।"],
  [">এই সাইটেই<", ">রোগীদের মতামত<"],
  [">গুগল রিভিউ — এখানেই দেখুন<", ">গুগল রিভিউ<"],
  ["নিচের অফিসিয়াল গুগল এম্বেডে ক্লিনিকের রেটিং ও রিভিউ দেখুন — সাইট থেকে বের হতে হবে না। গুগল লিস্টিংয়ে পূর্বের নাম ‘বারিধারা পাইলস কিউর সেন্টার’ দেখালেও এটি এই ক্লিনিকই।", "গুগল ম্যাপে রোগীদের রেটিং ও মতামত। লিস্টিংয়ে পূর্বের নাম ‘বারিধারা পাইলস কিউর সেন্টার’ দেখালেও এটি এই ক্লিনিকই।"],
]);
console.log("copy fixes applied");
