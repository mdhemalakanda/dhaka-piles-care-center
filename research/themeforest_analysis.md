# ThemeForest Medical Template Research — Premium Piles/Colorectal Specialist Clinic (Bangladesh)

**Prepared:** 2026-11-08
**Purpose:** Design research only — WordPress themes analysed as DESIGN REFERENCES. Nothing installed, purchased, or copied. Final build is static HTML/CSS/JS/jQuery.
**Verification legend:** VERIFIED = page/demo fetched live and content read directly. UNVERIFIED = search snippet or second-hand summary. Where two fetch methods disagreed, both are shown.

---

## PART A — The Three Required Themes

---

### A1. "Medical Clinic — Health and Doctor Medical WordPress Theme" (cmsmasters)

**Marketplace facts**
| Field | Value | Source |
|---|---|---|
| Item | https://themeforest.net/item/medical-clinic-health-doctor-medical-wordpress-theme/18277620 | VERIFIED |
| Author | cmsmasters (Elite Author) | VERIFIED |
| Price | $59 regular / $1,800 extended | VERIFIED (item page + og meta) |
| Sales | 2,393 | VERIFIED (live fetch) |
| Rating | 4.58 stars, 57 reviews | VERIFIED (live fetch) |
| Created | ~2016 ("Created 10 years ago") | VERIFIED |
| Last update | 16 June 2026, v1.4.8 (older cached snapshot showed v1.3.3) | VERIFIED |
| Live demo | https://medical-clinic.cmsmasters.net/ — **ACCESSIBLE, fetched** (homepage, /appointments/, /timetable/) | VERIFIED |

