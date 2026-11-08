# Facebook Page Audit — Dhaka Piles Care Center

- **Target:** https://www.facebook.com/dhakapilescarecenter/
- **Audit date:** 2026-11-08 (all fetches done on this date)
- **Method:** Public (logged-out) fetching via web reader + web search. No login walls, CAPTCHAs, or anti-scraping protections were bypassed.
- **Legend:** **VERIFIED** = seen directly on a fetched page. **UNVERIFIED** = search-engine snippet or secondhand source only.

---

## 1. Access summary (what was accessible vs blocked)

### Accessible (fetched successfully, logged out)

| URL | Result |
|---|---|
| https://www.facebook.com/dhakapilescarecenter/ | Full public landing view: intro, category, phone, email, website, hours, rating, follower count, latest timeline item, profile + cover photo URLs |
| https://www.facebook.com/dhakapilescarecenter/about | Full "Contact and basic info": address field, service area, mobile, email, website, rating, hours, category |
| https://www.facebook.com/dhakapilescarecenter/photos | Public photos grid (8 thumbnails with CDN URLs) + albums header |
| https://www.facebook.com/dhakapilescarecenter/videos | Loaded; showed **"No videos found"** |
| https://www.facebook.com/dhakapilescarecenter/posts/2649213035107879 | Full post text + date (Jun 22, 2019) |
| https://www.facebook.com/dhakapilescarecenter/posts/2524348877594296 | Full post text + date (Apr 11, 2019) |
| https://www.facebook.com/dhakapilescarecenter/posts/2552176114811572 | Full post text + date (Apr 29, 2019) + attached image URL |
| https://www.facebook.com/dhakapilescarecenter/posts/4353201971375635 | Partial: opening Bangla text via `og:description`; body/login-gated |
| https://www.facebook.com/dhakapilescarecenter/posts/3428285830533925 | Partial: opening Bangla text via `og:description`; date not visible |
| https://www.facebook.com/dhakapilescarecenter/photos/4312151375480695 | Photo post permalink: date (Apr 4, 2021), media PNG, reactions (4), 2 comments incl. one visible Bangla comment |
| http://dhakapilescarecenter.com/ (website linked from the FB page) | Loads, but is an empty default WordPress install |
| https://www.trustanalyser.com/report/dhakapilescarecenter.com | 404 — no TrustAnalyser record exists for the clinic's domain |

### Blocked / partially blocked (no bypass attempted)

