# Release Checklist

## 1. Source and automated gates

- Working tree contains only reviewed release changes.
- Run `npm ci` from the committed lockfile.
- Run `npm run check` successfully.
- Confirm the audit includes development/build dependencies and reports no high/critical advisory.
- Confirm coverage remains above the enforced thresholds.
- Confirm GitHub Actions passes for the exact revision being released.

## 2. Deployment validation

- GitHub Pages: confirm `homepage`, canonical URL, Pages source, and custom-domain/DNS ownership.
- Docker: run `docker compose -f compose/docker-compose.yml config` and build the image.
- If the compatibility Compose file is used, validate it separately.
- Confirm base-image digest changes were reviewed.
- Confirm no private value is stored in `VITE_*`, source, Compose labels, or build arguments.

## 3. Browser smoke checks

- No runtime console errors on initial load or scrolling.
- Direct deep links such as `/#experience`, `/#skills`, and `/#projects` land on stable targets.
- Nav active state follows scrolling; mobile menu opens, navigates, and closes.
- EN/PL updates visible copy and document language.
- Light/dark theme toggles and persists without removing unrelated body classes.
- CV downloads from `/Bartosz_Litwa_CV.pdf`.
- Project, certification, social, and ecosystem links use the intended HTTPS destination.
- Remote icons/badges and Umami failures degrade safely.

## 4. SEO, caching, and security headers

- `robots.txt`, `sitemap.xml`, canonical, Open Graph image, and JSON-LD match production content.
- HTTP permanently redirects to HTTPS.
- HTTPS returns HSTS, CSP, clickjacking, MIME-sniffing, referrer, and permissions headers.
- `index.html` is not cached; fingerprinted JS/CSS/WebP assets are immutable.
- Unknown SPA navigation behaves as intended and missing static assets return an error.

## 5. Release and observe

- Deploy using one authoritative path from `DEPLOYMENT.md`.
- Record the source revision and immutable image/deployment revision.
- Verify `https://litwa.dev` from an external network and a mobile viewport.
- Check container/edge logs and analytics ingestion for unexpected failures.
- Keep the prior known-good revision available until verification completes.
