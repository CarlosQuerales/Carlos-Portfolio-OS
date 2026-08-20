# Carlos Portfolio OS

Personal portfolio built with Next.js (App Router), React, JavaScript (JSDoc-typed, not TypeScript), and Tailwind CSS v4. Deployed on Netlify.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command                | What it does                       |
| ---------------------- | ---------------------------------- |
| `npm run dev`          | Local dev server                   |
| `npm run build`        | Production build                   |
| `npm run start`        | Serve the production build locally |
| `npm run lint`         | ESLint                             |
| `npm run format`       | Prettier, writes changes           |
| `npm run format:check` | Prettier, check-only (used in CI)  |

## What this project demonstrates

- A production Next.js App Router site deployed on Netlify
- Reusable components and centralized content models
- SEO metadata generated consistently across routes
- A service layer that separates pages from their current content source
- Recruiter-facing project and case-study pages with honest, public-safe copy

## Architecture

**No component fetches content directly.** Every page gets content by calling a function from `src/services/content.js` — today those functions read from plain JS modules in `src/data/`. When WordPress headless or the AI/RAG assistant get built, the rewrite happens once, inside `services/`, and no page or component changes.

```
src/
  app/            routes only (App Router)
  components/
    ui/           dumb primitives — no data, no fetching
    layout/       Navbar, Footer, SkipToContent
    sections/     composed, page-specific (Hero, Timeline, ProjectCard...)
  data/           content, as plain JS + JSDoc typedefs
  services/
    content.js    the abstraction layer — call this, not data/ directly
  lib/            seo.js, constants.js, analytics.js
  hooks/          useTheme.js
```

## Deployment (Netlify)

`netlify.toml` configures the Netlify Next.js plugin and Node 20. The public deployment is available at [carlosmqueralesporfolio.netlify.app](https://carlosmqueralesporfolio.netlify.app/).
