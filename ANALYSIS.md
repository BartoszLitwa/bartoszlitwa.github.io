# Application Architecture and Security Audit

- **Audit period:** 2026-08-16 to 2026-08-17
- **Repository:** `bartoszlitwa.github.io`
- **Scope:** all tracked application source, content data, tests, build tooling, dependency lockfile,
  container configuration, deployment documentation, public assets, and browser integrations.

## Executive summary

This repository contains one public, static React single-page application. It does not contain a
backend service, first-party API, authentication/authorization subsystem, database, migrations, or
native mobile application. Technology references in portfolio JSON describe other projects and are
not executable parts of this repository.

No critical issue was found. The three high findings were remediated: four vulnerable build
dependencies were upgraded, the Docker/Traefik path was hardened, and lazy-section navigation was
made stable. The complete quality gate now passes with zero npm advisories, seven tests, enforced
coverage floors, a production build, valid Compose files, and a tested read-only Nginx container.

Residual risk is concentrated outside the static bundle: external monitoring is absent,
GitHub Pages cannot receive the repository's Nginx headers without an additional edge/CDN, remote
analytics/images remain third-party dependencies, two Compose files duplicate one service, and
several build-tool major upgrades require a planned migration.

## Portfolio modernization note (2026-08-23)

The findings and measurements below preserve the 2026-08-16 to 2026-08-17 audit baseline. A later
content and presentation update makes the primary narrative Bartosz building a Paperclip-powered
AI-native company, with DoifyNow as the parent ecosystem surface and shared platform for a connected
product family. Professional .NET, Angular, Azure, and DevOps experience remains supporting evidence.

Product-family records are separated from legacy engineering projects. They use explicit maturity
labels and optional external URLs, so discovery or in-development work is not presented as publicly
available. The family covers RentifyNow, HouseifyNow, GoalifyNow, DeployifyNow, PostifyNow,
LeadifyNow, InsightifyNow, and SupportifyNow. Metadata describes those concepts conservatively and
does not infer customers, traction, pricing, availability, performance, or product maturity.

The release gate now includes Playwright journeys against the production preview, covering the new
`/#ecosystem` and `/#work` information architecture alongside responsive, keyboard, localization,
reduced-motion, and fallback behavior.

## Current architecture and data flow

```text
Browser
  -> GitHub Pages, or Traefik -> Nginx container
      -> Vite-generated static HTML/CSS/JavaScript/assets
          -> React 19 application
              -> local JSON content and bundled images/fonts
              -> localStorage (validated theme and language preferences only)
              -> Umami analytics (analytics.doifynow.com)
              -> remote image hosts (skill icons and certification badges)
```

There is no confidential application state. Any future `VITE_*` value would be compiled into public
JavaScript and must never be treated as a secret. The unused EmailJS/contact implementation and its
production dependency were removed rather than exposing an unprotected browser mail endpoint.

## Findings register

### Critical

No critical findings.

### High

| ID   | Finding and impact                                                                                                                                                                                                                     | Final disposition                                                                                                                                                                                                                                                                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| H-01 | `brace-expansion`, `js-yaml`, `nanoid`, and `postcss` had high-severity denial-of-service/file-disclosure advisories in development/build paths. They were not shipped in the static runtime, but could affect developer or CI inputs. | **Resolved.** Transitive dependencies and lockfile were updated. `npm audit --include=dev --audit-level=high` reports zero advisories locally and in a clean Docker build.                                                                                                                 |
| H-02 | HTTP was served without a forced HTTPS redirect; the host port listened on every interface; Nginx lacked an explicit security-header policy.                                                                                           | **Resolved for Docker/Traefik.** Added permanent HTTPS redirect, localhost-only diagnostic port, CSP/HSTS and browser hardening headers, no-new-privileges, read-only filesystem with explicit temporary mounts, and bounded logs. GitHub Pages still needs equivalent edge configuration. |
| H-03 | Lazy section IDs did not exist until intersection activation, so in-page links/direct hashes could fail and NavBar could not observe its targets.                                                                                      | **Resolved.** Stable wrapper targets exist at initial render, child IDs no longer duplicate them, click/deep-link scrolling is explicit, reduced-motion is honored, and regression tests cover target availability.                                                                        |

### Medium

