# PROJECT_REQUIREMENTS.md — Dhaka Piles Care Center Website

Status: **Approved build specification** (demo/proposal build — nothing deploys without client approval).
Date: 2026-11-08. Companion documents: `SOURCE_AUDIT.md`, `THEME_DECISION.md`, `CONTENT_ASSET_MANIFEST.md`, research files in `../research/`.

---

## 1. Project goals

1. Present **Dhaka Piles Care Center** (ঢাকা পাইলস কেয়ার সেন্টার) as a trustworthy, established specialist clinic for piles (haemorrhoids), anal fissure and anal fistula in Dhaka.
2. Convert visitors into **phone calls** to the verified number **+880 1716-528757**, secondary conversions: email enquiry, directions to the clinic, Facebook follow.
3. Educate patients in **Bangla-first, medically responsible language**; reduce fear and embarrassment around anorectal symptoms; route readers to consultation instead of self-medication.
4. Look like a premium international specialist-clinic site: custom design system, strong typography, calm motion, fast on Bangladeshi mobile networks.
5. Rank locally for condition + location queries (পাইলস চিকিৎসা ঢাকা, piles doctor Baridhara, anal fissure treatment Dhaka, etc.).

## 2. Audience

- **Primary:** Bangla-speaking adults 25–65 in Dhaka (and family members researching on their behalf), majority mobile, often on 3G/4G; many delay care out of embarrassment or fear of surgery/colonoscopy; prefer to book by phone.
- **Secondary:** English-speaking patients, NGOs/corporates, and diaspora relatives verifying the clinic before recommending it.
- **Emotional needs:** privacy, reassurance, credibility (real history since 2003), clarity about what happens at a first visit, no pushy selling.

## 3. Business identity & brand strategy

| Item | Decision | Basis |
|---|---|---|
| Primary name | **Dhaka Piles Care Center** | Current Facebook page name, domain, current logo |
| Bangla brand name | **ঢাকা পাইলস কেয়ার সেন্টার** | Official logo (profile picture, verified visually) |
| Alternate/legacy name | **Baridhara Piles Cure Center** | Page's own About statement; still the name on the Google Maps listing — shown once on About page + `alternateName` in schema |
| Founded | **October 2003** by **Dr. Morjina Akhter** | Verified About text |
| Doctor | Dr. Morjina Akhter — physician for anorectal diseases (piles & fistula), editor of the clinic's health-education articles. **No degrees published → no credentials displayed.** Photo pending client. | Verified; gaps documented |
| Phone | **+880 1716-528757** (tel: links site-wide) | Verified on two independent sources |
| Email | **dhakapilescarecenter@gmail.com** (mailto links) | Verified |
| WhatsApp | **Not published anywhere → not used.** Pending client confirmation; design keeps a slot in docs only | Verified absence |
| Address (display) | **North Baridhara (near Norda Bus Stand), Dhaka** | Verified directory wording; postcode conflict (1212 vs 1229) documented, pending client confirmation |
| Map | Google Maps embed + directions deep-link using verified pin `23.8135153, 90.4183877` | Verified listing coordinates |
| Hours | **"Call to confirm chamber hours"** — Facebook's "Always open" is not truthful for a chamber clinic and is NOT reproduced | Editorial decision |
| Logo | Official logo PNG (white background) used in header, footer, OG image, favicon set | Downloaded from page (720px), verified visually |
| Tagline | EN: *Specialist care for piles, fissure & fistula — since 2003.* BN: *পাইলস, ফিসার ও ফিস্টুলার বিশেষজ্ঞ চিকিৎসা — ২০০৩ সাল থেকে।* | Derived from verified positioning |

