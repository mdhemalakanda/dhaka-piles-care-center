# Medical Website Design Benchmarks — Research Notes

Purpose: design benchmarks for a premium specialist piles/colorectal clinic website in Dhaka, Bangladesh (static HTML/CSS/JS/jQuery, bilingual English/Bangla, mobile-first, phone/WhatsApp-first audience).
Date of research: 2026-11-08.

Method note (honesty): the `mcp__web_reader__webReader` MCP tool was not available in this environment (tool lookup returned no match). Fetches were done with WebFetch (page-to-markdown with an extraction prompt). Four sites returned rich, full-page content; the rest were blocked, JS-rendered shells, or DNS failures and were supplemented with WebSearch snippets. Each site below is labelled with its true fetch status. Colour palettes and exact fonts are rarely present in fetched markup, so those observations are explicitly marked as inferred where applicable. No screenshots were taken; "mobile patterns" are inferred from markup (dedicated mobile bars, hamburger nav, mobile assets), not from a rendered mobile viewport.

## Fetch status summary

| Site | URL | Fetch status |
|---|---|---|
| Cleveland Clinic | my.clevelandclinic.org | FULL FETCH — rich content |
| Square Hospitals Ltd (Dhaka) | squarehospital.com | FULL FETCH — rich content |
| Burjeel Holdings (UAE) | burjeel.com | FULL FETCH — rich content |
| Medcare (UAE) | medcare.ae | FULL FETCH — rich content |
| Mayo Clinic | mayoclinic.org | BLOCKED — HTTP 403 (bot protection); snippet-based analysis only |
| Apollo Hospitals | apollohospitals.com | BLOCKED — HTTP 403 (bot protection); snippet-based analysis only |
| Praava Health (Dhaka) | praavahealth.com | PARTIAL/BLOCKED — JS-rendered SPA returned only "Welcome to Praava Health"; snippet-based analysis only |
| Popular Diagnostic Centre (Dhaka) | popular.com.bd / populardiagnostic.com | FAILED/BLOCKED — popular.com.bd DNS failure; correct domain populardiagnostic.com is JS-rendered and returned only the page title; snippet-based analysis only |

---

## 1. Cleveland Clinic (my.clevelandclinic.org) — FULL FETCH

- **Header/nav**: Three tiers — top utility row of international location sites (Abu Dhabi, London, Canada, Florida, Nevada, Ohio); second utility row with an 800 number as a `tel:` link, MyChart, Medical Professionals, Careers, Donate; then the main bar with only 5 items (Find a Provider, Locations and Directions, Services, Patients and Visitors, Health Library). Search is an icon on desktop and mobile; mobile adds a hamburger plus a persistent Appointments link. No language switcher — locales are separate country sites.
- **Hero**: Full-width video hero with explicit pause controls (including a dedicated mobile pause icon). One first-person tagline ("We're here when you need us — for every care in the world.") followed immediately by three quick links: Our Providers, Locations & Directions, Appointments. No stacked headline hierarchy, no form in the hero.
- **Service presentation**: Two layers — (1) a deep mega-menu where "Services" exposes 9 specialty groups, each listing ~17 condition-level links (condition-first, not department-first IA); (2) an on-page "Featured Services" icon-card grid: 9 cards with custom illustration-style icons, an H2 name, and a plain-language one-liner ("Brain, spine and nerve care" / "GI conditions and gut health"), each with a "Show services" expand affordance.
- **Doctor profile pattern**: No individual doctor cards or headshots on the homepage. "Find a Provider" is treated as a utility and repeated in nav, mobile menu, hero quick links, and a dedicated lower-page tile. Provider search is productized rather than listing doctors as content.
- **Appointment/CTA strategy**: Appointment entry in every vertical band of the page (mobile header, hero, mid-page tile, footer). Twin intent-separated phone blocks, all `tel:` links: "Get Care" (scheduling, virtual second opinion) vs "Need Help?" (billing, records, FAQ). Symptom-triage banners ("Get cold & flu care"; "Not Sure Where To Go for Care?" routing across virtual/primary/Express Care/ER). Persistent mobile Appointments link acts as the sticky conversion element.
- **Photography**: Documentary/candid clinical operations per alt text (caregiver pushing a pediatric patient, caregivers reviewing a chart) — no posed stock handshakes. Lifestyle symptom-relatable shots for triage banners (person at home on the phone). One conceptual science illustration for the Health Library.
- **Typography feel**: Sentence-case conversational H2s written as value statements ("We don't just care for your health. We care about you."), em-dashes, first-person-plural institutional voice.
- **Colour usage**: Blue as the primary system colour with green and white variants (inferred from icon asset names, e.g. `icon-emergency-circle-blue600`; exact hex values not in the content).
- **Mobile patterns**: Hamburger + persistent Appointments in the mobile bar; dedicated mobile icons for video pause and search; three click-to-call numbers; Next.js build with responsive `srcset` served up to 3840px; dismissible "Closures & Updates" alert with an explicit close button.

