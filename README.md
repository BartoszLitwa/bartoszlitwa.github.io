# Bartosz Litwa Portfolio

Personal portfolio website built with React + TypeScript and deployed to GitHub Pages.

Live site: `https://litwa.dev`

## Stack

- React 18 + TypeScript
- React Bootstrap + custom CSS
- JSON-driven content (`src/data/*.json`)
- GitHub Pages deployment via `gh-pages`

## Local development

```bash
npm install
npm start
```

App runs at `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy

Use the deployment guide:

- `DEPLOYMENT.md`

Quick command:

```bash
npm run deploy
```

## Content updates

Most portfolio content is managed in:

- `src/data/projects.json`
- `src/data/experience.json`
- `src/data/skills.json`
- `src/data/certifications.json`
- `src/data/translations.json`