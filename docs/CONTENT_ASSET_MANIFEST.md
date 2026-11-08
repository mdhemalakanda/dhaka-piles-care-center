# CONTENT_ASSET_MANIFEST.md — Dhaka Piles Care Center

Date: 2026-11-08. All Facebook-derived assets were captured from the clinic's **own public Facebook page** (logged-out access, no protections bypassed) and verified visually. Reuse on the clinic's own website is low-risk but a final client sign-off is recommended for every item marked below.

## 1. Brand assets (in `assets/images/brand/`)

| File | Source | Spec | Used at | Permission status |
|---|---|---|---|---|
| `logo-dp.png` | FB profile picture (set 2026-09-22), CDN `795683782_1774691974264995`, 720px | 720×720 PNG | master copy | Clinic's own logo — client sign-off recommended |
| `logo-dp-160.png` / `logo-dp-96.png` | derived | PNG | header / footer | derived |
| `logo-dp-240.png`, `logo-dp-64.png` | derived | PNG | about page, misc | derived |
| `favicon-32.png` | derived | 32×32 PNG | favicon | derived |
| `apple-touch-icon.png` | derived | 180×180 PNG | iOS icon | derived |
| `og-image.jpg` | derived from official FB cover artwork | 1200×630 JPEG | Open Graph / Twitter card | derived from clinic-owned art — sign-off recommended |

**Logo content (verified visually):** sky-blue circle, "DP" monogram (sky blue fill, navy outline), Bangla name **ঢাকা পাইলস কেয়ার সেন্টার**. Brand anchor colors sampled: `#46C3EB` accent blue on white; navy ink `#10233F` (outline/text).

## 2. Media assets (in `assets/images/media/`)

| File | Source (original FB post) | Spec | Website use | Status |
|---|---|---|---|---|
| `cover-banner.webp` | Cover photo (set 2026-09-22), CDN `796527976_1774689247598601` | 1200×~441 WebP | gallery; about brand strip | clinic-owned art — sign-off recommended |
| `education-anorectal.webp` + `-480.webp` | Education post "পাইল্‌সঃ যে ভুলটি আমরা সচরাচর…" — https://www.facebook.com/dhakapilescarecenter/posts/4353201971375635 | 738×440 / 480 WebP | treatments overview illustration | clinic-published education art — sign-off recommended |
| `education-foods.webp` | Education post "স্তন ক্যান্সারের ঝুঁকি প্রতিরোধক খাবার" (Apr 29, 2019) — https://www.facebook.com/dhakapilescarecenter/posts/2552176114811572 | 720×483 WebP | patient-info education card | clinic-published — sign-off recommended |
| English logo variant | Page photo grid (Sep 2021-era PNG), CDN `168995425_4312151378814028`, "DHAKA PILES CURE CENTER" | 206×206 PNG (native limit) | gallery card only (small size) | archived in `facebook-raw/g3_thumb` — include at ≤200px display |

## 3. Original assets archive (`assets/images/facebook-raw/` — NOT copied into the built site)

Held for reference/provenance; thumbnails only (full-size renditions are login-gated on Facebook — documented limitation).

| File | What it shows (verified visually) | Size | Why not used |
|---|---|---|---|
| `profile_thumb` | Official Bangla logo | 720×720 | promoted to `brand/` |
| `cover_thumb` / `cover_3376` | Official cover artwork: name + 3 positioning bullets + "২৫ বছরের অভিজ্ঞতা" badge + anatomical illustration | 960×353 / 1468×540 | promoted to `media/` (WebP) + `og-image.jpg` |
| `g1_thumb` | Internal/external haemorrhoids anatomical illustration | 206×206 | too small for feature use |
| `g2_thumb` / `g2_738` | Blue anatomical render, rectum highlighted | 206 / 738×440 | promoted to `media/` |
| `g3_thumb` | English logo variant | 206×206 | gallery card at native size |
| `g4_thumb` / `g5_thumb` | Crops of cover artwork | 206×206 | duplicates, too small |
| `g6_thumb` | Clinic's Bangla service-list education graphic signed ডাঃ মর্জিনা আক্তার | 206×206 | text illegible at thumbnail size — represented as a link card, not embedded |
| `g7_thumb` / `g7_720` | Foods photo (breast-cancer nutrition article) | 160 / 720×483 | promoted to `media/` |

## 4. Original artwork created for the site (no licence risk)

- Hero illustration: original inline SVG (abstract, dignity-preserving, brand-colored) — authored for this build.
- All icons: inline SVG (stroke style, 24px grid) — no third-party icon fonts.
- Favicon set, OG image: derivatives listed above.

## 5. Vendor libraries (local, in `assets/vendor/`)

| Library | Version | File | Licence |
|---|---|---|---|
| jQuery | 3.7.1 | `vendor/js/jquery.min.js` | MIT |
| Magnific Popup | 1.1.0 | `vendor/js/jquery.magnific-popup.min.js`, `vendor/css/magnific-popup.css` | MIT |
| AOS | 2.3.4 | `vendor/js/aos.js`, `vendor/css/aos.css` | MIT |
| Slick Carousel | 1.8.1 | `vendor/js/slick.min.js`, `vendor/css/slick.css` | MIT — **included but used only if a slider lands; otherwise dropped from pages** |

## 6. Fonts (self-hosted, `assets/fonts/`)

- **Hind Siliguri** 300/400/500/600/700 — Bengali + Latin subsets (Google Fonts, OFL) — `fonts-hind-siliguri.css`
- **Manrope** 400–800 — Latin subsets (Google Fonts, OFL) — `fonts-manrope.css`
- Combined `fonts.css`; 45 woff2 files under `fonts/files/`; zero external font requests.

## 7. Third-party embeds / links (no content copied)

- Google Maps embed: iframe injected on click, query = verified pin `23.8135153,90.4183877`.
- Directions deep link: `https://www.google.com/maps/dir/?api=1&destination=23.8135153,90.4183877`.
- Google reviews link: place search URL for "Baridhara Piles Cure Center" (listing still uses former name).
- Facebook: page URL + individual education-post permalinks (link cards only).
- **Not used:** Google Places API (no key/billing approved), copied review text, scraped Maps photos, `pilescarebd.com` (different clinic — flagged to avoid mislinking).

## 8. Assets pending client approval / input

1. Sign-off on reuse of clinic's own FB art (logo, cover, education graphics).
2. Doctor photograph + verified degrees/BMDC number.
3. Clinic interior/exterior photographs (gallery placeholders until then).
4. WhatsApp number (to enable click-to-chat).
5. Exact street address + postcode (1212 vs 1229 conflict) and weekly chamber hours.
6. Facebook cover's "২৫ বছর" badge wording is intentionally NOT reproduced (founding date Oct 2003 used instead).
