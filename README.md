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

## Architecture

Full reasoning lives in the Phase 1 architecture doc (shared separately), but the load-bearing idea:

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
    wordpress/    reserved, not implemented yet
    ai/           reserved, not implemented yet
  lib/            seo.js, constants.js, analytics.js
  hooks/          useTheme.js
```

## Before this ships — replace placeholder content

Every file with a `TODO(carlos)` comment has structurally-correct but placeholder content. Non-exhaustive list:

- `src/lib/constants.js` — real GitHub/LinkedIn/email links
- `src/data/profile.js`, `experience.js`, `projects.js`, `case-studies.js` — real bio, real dates, real numbers
- `src/app/api/contact/route.js` — currently logs and returns success; wire a real email provider (Resend recommended) before relying on the contact form
- `public/og-default.png` — add a real Open Graph image (referenced in `src/lib/seo.js`, doesn't exist yet)

## Deployment (Netlify)

`netlify.toml` is already configured (`@netlify/plugin-nextjs`, Node 20). Connect the repo in the Netlify dashboard — no manual build settings needed.
