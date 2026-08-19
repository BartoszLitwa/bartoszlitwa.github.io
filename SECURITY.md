# Security Policy

## Reporting

Please report suspected vulnerabilities privately to `bartosz.litwa@proton.me`. Include the affected
URL or revision, reproduction steps, impact, and any suggested mitigation. Do not include real user
data or perform destructive testing against production.

## Supported version

The latest deployed revision from `main` is supported. Historical portfolio revisions and external
projects linked from the site have their own security scope.

## Security model

This repository builds a public static site. It has no accounts, authentication, authorization,
first-party API, database, or private runtime data. Theme and language preferences are stored in the
visitor's browser.

The principal external dependencies are the hosting platform, Traefik/Nginx when containerized,
Umami analytics, remote image providers, and npm/GitHub Actions/Docker build inputs.

## Secrets and browser configuration

- Never commit `.env` files or private key material.
- Every `VITE_*` value is public and visible in the built JavaScript.
- Do not place server tokens, passwords, signing keys, or private API credentials in frontend code,
  Vite variables, Compose labels, or Docker build arguments.

## Maintainer controls

- `npm run check` must pass before release and audits development/build dependencies.
- CI uses read-only repository permissions and immutable action revisions.
- Docker base images are digest-pinned and updated through reviewed Dependabot changes.
- Docker deployment redirects to HTTPS and supplies CSP, HSTS, clickjacking, MIME, referrer, and
  browser-permission headers.
- External monitoring, DNS/TLS controls, CDN configuration, provider accounts, and production secret
  stores are operated outside this repository and must be reviewed separately.
