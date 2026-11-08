# Google Maps Business Listing Audit — "Baridhara Piles Cure Center" (Dhaka)

**Audit date:** 2026-11-08
**Target listing URL:** https://www.google.com/maps/place/Baridhara+Piles+Cure+Center/@23.8135153,90.34217,13z/data=!4m10!1m2!2m1!1sbardhara+hospital!3m6!1s0x3755c6539f7b6ef5:0x242d6a4b0e7ba8cd!8m2!3d23.8135153!4d90.4183877!15sChFiYXJkaGFyYSBob3NwaXRhbJIBDm1lZGljYWxfY2VudGVy4AEA!16s%2Fg%2F11g1fxm5rb
**Method note:** No scraping or copying of Google user reviews or user photos was done. Only listing metadata and public directory/Facebook pages were consulted. Every fact below is tagged VERIFIED (seen directly in a fetched page) or UNVERIFIED (seen only in search-engine snippets or secondary summaries).

---

## 1. Access summary

| Route attempted | Result |
|---|---|
| Google Maps place URL (full target URL) | BLOCKED — returns bare "Google Maps" JS shell; no listing data in HTML |
| Google Maps place URL (simple form) | Same JS shell (metadata showed a Mexico default viewport, i.e., no place data served) |
| Google Maps search URL | Redirects to Google consent page (Spanish-language cookie wall) |
| Google Maps CID URL (`https://maps.google.com/?cid=2606856629915461837`) | MCP web reader: repeated network errors; WebFetch: 302 to `www.google.com/maps?cid=...`, which returns an empty JS shell |
| Google Maps embed endpoints (`/maps/embed?...4s2606856629915461837` and query-embed) | Empty shells; no place payload |
| Google internal endpoint `/maps/preview/place?q=...` | HTTP 400 (malformed request — endpoint requires a valid `pb` protobuf parameter) |
| Google Search results page (knowledge panel attempt) | BLOCKED — Google automated-traffic interstitial ("If you're having trouble accessing Google Search…", emsg=SG_REL) |
| Bing search / Bing Maps | Bot-degraded: SERP fell back to generic Dhaka pages; Bing Maps page loaded as an empty JS shell |
| DuckDuckGo HTML endpoint | BLOCKED — human-verification CAPTCHA (duck image challenge) |
| bn.quora.com page quoting the listing | BLOCKED — WebFetch 403; curl and MCP reader returned a ~7 KB bot-wall stub with no content |
| Scribd document (2013 shareholder list) | Page furniture only; document body not retrievable without login/JS |
| Facebook page (public, logged-out) | READABLE — full Intro and About tabs retrieved |
| doctors.inverseai.com directory pages | READABLE — hospital and doctor pages retrieved in full |
| dhakapilescarecenter.com, pilescarebd.com | READABLE |
| OpenStreetMap Nominatim reverse geocode | READABLE |

**Consequence:** the live Google listing fields (current name, address line, phone, hours, rating, review count, photo counts) could NOT be read directly on 2026-11-08. They were reconstructed from (a) the target URL itself, (b) search-engine snippets, and (c) third-party sources that mirror or describe the listing. All such items are marked UNVERIFIED where the only evidence is a snippet.

**CID verification:** I computed the decimal CID myself: `int("242d6a4b0e7ba8cd", 16)` = **2606856629915461837**. (The value 2602248303018559437 given in the task brief was incorrect.) The correct CID link is https://maps.google.com/?cid=2606856629915461837 — it was unreachable to automated fetch (see above), so "this CID resolves to this place" remains UNVERIFIED, though the hex pair came straight from the target URL.

---

## 2. Listing identity

