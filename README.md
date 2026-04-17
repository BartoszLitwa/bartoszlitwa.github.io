# Bartosz Litwa Portfolio

Personal portfolio website built with React + TypeScript and deployed to GitHub Pages.

Live site: `https://litwa.dev`

## Stack

- React 19 + TypeScript
- Vite 6 build tooling
- React Bootstrap + custom CSS
- JSON-driven content (`src/data/*.json`)
- GitHub Pages deployment via `gh-pages`
- Vitest + React Testing Library

## Local development

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Build

```bash
npm run build
```

## Quality checks

```bash
npm run typecheck
npm run test
npm run test:coverage
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

## Release process

- Run `RELEASE_CHECKLIST.md` before `npm run deploy`.
