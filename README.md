# Andrej Gruevski — Portfolio

A responsive, dark-themed personal portfolio for Andrej Gruevski, a Full-Stack Developer and Computer Science student at FINKI in Skopje. The site presents academic project repositories, technical skills, and contact information in a single-page experience with subtle motion and accessible navigation.

**Live website:** [https://andrejgruevski.github.io/my-portfolio/](https://andrejgruevski.github.io/my-portfolio/)

![Portfolio preview](public/preview.png)

## Features

- Responsive single-page layout with a dark visual theme
- Animated hero, section reveals, and navigation with reduced-motion support
- About section with focus, education, and language highlights
- Academic Projects section linking to six course repositories
- Categorized technical skill badges
- Contact form with Formspree support and a mailto fallback
- Accessible navigation, skip-to-content link, focus-visible styles, and screen-reader-friendly typing text
- SEO metadata, Open Graph and Twitter cards, JSON-LD Person data, sitemap, and robots.txt
- Automated deployment to GitHub Pages via GitHub Actions

## Technologies

- React 18
- TypeScript 5
- Vite 5
- Tailwind CSS 3
- Framer Motion 12
- Radix UI Toast
- Lucide React icons
- ESLint and TypeScript checks
- GitHub Actions and GitHub Pages

## Project structure

```text
.
├── .github/
│   └── workflows/deploy.yml       # Lint, typecheck, build, and deploy to Pages
├── public/                        # Static assets (icons, preview, robots, sitemap)
├── src/
│   ├── assets/                    # Profile image
│   ├── components/                # Page sections and UI components
│   ├── data/                      # Academic projects, featured projects, skills
│   ├── hooks/                     # Toast hook
│   ├── pages/                     # Page entry
│   ├── App.tsx
│   ├── index.css                  # Design tokens, Tailwind layers, accessibility styles
│   └── main.tsx
├── .env.example                   # Optional Formspree configuration
├── index.html                     # SEO metadata and JSON-LD
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting started

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/andrejgruevski/my-portfolio.git
cd my-portfolio
npm install
```

Optionally create a local environment file:

```bash
cp .env.example .env
```

Start the development server:

```bash
npm run dev
```

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run TypeScript checks and create a production build in `dist/` |
| `npm run build:dev` | Create a development-mode production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check the app and Node TypeScript configurations |
| `npm run deploy` | Publish `dist/` with the `gh-pages` package |

## Contact form configuration

The contact form supports two modes.

### 1. Formspree (direct submissions)

1. Create a form at [formspree.io](https://formspree.io).
2. Copy `.env.example` to `.env`.
3. Set the endpoint:

   ```bash
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

When configured, the form submits directly and displays loading, success, and failure states.

### 2. Mailto fallback

If `VITE_FORMSPREE_ENDPOINT` is unset or empty, submitting the form opens the visitor's email application with the name, email, subject, and message prepared. The site does not claim the message was sent until the visitor sends it from their email app.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which runs lint, typecheck, and the production build before deploying `dist/` to GitHub Pages.

Vite uses a relative base path (`./`) so assets work under the `/my-portfolio/` GitHub Pages subdirectory.

To configure Formspree for the deployed site, add a repository variable named `VITE_FORMSPREE_ENDPOINT` under **Settings → Secrets and variables → Actions → Variables**. The workflow passes it to the build step. Leave it unset to keep the mailto fallback.