| Field | Value | Status | Source |
|---|---|---|---|
| Place name (in URL path) | "Baridhara Piles Cure Center" | VERIFIED (as encoded in the URL) | Target URL |
| Feature ID | `/g/11g1fxm5rb` | VERIFIED (in URL) | Target URL |
| Hex pair | `0x3755c6539f7b6ef5:0x242d6a4b0e7ba8cd` | VERIFIED (in URL) | Target URL |
| Derived CID | 2606856629915461837 | VERIFIED computation; mapping to place UNVERIFIED | Own computation (python3) |
| Coordinates | 23.8135153, 90.4183877 | VERIFIED (in URL) | Target URL |
| Category (from URL payload) | medical_center | VERIFIED (in URL) | Target URL |
| Current live name on Google | Unknown — possibly still "Baridhara Piles Cure Center", possibly renamed to "Dhaka Piles Care Center" | UNVERIFIED | Google fetch blocked; see Section 7 |
| One-star / three-star snippet seen in search | "3.9 (54)" rating snapshot, address "House 48, Rd No 9A, Dhaka 1209", status "Closed" at snapshot time | UNVERIFIED (snippet only; page itself bot-blocked) | bn.quora.com page as surfaced twice by WebSearch on 2026-11-08 |
| Indexed directory page for the center | https://doctors.inverseai.com/hospital/baridhara-piles-cure-center-gulshan-dhaka-1212 | VERIFIED | Direct fetch |

Search-index evidence that the Google listing existed under the old name: multiple Google-indexed results on 2026-11-08 surface "Baridhara Piles Cure Center"/"Baridhara Piles Cure Centre" as a medical center in Gulshan/Baridhara, Dhaka (UNVERIFIED individually, but consistent across several independent snippets).

---

## 3. Contact & location

