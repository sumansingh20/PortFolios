# Suman Kumar — Portfolio

Personal portfolio of **Suman Kumar** — Security Engineer and Full-Stack Developer from IIT Patna. Built as a fast, accessible, single-page Next.js site with real, live data pulled from GitHub.

- Live projects link to their real repositories and deployed demos
- The GitHub section reads my public profile through a server route (no fake numbers)
- Contact links point to my real email, LinkedIn, GitHub, and LeetCode

## Tech Stack

- **Next.js 15** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animation
- **Lucide React** for icons

## Sections

1. Hero — animated role headline with a canvas particle background
2. About — background and real stats
3. Skills — grouped by domain
4. Projects — real repositories with live demo links
5. Experience
6. Education
7. Certifications
8. GitHub — live profile stats and top repositories
9. Contact — real contact channels and a mail-draft form
10. Footer

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Production build

```bash
npm run build
npm start
```

## Environment Variables

The GitHub section works without any configuration. To raise the GitHub API rate limit, add a token:

```bash
cp .env.example .env.local
# then set:
# GITHUB_TOKEN=your_personal_access_token
```

## Project Structure

```
├── app/
│   ├── api/profile/github/route.ts   # Live GitHub profile route
│   ├── layout.tsx                    # Root layout + metadata + fonts
│   ├── page.tsx                      # Page composition
│   └── globals.css                   # Design system
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx
│   ├── TemplateEffects.tsx           # Cursor, preloader, canvas, scroll progress
│   └── sections/                     # One file per section
├── lib/site.ts                       # Single source of truth for links/contact
└── public/suman.png                  # Profile photo
```

## Contact

- Email: sumantech07@gmail.com
- GitHub: https://github.com/sumansingh20
- LinkedIn: https://www.linkedin.com/in/sumankumar-/
- LeetCode: https://leetcode.com/u/sumansingh20/
- Location: Patna, Bihar, India

## License

MIT — see [LICENSE](./LICENSE).