**Published positioning points (clinic's own cover artwork — used hedged, never as guarantees):**
- Treatment without hospital admission *where appropriate* ("বিনা অ্যাডমিশনে" claim → phrased "যেখানে প্রযোজ্য, ভর্তি ছাড়াই চিকিৎসা" / "many procedures need no hospital admission").
- Trusted care for **women and men**.
- **Modern-method treatment** (modern treatment methods).
- **Since 2003** longevity chip (supersedes the cover's "25 years experience" badge — founding date is the verifiable fact).

**Prohibited content (hard rules):** no invented doctor degrees/registrations, no fabricated testimonials or star ratings, no guaranteed-cure language ("নিরাময়", "100%", "permanent cure", "painless forever"), no prices, no fake photos of doctors/patients/premises, no copied Google review text, no "24/7 emergency" claims.

## 4. Sitemap & navigation

```
index.html                    Home
about.html                    About the clinic
doctors.html                  The doctor (Dr. Morjina Akhter)
treatments.html               Treatments & approach (overview)
treatment-piles.html          Piles / Haemorrhoids (পাইলস)
treatment-fissure.html        Anal Fissure (ফিসার)
treatment-fistula.html        Anal Fistula (ফিস্টুলা)
patient-info.html             Patient information (conditions guide, first-visit prep, red flags, colonoscopy advice)
faq.html                      Frequently asked questions
gallery.html                  Gallery & patient-education posts
reviews.html                  Reviews & feedback (link-out policy)
contact.html                  Contact & appointment
sitemap.xml, robots.txt, 404-free static hosting assumed
```

Navigation (max 7 items, per benchmark anti-pattern rule): Home · About · Treatments (dropdown: overview + 3 condition pages) · Patient Info · FAQ · Gallery · Contact. Header CTA button: **Book Appointment → contact.html**. Topbar: phone (tel:) · email · address short · language toggle. Mobile sticky bottom bar: **Call** (tel:) · **Email** (mailto:) · **Book** (contact.html). Footer: full identity, quick links, conditions, contact, Facebook link, disclaimer.

## 5. Page-by-page requirements

**index.html** — hero (split layout: Bangla-first headline, subhead naming the three conditions, dual CTA Call/Book, trust chips: Since 2003 · Women & men · No-admission procedures where appropriate; right side original SVG illustration + floating trust cards); "conditions treated" icon-card grid (Piles, Fissure, Fistula, + evaluation of other anorectal complaints, each linking to its page); doctor introduction band (monogram avatar, verified facts, CTA); why-choose-us pillar band (4 pillars with only verifiable proof points); patient journey (4 steps: call → consultation → diagnosis → treatment plan, no-admission note); education preview (2 cards from patient-info + Facebook education post links); reviews-link band (honest policy + Google/Facebook buttons); location band (click-to-load map + address + directions button); FAQ teaser (4 questions) + final CTA band. No carousel in hero. AOS fade-up reveals.

**about.html** — story (founded Oct 2003 by Dr. Morjina Akhter; formerly Baridhara Piles Cure Center; service-area note 8 divisions per FB), mission (discreet, evidence-based anorectal care; no self-medication — echo of the clinic's colonoscopy-advice post), what we treat summary, brand strip (official logo + Bangla name), facilities note (pending photos — honest placeholder text, no fake imagery), map + directions.

**doctors.html** — Dr. Morjina Akhter profile: name, founder since October 2003, anorectal-diseases physician (piles & fistula), editor of the clinic's education articles, chamber at North Baridhara. Monogram avatar (no fake portrait). "Book with Dr. Morjina Akhter" CTA (call/email). Explicit note: *detailed qualifications will be published once confirmed by the clinic*. No invented timeline.

**treatments.html** — approach section (consultation-led; conservative → office procedures → surgery referral path where needed; hedged no-admission note), condition cards linking to the three condition pages, "other anorectal complaints — come for evaluation" card, red-flag strip, illustration (clinic's anatomical render from its own post), CTA.

**treatment-piles.html / treatment-fissure.html / treatment-fistula.html** — identical template: eyebrow + bilingual title (Bangla lay term incl. বোসা / ভগন্দর), "What it is / Symptoms / Causes & risk factors / When to see a doctor / Treatment options (conservative → procedures → surgery) / Prevention & self-care / Recovery" — adapted from `research/medical_content_reference.md` (hedged phrasing preserved verbatim where possible); shared **red-flag box**; education disclaimer box; internal links to sibling conditions + patient-info; CTA band (call/email); MedicalWebPage-ready heading structure (H2 per section).

**patient-info.html** — symptom router ("Bleeding with stool? Pain when sitting? A lump? …" → routes to condition pages or call — never diagnoses); conditions guide summaries (pilonidal sinus, anal skin tags, constipation — education framing, "we can evaluate and guide/refer"); first-visit preparation (what to bring, questions to ask, privacy reassurance); the clinic's own colonoscopy-advice message (don't fear the test, don't self-medicate — attributed to clinic's education posts); red-flag box; foods/education image from the clinic's post.

**faq.html** — 12+ bilingual Q&As across: symptoms, appointment/serial, what to expect, procedures & admission, recovery, privacy, costs ("discussed at consultation — not published online"), colonoscopy fear, when to seek urgent care. FAQPage JSON-LD.

**gallery.html** — "Official brand & patient education" grid: logo (Bangla + English variant), cover artwork, anatomical render, foods image — each with caption + original Facebook post link (Magnific lightbox for local images); honest "clinic photographs coming soon — pending client approval" placeholder cards; video note (page has no videos — nothing fabricated).

**reviews.html** — policy explanation (we don't copy reviews; read them at the source), big **Google reviews** button (maps place search URL) + **Facebook** button; "share your experience" guidance (how to leave a Google/Facebook review); trust summary built only from verified facts (since 2003, nationwide service area, founder-led). No star numbers, no quotes.

**contact.html** — contact cards (phone tel:, email mailto:, address, FB page), chamber-hours note ("call to confirm"), appointment enquiry: **validated form that composes a pre-filled email (mailto:)** — fields: name, phone, preferred day/time, concern (optional dropdown + free text), privacy note ("do not send sensitive medical details by email"); explicit success affordance (opens the visitor's email app — no fake "submitted" state); click-to-load Google Maps embed + directions link; "find us" landmarks (near Norda Bus Stand).

## 6. Functional requirements

1. Responsive header: topbar (contact + language) → sticky main bar (logo, nav, CTA). Mobile: drawer menu with accordion sub-menu (Treatments), focus-trapped, ESC/overlay close.
2. **Language switcher BN (default) / EN**: swaps all translatable text via `data-i18n` keys from `assets/js/translations.js`; updates `<html lang>`, `document.title`, meta description; persists in `localStorage` (`dpc_lang`); Bangla default because audience research shows Bangla-only content page.
3. Sticky mobile bottom action bar (Call / Email / Book) — hidden on desktop, safe-area padding, never overlaps footer text.
4. Condition-page FAQ accordion (ARIA `aria-expanded`, keyboard operable), used on faq.html + condition pages.
5. Magnific Popup lightbox for gallery images (local, captioned) — no Facebook embeds required.
6. Click-to-load Google Maps embed (button → injects iframe; saves ~1MB on mobile).
7. Enquiry form: client-side validation (required name, valid BD phone pattern, optional fields), then builds `mailto:` to the clinic email with structured subject/body; visible "this opens your email app" explanation. No fake submission, no data storage.
8. Back-to-top button; smooth-scroll for in-page anchors; skip-to-content link.
9. AOS scroll reveals, disabled under `prefers-reduced-motion`.
10. All interactive elements keyboard-reachable, visible `:focus-visible` styles.

## 7. Design system

**Tokens** (single source: `assets/css/style.css` `:root`; consumed by all pages):

| Token | Value | Use |
|---|---|---|
| `--ink` | `#10233F` | Headings, body text |
| `--ink-soft` | `#3D5470` | Secondary text |
| `--primary` | `#0B5C8D` | Primary buttons, links, icon fills |
| `--primary-deep` | `#08405F` | Hero gradient, footer, hover |
| `--accent` | `#46C3EB` | Logo blue — icon strokes, highlights, chips |
| `--accent-soft` | `#E8F6FC` | Tinted surfaces, eyebrow labels |
| `--amber` / `--amber-soft` | `#F5A623` / `#FFF4DF` | "Since 2003" badge, small highlights |
| `--green` / `--green-soft` | `#178A50` / `#E5F5EC` | Reassurance chips |
| `--red` / `--red-soft` | `#B4232A` / `#FCEDED` | Red-flag warning box only |
| `--bg` / `--surface` / `--surface-alt` | `#F7FAFC` / `#FFFFFF` / `#F0F7FB` | Page/canvas/alt sections |
| `--line` | `#DCE9F1` | Borders, dividers |
| Radius / shadows | 12–22px; 3-tier soft shadows | Cards, modals |
| Container | 1180px, 24px gutters | Layout |

**Typography:** Manrope (400/500/600/700/800) for Latin, Hind Siliguri (300–700) for Bangla + body Latin; `body[lang-bn]` switches display font to Hind Siliguri with line-height ≥1.8 for Bangla headings; type scale 1.25 modular; eyebrow labels uppercase, letterspaced, accent color.

**Components:** buttons (solid/outline/ghost + sizes), chips, cards (condition, pillar, doctor, education), accordion, red-flag box, disclaimer box, stat/badge, section header (eyebrow + H2 + lede), map placeholder card, form controls with validation states, mobile action bar, drawer, lightbox skin, footer (deep blue, 4 columns).

**Motion:** fade-up reveals 500–700ms, single ease; no parallax, no hero sliders, no auto-popups (benchmark anti-patterns).

## 8. Technology architecture

- **Stack:** HTML5 + CSS3 (single custom stylesheet, CSS custom properties) + jQuery 3.7.1 + Slick 1.8.1 (only if a slider is used — currently planned: none required; drop if unused) + Magnific Popup 1.1.0 + AOS 2.3.4. No Bootstrap (custom grid is lighter and more distinctive). No backend, no build-time dependencies beyond Node's stdlib.
- **Structure (house pattern, matches sibling demos):**
  ```
  piles-care/
    templates/            head / header / footer / scripts partials
    src/pages/            page fragments (content sections only)
    assets/css/style.css  design system
    assets/js/i18n.js     language engine (data-i18n)
    assets/js/translations.js  central BN+EN dictionary (window.DPC_T)
    assets/js/main.js     nav, drawer, accordion, lightbox, form, map, misc
    assets/data/fb-posts.js  education-post link cards data
    assets/{images,fonts,vendor}/...
    scripts/build.mjs     composes site/ from templates+fragments, copies assets
    scripts/qa.mjs        i18n coverage + link/asset integrity + form checks
    site/                 OUTPUT — serve this
  ```
- **Build:** `node scripts/build.mjs` → writes `site/*.html` (shared head/header/footer with per-page title/desc/nav-state), copies assets + sitemap.xml + robots.txt. `node scripts/qa.mjs` must pass before delivery. Serve: `python3 -m http.server` in `site/`.
- Pages must also work from `file://` (classic scripts, relative paths).

## 9. SEO requirements

- Unique `<title>` per page, pattern: `{Page} | Dhaka Piles Care Center` (Bangla titles by default, EN swapped by i18n); unique meta description per page in both languages.
- Canonical: `https://dhakapilescarecenter.com/{page}` (clinic's own registered domain — currently a placeholder install; deployment pending client approval).
- Open Graph (og:title/description/image `og-image.jpg` 1200×630/type website/locale bn_BD + alternate en_US) + Twitter card summary.
- JSON-LD: `MedicalClinic` (name, alternateName "Baridhara Piles Cure Center", Bangla name, url, telephone, email, address → addressLocality Dhaka + addressCountry BD (no street until confirmed), geo 23.8135153/90.4183877, hasMap link, founder Person (Dr. Morjina Akhter), foundingDate 2003-10, sameAs Facebook page; **no openingHours** (unverified), **no aggregateRating** (unverified)); `MedicalWebPage` on condition pages (about → relevant MedicalCondition); `FAQPage` on faq.html; `BreadcrumbList` on subpages; `Person` for the doctor on doctors.html (only verified fields).
- sitemap.xml (12 URLs) + robots.txt (allow all, sitemap reference).
- Semantic headings (one H1/page), descriptive alt text in the current language, internal linking: every condition page links to the other two + patient-info + contact; footer quick links mirror sitemap.
- Bangla keyword coverage in body copy (পাইলস/বোসা, ফিসার, ফিস্টুলা/ভগন্দর, মলদ্বার, কোষ্ঠকাঠিন্য, ঢাকা, বারিধারা) — natural usage only.

## 10. Performance requirements

- Budgets: style.css ≤ 60KB; vendor JS total ≤ 180KB minified, all `defer`; fonts woff2 subset with `font-display: swap` + `size-adjust` not required (metrics close); LCP element (hero) has no image dependency except optional illustration ≤ 40KB SVG/WebP.
- Images: WebP, explicit `width`/`height` (CLS 0), `loading="lazy"` below the fold; hero SVG inline.
- Google Maps iframe injected only on user click (saves ~1MB+ on mobile).
- No layout-shifting web-font fallback: system font stack declared before webfonts.
- Target: fully usable on a 3G-class connection; no console errors; no horizontal overflow at 360px.

## 11. Accessibility requirements (WCAG 2.1 AA)

- Landmarks (header/nav/main/footer), skip link, single H1 per page.
- Contrast ≥ 4.5:1 for text (ink on white passes; accent used decoratively or at ≥3:1 for large text only).
- Drawer/accordion/lightbox ARIA states + keyboard operation + focus return; ESC closes overlays.
- Form: label-for every input, inline error text linked via `aria-describedby`, no color-only errors.
- `prefers-reduced-motion` disables AOS/reveals/smooth-scroll; touch targets ≥ 44px; viewport allows pinch-zoom (no maximum-scale).

## 12. Content requirements

- **Bilingual parity:** every user-visible string exists in BN and EN dictionaries; medical meaning preserved; Bangla lay terms included (পাইলস/বোসা, ফিসার/মলদ্বারে চিড়া, ফিস্টুলা/ভগন্দর).
- Medical copy adapted from `research/medical_content_reference.md` (NHS/Mayo/NIDDK/Cleveland/Healthline-grounded), preserving hedge wording; shared red-flag box on every condition page; education disclaimer on patient-facing medical content: "general education, not a diagnosis; only a doctor's examination can identify the cause."
- Clinic-attributed claims limited to verified sources (founding date, founder, positioning points from cover art, education posts).
- Tone: calm, respectful, privacy-conscious; encourages consultation; never shames; never presents bleeding as "normal".

## 13. Testing & acceptance criteria

- **QA script** (`qa.mjs`) green: every `data-i18n` key resolves in BN **and** EN; all internal links/assets resolve; forms structured correctly; no orphan fragments.
- **Playwright (Chromium)** at 1440 / 1024 / 768 / 390 / 360: no horizontal overflow; drawer + language toggle + accordion + lightbox + click-to-load map + form validation work; console error-free; `tel:`/`mailto:` hrefs correct; back-to-top; sticky bars.
- Screenshots captured per viewport for the report; all failures fixed and re-tested.

## 14. Out of scope / pending client inputs

1. WhatsApp click-to-chat (number unverified) — add after client confirms.
2. Doctor photograph + degrees/BMDC registration — publish after client confirmation (page keeps graceful placeholder).
3. Real clinic interior/exterior photos — gallery placeholders until provided.
4. Exact street address + postcode resolution (1212 vs 1229) and chamber hours — schema uses locality-level address until confirmed.
5. Production deployment (domain currently an empty WordPress install) — **requires explicit client approval**; site ships as static files ready to upload.
