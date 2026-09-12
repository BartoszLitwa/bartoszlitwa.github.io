# Portfolio design

The portfolio introduces Bartosz Litwa and the DoifyNow product family to prospective collaborators.
Its primary journey is introduction, company and product discovery, professional evidence, and contact.
There is no authenticated application in this repository.

## Direction

Preserve the existing Centra typeface, product icons, violet and green identity, bilingual content,
and React/Bootstrap stack. The company map is the main visual device. Keep its surroundings quiet:
plain typography, restrained surfaces, and no decorative glow, floating cards, or entrance animations.

- Base: `#050507` dark canvas, `#ffffff` light canvas.
- Surface: `#0a0a12` dark sections, `#f8f9fa` light sections.
- Brand: `#6d28d9` violet actions; `#34d399` green context, with `#047857` in light mode.
- Type: bundled Centra 400 for body copy, 500 for controls and secondary headings, 700 for primary headings.
- Layout: a shared 1180px container, left-aligned copy, readable line lengths, and content-based spacing.

```text
Desktop                       Mobile
Introduction | Summary        Introduction
Company copy | Product map    Summary
Featured products             Company copy
Supporting products           Product map
Experience                    Featured / supporting products
Certifications                Experience / certifications
Contact                       Contact
```

The two leading products retain contained surfaces. Supporting products use simple separated entries.
This hierarchy follows the existing portfolio priorities rather than treating every product identically.
The radial company map becomes a wrapping list on narrow screens. Content remains available at every size.

## Maintenance and acceptance

Theme tokens and shared buttons live in `App.css`; reset, focus, and reduced motion live in `index.css`.
Component styles stay beside their components. Do not add unused utility sets or duplicate Bootstrap spacing.
Use native links for navigation and native buttons for actions. Interactive targets are at least 44px high.
The navigation collapses below 1200px to accommodate Polish labels and all controls without crowding.
Escape closes the innermost open menu; keyboard focus returns to its trigger.

Check both languages and themes at desktop, tablet, 390px, and 320px widths. Review every section,
menu, focus state, slow/failed chunk load, missing image fallback, long content, and reduced motion.
The content is static: there are no data-entry forms, user-created empty collections, or disabled actions.
