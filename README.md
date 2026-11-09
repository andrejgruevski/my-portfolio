# my-portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Contact form

The contact form supports two modes:

1. **Formspree** — create a form at [formspree.io](https://formspree.io), copy `.env.example` to `.env`, and set the endpoint:

   ```bash
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

   When configured, the form submits directly and shows loading, success, and failure states.

2. **Mailto fallback** — when `VITE_FORMSPREE_ENDPOINT` is unset or empty, submitting opens the visitor's email app with the name, email, subject, and message prepared. The site does not claim the message was sent until the visitor sends it from their email app.

For GitHub Pages, add a repository variable named `VITE_FORMSPREE_ENDPOINT` under **Settings → Secrets and variables → Actions → Variables**. The deploy workflow passes it to the build step. Leave it unset to keep the mailto fallback.