## 2. Square Hospitals Ltd, Dhaka (squarehospital.com) — FULL FETCH

- **Header/nav**: Utility bar first (social icons, About, Media, Career) plus the national short-code hotline **10616** and an overseas number. Main menu of 5 items (Centre of Excellence, Satellite Centre, Find A Doctor, Departments, Visitors & Patients). Mega-dropdown with ~31 specialty links; satellite branches (Gulshan, Uttara, Mirpur) each split into "Our Services" and "Our Physicians".
- **Hero**: 6-image rotating slider followed immediately by a "WHY CHOOSE US?" four-pillar band (Excellent Services, Qualified Doctors, Emergency Departments, Great Infrastructure) — icon + bold heading + 2–3 sentence proof point per pillar; the Emergency pillar embeds full contact data (hotline, landline, mobile, email) inside the hero region.
- **Service presentation**: Marquee carousel of featured Centre of Excellence cards plus the exhaustive dropdown; a 12-tile icon grid of amenities (24-hr pharmacy, WiFi, prayer rooms, ATM, indoor playground, roof-top garden); numeric trust counters (150 consultation rooms, 700 beds, 3000 staff).
- **Doctor profile pattern**: Doctors reachable via "Find A Doctor" nav item, a "YOUR PHYSICIANS" quick-action tile, and per-branch physician pages; homepage credibility carried by copy ("qualified consultants from India, Singapore, USA, UK") rather than individual profiles.
- **Appointment/CTA strategy**: A four-tile quick-action row — 24 HOURS SERVICE, ONLINE APPOINTMENT, ONLINE PAYMENT, YOUR PHYSICIANS — each icon + label. A dedicated "Book an Appointment" button sits beside a graphic of the 10616 number; hotline and digital booking are always paired. Phone numbers repeated in top bar, hero, and footer; branch mobile numbers support tap-to-call.
- **Photography**: Icon/pictogram-driven for services and amenities; photography reserved for the hero slider and centre cards; a timed modal popup promotes "Robotic Surgery" (an aggressive overlay — see anti-patterns).
- **Typography feel**: All-caps section titles ("AFFILIATED PARTNERS", "KNOW ABOUT SQUARE HOSPITALS LTD") — formal, institutional.
- **Colour usage**: Teal/green brand identity consistent with the Square Group logo (inferred from brand/logo references; exact palette not in markup).
- **Mobile patterns**: Collapsible hamburger ("Toggle navigation" markup appears twice); the short-code hotline 10616 rendered as a standalone, thumb-reachable call element and as a prominent image; multi-branch footer (Panthapath flagship + Gulshan, Uttara, Mirpur, Sylhet) with per-location phone/email. Template leftovers present ("0 item(s) - $0.00", My Account) — an anti-pattern.

## 3. Burjeel (burjeel.com, UAE) — FULL FETCH

