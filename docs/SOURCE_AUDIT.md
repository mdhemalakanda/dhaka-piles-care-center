# Source Audit — Business Verification Synthesis

## Dhaka Piles Care Center (formerly Baridhara Piles Cure Center)

| | |
|---|---|
| **Project** | Premium static website demo (HTML/CSS/JS/jQuery, Bangla-first with EN toggle) |
| **Clinic** | Dhaka Piles Care Center — anorectal/piles clinic, North Baridhara, Dhaka, Bangladesh |
| **Audit date** | 2026-11-08 — all fetches, downloads, and media checks were done on this date |
| **Compiled from** | `research/facebook_audit.md`, `research/google_maps_audit.md`, plus the lead's direct visual verification of downloaded media (`assets/images/facebook-raw/`, `assets/images/brand/`) |
| **Legend** | **VERIFIED** = seen directly on a fetched page, a downloaded file, or visually inspected. **UNVERIFIED** = search-engine snippet or secondhand source only. |

This file is a synthesis for decision-making, not a copy of the raw audits. Fetch-by-fetch detail, including every blocked route, lives in the two upstream research files.

---

## 1. Scope & method

**Sources investigated (all on 2026-11-08):**

| Source | What was checked | Outcome |
|---|---|---|
| Facebook page `facebook.com/dhakapilescarecenter` (main, /about, /photos, /videos, /reviews, 6 post permalinks) | Identity, contact, hours, posts, media | Readable logged-out; posts feed and community tabs login-gated |
| Google Maps listing ("Baridhara Piles Cure Center", feature ID `/g/11g1fxm5rb`) | Listing metadata | **Blocked** — Maps serves data only to JS browsers; place URL, CID URL, embeds, and preview endpoints all returned shells/consent walls. Nothing bypassed |
| Clinic's own domain `dhakapilescarecenter.com` | Website status | Fetched — empty default WordPress install, no clinic content |
| `doctors.inverseai.com` directory (center page + doctor page) | Independent corroboration of name, address, phone, doctor | Fetched in full |
| OpenStreetMap Nominatim reverse geocode of the listing pin | Neighbourhood of coordinates 23.8135153, 90.4183877 | Fetched — Nadda / Joar Sahara, Dhaka 1229 |
| TrustAnalyser | Third-party trust profile for the domain | 404 — no record exists |
| Web searches (English + Bangla), Quora/Scribd snippets | Location/credential claims | Snippets only — treated as UNVERIFIED |

**Method constraints (honesty):**
- Logged-out public access only. Facebook login walls, Google consent/automation walls, DuckDuckGo CAPTCHA, and Quora's bot wall were **not bypassed**.
- No Google user reviews or user photos were scraped or copied (out of scope by policy, and technically blocked anyway).
- Every published fact on the website must trace to a VERIFIED row here or in the upstream audits.
- Media: the five key assets listed in Section 5 were downloaded and **visually inspected by the lead** on 2026-11-08; the remaining grid thumbnails are inventoried but not individually reviewed.

---

## 2. Business identity verification

**Question:** is the Facebook page "Dhaka Piles Care Center" the same business as the Google Maps listing "Baridhara Piles Cure Center"?

**Evidence chain (each signal independently fetched):**

| # | Signal | Google-side entity | Facebook page | Match |
|---|---|---|---|---|
| 1 | **Former-name statement** | Listing carries the name "Baridhara Piles Cure Center" (VERIFIED in the Maps URL) | Page intro states verbatim: *"Former name of Dhaka Piles Care Center was Baridhara piles Cure Center."* (VERIFIED) | Yes — the page itself declares the old name |
| 2 | **Phone match** | Appointment number +8801716528757 published on the center's directory pages (VERIFIED, doctors.inverseai.com) | Mobile +880 1716-528757 (VERIFIED, FB main + about) | Yes — exact match |
| 3 | **Founder match** | Dr Morjina Akter is the only doctor listed at "Baridhara Piles Cure Center"; bio mirrors the FB intro wording (VERIFIED, directory) | "Established in October 2003 by Dr. Morjina Akhter" (VERIFIED, intro); signs posts "সম্পাদনা: ডা: মর্জিনা আক্তার" | Yes |
| 4 | **Geography match** | Pin 23.8135153, 90.4183877 reverse-geocodes to Nadda/Joar Sahara, Dhaka **1229** (VERIFIED, OSM); directory says "North Baridhara (near Norda Bus Stand), Gulshan, Dhaka-**1212**" (VERIFIED) | Address field "Dhaka, Bangladesh, **1229**" (VERIFIED) | Yes — adjacent postal codes across the same Gulshan/Baridhara-North–Nadda seam |
| 5 | Historical corroboration | 2013 shareholder list links "Baridhara Piles Cure Center" with Dr. Morjina Akhter at KA-54/1, Nodda (UNVERIFIED — snippet only) | Same doctor, same lineage | Consistent |

