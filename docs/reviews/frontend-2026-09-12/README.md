# Frontend review evidence

Captured on 12 September 2026 from the local portfolio build. The media contains public portfolio
content and synthetic failure states. The images and video frames were inspected before publication.
These files document the frontend change; they do not prove a production deployment.

- [Desktop, light theme](after-desktop-light.png): typography, introduction, and navigation.
- [Mobile, light theme](after-mobile.png): responsive layout and visible company summary.
- [Mobile language menu](mobile-language-focus.png): touch targets and keyboard focus.
- [Mobile journey](mobile-journey.webm): menu navigation, language/theme changes, preference persistence,
  and section positioning after reload.
- [Error recovery](error-recovery.webm): delayed chunk download, simulated failure, and successful reload.

The files are retained in Git history with this change; there is no configured expiry. Media types,
byte sizes, and SHA-256 digests are recorded in [manifest.json](manifest.json).

Local `npm run check` passed: formatting, lint, types, 13 unit tests with coverage, production build,
52 Chromium browser checks, and the configured high-severity audit threshold. The mobile-only test
has two intentional exclusions on desktop and tablet. Three moderate Vitest-related development
dependency advisories remain. The js-yaml high-severity advisory was fixed with the compatible 4.3.2 patch.

Reviewed all portfolio sections at desktop, tablet, and mobile widths, including 320px reflow,
short landscape menus, EN/PL, light/dark themes, long text, missing images, loading/error recovery,
keyboard navigation, CV download, and reduced motion. There is no authenticated application, settings,
form, modal, chart, or user-data empty state in this repository. Production hosting, external product
workflows, physical devices, Safari/Firefox, assistive-technology certification, and printing were not verified.
