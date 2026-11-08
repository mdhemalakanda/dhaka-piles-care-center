# Dhaka Piles Care Center — bilingual clinic website demo

A complete, premium, bilingual (**বাংলা default + English**) static frontend for
**Dhaka Piles Care Center** (formerly *Baridhara Piles Cure Center*), North Baridhara,
Dhaka — built as a client proposal demo. HTML/CSS/JS + jQuery, zero backend,
zero build dependencies beyond Node's standard library.

## Run it

```bash
node scripts/build.mjs      # compose site/ from templates/ + src/pages/ + src/i18n/
node scripts/qa.mjs         # i18n coverage, link/asset integrity, content-policy checks
cd site && python3 -m http.server 8080   # open http://localhost:8080
```

Pages also work from `file://` (classic scripts, relative paths).

## Highlights

- **Bangla-first** content with an instant EN/বাংলা toggle (persisted, `<html lang>` aware,
  meta description + title swap), ~350 translation keys in two dictionaries.
- **Verified-facts-only content**: founded Oct 2003 by Dr. Morjina Akhter; phone
  +880 1716-528757; email; North Baridhara (near Norda Bus Stand). No invented credentials,
  testimonials, ratings, prices, or hours — gaps are documented, not faked.
- Clinic's **own logo, cover artwork and education graphics** (captured from its public
  Facebook page, visually verified) + original SVG artwork.
- **Appointment rail**: topbar → sticky header CTA → validated enquiry form that composes a
  pre-filled email (no fake submit, no data stored) → mobile sticky Call · Email · Book bar.
- **Click-to-load Google Map** (saves ~1 MB on mobile), directions deep-link, reviews link-out
  policy (no copied review content).
- SEO: per-page Bangla titles/descriptions, canonical set, Open Graph, JSON-LD
  (MedicalClinic + Person + MedicalWebPage + BreadcrumbList + WebSite), sitemap.xml, robots.txt.
- Accessibility: skip link, ARIA drawer/accordion, focus-visible, reduced-motion support,
  44px touch targets, no pinch-zoom blocking.
- Performance: WebP images, self-hosted woff2 fonts (Hind Siliguri + Manrope), deferred JS,
  explicit image dimensions (no CLS).

## Project layout

```
templates/            shared head/header/footer/scripts partials
src/pages/            page fragments (content sections only)
src/i18n/{bn,en}/     translation dictionaries (flat JSON, merged at build)
src/schema/           per-page JSON-LD extras (breadcrumbs, Person, MedicalWebPage)
assets/css/style.css  design system (logo-anchored palette, tokens, components)
assets/js/i18n.js     language engine (data-i18n attributes)
assets/js/main.js     drawer, accordion, lightbox, click-to-load map, form → mailto
assets/images/brand/  official logo set + OG image (from the clinic's Facebook page)
assets/images/media/  verified clinic artwork (WebP)
assets/vendor/        jQuery 3.7.1, Magnific Popup 1.1.0, AOS 2.3.4 (local copies)
assets/fonts/         self-hosted Hind Siliguri + Manrope (woff2)
scripts/build.mjs     static site generator → site/
scripts/qa.mjs        QA audit (run after build; exit 1 on failure)
site/                 BUILT OUTPUT — serve this
docs/                 SOURCE_AUDIT · THEME_DECISION · PROJECT_REQUIREMENTS ·
                      CONTENT_ASSET_MANIFEST · FRONTEND_CONTRACT
research/             raw research notes (Facebook audit, Google Maps audit, benchmarks,
                      medical content reference, ThemeForest analysis)
```

## Pending client confirmations (documented in docs/SOURCE_AUDIT.md §7)

WhatsApp number · doctor photo + degrees · clinic photographs · exact street address &
postcode (1212 vs 1229) · weekly chamber hours · deployment approval (the clinic's domain is
currently an empty WordPress install — nothing is deployed from this demo).

## Deploy (GitHub Pages)

The build output in `site/` is published from a `gh-pages` branch:

```
node scripts/build.mjs && node scripts/qa.mjs
cd site
git init -b gh-pages && git add -A && git commit -m "Publish built site"
git remote add origin https://github.com/mdhemalakanda/dhaka-piles-care-center.git
git push --force origin gh-pages
```
