# 0xFLOW rebuild (plan: ~/.claude/plans/this-is-my-agency-proud-gadget.md)

## Agency banner — 2026-09-29
- [x] Export and visually verify the preferred black-on-light presentation style as upwork-agency-banner-light.png (1600 × 160).
- [x] Reuse full oxFlow vector wordmark on a forest background at 1600 × 160.
- [x] Verify dimensions and inspect the exported PNG.

## Upwork agency completion — 2026-09-29
- [x] Inspect connection and current agency profile; browser editing available.
- [ ] Add Creator OS, Astro Dadi, and internal deal assistant portfolio entries from established facts.
- [ ] Fill services, skills, tagline, and supported company details.
- [ ] Verify saved profile and report any fields requiring missing assets or facts.

## oxFlow identity — 2026-09-29
- [x] Present three distinct monochrome logo concepts and recommend a direction (01 Shared stroke).
- [x] User selected 01 Shared stroke.
- [x] Refine spacing, proportions, alignment, and test small sizes.
- [x] Export horizontal logo, wordmark, symbol, avatar, monochrome/color PNG and genuine outlined SVG artwork.
- [x] Verify transparent PNGs and path-only SVGs; visually review light/dark presentation and 16/24/32 px favicon samples; provide usage sheet in output/oxflow-identity.


1. [x] Rewrite app/data/content.ts → verified: build passes
2. [x] Delete dead files/deps → verified: grep zero hits
3. [x] HeroSection static + Cal CTA + CopyEmailButton; fake stats gone → verified: rendered HTML
4. [x] New ProcessSection, CTASection, FeaturedWorkSection, SiteFooter; updated Capabilities, Founder → verified: rendered HTML
5. [x] page.tsx new order (Hero → Work → Services → Process → Founder → CTA) → verified
6. [x] app/work/[slug]/page.tsx + Navigation root-relative links → verified: both pages 200, /work/foo 404
7. [x] layout.tsx metadata/OG(logo1)/single glow/Analytics/MotionConfig reduced-motion → verified
8. [x] sitemap.ts (3 URLs), robots.txt, llms.txt, llms-full route → verified via curl
9. [x] pnpm lint + build + honesty-audit grep (no em-dashes, no fabricated claims) → all pass

## Blocked on user
- [ ] Cal.com booking URL → replace CHANGEME in app/data/content.ts (SITE.calLink)
- [ ] LinkedIn + X profile URLs → replace CHANGEME in SITE.socials
- [ ] Headshot → save as public/hrithik.jpg (currently 404s in founder section)
- [ ] Optional: screenshots at public/work/creator-os.png and public/work/astro-dadi.png, then set `thumbnail` fields
- [ ] Courtesy ping to Everbloom/Stefan with the /work/creator-os draft before deploy
- [ ] Final check before deploy: `grep -rn CHANGEME app/` returns nothing
