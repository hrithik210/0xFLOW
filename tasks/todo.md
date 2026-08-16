# 0xFLOW rebuild (plan: ~/.claude/plans/this-is-my-agency-proud-gadget.md)

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
