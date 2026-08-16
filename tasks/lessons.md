# Lessons

<!-- [YYYY-MM-DD] | what went wrong | rule to prevent it -->
[2026-08-17] | Shipped a site rebuild where nav (max-w-7xl) and sections (max-w-5xl) used different containers, hero used viewport-relative height creating dead space, and every section had its own whileInView fade; user found it "scattered" | Define ONE container class + ONE vertical rhythm before writing sections; render sections static (animation only where motivated); screenshot the built page (headless_shell in ~/Library/Caches/ms-playwright) and check edge alignment BEFORE delivering visual work.
