# Theme Evaluation & Design Decision

## Dhaka Piles Care Center — premium static website (HTML/CSS/JS/jQuery, Bangla-first with EN toggle)

| | |
|---|---|
| **Date** | 2026-11-08 |
| **Basis** | `research/themeforest_analysis.md` (full candidate research), `research/design_benchmarks.md` (live medical-site patterns), and the lead's decisions recorded after the source audit (`docs/SOURCE_AUDIT.md`) |
| **Status** | Final decision document — the design direction below is decided and is being implemented |

---

## 1. Purpose & method

- **Design references only.** WordPress themes and HTML templates were analysed as references for structure, craft, and conversion anatomy. **Nothing was installed, purchased, licensed, downloaded, or copied.** The final build is fully static HTML/CSS/JS/jQuery, hand-written.
- Marketplace pages and live demos were fetched read-only, logged-out. Where two fetch passes disagreed (cached vs live marketplace stats), both figures are reported in the upstream analysis and ranges are kept here.
- Demo access status per candidate (detailed fetch notes in `research/themeforest_analysis.md`, verification appendix):

| Candidate | Demo URL | Access status |
|---|---|---|
| Medical Clinic (WP) | medical-clinic.cmsmasters.net (+ /appointments/, /timetable/) | ACCESSIBLE — fetched |
| Mednix (WP) | mednix.themeht.com | ACCESSIBLE — fetched in full |
| Medicoz (WP) | medicoz.themechampion.com (landing/demo-picker) | ACCESSIBLE — landing only; individual demo installs unresolved |
| Doccure (HTML) | doccure.dreamstechnologies.com/html/template/index.html | ACCESSIBLE — fetched in full |
| MediCenter (HTML) | via preview.themeforest.net | NOT fetched (stale 2021-era code, low value) |
| Mediplus (HTML) | via preview.themeforest.net | NOT fetched |
| Medicoz HTML (bonus) | via preview.themeforest.net | NOT fetched |

---

## 2. Candidate summaries and verdicts

### A1. Medical Clinic — Health and Doctor Medical WordPress Theme (cmsmasters) — 69/130
$59 · 2,393 sales · 4.58★ (57 reviews) · 2016 origin, plugin-compat updates to Jun 2026. Flat 2016-era design: LayerSlider/RevSlider heroes, bordered square cards, WooCommerce baggage, Lorem Ipsum demo content, pinch-zoom disabled (`maximum-scale=1`). **Its one standout is the weekly timetable grid** (hours × Mon–Sun, colour-coded, per-day mobile accordion) — exactly the right pattern for a Bangladeshi chamber clinic with fixed weekly hours.
**Verdict: not a design base. Adopt the simplified weekly-chamber-hours timetable idea only.**

### A2. Mednix — Medical & Health Clinic WordPress Theme (ThemeHt) — 98/130 (highest)
$39 · ~498 sales · ~4.89★ · launched Nov 2025, actively developed. The freshest craft of all candidates: Mona Sans/Manrope-class typography, soft-radius cards, subtle shadows, eyebrow-label + large-heading section headers, opening-hours box in the About band, specialty marquee, odometer counters, dark footer with hours + emergency strip.
**Verdict: the craft reference — typography, soft cards, section rhythm. Young product, generic multi-specialty demo copy; nothing piles-specific or bilingual. Adapt nothing wholesale; borrow the visual language.**

### A3. Medicoz — Clinic & Pharmacy WordPress Theme (ThemeChampion) — 76/130
$49 · ~267 sales · rating trending down (4.50★ → ~3.91★) · 2021, four years of maintenance-only updates. Revolution Slider heroes, parallax backgrounds, 12 demos with different headers fragmenting consistency. RTL fully supported (the one relevant feature).
**Verdict: avoid the style. RTL support is a reminder that bilingual readiness must be first-class — which we implement properly with a Bengali webfont instead.**

### B1. Doccure — Doctor Appointment Booking Template (dreamstechnologies, HTML) — 95/130
$24–35 · 1.4K sales · updated 4 Nov 2026 (actively maintained). Bootstrap 5, RTL, 17+ demos, patient/doctor/admin dashboards. **The strongest conversion architecture found anywhere:** search/booking-first hero with floating trust badges, doctor-card anatomy (photo + credential badge + availability pill + session length + fee + Book Now), category icon strip, 4-step "how it works", three booking entry points (page + popup + section) with a booking-success screen, FAQ accordion, stats band.
**Verdict: the structure reference. But it is a Practo-clone platform UI — doctor ratings per city, fee comparison, cart/checkout, dashboards — a mental model that must be stripped for a single-specialist clinic. Adopt the conversion anatomy, none of the marketplace features.**