- **Header/nav**: Logo left; primary nav (Doctors, Specialties, Locations, Sehhati program, Medical Education); "Locations" mega-dropdown doubles as a facility finder (14 named facilities). Utility cluster right: EN/AR language flags, click-to-call hotline **80055** (`tel:` link), search toggle, prominent **Book Appointment** button linking to the patient portal. Material-style icon font throughout.
- **Hero**: Single full-width banner with a dedicated `banner-mobile.png` asset; short declarative headline ("Trusted Care, here in the UAE"); exactly one hero CTA (Book Appointment).
- **Service presentation**: Four rotating service panels with image + 3-bullet benefit lists (Patient Portal, International Patient Assistance, Teleconsultation, Pharmacy to your door); branded centre cards (cancer institute, rehab, etc.); a 12-tile surgical specialty grid with "Load More"; facility directory with filter tabs (Hospitals / Medical Centers / Day Surgery Centers), each card carrying photo, name, city, and paired "Book Appointment" + "View Page" buttons; insurance logo wall; accreditation grid (JCI, CAP, Temos...); three self-service calculators (BMI, Stroke Risk, Heart Age).
- **Doctor profile pattern**: Absent from the homepage — doctors exist only as a top-nav item. Facility/service-led landing page; a deliberate omission worth noting when deciding our own doctor-first approach.
- **Appointment/CTA strategy**: The portal link recurs as the universal conversion target — header (desktop + mobile), hero, and every facility card. Dual channels: click-to-call hotline plus a `wa.me` WhatsApp deep link (used transactionally for pharmacy delivery). Dismissible "Ask Doctor" widget at page bottom.
- **Photography**: Three distinct treatments — procedural/anatomical close-ups for surgical tiles, building exteriors for facility cards, lifestyle/context shots for services.
- **Typography feel**: Short sentence-case headings (2–6 words); tight three-item benefit fragments — implies a clean sans-serif, high-scannability system (fonts not present in markup).
- **Colour usage**: Not verifiable from fetched content.
- **Mobile patterns**: Dedicated mobile banner and separate mobile utility bar (logo + search + Book Appointment); click-to-call throughout; app store badges under "Your Health, One Tap Away". Notably no sticky bottom call/appointment bar in the markup — flagged as a gap vs regional norms.
- **Trust-stack architecture**: hero CTA → service carousel → branded centres → specialty grid → locations → insurance → accreditations → tools → news → footer carrying the MOH approval number (regulatory credibility in the footer).

## 4. Medcare (medcare.ae, UAE) — FULL FETCH

- **Header/nav**: Sticky utility row with language toggle (separate EN/AR logo files), search, click-to-call (`tel:`), Patient Portal link, WhatsApp deep link, and an inline accessibility toolbar (TEXT SIZE and GREYSCALE/COLOR toggles, labels mirrored in Arabic). Primary nav: DOCTORS, HOMECARE, teleMEDCARE, Chronic Care, SPECIALITIES, LOCATIONS, PACKAGES, REFERRALS. Specialities opens a ~5-column mega menu covering 45+ specialties. Search is scope-filtered ("in Doctors / in SPECIALITIES / in Locations / in INSURANCE / in All").
- **Hero**: Rotating banner carousel where every slide is a campaign with a CTA ("Book Now" / "DOWNLOAD NOW" / "LEARN MORE") — ranking claims, service launches, packages, app promo. Short punchy headlines with manual line breaks and a slash-line divider graphic.
- **Service presentation**: 30-item branch card grid (hospitals, centres, specialty centres) each with its own "Learn More" page; health-check packages promoted in-hero; HEALTH LIBRARY block of SEO content cards authored by named consultants.
- **Doctor profile pattern**: No dedicated profiles on the homepage; doctors surface through thought-leadership attribution ("Written By: Dr. ...") on library cards; profiles live on specialty pages.
- **Appointment/CTA strategy**: Five parallel booking channels — persistent hotline, pre-filled WhatsApp link with source-tracking text, AI chat assistant prompt, a short modal form (Name/Email/Phone with international dial-code dropdown), and app download. Telehealth consent includes a privacy disclaimer gate; an Emirate-selector modal before proceeding. Footer hedge: "please contact ... to verify before booking."
- **Photography**: A hospitality-style "EXPLORE OUR WORLD" five-image carousel plus clinical/service banners; background-removed cut-outs (detected via asset naming) for product/app imagery.
- **Typography feel**: All-caps sans labels in nav; strict bilingual typographic parity — every label mirrored in Arabic as a structural requirement, not an afterthought (fonts not in markup).
- **Colour usage**: Not verifiable from fetched content; only signals are the greyscale accessibility toggle, the recurring slash-line accent graphic, and certification badges (JCI, Newsweek, MOH licence numbers).
- **Mobile patterns**: Duplicated nav block acting as a mobile drawer; mobile bottom bar uses icon+label pairs (Packages / menu / Patient Portal / WhatsApp / Appointments); tap-first priorities are call, WhatsApp, portal.

