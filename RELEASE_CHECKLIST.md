# Release Checklist

Run this checklist before each production deploy.

## 1) Quality gates

- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build`

## 2) Runtime smoke checks (`npm run dev`)

- Home page renders without runtime console errors.
- Language switch EN/PL updates navigation and hero copy.
- Theme switch toggles light/dark and persists after refresh.
- Contact form:
  - Missing env vars shows configuration error.
  - Successful submit shows success message.
  - Failed submit keeps form data and shows error message.
- CV download button downloads `Bartosz_Litwa_CV.pdf`.

## 3) SEO/assets checks

- `public/robots.txt` exists and points to sitemap.
- `public/sitemap.xml` contains canonical `https://litwa.dev/`.
- `public/portfolio-preview.jpg` exists and matches OG tags in `index.html`.

## 4) Deploy

- `npm run deploy`
- Verify `https://litwa.dev` and hard-refresh browser cache.
