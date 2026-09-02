# Consulting website

English-first bilingual static website for CZD Consulting.

## Edit content

All English and Hungarian copy is in `app/content.ts`. Layout and interactions
are in `app/page.tsx`; visual styling is in `app/globals.css`.

## Local development

```bash
npm ci
npm run dev
```

## GitHub Pages

The `main` branch deploys automatically through GitHub Actions. The workflow
reads the repository's Pages base path and builds `dist/client` for either a
project URL or a future custom domain.