## 5. Mayo Clinic (mayoclinic.org) — BLOCKED (HTTP 403), snippet-based

- Direct fetch returned HTTP 403 (bot protection). Analysis below is from WebSearch snippets only and is lower confidence.
- **Appointment/CTA strategy**: "Request an appointment" appears as a recurring CTA across nearly all page types, including regional landing pages, paired with value messaging ("World-class care, focused on you."). Multiple pathways: dedicated online request form, international patient services with representative offices, mobile app scheduling, and phone/portal schedulers as a permanent fallback.
- **Friction reduction**: Prominent reassurance that patients "usually don't need a doctor's referral to schedule an appointment" — surfaced precisely to reduce booking anxiety.
- **Trust signals**: Rankings and badges (e.g., "No. 1 hospital in Florida", U.S. News badges) placed directly alongside appointment CTAs, so proof and conversion sit together.
- **Content model**: World-famous condition content hub (symptoms-causes pages) that feeds organic search traffic into appointment CTAs — content-as-acquisition.
- Nav/typography/colour details were not obtainable; do not rely on this section for visual specifics.

## 6. Apollo Hospitals (apollohospitals.com) — BLOCKED (HTTP 403), snippet-based

- Direct fetch returned HTTP 403. Analysis from WebSearch snippets only.
- **Appointment/CTA strategy**: Clearly visible "Book Appointment" button at the top of the homepage; booking via website, mobile app (Apollo 24|7 digital platform), 24x7 helpline (1860-500-1066), or walk-in. "Find a Doctor" search filterable by specialty, city, or hospital.
- **IA**: Hospital/location-centric — dedicated city/hospital pages (Chennai, Hyderabad, Delhi, Kolkata) each with online booking; digital-first funnel (apollo247/askApollo) alongside the hospital site.
- **Relevance to us**: Apollo is the closest South-Asian analogue — the pattern of a dominant top-of-page booking button plus a phone helpline as an equal channel is directly transferable. Visual specifics were not obtainable.

## 7. Praava Health, Dhaka (praavahealth.com) — PARTIAL/BLOCKED, snippet-based

- The fetch returned a JS-rendered SPA shell with only "Welcome to Praava Health" — no nav, no content rendered without JavaScript. Analysis from WebSearch snippets.
- **Product model (relevant to us)**: Digital-first clinic — patient portal app ("Bangladesh's first Patient Portal app"), telehealth/video consultations, home sample collection, online pharmacy ordering; "Speak to a doctor anytime, anywhere."
- **Contact pattern**: Hotline short-code **10648**, WhatsApp **+880 1844 508402**, email — hotline + WhatsApp as equal, published channels (snippet-sourced).
- **Doctor pattern**: "Find visiting specialists by expertise and availability" — schedule-driven specialist discovery.
- **Cautionary lesson**: A JS-only SPA renders nothing for crawlers, low-end Android browsers, or slow connections — the opposite of what a static, content-led clinic site should do (see anti-patterns). Praava's Google listing still surfaces its services because of its app-store presence and structured snippets, not its homepage HTML.

## 8. Popular Diagnostic Centre, Dhaka (popular.com.bd / populardiagnostic.com) — FAILED/BLOCKED, snippet-based

- popular.com.bd failed DNS resolution; the actual domain is populardiagnostic.com, which is JS-rendered and returned only the page title ("Popular Diagnostic Centre Ltd. | Advanced Health Diagnosis & Specialist Doctors"). Analysis from WebSearch snippets.
- **Model**: Branch-network diagnostic + specialist chamber centre (Dhanmondi flagship, Uttara, Badda, Jatrabari, Savar, Gazipur, Narayanganj, Shantinagar) — "200+ renowned doctors across all specialties with online appointment booking"; 24/7 flagship.
- **Contact pattern**: Per-branch hotlines published on a dedicated hotlines page (09666-787801 main, 10636 short code, per-branch 09666-7878xx numbers) — Bangladeshi patients expect branch-specific phone numbers and serial-based doctor schedules.
- **Title convention**: pipe-separated brand + keyword tagline ("Advanced Health Diagnosis & Specialist Doctors") — typical local SEO convention, but derivative.
- Visual specifics were not obtainable.

