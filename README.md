<div align="center">
  <img src="public/logo.svg" alt="madnol logo" width="80" />

  # madnol.dev
</div>

Personal portfolio of Manuel Desole — software engineer focused on systems, architecture, and craft.

Live at [madnol.dev](https://madnol.dev).

## Stack

- [Astro 6](https://astro.build) — static site generator
- TypeScript (strict)
- Google Fonts via Astro font provider — Inter, Playfair Display, JetBrains Mono
- CSS custom properties for theming (light / dark)

## Project structure

```
src/
├── components/     # page sections (Hero, Header, Footer, SelectedWork, Writing, …)
├── data/           # work.ts — case study entries (Contentful-backed, coming soon)
├── layouts/        # BaseLayout.astro
├── pages/          # index.astro, work/[slug].astro
└── styles/         # variables, typography, utilities, global
public/
└── logo.svg
.github/workflows/
└── ci.yml          # install → build → astro check
```

## Development

```sh
pnpm install
pnpm dev        # localhost:4321
pnpm build      # production build → ./dist/
pnpm preview    # preview the build locally
```

## Deployment

Hosted on [Vercel](https://vercel.com). Every push to `main` triggers a production deploy; PRs get a preview URL automatically.

CI runs on every push and PR via GitHub Actions: installs dependencies, builds, and runs `astro check`.
