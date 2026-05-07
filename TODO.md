# TODO — Portfolio visual + content upgrade

- [x] Remove conflicting static HTML design from `index.html` so Next.js app controls UI.

- [ ] Unify typography/visual system across components (Hero/About/Experience/Skills/Projects/Certifications/Contact/Footer).
- [ ] Fix “real profile + links”:
  - [ ] Add real hrefs for Projects “Code” and “Demo” buttons.
  - [ ] Ensure Contact + Footer URLs match the real ones used in Navbar/GitHub.
  - [ ] Ensure GitHub section uses real username/profile URL.
- [ ] Animation polish/perf:
  - [ ] Ensure Framer Motion animations respect `prefers-reduced-motion` (skip on reduced motion; reduce effects on mobile).
  - [ ] Lighten heavy canvas effects on small screens (smaller particle count / lower connection threshold).
- [ ] SEO/social:
  - [ ] Expand `app/layout.tsx` metadata with Twitter + OpenGraph image.
  - [ ] Remove duplicate Google font loading that conflicts with `next/font/google`.
- [ ] Visual content polish:
  - [ ] Tighten recruiter-friendly copy in Hero/About/Projects/Contact.
  - [ ] Add a clear “What I’m looking for” CTA in Contact.