| ID   | Finding and impact                                                                                                                 | Final disposition                                                                                                                                                                                                 |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| M-01 | Coverage was a documented but broken gate because the V8 provider was missing; only two tests existed.                             | **Resolved.** Added the matching provider, four regression/data tests (seven total), and minimum 60% statements, 40% branches, 55% functions, and 60% lines. Final coverage is 64.33% / 47.45% / 61.61% / 66.90%. |
| M-02 | No CI enforced formatting, lint, types, tests, build, or audit.                                                                    | **Resolved.** GitHub Actions now uses read-only permissions and pinned action revisions to run `npm ci`, the full gate, and a container build. Dependabot covers npm, Docker, and Actions.                        |
| M-03 | Nginx did not cache WebP assets immutably and did not explicitly prevent stale HTML.                                               | **Resolved.** Fingerprinted assets, including WebP, receive one-year immutable caching; `index.html` receives no-cache/no-store; missing static assets return 404.                                                |
| M-04 | Umami and remote icons/badges are external content dependencies; no CSP or fallback existed.                                       | **Partially resolved.** Docker Nginx now has an origin-restricted CSP and referrer policy. Remote content replacement/outage, lack of analytics SRI, and GitHub Pages header parity remain.                       |
| M-05 | Error handling was limited to a root boundary/console; no independent availability, client-error aggregation, or runbook existed.  | **Partially resolved.** Added health/header/log/rollback operational guidance. Independent uptime alerting and privacy-aware client error collection remain external work.                                        |
| M-06 | Dead EmailJS source/dependency was unreachable, unconfigured, and described as releasable despite needing provider abuse controls. | **Resolved.** Removed the unused source, environment template, types, and production dependency. Existing email/LinkedIn links remain.                                                                            |
| M-07 | Mutable Docker tags and a 31 MB context reduced reproducibility and increased build exposure/cache churn.                          | **Resolved.** Node/Nginx multi-architecture digests are pinned and Dependabot-managed. `.dockerignore` reduces the measured context to about 290 KB while the build still succeeds.                               |
| M-08 | Compose service definitions are duplicated; logs were unbounded and `container_name` limits replicas.                              | **Partially resolved.** Log rotation is bounded and both files validate. Duplication and fixed container naming remain; replica scaling is not currently required for the static site.                            |
| M-09 | Major upgrades are available for the Vite, TypeScript, ESLint, jsdom, and React-plugin toolchain.                                  | **Open, planned.** Safe patch/minor updates were applied. Major upgrades were not mixed into the security repair because they require compatibility and browser/test migration work.                              |
| M-10 | The first CSP draft upgraded the container's relative HTTP assets to HTTPS, breaking documented direct-port access without TLS.    | **Resolved during validation.** Removed the unnecessary upgrade directive; external sources remain HTTPS-only, production same-origin assets inherit HTTPS, and the built SPA now mounts over direct HTTP.        |

### Low

| ID   | Finding and impact                                                                              | Final disposition                                                                                                                                                                                                                  |
| ---- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L-01 | `projects.json` had a duplicate `type` key that standard parsers silently overwrote.            | **Resolved.** Removed the duplicate and added data/translation invariant tests.                                                                                                                                                    |
| L-02 | Formatting included generated Graphify output and failed on maintained files.                   | **Resolved.** Generated output is excluded and the repository formatting gate passes.                                                                                                                                              |
| L-03 | Theme state accepted arbitrary stored strings and replaced every `body` class.                  | **Resolved.** Stored values are validated, storage failures degrade safely, and only owned theme classes are changed; regression tested.                                                                                           |
| L-04 | Certification dates and several accessibility labels were hard-coded in English in Polish mode. | **Partially resolved.** Certification dates now use `pl-PL`/`en-US`; remaining hard-coded assistive labels should move into translations.                                                                                          |
| L-05 | LaTeX compiler intermediates were committed and unused large source/public assets remain.       | **Partially resolved.** Reproducible compiler intermediates were deleted/ignored while `.tex` and PDFs were preserved. Unreferenced GLB/images need an owner decision before deletion because direct public URLs may be consumers. |
| L-06 | Documentation described a former CRA/React 18/Three.js system.                                  | **Resolved.** README, audit, deployment, release, and security documents now describe the current Vite/React 19 static architecture and operations.                                                                                |

## Fixes applied

