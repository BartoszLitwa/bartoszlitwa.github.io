# Portfolio (litwa.dev) — Deep Analysis & Agent Execution Plan

**Generated:** 2026-04-16 | **Focus:** SEO, performance, content, modernization
**Stack:** React 18 (CRA) + React Bootstrap + Three.js/React Three Fiber
**Deploy:** Docker/Nginx on Dokploy + GitHub Pages

---

## 1. Current State Summary

Personal portfolio site. **Excellent SEO already** (structured data, OG tags, meta tags, keywords). CRA is deprecated but functional. Has 3D elements (Three.js), contact form (EmailJS), certifications, experience, projects showcase. Dual deployment: Docker on Dokploy (litwa.dev) + GitHub Pages.

---

## 2. SEO — Already Strong

### 2.1 DONE (Comprehensive)

- Title: "Bartosz Litwa - Senior Full-Stack Developer & SaaS Founder | Available for Hire"
- Meta description: detailed, keyword-rich, hire-focused
- Meta keywords: extensive freelance/developer/SaaS keywords
- Author, robots (index, follow, max-image-preview, max-snippet, max-video-preview)
- Canonical: [https://litwa.dev](https://litwa.dev)
- OpenGraph: full set (title, description, image, url, type, locale, site_name)
- Twitter Card: full set with @bartoszlitwa handle
- LinkedIn article:author meta
- JSON-LD: Person schema with name, jobTitle, description, sameAs, address, skills, worksFor, alumniOf, knowsAbout
- Umami analytics

### 2.2 Minor Improvements

| Issue                      | Action                                                                            |
| -------------------------- | --------------------------------------------------------------------------------- |
| **OG image may not exist** | `%PUBLIC_URL%/portfolio-preview.jpg` referenced — verify file exists in `public/` |
| **No sitemap.xml**         | Create for better crawling                                                        |
| **No robots.txt**          | Create (simple: allow all)                                                        |

### 2.3 Agent Instructions

```
Step 1: Verify public/portfolio-preview.jpg exists
  - If not: create OG-sized (1200x630) preview image

Step 2: Create public/robots.txt
  User-agent: *
  Allow: /
  Sitemap: https://litwa.dev/sitemap.xml

Step 3: Create public/sitemap.xml
  Single URL: https://litwa.dev/ (SPA, no other routes)
```

---

## 3. Performance — Needs Attention

### 3.1 Issues

| Issue                        | Impact                                | Action                             |
| ---------------------------- | ------------------------------------- | ---------------------------------- |
| **CRA deprecated**           | Build tooling outdated, slower builds | Migrate to Vite                    |
| **Three.js on initial load** | ~300KB+ added to bundle               | Lazy load 3D section               |
| **React 18 (not 19)**        | Missing React 19 features             | Upgrade                            |
| **three 0.148 (old)**        | Latest is 0.170+                      | Upgrade                            |
| **react-on-screen**          | Potentially unmaintained              | Replace with Intersection Observer |
| **Node 22 in Dockerfile**    | Works but Node 24+ available          | Update                             |
| **No code splitting**        | Single bundle                         | Add React.lazy() for sections      |

### 3.2 Agent Instructions — Modernization

```
Step 1: Migrate CRA → Vite (BIG but necessary)
  - npx create-vite@latest migration plan
  - Move src/ structure
  - Update imports (CRA env vars → Vite env)
  - Update tsconfig
  - Remove react-scripts dependency
  - Update Dockerfile build commands

Step 2: Lazy load Three.js
  - Wrap 3D component in React.lazy()
  - Add Suspense with loading fallback
  - Only load when section scrolls into view

Step 3: Replace react-on-screen
  - Use native IntersectionObserver API
  - Or use useScrollAnimation hook (already exists in hooks/)

Step 4: Upgrade dependencies
  - React 18 → 19
  - Three.js 0.148 → latest
  - React Three Fiber 8.x → 9.x (if React 19 compatible)
  - bootstrap + react-bootstrap latest

Step 5: Update Dockerfile
  - Node 22 → Node 24 (or latest LTS)
```

---

## 4. Content — What Exists

### 4.1 Components

- **SimpleBanner** — Hero/banner section
- **Skills** — Skill cards
- **Experience** — Experience cards (KPMG, etc.)
- **FeaturedProject** — RentifyNow + ecosystem showcase (HouseifyNow, GoalifyNow, DoifyNow)
- **Projects** — Project gallery
- **Certifications** — Certification cards
- **Contact** — Contact form (EmailJS) + contact info
- **NavBar** — Navigation + controls
- **Footer** — Footer
- **LanguageProvider** — i18n
- **ErrorBoundary** — Error handling

### 4.2 Content Improvements

| Item                     | Action                                                                    |
| ------------------------ | ------------------------------------------------------------------------- |
| **DeployifyNow missing** | FeaturedProject shows ecosystem but may not include DeployifyNow — add it |
| **Experience section**   | Verify up-to-date — add any new roles/projects                            |
| **Certifications**       | Verify current — add any new certs                                        |
| **Skills**               | Verify matches current tech stack                                         |
| **Contact form**         | Verify EmailJS still works                                                |

### 4.3 Agent Instructions — Content

```
Step 1: Read src/components/FeaturedProject/FeaturedProject.tsx
  - Verify DeployifyNow is listed in ecosystem
  - If not: add card for DeployifyNow

Step 2: Read src/components/Experience/Experience.tsx
  - Verify dates and descriptions current
  - Add any new experience

Step 3: Read src/components/Certifications/Certifications.tsx
  - Add any new certifications

Step 4: Read src/components/skills/Skills.tsx
  - Verify tech stack list matches current (Angular 20, .NET 10, Tailwind, etc.)

Step 5: Verify contact form
  - Check EmailJS service ID is valid
  - Test form submission if possible
```

---

## 5. Missing Features

| Feature                       | Priority | Action                                                             |
| ----------------------------- | -------- | ------------------------------------------------------------------ |
| **Blog section**              | LOW      | Consider adding for SEO — articles about SaaS building, tech stack |
| **Dark mode**                 | LOW      | `useTheme` hook exists — verify dark mode toggle works             |
| **Resume/CV download**        | MEDIUM   | Add downloadable PDF resume                                        |
| **GitHub contribution graph** | LOW      | Embed or link to GitHub profile                                    |

---

## 6. i18n — Exists via LanguageProvider

### 6.1 Current State

- `LanguageProvider` component exists
- `useLanguage` hook exists
- Unclear which languages are supported

### 6.2 Agent Instructions

```
Step 1: Read src/components/LanguageProvider/LanguageProvider.tsx
Step 2: Check what languages are supported
Step 3: Verify language toggle is in NavBar
Step 4: Verify all text is translated (not just English)
```

---

## 7. Deployment — Solid

- Docker: multi-stage build (Node → Nginx)
- Compose with resource limits (512M memory, 0.5 CPU)
- Health check configured
- Traefik routing for litwa.dev + [www.litwa.dev](http://www.litwa.dev)
- GitHub Pages as backup

---

## 8. Prioritized Agent Execution Order

```
Phase 1 — Quick SEO Wins (Impact: MEDIUM, Effort: LOW)
  1.1 Verify portfolio-preview.jpg exists
  1.2 Create robots.txt
  1.3 Create sitemap.xml

Phase 2 — Content Updates (Impact: HIGH, Effort: LOW)
  2.1 Add DeployifyNow to ecosystem showcase
  2.2 Update experience section
  2.3 Update skills list
  2.4 Update certifications
  2.5 Verify contact form works

Phase 3 — Performance Modernization (Impact: HIGH, Effort: HIGH)
  3.1 Migrate CRA → Vite
  3.2 Lazy load Three.js
  3.3 Replace react-on-screen
  3.4 Upgrade React + Three.js + dependencies
  3.5 Add code splitting

Phase 4 — Features
  4.1 Add resume/CV download
  4.2 Verify dark mode toggle
  4.3 Verify language toggle
```