---

# Patterns to adopt (for our premium specialist clinic)

1. **Sticky mobile bottom action bar: Call / WhatsApp / Book Appointment.** The single strongest convergent pattern: Medcare's mobile bar (icon+label pairs: Patient Portal / WhatsApp / Appointments), Cleveland's persistent mobile Appointments link, Square's thumb-reachable 10616 element, Praava publishing hotline + WhatsApp as equal channels. For Dhaka patients this bar should be fixed, thumb-zone, and always visible; Call uses `tel:`, WhatsApp uses `wa.me` with a pre-filled message.
2. **Phone as a first-class channel with intent-separated numbers.** Cleveland splits "Get Care" vs "Need Help" numbers; Square pairs hotline graphic and Book Appointment button; Apollo runs a 24x7 helpline beside online booking. Adopt: an appointment line and (if applicable) an urgent-symptoms line, both `tel:` links repeated in header, hero, and footer.
3. **One primary conversion action, repeated in every vertical band.** Cleveland places appointment entry in mobile header, hero, mid-page, and footer; Burjeel repeats the same portal CTA in header, hero, and every facility card; Mayo repeats "Request an appointment" across page types. Pick ONE primary action (book a consultation) and repeat it; everything else is secondary.
4. **Friction-reducing reassurance next to the CTA.** Mayo surfaces "you usually don't need a referral" beside booking CTAs. Our equivalents: "No referral needed", "Serial via phone or form", "Confidential consultation" — small lines that answer the anxious patient's unspoken questions next to the button.
5. **Condition-first information architecture.** Cleveland's mega-menu links condition pages, not departments. For us: first-class pages for পাইলস/Piles, Anal Fissure, Anal Fistula, Pilonidal Sinus, plus symptom-led entry points ("Bleeding with stool?", "Pain during bowel movements?") written in patient language (English + Bangla), each page ending in the booking CTA.
6. **Icon-card service grid with plain-language one-liners.** Cleveland's Featured Services cards pair a custom icon, a name, and a phrase like "GI conditions and gut health". A 4-6 card grid (consultation, office procedures, laser/minimally invasive surgery where applicable, diagnostics, follow-up) with one-sentence explanations beats paragraph blocks.
7. **Symptom-triage router.** Cleveland's "Not Sure Where To Go for Care?" banner routes by need. Adopt a lighter version: "Not sure what your symptom means? See our condition guide or call us" — a card or band linking to the condition pages and the phone/WhatsApp channels. Never diagnose; route.
8. **"Why choose us" pillar band with concrete proof points.** Square's four pillars each carry a 2-3 sentence proof point, and numeric counters (150 rooms, 700 beds). Adopt honestly: qualifications/degrees, years of experience, hospital affiliations, procedures performed (counts only if verifiable) — never invented numbers.
9. **Doctor-first profile section (our divergence from the benchmarks).** The big hospitals deliberately hide doctors behind a search utility (Burjeel, Medcare, Cleveland have no homepage doctor cards) because they have thousands. A specialist clinic is the opposite: the doctor IS the product. Use large photo cards with name, degrees (MBBS, MS, FCPS...), BMDC registration number, specialty focus, chamber hours, and a direct "Book with Dr. X" CTA — a pattern the benchmarks imply but don't execute.
10. **Trust-stack page architecture.** Burjeel's sequence (hero → services → centres → locations → insurance → accreditations → tools → regulatory footer) compresses for us to: hero with CTA → conditions treated → doctor profile → why choose us → patient journey (what happens at first visit) → FAQ → location/map → footer with credentials. Patients scroll; each band answers one objection and re-offers the CTA.
11. **Bilingual parity as a structural requirement.** Medcare mirrors every label in Arabic (including separate logo files and an accessibility toolbar with Arabic labels). For us: a real EN/বাংলা toggle that swaps visible UI labels and key content, with Bangla condition names (e.g., পাইলস, মলদ্বার) present in headings — not a machine-translate afterthought.
12. **Dismissible operational alert banner.** Cleveland's "Closures & Updates" dismissible banner is a cheap, professional pattern for chamber-schedule changes, holiday hours, or doctor-away notices — high value for Bangladeshi chamber culture where schedules shift.
13. **Accessibility affordances in the header.** Medcare ships text-size and greyscale toggles in the utility row. At minimum adopt: sensible font sizing, high-contrast text, and WCAG-conscious colour use; a text-size control is a differentiator for the 50+ patient demographic.

