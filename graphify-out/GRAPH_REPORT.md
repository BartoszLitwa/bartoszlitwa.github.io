# Graph Report - bartoszlitwa.github.io  (2026-06-09)

## Corpus Check
- 48 files · ~1,003,954 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 469 nodes · 632 edges · 25 communities (23 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d09b1870`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 30 edges
2. `featured` - 24 edges
3. `featured` - 24 edges
4. `compilerOptions` - 20 edges
5. `scripts` - 14 edges
6. `aria` - 13 edges
7. `form` - 13 edges
8. `hero` - 12 edges
9. `hero` - 12 edges
10. `info` - 11 edges

## Surprising Connections (you probably didn't know these)
- `SimpleBanner()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Banner/SimpleBanner.tsx → src/hooks/useLanguage.ts
- `CertificationCard()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Certifications/CertificationCard.tsx → src/hooks/useLanguage.ts
- `Contact()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Contact/Contact.tsx → src/hooks/useLanguage.ts
- `ContactInfo()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Contact/ContactInfo.tsx → src/hooks/useLanguage.ts
- `Experience()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Experience/Experience.tsx → src/hooks/useLanguage.ts

## Import Cycles
- None detected.

## Communities (25 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (53): SimpleBanner(), CertificationCard(), Certifications(), appEnv, hasEmailJsConfig(), Contact(), SubmitState, ContactInfo() (+45 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (47): description, title, billing, crossPlatform, moreProjects, visit, description, title (+39 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (36): dependencies, bootstrap, @emailjs/browser, react, react-bootstrap, react-bootstrap-icons, react-dom, web-vitals (+28 more)

### Community 3 - "Community 3"
Cohesion: 0.08
Nodes (30): description, form, info, subtitle, title, contact, configError, email (+22 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (16): ErrorBoundary, Props, State, LanguageProvider(), LazySectionProps, Certifications, Experience, FeaturedProject (+8 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (25): backend, cloud, database, frontend, tools, en, experience, footer (+17 more)

### Community 6 - "Community 6"
Cohesion: 0.11
Nodes (26): fullStack, microservices, saasArchitecture, connect, downloadCv, exploreEcosystem, viewExperience, hero (+18 more)

### Community 7 - "Community 7"
Cohesion: 0.13
Nodes (25): connectCta, ecosystem, github, githubAlt, hire, homeBrand, linkedin, logoAlt (+17 more)

### Community 8 - "Community 8"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, allowSyntheticDefaultImports, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, lib (+13 more)

### Community 9 - "Community 9"
Cohesion: 0.10
Nodes (19): 1. Current State Summary, 2.1 DONE (Comprehensive), 2.2 Minor Improvements, 2.3 Agent Instructions, 2. SEO — Already Strong, 3.1 Issues, 3.2 Agent Instructions — Modernization, 3. Performance — Needs Attention (+11 more)

### Community 10 - "Community 10"
Cohesion: 0.13
Nodes (20): artificialIntelligence, cloudFundamentals, dataAnalytics, development, devops, categories, description, levels (+12 more)

### Community 11 - "Community 11"
Cohesion: 0.12
Nodes (17): cloud, saas, description, name, title, description, name, description (+9 more)

### Community 12 - "Community 12"
Cohesion: 0.16
Nodes (16): viewProject, projects, all, angular, ariaLabel, cpp, dotnet, flutter (+8 more)

### Community 13 - "Community 13"
Cohesion: 0.14
Nodes (14): scripts, build, deploy, dev, format, format:check, lint, lint:fix (+6 more)

### Community 14 - "Community 14"
Cohesion: 0.15
Nodes (12): background_color, categories, description, dir, display, icons, lang, name (+4 more)

### Community 15 - "Community 15"
Cohesion: 0.18
Nodes (10): Build succeeds but old site is shown, Current deployment setup, Deploy latest changes, Deployment command fails, Deployment Guide (GitHub Pages), Notes for this repository, Recommended release flow, Troubleshooting (+2 more)

### Community 16 - "Community 16"
Cohesion: 0.22
Nodes (8): Bartosz Litwa Portfolio, Build, Content updates, Deploy, Local development, Quality checks, Release process, Stack

### Community 17 - "Community 17"
Cohesion: 0.33
Nodes (5): 1) Quality gates, 2) Runtime smoke checks (`npm run dev`), 3) SEO/assets checks, 4) Deploy, Release Checklist

### Community 19 - "Community 19"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

## Knowledge Gaps
- **237 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `tsRecommendedConfigs` (+232 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `en` connect `Community 5` to `Community 1`, `Community 3`, `Community 6`, `Community 7`, `Community 10`, `Community 12`?**
  _High betweenness centrality (0.183) - this node is a cross-community bridge._
- **Why does `pl` connect `Community 5` to `Community 1`, `Community 3`, `Community 6`, `Community 7`, `Community 10`, `Community 12`?**
  _High betweenness centrality (0.183) - this node is a cross-community bridge._
- **Why does `featured` connect `Community 1` to `Community 5`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _237 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05209274314965372 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06290471785383904 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._