### B2. MediCenter — Health Medical Template (QuanticaLabs, HTML) — 69/130
$19–29 · 3.1K sales (the category's historic bestseller) · v3.0, 2021 (origin 2013). jQuery-era code, PT Sans + Volkhov, boxed layouts. Structurally complete: departments, doctors, timetable, ajax appointment form.
**Verdict: historical proof that "timetable + appointment form" is the proven medical-site core. Not a 2026 visual reference.**

### B3. Mediplus — Medical and Doctor HTML Template (WpthemesGrid) — 75/130
$16 · ~234 sales · Bootstrap 5.x, sticky header, RTL support, 20 pages. Clean but shallow: contact form only, no booking flow, single review.
**Verdict: another bilingual-readiness reminder; too shallow as a design north star.**

### B4. Medicoz HTML (bold_touch) — 73/130 (bonus)
$12 · ~221 sales · 4.86★ but **last updated Sep 2020** — Bootstrap 4, RevSlider, parallax, stale.
**Verdict: skip.**

---

## 3. Scoring matrix (1–10 per dimension; totals /130)

Reproduced verbatim from `research/themeforest_analysis.md`:

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

Reading: only Mednix (98) and Doccure (95) clear a premium bar — Mednix on visual craft, Doccure on conversion architecture. Everything else is maintenance-era work.

---

## 4. Final decision: a fully custom design system

**No template is adopted.** The build uses a bespoke design system, informed by (not derived from) the candidates. Reasoning:

1. **No candidate scores high enough to adapt wholesale.** The best two (98, 95) still require heavy removal work: Mednix carries Elementor-driven markup weight and generic multi-specialty demo content; Doccure requires stripping an entire marketplace layer (ratings per city, fees, cart, dashboards, 17 demos). Template-archaeology costs more than authoring a clean static system for one clinic.
2. **Marketplace features are the wrong mental model.** Doccure-style trust signals (doctor counts per city, fee comparison, "5K+ appointments" badges) assume a platform of many interchangeable doctors. This business is **one trusted specialist** running a chamber since 2003 — trust comes from personal continuity, verified longevity, and a real phone number, not marketplace badges.
3. **What this clinic needs, no template ships:**
   - **Privacy-toned content design.** Piles/colorectal is a stigmatised condition; patients delay care out of embarrassment. Discreet copy, calm tone, no before/after imagery — none of the seven candidates designs for this.
   - **Bangla-first bilingual typography.** Every candidate's "multilingual" story is a switcher stub or RTL. This audience reads Bangla (all six of the clinic's retrievable Facebook posts are Bangla); the site needs real Bengali typography (Hind Siliguri), taller Bangla line-heights, and Bangla condition names in headings.
   - **Phone-first Bangladesh contact UX.** Chamber culture in Dhaka books by phone and serial. The convergent benchmark pattern (sticky call bar, tap-to-call everywhere, appointment rail) beats every candidate's form-first UX.