**Verdict: SAME BUSINESS — high confidence.** The Facebook page "Dhaka Piles Care Center" is the renamed continuation of the "Baridhara Piles Cure Center" Google listing.

**Residual caveats (must stay visible):**
1. The live Google listing could not be opened, so it is **UNVERIFIED whether Google now displays the new name** or still the old one. The URL slug still carries the old name, and search indexes still surface the old name.
2. One Quora-embedded listing snapshot (UNVERIFIED) showed a "Closed" status and postcode 1209 — possibly stale or wrong. A manual browser check of the live listing is required before publishing anything about its current status.
3. Similarly named businesses exist nearby and must never be conflated with this one: "Piles Clinic" (House 8, Road 8, Baridhara Block J), "Piles Cure Centre Dhaka" (Kamalapur), "Health & Wellness / Piles Care BD" (Uttara, pilescarebd.com — confirmed a DIFFERENT business by direct fetch), and Baridhara General Hospital Ltd (shares the Nadda address area).

**Applied naming decision for the website:** primary name **Dhaka Piles Care Center**; Bangla brand name from the official logo **ঢাকা পাইলস কেয়ার সেন্টার**; `alternateName` **Baridhara Piles Cure Center** (for search engines and older patients who know the old name).

---

## 3. Verified business facts