- Updated vulnerable transitive packages, React patch versions, and the lockfile; removed EmailJS.
- Added explicit Node/npm engine policy and a single `npm run check` release gate.
- Restored coverage, enforced thresholds, and added navigation/theme/content-data regression tests.
- Fixed stable hash targets, initial deep-link handling, active-section observation, main-content focus,
  the misleading hero experience CTA, localized certification dates, and theme class ownership.
- Added CI and weekly dependency/image/action update automation.
- Pinned Docker base digests, minimized build context, and tested clean `npm ci` plus production build.
- Added Traefik HTTPS redirect, localhost host binding, no-new-privileges, read-only filesystem,
  temporary writable mounts, resource controls, health check, and log retention.
- Added Nginx CSP, HSTS, clickjacking, MIME, referrer, permissions, COOP, cache, and server-token
  controls; verified both headers and CSP-compatible application startup against a running
  container.
- Removed duplicate JSON data and generated LaTeX intermediates; excluded generated graph output from
  formatting.
- Replaced stale documentation and added setup, architecture, secrets, security, release, operations,
  monitoring, and rollback guidance.

## Verification evidence after audit fixes (2026-08-17 baseline)

- `npm run check`: pass
  - Prettier: pass
  - ESLint: pass
  - TypeScript: pass
  - Vitest: 2 files / 7 tests pass
  - Coverage: 64.33% statements, 47.45% branches, 61.61% functions, 66.90% lines
  - Vite production build: pass; about 88.60 KB gzip main JS and 35.81 KB gzip main CSS
  - npm audit including development/build packages: 0 advisories
- Clean Docker build: pass; `npm ci` reports 0 advisories
- Docker build context: about 290 KB (previously 31 MB)
- Nginx configuration test: pass
- Both Compose configurations: pass
- Read-only container runtime with no-new-privileges: pass
- Runtime HTTP checks:
  - HTML: 200 and `no-cache, no-store, must-revalidate`
  - fingerprinted JS: 200 and one-year `public, immutable`
  - SPA route: 200
  - missing static JS: 404
  - CSP, HSTS, COOP, permissions, referrer, MIME, and frame headers present
- Browser DOM check: stable lazy targets exist with no duplicate IDs or horizontal overflow at the
  tested desktop viewport; the production bundle mounts under the Nginx CSP with all tested images
  loaded
- EN/PL translation structures: equal (193 scalar paths each)
- Current/history pattern scan: no committed environment file, private key, or recognized token
  pattern; tracked dependency licenses are declared

## Security model and accepted constraints

- The site is public and has no accounts, roles, sessions, access tokens, private records, backend,
  first-party API, or database. Authentication, authorization, migration, query, and database-access
  controls are therefore not applicable.
- React escapes rendered content and the app does not use `dangerouslySetInnerHTML`, `eval`, or
  runtime-generated executable markup.
- A static host cannot implement secret-backed APIs, durable audit logs, or server-side abuse/rate
  controls. Those belong at Traefik/CDN/provider level or in a separately reviewed backend.
- GitHub Pages does not provide repository-controlled arbitrary response headers. Nginx controls
  apply only to the container path unless an edge/CDN adds equivalent policy for Pages.
- Portfolio claims and linked external products/mobile apps were not security-tested because their
  source, infrastructure, accounts, databases, and runtime systems are outside this repository.
- Docker image OS vulnerability scanning was not available in the environment; digest updates and an
  external registry scanner should remain release requirements.

## Remaining security and maintenance priorities

1. Select one authoritative production path and configure/verify header parity if GitHub Pages stays.
2. Add independent HTTPS uptime/TLS/DNS checks and privacy-aware client error reporting with alerts.
3. Self-host or explicitly govern remote icons/badges; define analytics privacy/retention policy and
   an SRI/self-hosting strategy for the Umami script.
4. Consolidate Compose files and remove `container_name` if horizontal replicas become necessary.
5. Plan toolchain major upgrades in isolated pull requests with browser/accessibility regression
   testing.
6. Keep translated assistive labels and real browser journeys current across desktop, mobile,
   keyboard, reduced-motion, and fallback scenarios; add analytics/network-failure coverage.
7. Inventory unreferenced public/source assets before removal, and add registry/SBOM/container CVE
   scanning to CI or the deployment platform.