**Design language (from live demo fetch)**
- **Typography:** default body/heading stack is **Open Sans (300–700) + Lato** — confirmed from the loaded Google Fonts stylesheet URLs. The theme loads ~60 additional Google fonts purely for its font-picker option, which is a maintenance smell.
- **Colour:** light clinical palette, flat 2016-era design; blue/teal accent family typical of cmsmasters skins (exact hex not extractable from HTML — UNVERIFIED).
- **Hero:** LayerSlider **text-over-photo slider** (LayerSlider 7.14.4 + Revolution Slider 6.7.33 both bundled). Demo slide copy literally reads "Awesome Theme for Medical and Health Websites" — stock/placeholder feel.
- **Header:** standard logo + mega-menu nav (Home 2 styles, Departments ×8, Timetable, Features, Shortcodes…). An info strip near the header/footer carries "Give us a Call / 1-888-123-4567 · Send us a Message · Visit our Location". No sticky-call CTA of the modern type.
- **Sections (homepage order, VERIFIED):** hero slider → Top Doctors / 24 Hours Service / Opening Hours feature strip → theme blurb → 5 icon boxes (Medical Treatment, Emergency Help, Professionals, Qualified Doctors, Innovation) → Our Services image cards ×8 (Laboratory, Pediatric, Laryngological, Rehab, Gynaecological, Ophthalmology, Cardiac, Surgery) → Testimonials carousel → Our Doctors cards (photo, name, specialty, phone, email) → Latest News grid ×5 → "Book an Appointment" CTA + insurance blurb → FAQ accordion ×8 → Partners → Newsletter.
- **Card style:** flat bordered image cards, square corners, no elevation/shadow system — distinctly 2016.
- **Appointment UX:** dedicated **/appointments/** page: "Book an Appointment" intro + three reassurance bullets + FAQ; the form itself is Contact Form 7 based (CF7 6.0.6 loaded). Not multi-step, no live slot picker on the homepage.
- **Timetable:** the standout feature — a dedicated **/timetable/** weekly grid (hours × Mon–Sun) colour-coded by department, filterable per department, each cell links doctor + time range, plus a per-day accordion fallback for mobile. Powered by the bundled Timetable plugin (qtip tooltips). This is the single most useful pattern in the theme for a specialist clinic with weekly chamber hours.
- **Doctors:** profile cards with direct phone + email; separate Profiles post type (horizontal/vertical/open layouts).
- **Extras:** WooCommerce shop demo (noise for a specialist clinic), 99+ shortcodes, iLightbox gallery, MailPoet newsletter.
- **Mobile:** responsive via separate adaptive.css; "maximum-scale=1" viewport (pinch-zoom disabled — accessibility anti-pattern).
- **Animation:** animate.css fade-ins; slider transitions. No modern scroll-reveal choreography.
- **Dated vs premium:** placeholder Lorem Ipsum throughout, stock imagery, flat borders, two bundled sliders, WooCommerce baggage. It survives on feature completeness, not on visual quality. Feels 2016 despite the 2026 update (updates were plugin-compat only).

---

### A2. "Mednix — Medical & Health Clinic WordPress Theme" (ThemeHt)

**Marketplace facts**
| Field | Value | Source |
|---|---|---|
| Item | https://themeforest.net/item/mednix-medical-health-clinic-wordpress-theme/60576026 | VERIFIED |
| Author | ThemeHt (Elite Author) | VERIFIED |
| Price | $18 in Nov-2025 snapshot → **$39 live** | VERIFIED + live fetch |
| Sales | 8 in Nov-2025 snapshot → **~498 live** | snapshot VERIFIED; live figure UNVERIFIED (second fetch) |
| Rating | none in Nov-2025 snapshot → **~4.89★ (36 reviews)** live | UNVERIFIED (second fetch) |
| Created | 10 November 2025 | VERIFIED (item page publishedTime + changelog) |
| Last update | v1.1 (10 Nov 2025) at snapshot → **v2.6, ~7 Oct 2026** live | UNVERIFIED (second fetch), corroborated by demo running theme v2.3.0+ and © 2026 footer |
| Live demo | **https://mednix.themeht.com/ — ACCESSIBLE, fetched in full** | VERIFIED |

**Design language (from live demo fetch — the freshest of the three)**
- **Typography:** **Mona Sans (variable 200–900)** as primary — a genuinely modern 2024+ typeface — with Manrope and Playfair Display in the option stack. Best typography of all three themes.
- **Hero:** headline **slider** with eyebrow label ("Mednix — Trusted Specialists") + large humanist heading ("Your Trusted Partner Health and Wellness") + body copy + CTA ("Meet Our Team" / "Schedule a Checkup"). Clean light hero, no full-bleed stock photo wall.
- **Header:** logo left; top-level emergency call "(888) 4567890" and a pill **"Appointment" button** always visible. Dark 4-column footer with opening-hours block + emergency cases strip; specialty marquee runs above footer.
- **Sections (homepage order, VERIFIED):** hero slider → About ("Caring for You Like Family") with **opening-hours box** (Mon–Fri 9:00–18:00 / Sat–Sun 8:00–16:00 / Emergency 24/7) + "25+" counter + doctor photo cluster → **specialty marquee ticker** (Cardiology, Dental, Psychiatry, Oncology…) → Our Department cards ×6 (photo + title + copy + "Explore Service") → Benefits with **odometer progress bars** (Expert Doctor 82%, Patient Satisfaction 74%, Success Case 98%) → Medical Professionals doctor grid ×6 → **24/7 emergency feature strip** ×4 → **Book An Appointment section** (map + "Need Assistance?" phone/email + form with **Select Department / Select Doctor** dropdowns) → Case Studies cards ×4 → stats band ("20 Years… 15,000+ Successful Treatments") → Testimonials carousel (each tagged with the patient's specialty — Cardiology, Oncology, Dental…) → Blog cards ×3 → dark footer.
- **Card style:** soft-radius image cards, subtle shadows, generous whitespace — contemporary Elementor-era look (Bootstrap 5.x base, Elementor 4.2.2, Swiper, animate.css, odometer counters, magnific popup — all VERIFIED from asset URLs).
- **Feature set:** **15 demo homepages** (Medical ×2, Dentist, Eye Care, Cardiology, Physiotherapy, Laboratory ×2, Psychology ×2, Pregnancy, Dermatology, Elderly Care, **AI Medical**), Doctor Single, **Doctor Timetable page**, Services + Service Details, Price Table, FAQ, Case Studies (grid/masonry/slider/single), Blog (classic/grid), WooCommerce shop, Contact Form 7, MP Timetable plugin. One-Click Demo Import.
- **RTL/multilingual:** not advertised on item page — no RTL claim found (UNVERIFIED absence; Bootstrap 5 base makes it feasible).
- **Animation:** Swiper sliders, odometer counters, animate.css reveals — tasteful, not parallax-heavy.
- **Mobile:** Bootstrap 5 grid, responsive Elementor; demo viewport meta clean.
- **Dated vs premium:** nothing materially dated. Risks: very young product (13 months old), unproven review base, Elementor-driven markup weight, and demo copy is generic multi-specialty — none of it specific to a single specialist practice without re-scoping.

---

### A3. "Medicoz — Clinic & Pharmacy WordPress Theme" (ThemeChampion)

**Marketplace facts**
| Field | Value | Source |
|---|---|---|
| Item | https://themeforest.net/item/medicoz-clinic-pharmacy-wordpress-theme/29851151 | VERIFIED |
| Author | ThemeChampion (Elite Author) | VERIFIED |
| Price | $49 regular / $2,400 extended | VERIFIED |
| Sales | 251 (snapshot) → ~267 live | VERIFIED + live fetch |
| Rating | 4.50★ (8 reviews) snapshot → ~3.91★ (11 reviews) live — **trending down; treat as mid-4.0s with recent poor reviews** | VERIFIED snapshot + UNVERIFIED live |
| Created | 14 May 2021 | VERIFIED |
| Last update | 9 January 2025 (v2.3; v2.4 Feb 2025 appears on a reseller page) | VERIFIED |
| Live demo | **https://medicoz.themechampion.com/ — ACCESSIBLE (theme landing/demo-picker only); individual demo installs (Hospital/Skin Care/Pediatrician/Pharmacy/Dental/Pathology Lab) could not be resolved to direct URLs** | VERIFIED landing; demo installs UNVERIFIED |
| Docs | medicoz.themechampion.com/document/ (referenced) | VERIFIED reference |

**Design language**
- **Structure:** 12+ demo homes (6 multipage + 6 onepage) across Hospital, Pharmacy, Pediatrician, Skin Care, Dental, Pathology Lab; **a different header per demo**; 100+ Elementor blocks; multiple footer options.
- **Hero/style:** Revolution Slider heroes, **parallax backgrounds**, "professional designs for medical centres" — by description; individual demo pages not fetched, so colour/typography specifics UNVERIFIED (author's own site uses Poppins; demos are commonly Poppins/Open Sans — inferred).
- **Feature set (VERIFIED claims from item page):** Appointment Booking System page, doctors listing, pricing/FAQ/testimonial pages, WooCommerce demo, Google Map, Google Fonts, blog grid/list/detail, RTL **fully supported** (added v1.1), WPML-compatible, Bootstrap 5.x + 4.x, IE10/11 compatibility claims (a dated signal).
- **Animation:** parallax + RevSlider transitions — the "busy" school of 2019–21 medical themes.
- **Mobile:** responsive claims; "Tested with Multiple Devices" — nothing exceptional.
- **Dated vs premium:** the changelog is almost entirely "Updated Plugins" for four years (v1.4→v2.3), i.e. maintenance-only updates. Rating slipping from 4.5 to ~3.9 as review count grew. Marketing pages still tout IE10 support. Multiple headers across 12 demos fragment visual consistency. Verdict: mid-market, not premium.

---

## PART B — Pure HTML/CSS/JS Candidates (no WordPress — matches our static build)

Search basis: ThemeForest "medical" search sorted by sales (VERIFIED fetch) + item-page fetches. Dedicated medical HTML templates found: MediCenter 3.1K sales, Clinico 1.7K, Doccure 1.4K, Medicom 1.4K, Mediplus 234, Medicoz HTML 221. (Most "top sellers" under the term are multipurpose templates — Canvas, Porto — not medical.)

---

### B1. Doccure — Doctor Appointment Booking Template + Admin Dashboard (dreamstechnologies) ★ best HTML match

| Field | Value | Source |
|---|---|---|
| Item | https://themeforest.net/item/doccure-doctor-appointment-booking-bootstrap-template-with-admin-dashboard/25180784 | VERIFIED |
| Price | $24–$35 (author landing shows $35/$55 promo) | VERIFIED |
| Sales | 1.4K, 38 ratings | VERIFIED |
| Updated | 4 Nov 2026 — **actively maintained (days ago)** | VERIFIED |
| Demo | **https://doccure.dreamstechnologies.com/html/template/index.html — ACCESSIBLE, fetched in full** | VERIFIED |

**Design language (from live demo fetch)**
- **Tech:** Bootstrap 5, jQuery-free marketing claim on the product landing ("Pure Javascript", Gulp + SASS workflow), AOS scroll-reveal, Owl Carousel, Select2, Feather + FontAwesome + Iconsax icon sets, datetimepicker, **RTL layouts, dark/light layouts, 17+ demos**, patient/doctor/admin dashboard page sets.
- **Hero:** **search-first booking hero** — "Discover Health: Find Your Trusted Doctors Today" + location/specialty **search bar**, doctor cutout, floating trust badges ("5K+ Appointments · 5.0 Ratings", "1K Appointments Completed", "15K+ Satisfied Patients" avatar cluster), soft blob backgrounds. This is the Practo-style conversion hero.
- **Header:** topbar with email/phone, **language switcher (ENG/ARA/FRA flags) and currency switcher**, mega-menu with 14 home variants, dashboard, pharmacy, blog and admin links.
- **Sections (homepage order, VERIFIED):** hero → 7-item **category icon strip** (Book Appointment, Talk to Doctors, Hospitals & Clinics, Healthcare, Medicine & Supplies, Lab Testing, Home Care) → Top Specialties image tiles **with doctor counts** (Cardiology — 254 Doctors…) → **Featured Doctor cards**: photo, 5.0 rating badge, specialty, green "Available" pill, city, "30 Min" session length, "Consultation Fees $650", **Book Now button** → Why-Book-With-Us split (numbered Vision/Mission) → 4-step "How it works" (Search → Profile → Schedule → Solution) → Testimonials (quote icon, titled cards, patient + country) → stats counters (500+ doctors, 18+ specialities, 30K bookings) → "Trusted by 5+ million" logo strip → FAQ accordion → app-download CTA band → blog ×4 → mega footer with newsletter + payment-card icons.
- **Appointment UX: the strongest found anywhere** — three booking page variants + **booking popup**, checkout, booking-success page, doctor/patient dashboards, invoices, chat, voice/video call screens.
- **Mobile:** Bootstrap 5 responsive, mobile-first components.
- **Animation:** AOS reveals + carousel transitions; restrained.
- **Weakness for our use:** it is a Practo-clone **platform** UI, not a single-clinic site: doctor ratings/fees/city/marketplace filters, cart/checkout and dashboards would all need stripping or repurposing; visual warmth is "SaaS product", not "caring specialist".

---

### B2. MediCenter — Health Medical Template (QuanticaLabs) — the category's historic bestseller

| Field | Value | Source |
|---|---|---|
| Item | https://themeforest.net/item/medicenter-responsive-medical-health-template/4000598 | VERIFIED |
| Price | $19–$29 · Sales 3.1K · 194 ratings · "No.1 Selling Health Medical HTML Template" | VERIFIED |
| Updated | v3.0, 15 July 2021 (origin 2013) | VERIFIED |
| Stack | jQuery-powered; carouFredSel, isotope, qtip, fancybox; **PT Sans + Volkhov** fonts; PSD sources included; 6 home layouts, 20+ pages; ajax appointment form; Timetable schedule (their plugin lineage) | VERIFIED |
| Demo | not fetched (low priority — 2021-era code) | — |

**Verdict:** historically important, structurally complete (departments, doctors, timetable, appointment form), but visually 2013–16: PT Sans/Volkhov pairing, boxed layouts, jQuery 1.x-era patterns. Not a premium reference in 2026; useful only as proof that **timetable + ajax appointment form** is the proven medical-site core.

---

### B3. Mediplus — Medical and Doctor HTML Template + RTL (WpthemesGrid)

| Field | Value | Source |
|---|---|---|
| Item | https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910 | VERIFIED |
| Price | $16 · Sales 234–258 · 1 review · Updated 27 Aug 2024 · Published May 2020 | VERIFIED |
| Stack | **Bootstrap 5.x**, 20 HTML pages, **RTL support**, sticky header, 12+ colour variants, PHP+Ajax contact form, lazy loading, blog grid/list | VERIFIED |
| Demo | not fetched | — |

**Verdict:** modest, clean, current-ish Bootstrap 5 base with RTL — a safe mid-tier skeleton, but shallow feature set: **no booking flow** (contact form only), no doctor-booking UX, single review. Fine as structural inspiration, not as a design north star.

---

### B4. (Bonus) Medicoz | Clinic & Hospital HTML Template (bold_touch)

| Field | Value | Source |
|---|---|---|
| Item | https://themeforest.net/item/medicoz-clinic-hospital-html-template/28397578 | VERIFIED |
| Price $12 · Sales 221–319 · 4.86★ (7–9 reviews) · **Last update 13 Sep 2020 (stale)** | VERIFIED |
| Stack | Bootstrap 4.x, 5 homes + 36 inner pages, Revolution Slider, OWL Carousel, parallax, sticky menu, Open Sans + Titillium Web, PHP AJAX contact form | VERIFIED |
| RTL | not mentioned | VERIFIED absence |

**Verdict:** the HTML sibling of required theme A3 — same busy-2020 style; five years without updates; Bootstrap 4. Skip.

---

## PART C — Scoring Matrix and Design-Direction Synthesis

### Scoring matrix (1–10 per dimension; totals out of 130)

| Dimension | Medical Clinic (WP) | Mednix (WP) | Medicoz (WP) | Doccure (HTML) | MediCenter (HTML) | Mediplus (HTML) | Medicoz HTML (bonus) |
|---|---|---|---|---|---|---|---|
| Hero design | 5 | 8 | 6 | 8 | 4 | 6 | 6 |
| Typography | 5 | 9 | 6 | 7 | 5 | 6 | 6 |
| Colour system | 5 | 8 | 6 | 7 | 5 | 7 | 6 |
| Services presentation | 7 | 8 | 7 | 8 | 7 | 6 | 6 |
| Doctor profiles | 6 | 8 | 6 | 9 | 6 | 6 | 6 |
| Appointment UX | 6 | 8 | 6 | 9 | 7 | 5 | 5 |
| Testimonials | 5 | 7 | 6 | 7 | 5 | 5 | 5 |
| Gallery | 5 | 7 | 6 | 5 | 6 | 5 | 5 |
| Mobile experience | 6 | 8 | 6 | 8 | 5 | 7 | 6 |
| Animation quality | 5 | 8 | 6 | 7 | 4 | 5 | 6 |
| Visual consistency | 6 | 8 | 5 | 8 | 6 | 6 | 6 |
| Premium feel | 4 | 8 | 5 | 7 | 3 | 5 | 4 |
| Suitability: single specialist clinic | 4 | 7 | 5 | 6 | 6 | 6 | 6 |
| **Total /130** | **69** | **98** | **76** | **95** | **69** | **75** | **73** |
| **Average** | **5.3** | **7.5** | **5.8** | **7.3** | **5.3** | **5.8** | **5.6** |

**Reading of the matrix:** Mednix and Doccure are the only two that clear a premium bar (7+). Mednix wins on visual craft (typography, colour, consistency); Doccure wins on conversion architecture (doctor cards, booking flows, trust badges). Everything else is maintenance-era work.

---

### What wins, what to adopt, what to avoid

**Recommended direction: fully custom build, stealing structure from Doccure + craft from Mednix.** No template scores high enough to adapt wholesale, and every candidate needs heavy removal work (marketplace features, multi-department IA, WooCommerce, sliders). A custom static build is cheaper than template-archaeology for a single-specialist clinic.

**Adopt:**
1. **From Doccure — conversion anatomy:** search/booking-first hero with floating trust badges; doctor card anatomy (photo + credential badge + availability pill + session length + fee + Book Now); category icon strip under the hero; 4-step "how it works"; stats counters; FAQ accordion; app/CTA band.
2. **From Doccure — appointment plumbing:** 3 booking entry points (page + popup + section), booking-success confirmation screen, datetimepicker for slot choice.
3. **From Mednix — visual craft:** Mona Sans/Manrope-class typography, soft-radius cards, eyebrow-label + large-heading section headers, specialty marquee, odometer counters, opening-hours box in the About section, emergency strip, dark footer with hours + emergency call.
4. **From Medical Clinic (cmsmasters) — the weekly Timetable grid** (simplified, filter-free): exactly right for a Bangladeshi specialist holding fixed chamber hours across 1–2 locations.
5. **From Mediplus/Medicoz WP — bilingual readiness:** RTL/multilingual as a first-class concern; we implement EN/বাংলা toggle with a proper Bengali webfont instead.

**Improve beyond all templates:**
- **Privacy-toned content design.** Piles/colorectal is a stigmatised condition — no template handles this. Need discreet copy, anonymous-friendly WhatsApp intake ("chat with coordinator, not public comments"), patient stories anonymised to first name + city.
- **Bangladesh contact UX:** sticky mobile bottom bar (Call / WhatsApp / Book); WhatsApp deep-links pre-filled with service + preferred time; topbar with chamber hours + location; phone numbers as tap-to-call everywhere. None of the seven candidates has a WhatsApp-first flow — this is our differentiator.
- **Bilingual EN/বাংলা:** full Bengali typography (Hind Siliguri / Noto Sans Bengali), not just a language switcher stub; Bangla headlines need larger line-height budget.

**Avoid:**
- Revolution Slider / LayerSlider heroes and parallax backgrounds (Medical Clinic, Medicoz, Medicoz HTML) — slow, dated, fragile on mobile.
- Multi-department hospital information architecture (8–15 departments, department timetables) — a single specialist clinic needs 5–7 condition/service pages, not a departments tree.
- Marketplace/Practo-clone features: doctor ratings per city, fee comparison, cart/checkout, dashboards, currency switcher (Doccure) — wrong mental model for one trusted specialist.
- WooCommerce shop, newsletter plugins, "24/7 emergency" claims copied verbatim (untrue for a chamber-based clinic).
- Pinch-zoom disabling (`maximum-scale=1`, found on Medical Clinic) and IE-era compatibility claims.
- 12-demos-with-different-headers fragmentation (Medicoz) — kills consistency; one home design, done deeply.

### Recommended custom direction for the piles/colorectal specialist clinic (Bangladesh)

1. **Palette:** deep teal primary (~#0E7C7B), medical blue secondary (~#1B6CA8), navy ink text (~#0F2440), warm off-white background (~#F7FAF9), soft mint surface (~#DFEFEA), a single warm accent for CTAs (amber ~#F5A623) so every CTA reads instantly. No clinical red.
2. **Typography:** Latin — Plus Jakarta Sans or Manrope (Mednix-proven direction); Bangla — Hind Siliguri; tight headline tracking, 1.6+ body line-height (Bengali needs more).
3. **Hero:** split layout — left: condition-specific trust headline ("Piles, Fissure & Fistula — Specialist Laser Care in Dhaka"), credential chips (BMDC reg, years, procedures done), dual CTA (Call now / WhatsApp booking); right: doctor portrait or dignified illustration. Trust badges (patients treated, success rate) as floating chips (Doccure pattern).
4. **Persistent appointment rail:** topbar (hours + chamber + phone) → sticky header CTA → in-page booking section → mobile bottom bar. Booking = 2-step form (service + preferred time & contact) with WhatsApp fallback; success/confirmation state (Doccure pattern); zero account creation.
5. **Sections (single-page rhythm + deep condition pages):** hero → trust strip → conditions/services cards (Piles/Fissure/Fistula/Laser treatment/Constipation — 5–6, not 12) → about the specialist (credentials, training, media) → weekly chamber timetable grid (Medical Clinic pattern, simplified) → patient stories (text-first, privacy-safe) → FAQ accordion (symptom, cost, recovery — SEO schema) → booking + map → dark footer with emergency-adjacent "urgent symptoms" guidance.
6. **Motion:** AOS-style fade-up reveals, Swiper or vanilla JS carousels, count-up stats only — no sliders as hero, no parallax.
7. **Mobile-first budget:** Bangladeshi traffic is majority-mobile on 3G/4G — system-font fallback stack, lazy images, no jQuery slider libraries beyond what's needed; the static build already beats all WP candidates here.

---

### Verification appendix — demo URL status

| Theme/Template | Demo URL | Status |
|---|---|---|
| Medical Clinic (cmsmasters) | https://medical-clinic.cmsmasters.net/ (+ /appointments/, /timetable/) | ACCESSIBLE — fetched |
| Mednix (ThemeHt) | https://mednix.themeht.com/ | ACCESSIBLE — fetched in full |
| Medicoz (ThemeChampion) | https://medicoz.themechampion.com/ (landing/demo-picker) | ACCESSIBLE — landing only; individual demo installs UNRESOLVED |
| Doccure (dreamstechnologies) | https://doccure.dreamstechnologies.com/html/template/index.html | ACCESSIBLE — fetched in full |
| MediCenter (QuanticaLabs) | via preview.themeforest.net | NOT fetched (stale code, low value) |
| Mediplus (WpthemesGrid) | via preview.themeforest.net | NOT fetched |
| Medicoz HTML (bold_touch) | via preview.themeforest.net | NOT fetched |

*Note on marketplace stats: two fetch passes disagreed on Mednix and Medicoz sales/ratings (cached vs live snapshots). Ranges are reported above; the direction of travel (Mednix growing fast from a Nov-2025 launch; Medicoz rating declining) is consistent across sources.*