# Anti-patterns to avoid

1. **Timed promotional modal popups.** Square's auto-popup pushing "Robotic Surgery" over the homepage is intrusive, mobile-hostile, and erodes trust in a medical context. No auto-opening modals; the booking form is a click away, never a surprise overlay.
2. **JS-only rendering (SPA shells).** Praava's homepage renders as a bare "Welcome" shell without JavaScript; Popular's site returns only a title tag. Content-led medical SEO and low-end Android users both lose. Our static HTML renders fully server-side with no JS required for content — jQuery is enhancement only.
3. **Hospital-scale mega-menu navigation.** Cleveland (9 groups x ~17 links), Square (~31 dropdown links), Medcare (45+ specialties in 5 columns) suit thousand-doctor hospitals. A specialist clinic needs 5-7 nav items (Home, Conditions, About the Doctor, Procedures, Patient Info, Contact) — nav soup dilutes conversion and overwhelms on mobile.
4. **Template cruft in a medical site.** Square's nav carries e-commerce leftovers ("0 item(s) - $0.00", My Account). Off-the-shelf template artifacts (cart icons, blog placeholders, empty footers) read as neglect and undercut premium positioning.
5. **Carousel overload.** Square's 6-image hero slider, Cleveland's value blocks duplicated in markup for rotation, Medcare's campaign carousel — multiple auto-rotating sliders slow mobile loads, hide content (users never reach slide 3), and can't be paused easily. Use one hero image (or one carefully controlled slider with pause controls, as Cleveland does properly).
6. **Burying the phone number.** Burjeel's markup shows no sticky bottom call bar; some sites place the hotline only in the footer. For a Dhaka audience where many patients will book by phone, the number must be visible at all times on mobile, not a footer footnote.
7. **Unverifiable superlatives and stock clichés.** "World-class", "best", award-adjective headlines without specific proof (ranks, registrations, years) undermine trust with sophisticated patients. Prefer specific, checkable claims: BMDC number, degrees, affiliated hospitals, chamber address/hours.

---

## Honesty section — what could actually be fetched

- **Really fetched (rich page content)**: Cleveland Clinic homepage, Square Hospitals homepage, Burjeel homepage, Medcare homepage. All four via WebFetch page-to-markdown; all four returned substantial structural content (nav labels, hero copy, card grids, CTAs, footer modules).
- **Blocked or degraded**: Mayo Clinic (HTTP 403), Apollo Hospitals (HTTP 403), Praava Health (JS SPA shell), Popular Diagnostic Centre (wrong domain DNS-failed; right domain JS-rendered title-only). These four are analysed from WebSearch snippets and are clearly labelled as such above; their visual/typographic/colour details were NOT obtainable and should not be cited as fact.
- **Tooling**: the webReader MCP tool was not available in this environment despite being named in the task; WebFetch (with extraction prompts) was used instead and worked well on non-protected sites.
- **Known limits**: fetched content is markup-to-markdown, so colour palettes and font families were mostly absent (flagged as inferred per site); no rendered screenshots or mobile viewports were used, so "mobile patterns" are inferred from mobile-specific markup (dedicated mobile bars/assets, hamburger nav), which is usually reliable but not a substitute for visual QA; subpages (e.g., a Cleveland doctor profile page or Medcare specialty page) were not fetched this round — homepage-level patterns only.

Sources (fetched directly): https://my.clevelandclinic.org , https://www.squarehospital.com , https://burjeel.com , https://medcare.ae
Sources (search snippets): https://www.mayoclinic.org/patient-centered-care , https://www.apollohospitals.com , https://www.praavahealth.com , https://play.google.com/store/apps/details?id=com.praavahealth.patientportal.app , https://www.praavahealth.com/praava-services , https://www.populardiagnostic.com , https://www.populardiagnostic.com/hotlines
