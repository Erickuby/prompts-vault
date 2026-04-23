# Prompt Vault Pro

Prompt Vault Pro is a premium React + Vite web app for browsing, filtering, and copying curated AI prompts across image, prompt engineering, reusable prompt codes, and video workflows.

The interface is designed to feel modern, high-contrast, tech-forward, and premium, with a navy-led visual system, purple depth, cyan highlights, and gold emphasis.

## Features

- Premium dashboard-style layout with responsive desktop and mobile views
- Full-text prompt search across titles, descriptions, templates, rules, and tags
- Tag-based filtering and category navigation
- Expandable prompt cards with copy-to-clipboard actions
- Single-file production build powered by Vite

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Motion
- Lucide React

## Local Development

Prerequisites:

- Node.js 20+ recommended

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

## Production Build

Create a production build with:

```bash
npm run build
```

Preview the built app locally with:

```bash
npm run preview
```

## Deploy To Netlify

This project is ready to host on Netlify.

Build settings:

- Build command: `npm run build`
- Publish directory: `dist`

Option 1: Deploy from GitHub

1. Push this repository to GitHub.
2. In Netlify, choose `Add new site` > `Import an existing project`.
3. Select the GitHub repository.
4. Confirm the build command is `npm run build`.
5. Confirm the publish directory is `dist`.
6. Deploy the site.

Option 2: Manual deploy

1. Run `npm run build`.
2. Upload the generated `dist` folder to Netlify.

## Project Structure

```text
src/
  App.tsx
  index.css
  main.tsx
  data/prompts.ts
index.html
netlify.toml
```

## Notes

- The production build is generated as a single self-contained HTML output.
- No environment variables are required for the current frontend-only deployment on Netlify.