| Field | Value | Status | Source |
|---|---|---|---|
| Primary name | Dhaka Piles Care Center | VERIFIED | Facebook page name + intro |
| Bangla brand name | ঢাকা পাইলস কেয়ার সেন্টার | VERIFIED (read from the official logo artwork) | Logo, visually inspected 2026-11-08 |
| Former name | Baridhara Piles Cure Center | VERIFIED | Page intro (verbatim statement); Google listing name in URL |
| Founded | October 2003 | VERIFIED | Page intro |
| Founder | Dr. Morjina Akhter — anorectal-disease specialist; physician of piles and fistula (page's own wording) | VERIFIED (role only — see §4 for credentials) | Page intro + directory bio |
| Category | Medical service (FB) / medical_center (Google URL payload) | VERIFIED | FB page; Maps URL |
| Facebook page | `facebook.com/dhakapilescarecenter` · page ID 100051726284946 · 551 followers · "4 were here" | VERIFIED | FB main + about |
| Phone | **+880 1716-528757** | VERIFIED in two independent fetched sources | FB about; doctors.inverseai.com |
| WhatsApp | Not listed anywhere | VERIFIED (absence) | FB main + about |
| Email | dhakapilescarecenter@gmail.com | VERIFIED | FB main + about |
| Website status | dhakapilescarecenter.com — **empty default WordPress 6.8.2 install** ("Hello world!", Jun 20, 2025). Effectively **no website exists**. TrustAnalyser: no record (404). | VERIFIED | Direct fetch |
| Address wording (for publication) | **"North Baridhara (near Norda Bus Stand), Dhaka"** — from the VERIFIED directory chamber block | VERIFIED (area wording only — no street address exists anywhere) | doctors.inverseai.com |
| Postcode | Conflict: **1229** (FB address field + OSM pin) vs **1212** (directory Gulshan-side address) — adjacent codes across the Nadda/Baridhara-North seam | VERIFIED conflict — resolution pending client confirmation | FB; OSM; directory |
| Map pin | 23.8135153, 90.4183877 · feature `/g/11g1fxm5rb` · CID 2606856629915461837 (computed from URL hex; end-to-end CID resolution UNVERIFIED — Google blocked) | VERIFIED (coordinates in URL) | Maps URL; OSM |
| Hours | Facebook: **"Always open"** — a self-set field, not real chamber hours. Google hours: UNVERIFIED (blocked). **No per-day schedule published anywhere.** | VERIFIED (FB field) / UNVERIFIED (Google) | FB about |
| Facebook rating | "Not yet rated (2 reviews)" — review text login-gated | VERIFIED | FB main + about |
| Google rating | UNVERIFIED — see §6 | UNVERIFIED | — |
| Service focus | Anorectal diseases — piles and fistula; education posts cover piles/fissure awareness and colonoscopy advice. **No procedure list or prices published.** | VERIFIED (focus) | Page intro + posts |
| Nationwide reach | FB service area covers all 8 divisions (patient-origin signal, not a branch network) | VERIFIED | FB about |

---

## 4. Explicitly NOT verified — must not be published

| Claim | Status | Why it must not be published | What would unlock it |
|---|---|---|---|
| Doctor degrees ("MBBS, FCPS (Surgery) Gold medalist, MS (Colorectal…)") | UNVERIFIED — directory listing snippet; identity match to this clinic's founder unconfirmed | Publishing wrong credentials for a named doctor is a serious harm; the FB page itself publishes **no degrees at all** | Client supplies degrees + BMDC registration + consent |
| BMDC registration number | Not published anywhere | Same as above | Client confirmation |
| Google rating figures ("3.9 stars / 54 reviews") | UNVERIFIED — single Quora-embedded snapshot, possibly stale; Google itself was unreachable | Unverifiable third-party number on a medical business = liability; policy forbids | Manual browser read of the live listing + client confirmation |
| Any star rating on the website | Policy decision | No verified rating exists to display | See §6 |
| WhatsApp number | Not listed on any verified source | A wrong WhatsApp number silently drops patient messages | Client provides and confirms the number |
| Per-day opening hours | Unknown — FB "Always open" is a self-set placeholder | Publishing invented hours makes patients travel to a closed chamber | Client supplies weekly schedule |
| Street address (house/road/holding) | Only area wording verified; snippets claim "House 48, Rd No 9A, Dhaka 1209" and "KA-54/1, Nodda" — both UNVERIFIED and mutually inconsistent | Wrong address sends patients to the wrong door; several name-confusable clinics sit nearby | Client confirmation + map-pin cross-check |
| Prices / fee list | Not published anywhere | Invented prices for medical services are unacceptable | Client supplies price list |
| Success-rate, "cure", "painless", "permanent" claims | Not published anywhere; content rules forbid them | Medical-content standard: hedged language only, no percentages, conditions can recur | Never — unless client supplies verifiable, reviewable evidence |
| Dr. Morjina Akhter's affiliation with Islami Bank Hospital, Mirpur | UNVERIFIED snippet | Unconfirmed second appointment location | Client confirmation |
| "25 years' experience" (from the clinic's own cover-art seal) | VERIFIED as printed on the artwork, but inconsistent with the VERIFIED Oct-2003 founding (23 years in 2026) | Internally contradictory longevity claims undermine trust | Client confirms whether the seal counts the doctor's pre-2003 experience; site copy standardises on **"Since 2003"** meanwhile |

---

## 5. Content & media inventory available for the website

### 5.1 Downloaded and visually verified assets (local files, checked 2026-11-08)

| Local file | Dimensions | What it is | Status |
|---|---|---|---|
| `assets/images/brand/logo-dp.png` | 720×720 PNG (204 KB) | **Official logo:** sky-blue circular ring, "DP" monogram (sky-blue fill, dark-navy outline), Bangla wordmark **ঢাকা পাইলস কেয়ার সেন্টার** in navy beneath | Visually verified (lead) |
| `assets/images/brand/logo-dp-240.png`, `-64.png` | 240 / 64 px | Web-ready derivatives of the logo | Derived |
| `assets/images/facebook-raw/profile_thumb` (+ `profile_526`) | 720×720 / 526×526 JPEG | Facebook profile-picture renders (FB master 2048 px; set Sep 22, 2026, 9:00 AM) — same artwork as the logo | Visually verified |
| `assets/images/facebook-raw/cover_3376` (+ `cover_thumb`) | 1468×540 JPEG (FB render 3376×1242, same 2.72:1 aspect) | **Cover artwork** (set Sep 22, 2026, 8:57 AM): DP monogram + Bangla headline + the clinic's three positioning bullets + a red "২৫ বৎসর অভিজ্ঞতা" seal + a medical illustration of the anorectal region | Visually verified |
| `assets/images/facebook-raw/g1_thumb` | 206×206 JPEG | Anatomical illustration of internal/external haemorrhoids (education artwork, too small for feature use) | Visually verified |
| `assets/images/facebook-raw/g3_thumb` | 206×206 PNG | Compact **"DP" letter-mark with the English wordmark "DHAKA PILES CURE CENTER"** — the English logo variant (usable at ≤200px display; staged as `media/logo-en-206.png`) | Visually verified |
| `assets/images/facebook-raw/g2_738` | 738×440 JPEG | **Education graphic: 3-D anatomical render** (blue human figure, colon/lower-GI highlighted) — companion image of the anorectal-diseases post (FB media 173964829_4353200371375795) | Visually verified |
| `assets/images/facebook-raw/g7_720` | 720×483 JPEG | **Education graphic: diet/foods montage** (turmeric, almonds, onion, tomato, watermelon, garlic, carrot) — companion of the Apr 29, 2019 foods article (FB media 58775374_2552175608144956) | Visually verified |
| `facebook-raw/g5_thumb` (PNG cover crop), `g4_thumb` (JPEG cover crop) | 206×206 | Crops of the official cover artwork | Visually verified — duplicates, too small for feature use |
| `facebook-raw/g6_thumb` | 206×206 JPEG | Clinic's Bangla **service-list education graphic** signed "ডাঃ মর্জিনা আক্তার" — fine print illegible at 206px | Visually reviewed — represented on the site as a Facebook **link card**, never as an embedded image |

### 5.2 The clinic's own published positioning points (usable as website claims, because the clinic published them)

From the cover artwork (verbatim Bangla, with English gloss) and the page intro:

1. **"বিনা অপারেশনে পাইলস এর নিরাপদ ও নিশ্চিত চিকিৎসা"** — safe and reliable treatment of piles **without operation** (site framing: non-surgical, office-based treatment where possible / treatment without admission where possible).
2. **"মহিলা ও পুরুষ বিশেষজ্ঞ ডাক্তার"** — specialist doctor for **women and men**.
3. **"আধুনিক পদ্ধতিতে চিকিৎসা"** — treatment by **modern methods**.
4. **"২৫ বৎসর অভিজ্ঞতা"** seal + intro-verified founding **October 2003** → website longevity claim standardised as **"Since 2003"** (see §4 on the 25-year figure).

These four points anchor the hero, the "why choose us" band, and meta descriptions — they are the only marketing claims that are both on-brand and verified.

### 5.3 Education posts (content the clinic itself published — reference material for condition pages)

| Post | Date as shown | Topic | URL |
|---|---|---|---|
| 4353201971375635 | Not visible (login-gated) | Piles misconception + enumeration of anorectal diseases (পাইলস/অর্শ-গেজ, অ্যানাল ফিসার, …) | `facebook.com/dhakapilescarecenter/posts/4353201971375635` |
| 3428285830533925 | Not visible (login-gated) | "পাইলস রোগীদের জন্য একটি জরুরী পরামর্শ" — don't fear colonoscopy; don't self-medicate from pharmacies | `facebook.com/dhakapilescarecenter/posts/3428285830533925` |
| photos/4312151375480695 | Apr 4, 2021 | Photo post (PNG graphic); 4 reactions, 2 Bangla comments | `facebook.com/dhakapilescarecenter/photos/4312151375480695` |
| 2649213035107879 | Jun 22, 2019 | Fenugreek (মেথি) health education | `facebook.com/dhakapilescarecenter/posts/2649213035107879` |
| 2552176114811572 | Apr 29, 2019 | Risk-reducing foods article — signed "সম্পাদনা: ডা: মর্জিনা আক্তার" | `facebook.com/dhakapilescarecenter/posts/2552176114811572` |
| 2524348877594296 | Apr 11, 2019 | Diabetes: what to do after diagnosis | `facebook.com/dhakapilescarecenter/posts/2524348877594296` |

Language pattern: **all six retrievable content posts are in Bangla**; the page's About/intro is English. This confirms the Bangla-first website content decision with an English toggle.

### 5.4 Reuse notes

- The logo, cover artwork, and post graphics were published by the clinic itself (client-owned), so reuse on the client's own website is legitimate.
- The anatomical render and foods montage may themselves be stock imagery the clinic once downloaded — for the premium build, prefer **re-created original graphics in the site's own palette**, with the FB images as visual reference.
- Remaining grid photos should be reviewed in a logged-in session before any clinic-photo use; quality is unknown.

---

## 6. Reviews situation and policy

**Situation.**
- Facebook: **"Not yet rated (2 reviews)"** — the review texts are login-gated; only the summary line is public (VERIFIED).
- Google: the listing was unreachable; the only figure anywhere is **"3.9 (54)"** from a Quora-embedded snapshot (UNVERIFIED, possibly stale, inconsistent postcode in the same snapshot). Google review themes: none collected (blocked + no-scraping rule).

**Policy (decided, binding on the build):**
1. **No scraped or copied Google reviews** — never, in any form.
2. **No fabricated testimonials** — no invented names, photos, or quotes.
3. **Link-out instead:** the site links to the Google Maps listing (pin 23.8135153, 90.4183877) and the Facebook page, letting patients read real reviews where they live.
4. **No star numbers or rating badges displayed anywhere** on the site, because the Google rating is UNVERIFIED. Template patterns featuring floating "5.0 rating" chips (e.g. Doccure) are explicitly rejected for this build.
5. If the client later supplies review screenshots and written consent, text-only anonymised quotes (first name + city) may be reconsidered as a phase-2 enhancement.

---

## 7. Gaps, limitations, and required client confirmations

1. **Full street address + correct postcode (1212 vs 1229).** Directory wording verified for the area only. → Ask client for the exact address line and the postcode they want published; cross-check against the map pin.
2. **Google listing name status.** Unverified whether Google shows "Dhaka Piles Care Center" or the old name. → Manual browser check; if still old, recommend the client update the listing (site uses primary/alternateName schema regardless).
3. **Live-listing health.** The stale "Closed / 1209" snapshot must be resolved (open? relocated? stale?) before any status-related copy. → Manual browser check.
4. **Doctor credentials.** Degrees, BMDC registration, and photo consent for the doctor-profile section. → Client supplies documents; nothing publishes until then.
5. **WhatsApp.** Not verified anywhere; site ships phone (tel:) + email (mailto:) only — the shipped mobile action bar is **Call · Email · Book**. → Ask whether a WhatsApp Business number exists; if confirmed, the Email slot can be swapped for a wa.me link.
6. **Per-day chamber hours.** "Always open" is unusable. → Client supplies the weekly visiting-hours grid (the site's timetable section is designed for it).
7. **Longevity wording.** "২৫ বৎসর অভিজ্ঞতা" seal vs "since October 2003" intro. → Client confirms; site copy says "Since 2003" until then.
8. **Treatment-claim scope.** "Treatment without operation" is published by the clinic, but the specific office procedures offered (e.g. band ligation, sclerotherapy) are not verified. → Client confirms the procedure list before any services grid goes beyond the four verified positioning points.
9. **Prices.** None published. → Client decides whether to include a fee range; default build omits prices.
10. **Media rights and quality.** Confirm reuse of FB-published graphics (may be stock), supply higher-resolution originals of the logo/cover if available, and provide any clinic photos. → Client + logged-in review of the photo grid.
11. **Domain & hosting.** dhakapilescarecenter.com is an empty WordPress install the client presumably controls. → Confirm access and whether the new static site will replace it. **No deployment happens without explicit client approval.**
12. **Disambiguation sign-off.** Walk the client through the similarly named clinics (Block J "Piles Clinic", Kamalapur "Piles Cure Centre", pilescarebd.com Uttara, Baridhara General Hospital) to confirm none of their directory data leaked into our facts. All facts here are already from this business's own sources; this is a final belt-and-braces check.

---

*Upstream files: `research/facebook_audit.md` (full Facebook fetch log), `research/google_maps_audit.md` (full Google/directory fetch log), `research/medical_content_reference.md` (copy standards: hedged language, red-flag box, Bangla glossary), `research/design_benchmarks.md`, `research/themeforest_analysis.md` (see `docs/THEME_DECISION.md`).*

## Post-retrieval addition (2026-11-08)

`media/logo-en-old.png` — 500×500 PNG retrieved from photo permalink `facebook.com/dhakapilescarecenter/photos/4312151375480695` (post of April 4, 2021): the full-size English logo variant, reading **“DHAKA PILES CURE CENTER”** — the clinic's earlier English name (current page name uses “Care”). Supersedes `media/logo-en-206.png` for display; the 206px file remains on disk only as archive. Visually verified.