### Phone
- **+880 1716-528757** — VERIFIED in two independent fetched pages:
  - Facebook About tab, "Mobile": +880 1716-528757 (https://www.facebook.com/dhakapilescarecenter/about)
  - doctors.inverseai.com center/doctor pages, "Appointment contact": +8801716528757 (https://doctors.inverseai.com/hospital/baridhara-piles-cure-center-gulshan-dhaka-1212 and /doctor/543-dr-morjina-akter)
- Whether this number is displayed on the Google listing: UNVERIFIED (listing blocked).

### Email / website
- **dhakapilescarecenter@gmail.com** — VERIFIED as listed on the Facebook About tab. Google-listing presence UNVERIFIED.
- **dhakapilescarecenter.com** — VERIFIED as the website link on the Facebook About tab. The site itself was fetched: it is an empty WordPress install ("Hello world!", June 2025) with no business content. Effectively no website.
- IMPORTANT DISAMBIGUATION: **pilescarebd.com is a DIFFERENT business** ("Health & Wellness" / Dr. Faridul Islam, House 12, Road 21, Sector 4, Uttara, Dhaka, +880 13038-25222) — VERIFIED by direct fetch. Do not link this clinic to pilescarebd.com.

### Address / neighbourhood
- Facebook About tab address field: **"Dhaka, Bangladesh, 1229"** (postal code only) — VERIFIED. Service area lists divisions nationwide (Dhaka, Chittagong, Khulna, Rajshahi, Rangpur/Dinajpur, Sylhet, Barisal) — VERIFIED.
- Directory address (current): **"Baridhara Piles Cure Center, North Baridhara (near Norda Bus Stand), Gulshan, Dhaka-1212"** — VERIFIED (doctors.inverseai.com doctor page, chamber block).
- Older address candidates (UNVERIFIED, snippets only):
  - "House 48, Rd No 9A, Dhaka 1209" (bn.quora.com snippet quoting a Google listing snapshot — postal code inconsistent with the area; treat with caution)
  - "KA-54/1, Nodda, Baridhara (North Gulshan, Dhaka)" (Scribd 2013 shareholder list entry associated with Dr. Morjina Akhter)
- **Reverse geocode of the listing pin (23.8135153, 90.4183877), OpenStreetMap Nominatim (VERIFIED):** quarter = **Nadda (নদ্দা)**, suburb = **Joar Sahara (জোয়ার সাহারা)**, city Dhaka, postcode **1229**, Dhaka District. (https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=23.8135153&lon=90.4183877&zoom=18&addressdetails=1)

**Neighbourhood conclusion:** the pin is in the **Nadda / "Norda Bus Stand" area — i.e., Baridhara (North) on the Gulshan–Baridhara–Bashundhara seam**, NOT the diplomatic "Block J / J Bar" heart of Baridhara. The postal codes seen (1212 for the Gulshan/Baridhara-North address; 1229 for the FB address and the OSM pin) are adjacent codes across that seam and are mutually consistent. "Baridhara" in the business name therefore refers to the greater Baridhara/Nadda area.
- Note: there is a SEPARATE business called "Piles Clinic" at House 8, Road 8, Baridhara Block J, Dhaka 1212 (bdtalika.com directory; earlier search snippet gives phone +880 1740-471394 — UNVERIFIED). Do not confuse it with this listing.

### Landmarks
- "Norda Bus Stand" (Nadda bus stand), Baridhara North, Gulshan — VERIFIED wording in the doctors.inverseai.com chamber block.

---

## 4. Hours

- Google listing hours: UNVERIFIED (listing not retrievable).
- Facebook page: **"Always open"** — VERIFIED on the About tab. This is a self-set FB field and is unlikely to reflect real chamber hours; typical Bangladeshi chamber clinics publish per-day visiting hours instead.

---

## 5. Ratings & review themes

### Google rating / review count
- **UNVERIFIED — could not be read from Google.**
- The only numeric figure found anywhere: **3.9 stars from 54 reviews**, quoted in a Bengali Quora answer's embedded Google-listing snapshot, which also showed the address "House 48, Rd No 9A, Dhaka 1209" and a "Closed" status at that snapshot's time. UNVERIFIED (Quora page itself is bot-blocked; figure comes from two independent WebSearch snippet captures on 2026-11-08). The snapshot may be outdated — the listing demonstrably still resolves today.

### Review themes
- NOT COLLECTED — Google review text was not scraped (per audit rules), and no review text was visible in any accessible source. No themes can be reported. If themes are needed, a manual browser session on the live listing is required.

### Facebook page rating
- **"Not yet rated (2 reviews)"**, 551 followers, "4 were here" — VERIFIED (facebook.com/dhakapilescarecenter and /about, fetched logged-out on 2026-11-08).

---

## 6. Photos overview

- Google listing photos: count and types UNVERIFIED (listing not retrievable). No photos copied.
- Facebook page: has a profile picture, cover photo, and a photo timeline; several images from posts dated 2019–2021 and a profile-picture update on 22 September 2026 are visible logged-out. Exact album count requires login — NOT COLLECTED. No photos copied.

---

## 7. Identity verification vs Facebook page "Dhaka Piles Care Center"

**Facebook page facts (VERIFIED, fetched 2026-11-08):**
- Name: **Dhaka Piles Care Center**, category "Medical service", 551 followers. URL: https://www.facebook.com/dhakapilescarecenter (page ID / profile: 100051726284946).
- Intro (verbatim): *"Dhaka Piles Care Center was established in October 2003 by Dr. Morjina Akhter. She is basically a medical expert on in Anorectal diseases and physician of piles and fistula. **Former name of Dhaka Piles Care Center was Baridhara piles Cure Center.**"*
- Contact: +880 1716-528757 (Mobile), dhakapilescarecenter@gmail.com, website dhakapilescarecenter.com, address "Dhaka, Bangladesh, 1229", hours "Always open", "Not yet rated (2 reviews)".

**Correspondence with the Google listing / its ecosystem:**

| Signal | Google-side entity | Facebook page | Match? |
|---|---|---|---|
| Name | "Baridhara Piles Cure Center" (URL, VERIFIED) | "Former name … was Baridhara piles Cure Center" (VERIFIED) | Yes — FB claims the old name explicitly |
| Phone | Appointment number +8801716528757 published on the center's directory page (VERIFIED, doctors.inverseai.com) | +880 1716-528757 (VERIFIED) | Yes — exact match |
| Founder/doctor | Dr Morjina Akter is the only doctor listed at "Baridhara Piles Cure Center" (VERIFIED, doctors.inverseai.com); bio "Anorectal disease specialist, and physician for piles and fistula" mirrors the FB Intro wording | Established Oct 2003 by Dr. Morjina Akhter (VERIFIED) | Yes |
| Location | Pin in Nadda/Joar Sahara, Dhaka 1229 (VERIFIED via OSM); directory says "North Baridhara (near Norda Bus Stand), Gulshan, Dhaka-1212" (VERIFIED) | "Dhaka, Bangladesh, 1229" (VERIFIED) | Yes — consistent |
| Historical document | 2013 shareholder list links "Baridhara Piles Cure Center" with Dr. Morjina Akhter at KA-54/1, Nodda, Baridhara (UNVERIFIED — snippet only, Scribd body blocked) | Same doctor, same lineage | Consistent |

**Verdict: SAME BUSINESS (high confidence).** The Facebook page "Dhaka Piles Care Center" is the renamed continuation of the "Baridhara Piles Cure Center" Google listing: the page itself declares the former name, and the phone number, founder-doctor, and neighbourhood all match across independently fetched sources.

**Residual caveats:**
1. The live Google listing could not be opened, so it is UNVERIFIED whether Google now displays the new name "Dhaka Piles Care Center" or still the old one (the URL slug still carries the old name, and the old name remains what search indexes show).
2. One Quora-embedded Google snapshot (UNVERIFIED) showed a "Closed" status with an inconsistent postal code (1209 vs 1212/1229). Possibilities: the listing was temporarily marked closed, relocated, or the snapshot is stale/wrong. A manual browser check of the live listing is recommended before publishing anything about its current status.

---

## 8. Gaps & limitations

1. **Google listing metadata (name-as-displayed, full address, phone on Google, per-day hours, live rating, review count, photo counts, plus code): NOT retrievable on 2026-11-08.** Google Maps serves listing data only to JS browsers; every non-JS route (place URL, CID URL, embed, preview/place endpoint) returned shells, consent walls, or HTTP 400/403. Nothing was bypassed.
2. Google Search SERP (for the knowledge panel) blocked by an automated-traffic interstitial; Bing SERP/Maps degraded; DuckDuckGo CAPTCHA; Quora 403; Scribd body unreachable. All documented above.
3. The "3.9 stars / 54 reviews" figure and the "House 48, Rd No 9A / Dhaka 1209 / Closed" snapshot are UNVERIFIED search-snippet evidence from a single Quora answer's embedded Google data; they must not be published as current facts.
4. Review THEMES: none collected (blocked + out of scope under the no-scraping rule).
5. No website exists effectively: dhakapilescarecenter.com is an empty WordPress install (VERIFIED). Any audit recommendation should treat the clinic as having no web presence beyond Facebook.
6. The wrong decimal CID (2602248303018559437) in the task brief was corrected by computation to 2606856629915461837; the corrected CID link could still not be verified end-to-end due to the Google block.
7. Name-confusable businesses in the same area that must NOT be conflated with this listing: "Piles Clinic" (House 8, Road 8, Baridhara Block J, 1212); "পাইলস কিউর সেন্টার ঢাকা / Piles Cure Centre Dhaka" (Kamalapur, 01979-959533); "Piles Cure Center" Jessore (01715-647234); "Health & Wellness / Piles Care BD" (Dr. Faridul Islam, Uttara, pilescarebd.com, +880 13038-25222); Baridhara General Hospital Ltd (KA-54/1 Pragati Sharani, Nadda — shares the Nodda address area and the "Baridhara" prefix but is a separate general hospital).

---

## Source links (primary, fetched 2026-11-08)

- Target listing URL (as given): https://www.google.com/maps/place/Baridhara+Piles+Cure+Center/... (JS shell)
- CID link (computed): https://maps.google.com/?cid=2606856629915461837 (blocked)
- Facebook page: https://www.facebook.com/dhakapilescarecenter
- Facebook About: https://www.facebook.com/dhakapilescarecenter/about
- Directory — center: https://doctors.inverseai.com/hospital/baridhara-piles-cure-center-gulshan-dhaka-1212
- Directory — doctor: https://doctors.inverseai.com/doctor/543-dr-morjina-akter
- OSM reverse geocode: https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=23.8135153&lon=90.4183877&zoom=18&addressdetails=1
- FB-listed website (empty): http://dhakapilescarecenter.com/
- Different business (do not confuse): https://pilescarebd.com/
- Historical document (blocked body): https://www.scribd.com/document/617316596/Dividend-2013
- Quora page (bot-blocked; snippet source of the 3.9/54 figure): bn.quora.com question "পাইলসের জন্য ঢাকার মধ্যে ভালো হাসপাতাল কোনটা?"
