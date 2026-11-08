# FRONTEND_CONTRACT.md — rules for page fragments & translations

This is the binding contract for everyone authoring `src/pages/*.html` fragments and `src/i18n/*.json` dictionaries. The lead owns `templates/`, `assets/css/style.css`, `assets/js/*.js`, `scripts/build.mjs`, `scripts/qa.mjs`.

## 1. Fragment rules

- A fragment is **content only**: no `<html>/<head>/<body>`, no header/footer/nav/scripts (shared chrome comes from templates), no `<script>`, no inline styles, no `<style>` blocks.
- First element should be the page's `<section class="hero ...">` or an intro section containing the page's single `<h1>`. Exactly one `<h1>` per fragment.
- Sections: `<section class="s s-{name}">` (alternating backgrounds via `s-alt`). Every section body wrapped in `<div class="container">`.
- Relative links only: pages as siblings (`about.html`), assets as `assets/...`. External links limited to the verified set (Facebook permalinks, Google Maps URLs, `tel:`, `mailto:`).

## 2. Bilingual i18n rules

- Default visible text = **Bangla**. Every translatable element carries a key:
  `<h2 data-i18n="faq.q1">অ্যাপয়েন্টমেন্ট নিতে কি রেফারেন্স লাগে?</h2>`
- Attributes: `data-i18n-ph="key"` (placeholder), `data-i18n-alt="key"` (alt), `data-i18n-aria="key"` (aria-label). Elements with only-attribute translation may stay empty.
- Keys: `{page}.{block}.{item}` camelCase (e.g. `piles.treatment.procedures`), chrome keys prefixed `c.` (header/footer/common).
- The author of a fragment also writes both dictionaries for it:
  - `src/i18n/bn/{page}.json` — key → Bangla (must equal the fragment's default text)
  - `src/i18n/en/{page}.json` — key → natural English (not machine-word-for-word)
- Plain JSON, flat key→string map, no nesting, no HTML inside values except `<strong>`/`<em>`/`<br>` (engine uses innerHTML for keys suffixed `_html`; prefer plain text + separate elements).
- Numbers: Bangla numerals in BN (২০০৩, ৮৮০), Latin in EN.
- `qa.mjs` fails the build if a key is missing from either dictionary or unused.

## 3. Verified facts (use EXACTLY these — never invent)

- Name: Dhaka Piles Care Center / ঢাকা পাইলস কেয়ার সেন্টার; former name Baridhara Piles Cure Center.
- Founded October 2003 by Dr. Morjina Akhter (ডা: মর্জিনা আক্তার) — physician for anorectal diseases (piles & fistula). **No degrees/registrations — never invent.**
- Phone: +880 1716-528757 → `tel:+8801716528757`. Email: dhakapilescarecenter@gmail.com.
- Address: North Baridhara (near Norda Bus Stand), Dhaka / নর্থ বারিধারা (নরদা বাস স্ট্যান্ডের কাছে), ঢাকা।
- Hours: "Call to confirm chamber hours" — never "24/7" or "Always open".
- WhatsApp: does not exist yet — never reference.
- Google rating numbers: forbidden. Testimonials: forbidden.
- Claims allowed (hedged): since 2003; care for women and men; modern treatment methods; many procedures without hospital admission ("যেখানে প্রযোজ্য"); nationwide patient service (8 divisions).
- Prohibited words: নিরাময় (as guarantee), নিশ্চিত, ১০০%, guaranteed, permanent cure, painless forever.

## 4. Medical copy rules (from research/medical_content_reference.md — adapt, keep hedges)

- Condition pages: What it is / Symptoms / Causes & risk factors / When to see a doctor / Treatment options / Prevention & self-care / Recovery — H2 per section; include the shared **red-flag box** and the **education disclaimer** box (keys `c.redflag.*`, `c.disclaimer`).
- Say "often helps / many people find relief / can return / your doctor will advise"; bleeding is never "normal".
- Emergency wording: "go to the nearest emergency department" (not NHS 111/A&E).

## 5. Class contract (style.css provides these — do not invent look-and-feel)

- Layout: `.container`, `.s` (section padding), `.s-alt`, `.grid .g-2 .g-3 .g-4` (responsive), `.split` (2-col hero/about), `.stack`, `.center`.
- Type: `.eyebrow`, `.section-head` (+`h2`, `.lede`), `.lead`.
- Buttons: `.btn` `.btn-solid` `.btn-outline` `.btn-ghost` `.btn-lg` `.btn-sm` `.btn-block`; icon-in-button via inline `<svg class="bi">`.
- Chips/badges: `.chip` `.chip-accent` `.chip-green` `.chip-amber`; `.badge-20` not allowed — use `.chip-amber`.
- Cards: `.card` (generic), `.cond-card` (condition grid card, icon + title + text + link), `.pillar-card`, `.doc-card` (doctor), `.edu-card` (education/post link card), `.step-card` (numbered journey), `.review-channel-card`.
- Notice boxes: `.redflag` (urgent symptoms), `.disclaimer` (education note), `.note` (soft info).
- Accordion: `.acc > .acc-item > (.acc-btn[aria-expanded] + .acc-panel)`.
- Doctor avatar: `.avatar-mono` (monogram circle).
- Contact/CTA: `.cta-band`, `.contact-card`, `.map-card` (click-to-load: `.map-ph` placeholder + button).
- Form: `.form-grid`, `.field` (`label`, `input/select/textarea`, `.err` message span), `.field.invalid input` state.
- Footer/mobile bar/other chrome live in templates — fragments must not re-create them.

## 6. Images

- Only these site images exist: `assets/images/brand/logo-dp{,-160,-96,-240,-64}.png`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.jpg`; `assets/images/media/{cover-banner,education-anorectal,education-anorectal-480,education-foods}.webp`. Always set `width`/`height`, `loading="lazy"` (except none needed in hero), descriptive `alt` + `data-i18n-alt`.
- Do NOT reference `facebook-raw/` or invent image paths. No fake photos of doctors/patients/premises.

## 7. Fragment file list (one file per page, filename = output page)

`index.html, about.html, doctors.html, treatments.html, treatment-piles.html, treatment-fissure.html, treatment-fistula.html, patient-info.html, faq.html, gallery.html, reviews.html, contact.html`

Dictionary files: `src/i18n/{bn,en}/{page}.json` (+ `src/i18n/{bn,en}/_core.json` owned by the lead for chrome/common keys).
