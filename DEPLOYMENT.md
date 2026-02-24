# Deployment Guide (GitHub Pages)

This project is deployed to GitHub Pages using the `gh-pages` npm package.

## Current deployment setup

From `package.json`:

- `homepage`: `https://litwa.dev`
- `predeploy`: `npm run build`
- `deploy`: `gh-pages -d build`

This means `npm run deploy` will:
1. Build the app
2. Publish the `build/` output to the `gh-pages` branch

## Deploy latest changes

Run these commands from the repository root:

```bash
npm install
npm run build
npm run deploy
```

## Recommended release flow

Use this order to keep source and production in sync:

```bash
git add .
git commit -m "your update message"
git push origin main
npm run deploy
```

## Verify deployment

1. Open repository on GitHub:
   - `Settings -> Pages` (confirm source is `gh-pages` branch)
   - `Deployments` tab (new deployment should appear)
2. Open:
   - `https://litwa.dev`
3. Hard refresh browser:
   - macOS: `Cmd + Shift + R`

## Troubleshooting

### Deployment command fails

- Ensure you are authenticated with GitHub CLI or git credentials.
- Check remote access:

```bash
git remote -v
```

### Build succeeds but old site is shown

- Wait 1-3 minutes for Pages propagation.
- Hard refresh browser cache.
- Check latest deployment status in GitHub `Deployments`.

### Wrong URLs/paths after deploy

- Ensure `homepage` in `package.json` stays:
  - `https://litwa.dev`

## Notes for this repository

- A clean deploy does **not** require deleting old deployments manually.
- If you change domain settings in GitHub Pages, verify DNS still points to GitHub Pages for `litwa.dev`.