4. **Static matches the project constraints.** Demo/proposal build for client approval; no WordPress maintenance liability (the clinic's own abandoned WordPress install is direct evidence that route failed them); full server-rendered content for low-end Android browsers and slow connections.

---

## 5. Adopt / improve / avoid

**Adopt (into the custom system):**
1. From **Doccure** — conversion anatomy: booking-first hero, doctor-card anatomy, category/condition icon strip, 4-step "how it works", stats band, FAQ accordion, booking-success confirmation state.
2. From **Doccure** — appointment plumbing: multiple booking entry points (header CTA, in-page section, mobile bar) converging on one flow, with a visible confirmation state.
3. From **Mednix** — visual craft: modern humanist typography (Manrope class), soft-radius cards with subtle shadows, eyebrow-label + large-heading section headers, opening-hours box, dark footer carrying hours + contact.
4. From **Medical Clinic (cmsmasters)** — the weekly timetable grid, simplified (no department filters): the right pattern for fixed chamber hours, with a per-day accordion fallback on mobile.
5. From **Mediplus / Medicoz** — bilingual readiness as a first-class concern (implemented as a real EN/বাংলা toggle with a proper Bengali webfont, not a stub).

**Improve beyond all templates:**
- **Privacy-toned design language** for a stigmatised condition: calm palette, discreet copy, "confidential consultation" reassurance lines next to CTAs, no embarrassing imagery.
- **Bangladesh contact UX**: tap-to-call as the primary action everywhere; topbar with chamber area + phone; WhatsApp intentionally absent until a number is verified (see below).
- **Full Bengali typography**: Hind Siliguri self-hosted, Bangla headlines with generous line-height, Bangla-first content order.

**Avoid:**
- Revolution/LayerSlider heroes and parallax backgrounds — slow, dated, fragile on mobile.
- Multi-department hospital IA (8–31 department menus) — a specialist clinic needs 5–7 condition/service pages.
- Marketplace/Practo-clone features: ratings per city, fee comparison, cart/checkout, dashboards, currency switcher.
- WooCommerce, newsletter plugins, and copied "24/7 emergency" claims (untrue for a chamber clinic — urgent-symptoms *guidance* is published instead, never a 24/7 claim).
- Pinch-zoom disabling (`maximum-scale=1`) and IE-era compatibility claims.
- 12-demos-with-different-headers fragmentation — one home design, done deeply.

---

## 6. The decided custom design direction

### 6.1 Palette — anchored to the clinic's real logo

| Token | Value | Role |
|---|---|---|
| Sky blue | `#46C3EB` | Accent — interactive highlights, icons, chips, focus states |
| Deep brand blue | `#0B5C8D` | Primary — buttons, links, header surfaces, section accents |
| Navy ink | `#10233F` | Text and headings (mirrors the logo's Bangla wordmark ink) |
| Off-white | `#F7FAFC`-family | Page background; white cards on top |

The logo (720px, visually verified — sky-blue ring and monogram, navy wordmark) is the clinic's only existing brand asset, so the site extends it: blue family throughout, navy for reading text, **no clinical red and no alarm colours** (red appears only in the medical-content red-flag box, where it is semantically correct). This **supersedes the provisional teal/amber palette** in `research/themeforest_analysis.md`, which was written before the logo was obtained — a generic template teal would clash with the real logo everywhere both appear.

### 6.2 Typography

- **English: Manrope** (400–800) — the Mednix-proven humanist-geometric direction.
- **Bangla: Hind Siliguri** (300–700) — open-licensed Bengali face with a matching humanist feel.
- Both are **self-hosted woff2** (already staged in `assets/fonts/`) — no third-party font CDN latency for Bangladesh traffic.
- **Bangla-first content with an EN toggle.** Bengali script needs a taller line-height budget (≥1.6 body, more on Bangla headlines); the EN/বাংলা toggle swaps UI labels and key content, with Bangla condition names (পাইলস, ফিসার, ফিস্টুলা) present in headings for SEO and patient recognition.

### 6.3 Hero pattern

Split hero: left — Bangla-first trust headline naming the conditions in patient language, with **verified positioning chips only** (Since 2003 · specialist doctor for women and men · modern-method treatment · treatment without operation where possible — all published by the clinic itself, see `docs/SOURCE_AUDIT.md` §5.2); right — a dignified original illustration in the brand palette (or clinic-supplied photography later). Dual CTA: **Call now (`tel:+8801716528757`)** and **book a serial**. **Floating rating badges are deliberately omitted** — the Doccure chip pattern is rejected because no rating figure is verified (reviews policy).

### 6.4 Persistent appointment rail

One primary conversion action ("book a consultation / call now") repeated in every vertical band: topbar (chamber area "North Baridhara, near Norda Bus Stand" + phone) → sticky header CTA → in-page appointment band (2-step: concern + preferred time & contact; static-demo fallback via `mailto:dhakapilescarecenter@gmail.com`, success-confirmation state) → mobile bottom bar. Zero account creation. Why: Bangladeshi chamber patients book by phone and serial; benchmark convergence (Cleveland, Burjeel, Mayo) shows one repeated action beats many competing ones.

### 6.5 Mobile bottom action bar

Fixed, thumb-zone bar on mobile: **Call (`tel:`)** · **Email (`mailto:`)** · **Book** (contact page). WhatsApp is intentionally absent — it is unverified for this clinic, so the site ships phone + email channels only (channel policy in `docs/SOURCE_AUDIT.md` §6–7); if the client confirms a number, the Email slot can be swapped for a wa.me deep link. Why: Bangladeshi traffic is majority-mobile; the classic failure mode in the benchmarks is burying the phone number.

### 6.6 Motion rules

Fade-up scroll reveals (AOS), one restrained count-up for verified facts (e.g. "Since 2003"), no hero sliders, no parallax, no auto-opening modals; all motion respects `prefers-reduced-motion`. The demo's vendor stack already matches this decision — jQuery, AOS, Slick, and Magnific Popup only (all MIT-licensed, staged in `assets/vendor/`) — no slider-heavy framework. Why: low-end Android devices on 3G/4G are the real audience; motion must never delay content.

---

## 7. Licence note

- **No ThemeForest purchase was made.** No theme or template was installed, downloaded, licensed, or copied — all candidate sites were read as public design references only.
- **No proprietary code or assets are used in the build.** The design system (tokens, components, layout) is authored from scratch; candidate sites contributed patterns and standards, not code.
- **Visual assets:** the logo, cover artwork, and post graphics are the clinic's own published material (client-owned). Website illustrations are original works in the brand palette; the clinic's Facebook graphics serve as reference only.
- **Fonts:** Manrope and Hind Siliguri are SIL Open Font License — self-hosted legally.
- **Vendor libraries:** jQuery, AOS, Slick, Magnific Popup — all MIT-licensed, unmodified vendored copies.
- The clinic's Facebook photo-grid images are **not** republished on the site pending rights/quality confirmation (see `docs/SOURCE_AUDIT.md` §5.4, §7.10).

---

*Companion document: `docs/SOURCE_AUDIT.md` (what is verified, what must not be published). Upstream research: `research/themeforest_analysis.md`, `research/design_benchmarks.md`, `research/medical_content_reference.md`.*