| URL / action | Blocker |
|---|---|
| https://www.facebook.com/dhakapilescarecenter/posts (posts feed tab) | Redirects to Facebook login when fetched logged-out |
| https://www.facebook.com/dhakapilescarecenter/community/ | Redirects to Facebook login |
| https://www.facebook.com/dhakapilescarecenter/reviews | Page shell loads but review content is login-gated; only the "Not yet rated (2 reviews)" summary from the main/about pages is public |
| Photo permalink via plain HTTP fetcher (e.g. /photos/2594556613906855 via WebFetch) | Login wall (site shell only) |
| mbasic.facebook.com/dhakapilescarecenter | Repeated network/500 errors from the fetch tool; not retrievable |
| m.facebook.com variant | Not directly retrievable (only appears as the page's declared mobile alternate URL) |
| Full text of posts 3428285830533925 and 4353201971375635 | Only `og:description` openings retrievable; remainder login-gated |

---

## 2. Page identity

| Field | Value | Status | Source |
|---|---|---|---|
| Exact page name | **Dhaka Piles Care Center** | VERIFIED | https://www.facebook.com/dhakapilescarecenter/ |
| Username / handle | `dhakapilescarecenter` | VERIFIED | URL + og:url on all fetched pages |
| Facebook Page ID | 100051726284946 | VERIFIED | `fb://profile/100051726284946` app metadata on main/about pages |
| Category | **Medical service** | VERIFIED | main page ("Page · Medical service") + About → Categories |
| Followers | **551** | VERIFIED | main page header; og:description "551 followers" |
| Following | 1 | VERIFIED | main page header |
| Check-ins | "4 were here" | VERIFIED | og:description, main page |
| Rating | **"Not yet rated (2 reviews)"** | VERIFIED | main page intro block + About → Basic info |
| Hours setting | **"Always open"** | VERIFIED | main page + About → Hours |
| Page locale / interface | en_US, English UI | VERIFIED | og:locale / lang metadata |
| Page creation date | Not publicly shown (earliest retrieved post: Apr 11, 2019) | VERIFIED (absence) | all fetched pages |

### Intro / About text (as written on the page — in English, not Bangla)

> "Dhaka Piles Care Center was established in October 2003 by Dr. Morjina Akhter. She is basically a medical expert on in Anorectal diseases and physician of piles and fistula. Former name of Dhaka Piles Care Center was Baridhara piles Cure Center."

- Status: VERIFIED — https://www.facebook.com/dhakapilescarecenter/ (Intro section; same text in og:description).
- English translation: n/a (already English; note the grammar errors are in the original, e.g. "expert on in Anorectal diseases", "Baridhara piles Cure Center").
- No separate Bangla version of the intro is published on the page.

---

## 3. Contact & location

| Field | Value | Status | Source |
|---|---|---|---|
| Address (as listed on FB) | **"Dhaka, Bangladesh, 1229"** (city + country + postcode; **no street address given**) | VERIFIED | About page → Contact info → Address |
| Service area | Rangpur, Rangpur Division; Khulna, Khulna Division; Rajshahi, Rajshahi Division; Chittagong, Chittagong Division; Dhaka, Dhaka Division; Dinajpur, Rangpur Division; Sylhet, Sylhet Division; Barisal, Barisal Division | VERIFIED | About page → Service area |
| Phone (Mobile) | **+880 1716-528757** | VERIFIED | main page + About → Mobile |
| WhatsApp | Not listed on the page | VERIFIED (absence) | main + about pages |
| Email | **dhakapilescarecenter@gmail.com** | VERIFIED | main page + About → Email address |
| Website | **http://dhakapilescarecenter.com/** | VERIFIED | About → Websites and social links |
| Website status | **Effectively empty** — bare WordPress 6.8.2 default install, only post is default "Hello world!" (Jun 20, 2025), Twenty Twenty-Five theme. No clinic content. | VERIFIED | http://dhakapilescarecenter.com/ fetched 2026-11-08 |
| Opening hours | "Always open" (no per-day schedule published) | VERIFIED | main + about pages |
| Google rating widget on page | None observed; FB's own rating block shows "Not yet rated (2 reviews)" | VERIFIED | main page |

**UNVERIFIED third-party claims about location** (search snippets only; sources reached via search-engine redirects and could not be fetched/cited directly — do NOT publish without confirmation):
- "Baridhara Piles Cure Centre, Baridhara North (near Norda Bus Stand), Gulshan, Dhaka-1212" — appears in Bangla search snippets (Quora-style answers / directory snippets).
- Google Maps result "Piles Clinic, House #8, Road #8, Baridhara Block J, Dhaka 1212" — surfaced in a search snippet; name does not exactly match the page name, so the match is unconfirmed.
- Claim that Dr. Morjina Akhter also sees patients at Islami Bank Hospital, Mirpur (Dhaka) — snippet only.

Note: postcode 1229 is consistent with the Baridhara area of Dhaka, and the intro names the clinic's former identity as "Baridhara piles Cure Center" — but **no street address is verified from the Facebook page itself**.

---

## 4. Services / treatments

The page has **no services or price list section** retrievable. What can be stated, strictly from the page itself:

| Item | Status | Source |
|---|---|---|
| Focus: anorectal diseases — piles (haemorrhoids) and fistula physician | VERIFIED (intro wording) | main page intro |
| Anorectal disease education post listing conditions incl. "পাইল্‌স্‌/অর্শ-গেজ (Haemorrhoid)", "অ্যানাল ফিসার (Anal Fissure)" | VERIFIED (post title from search index; opening text via og:description) | https://www.facebook.com/dhakapilescarecenter/posts/4353201971375635 |
| Reference to colonoscopy (কোলোনোস্কোপি) as a test piles patients are advised about | VERIFIED (post text) | https://www.facebook.com/dhakapilescarecenter/posts/3428285830533925 |
| Nationwide "service area" covering 8 divisions | VERIFIED | About page |
| Surgical techniques / equipment / price list | **Not published** — nothing retrievable | — |

---

## 5. Doctors

| Doctor | What the page itself says | Status |
|---|---|---|
| **Dr. Morjina Akhter** | Founder; established the center in **October 2003**; described as "a medical expert on in Anorectal diseases and physician of piles and fistula" (page's own English, ungrammatical as printed). Signs health articles as "সম্পাদনা: ডা: মর্জিনা আক্তার" (Edited by: Dr. Morjina Akhter). | VERIFIED — main page intro; post 2552176114811572 (Apr 29, 2019) |
| Qualifications / degrees (MBBS, FCPS, MS etc.) | **NOT stated anywhere on the page.** No degrees, BMDC number, or institutional affiliations are published. | VERIFIED (absence) — main, about, all fetched posts |

**UNVERIFIED (search snippets only — do not publish without confirmation):**
- A "Best Piles Doctor in Bangladesh"-type listing snippet attributes "**MBBS, FCPS (Surgery)** Gold medalist, **MS (Colorectal…)**" to a Dr. Morjina Akhter — snippet truncated, listing unfetchable, identity match to this clinic's founder unconfirmed.
- Personal Facebook profile snippet describes her as physician at Dhaka Piles Care Center, founder at Baridhara Piles Cure Centre, "Deputy Editor at Dhaka Post", alumnus of Rasullabad U A Khan High School — snippet only.

No other doctor or staff member is named on the page.

---

## 6. Posts inventory (public posts retrieved)

All dates/times below are exactly as displayed by Facebook on the fetched permalink pages.

| # | Date (as shown) | Topic | Type | Media attached | Engagement | URL |
|---|---|---|---|---|---|---|
| 1 | Tue, Sep 22, 2026, 9:00 AM | "Dhaka Piles Care Center updated their profile picture." | Page admin update | New profile picture (795683782_1774691974264995; "may be an image of text") | not shown | visible on main page feed & "Recent posts" sidebar |
| 2 | Tue, Sep 22, 2026, 8:57 AM | "Dhaka Piles Care Center updated their cover photo." | Page admin update | New cover photo (796527976_1774689247598601) | not shown | seen on post 2649213035107879 "Recent posts" sidebar |
| 3 | (date not visible; login-gated) | পাইল্‌স্‌ misconception + list of anorectal diseases | Patient education (Bangla) | Image 173964829_4353200371375795 (JPG) | not visible | https://www.facebook.com/dhakapilescarecenter/posts/4353201971375635 |
| 4 | (date not visible; login-gated) | "পাইলস রোগীদের জন্য একটি জরুরী পরামর্শ" — advice: don't fear colonoscopy / don't self-medicate | Patient education (Bangla) | image attached (URL not retrievable) | not visible | https://www.facebook.com/dhakapilescarecenter/posts/3428285830533925 |
| 5 | Sun, Apr 4, 2021, 5:14 AM | Photo post (no caption text retrievable) | Clinic promo/photo | PNG: 168995425_4312151378814028 | 4 reactions, 2 comments (sample comment in Bangla from "Omar Faruque") | https://www.facebook.com/dhakapilescarecenter/photos/4312151375480695 |
| 6 | Sat, Jun 22, 2019, 11:22 PM | "মেথি কি? কেন এবং কিভাবে খেলে উপকার পাবেন?" (What is fenugreek? Why and how to eat it?) | General health education (Bangla) | image attached | 1 reaction, 1 share | https://www.facebook.com/dhakapilescarecenter/posts/2649213035107879 |
| 7 | Mon, Apr 29, 2019, 6:12 AM | "স্তন ক্যান্সারের ঝুঁকি প্রতিরোধক খাবার" (Foods that reduce breast-cancer risk) — long education article; signed "সম্পাদনা: ডা: মর্জিনা আক্তার" | Patient/general health education (Bangla) | JPG: 58775374_2552175608144956 | 1 reaction | https://www.facebook.com/dhakapilescarecenter/posts/2552176114811572 |
| 8 | Thu, Apr 11, 2019, 11:05 PM | "ডায়াবেটিস হয়েছে জানতে পারলে কি করবেন।" (What to do when you learn you have diabetes) | General health education (Bangla) | image attached | 1 reaction | https://www.facebook.com/dhakapilescarecenter/posts/2524348877594296 |

### Quoted Bangla excerpts (original text)

**Post 3 — anorectal diseases (4353201971375635), via og:description:**
> "পাইল্‌সঃ
> যে ভুলটি আমরা সচরাচর করে থাকি তা হলো পায়ুপথে যে কোনো সমস্যা হলেই তাকে পাইল্‌স্‌ রোগ হয়েছে বলে মনে করে থাকি। তাই আমাদের জানা উচিৎ পায়ুপথে পাইল্‌স্‌ ছাড়াও কি কি রোগ হয়ে থাকে।
> যে রোগগুলি… [truncated by Facebook's preview]"

Search-index title of the same post continues: "১. পাইল্‌স্‌/অর্শ-গেজ (Haemorrhoid) ২. অ্যানাল ফিসার (Anal Fissure)" — i.e., the post enumerates anorectal conditions.

**Post 4 — colonoscopy advice (3428285830533925), via og:description:**
> "পাইলস রোগীদের জন্য একটি জরুরী পরামর্শ:
> আমার জানা মতে অনেক পাইলস রোগী কোলোনোস্কোপি পরীক্ষার ভয়ে ডাক্তারের নিকট না গিয়ে রোগ নিয়ে কষ্ট সহ্য করে, এবং গোপনে গোপনে ফার্মেসি থেকে ওষুধ সেবন করে। ফলে রোগ… [truncated]"

(Translation: "An urgent advice for piles patients: as far as I know, many piles patients, out of fear of the colonoscopy test, do not go to the doctor and endure the suffering of the disease, and secretly take medicines from the pharmacy. As a result the disease…")

**Post 7 — breast cancer article (2552176114811572), opening + sign-off:**
> "স্তন ক্যান্সারের ঝুঁকি প্রতিরোধক খাবার
> স্তন মেয়েদের মাতৃত্ব ও সৌন্দর্যের প্রতীক। …"
> … "স্তন ক্যান্সার দূর করতে আপনার খাদ্যর মধ্যে এই খাবার রাখার পাশাপাশি, সবসময় ডাক্তার এর পরামর্শও নিতে হবে।
> সম্পাদনা: ডা: মর্জিনা আক্তার"

(The article lists foods: ডালিম, টমেটো, গাজর, ফুলকপি বা ব্রকলি, রসুন, হলুদ, মাশরুম, ডিম, গ্রিন টি, তিসি, আখরোট.)

**Comment sample on post 5 (Apr 4, 2021), commenter Omar Faruque:**
> "২৭ই সেপ্টেম্বর ছিল বিশ্ব কন্যা দিবস। …" [truncated]

### Posting-pattern observations (from retrieved items only)
- The only 2026 activity visible is the Sep 22, 2026 profile + cover photo change (same morning, 8:57 and 9:00 AM).
- The retrievable content posts date from Apr–Jun 2019 and Apr 2021. A full timeline was login-gated, so no posting-frequency claim can be made.
- No branch-opening announcements, timing-change notices, or event posts were retrievable.

---

## 7. Media inventory (photos/videos)

**Videos: none.** The Videos tab returns "No videos found" (VERIFIED: https://www.facebook.com/dhakapilescarecenter/videos).

**Photos** — the public Photos tab (https://www.facebook.com/dhakapilescarecenter/photos) shows a grid of 8 items. Facebook supplied no captions/alt text for most items ("No photo description available"), so **what each image depicts (clinic exterior, interior, staff, equipment, etc.) could NOT be visually verified** — no login-free way to view full-size images was available. Inventory below lists only what is technically verifiable:

| Media | Type / role | File (FB CDN id) | Notes |
|---|---|---|---|
| Profile picture | Page avatar | t39.30808-1/**795683782_1774691974264995** (JPG, 2048px master) | Set Sep 22, 2026, 9:00 AM; FB alt-text: "May be an image of text" → likely a logo/name graphic rather than a photo |
| Cover photo | Page cover | t39.30808-6/**796527976_1774689247598601** (JPG, rendered 3376x1242) | Set Sep 22, 2026, 8:57 AM |
| Grid photo 1 | Page photo | t1.6435-9/**177150485_4376967988999033** (JPG) | no description available |
| Grid photo 2 | Post image (anorectal-diseases post #3) | t1.6435-9/**173964829_4353200371375795** (JPG) | patient-education graphic companion |
| Grid photo 3 | Post image (Apr 4, 2021 post) | t1.6435-9/**168995425_4312151378814028** (PNG) | PNG format → likely a designed graphic/flyer |
| Grid photo 4 | Page photo | t1.6435-9/**169321112_4312149972147502** (JPG) | no description available |
| Grid photo 5 | Page photo | t1.6435-9/**160741727_4268233116539188** (PNG) | PNG format → likely a designed graphic/flyer |
| Grid photo 6 | Page photo | t1.6435-9/**92018843_3276828409013002** (JPG) | no description available |
| Grid photo 7 | Post image (breast-cancer article) | t1.6435-9/**58775374_2552175608144956** (JPG, 720x483 render) | education-article companion image |

**Quality assessment:** Not visually verifiable in this audit. Technical signals only: current profile (2048px) and cover (3376x1242) are high-resolution uploads; several older graphics are PNGs (typical of text/education graphics); most post photos are 2019–2021-era JPEG uploads. The website team should treat actual photo quality/appearance as **unknown until manually reviewed while logged in**.

**Google rating/review widgets:** none observed on the page; the only rating element is Facebook's own "Not yet rated (2 reviews)" line.

---

## 8. Bangla vs English content analysis

| Content layer | Language | Evidence |
|---|---|---|
| Page name, category, intro | **English** (with grammatical errors) | VERIFIED — main page intro & metadata |
| Contact-info labels | English (Facebook UI) | VERIFIED |
| Actual posts | **Bangla** — every content post retrieved (6 of 6) is in Bangla | VERIFIED — posts 2524348877594296, 2552176114811572, 2649213035107879, 4353201971375635, 3428285830533925, photos/4312151375480695 |
| Audience comments | Bangla | VERIFIED — Omar Faruque comment, Apr 2021 post |
| Metadata/locale | og:locale en_US (default, not a content signal) | VERIFIED |

**Conclusion for the website team:** the page is operationally a **Bangla-content page with an English-language About section**. Any website copy aimed at this audience should be Bangla-first, with the (grammatically rough) English intro cleaned up if reused.

---

## 9. Gaps & limitations

1. **No street address.** The page only lists "Dhaka, Bangladesh, 1229". Third-party snippets say "Baridhara North (near Norda Bus Stand), Gulshan, Dhaka-1212" — UNVERIFIED; needs phone confirmation (+880 1716-528757) or a logged-in look at the page.
2. **No doctor credentials.** Nothing about Dr. Morjina Akhter's degrees, BMDC registration, or training is published on the page. Directory snippets claiming "MBBS, FCPS (Surgery), MS (Colorectal)" are UNVERIFIED and identity-unconfirmed. Do not publish credentials without client confirmation.
3. **Reviews effectively unusable.** 2 reviews exist but the page is "Not yet rated"; review text is login-gated.
4. **Posts feed login-gated.** Only search-indexed posts could be inventoried (6 content posts, 2019–2021, plus 2026 avatar/cover changes). Full posting history, engagement trends, and any announcements (branch openings, timing changes) could not be verified.
5. **Media content not visually verifiable.** Photos could be listed but not described (no captions/alt text, full-size viewing login-gated). Website team must review images manually.
6. **Website is a placeholder.** dhakapilescarecenter.com (linked from the page) is an untouched WordPress install — a significant audit finding: the business currently has **no functioning website**.
7. **No WhatsApp, no second phone, no per-day hours, no price/service list** anywhere on the page.
8. **Possible name-confusion risk.** At least two similarly named entities exist in Dhaka ("Piles Cure Centre Dhaka" in Kamalapur; "Piles Care Center | Dhaka"; a Google Maps "Piles Clinic" in Baridhara Block J). Any address/details harvested from directories must be re-confirmed as belonging to *this* page's business before use.
9. **TrustAnalyser has no record** of the domain (404) — no third-party trust profile exists.
10. **Transient fetch failures** occurred on several Facebook URLs (mbasic variant, some post/photo permalinks); these were retried where possible and are documented above. No protections were bypassed.

---

## Appendix: source URLs used (all fetched/searched 2026-11-08)

- https://www.facebook.com/dhakapilescarecenter/
- https://www.facebook.com/dhakapilescarecenter/about
- https://www.facebook.com/dhakapilescarecenter/photos
- https://www.facebook.com/dhakapilescarecenter/videos
- https://www.facebook.com/dhakapilescarecenter/reviews
- https://www.facebook.com/dhakapilescarecenter/posts (login-gated)
- https://www.facebook.com/dhakapilescarecenter/community/ (login-gated)
- https://www.facebook.com/dhakapilescarecenter/posts/4353201971375635
- https://www.facebook.com/dhakapilescarecenter/posts/3428285830533925
- https://www.facebook.com/dhakapilescarecenter/posts/2649213035107879
- https://www.facebook.com/dhakapilescarecenter/posts/2552176114811572
- https://www.facebook.com/dhakapilescarecenter/posts/2524348877594296
- https://www.facebook.com/dhakapilescarecenter/photos/4312151375480695
- http://dhakapilescarecenter.com/
- https://www.trustanalyser.com/report/dhakapilescarecenter.com (404)
- Web search queries (English + Bangla): site:facebook.com dhakapilescarecenter; "Dhaka Piles Care Center" Facebook; "dhakapilescarecenter"; "Dhaka Piles Care Center" address phone; ঢাকা পাইলস কেয়ার সেন্টার বারিধারা; "Dhaka Piles Care Center" Morjina Akhter; "Baridhara piles cure center" Dhaka; "Morjina Akhter" piles qualification; site:facebook.com "dhakapilescarecenter" photos OR posts
