# Design

The visual system for aidi.be. Tokens live in `style.css` under `:root`; this
document explains what they are for and when to reach for each one.

## Theme

Light, committed. `color-scheme: light` is set explicitly and there is no dark
variant: the brief is white and blue, and a single confident look serves it
better than two half-considered ones.

Dark surfaces are handled by a class, not a theme. `.on-dark` remaps the
context aliases (`--bg`, `--fg`, `--fg-2`, `--fg-3`, `--rule`, `--accent`, and
the three data-ramp steps) so components drop onto navy without needing dark
variants of their own. The hero, the proof band, the CTA card and the footer
all use it.

## Color

Strategy: **committed**. White is the page ground, deep navy carries the hero,
proof band, CTA and footer, and one saturated azure is the single signal.

The brand blue is taken from the AIDI logo (`#345081`), not invented. The teal
that the old site used in its chrome contradicted that logo and has been
dropped; teal now appears only where it genuinely exists, on the product
packaging in the photographs.

| Token | Value | Use |
|---|---|---|
| `--paper` | `oklch(0.995 0.002 250)` | Page ground |
| `--surface` | `oklch(0.973 0.006 250)` | Alternating section bands |
| `--surface-2` | `oklch(0.948 0.010 252)` | Chips, thumbnails, inset wells |
| `--line` / `--line-soft` | `oklch(0.893 / 0.936 …)` | Borders, hairline rules |
| `--ink` | `oklch(0.215 0.042 262)` | Body text, 12.6:1 on paper |
| `--ink-2` | `oklch(0.375 0.036 262)` | Secondary text |
| `--ink-3` | `oklch(0.475 0.030 262)` | Muted floor, 4.9:1. Do not go lighter |
| `--navy` | `oklch(0.420 0.093 264)` | The logo blue: primary buttons, active nav |
| `--navy-deep` | `oklch(0.265 0.070 264)` | Button hover, large panels |
| `--navy-ink` | `oklch(0.185 0.050 264)` | Hero, footer, proof band ground |
| `--signal` | `oklch(0.555 0.185 250)` | The one accent: CTA fills, NEW badge, focus ring |
| `--signal-ink` | `oklch(0.475 0.170 254)` | Signal as text on white |
| `--signal-lift` | `oklch(0.720 0.145 246)` | Signal on navy |

Neutrals are tinted toward the brand hue (250–262), never toward warm.

**Data ramp.** `--m-fat`, `--m-pro`, `--m-carb` are the three steps of the
macro bar, lifted inside `.on-dark`. Every segment is always paired with a
label and a value, so the chart never depends on colour alone.

Every text/background pair on all nine pages in all five languages clears
WCAG AA. `--signal` was darkened from L 0.60 specifically so white text on a
signal-filled button reaches 4.5:1.

## Typography

One family: **Archivo** (Google Fonts, variable), loaded across `wdth 62..125`
and `wght 100..900`.

The width axis is what makes a single family work here. Headings run at
`font-stretch: 112%` (118% on the hero) and read engineered rather than
editorial; body text sits at normal width. Numbers use
`font-variant-numeric: tabular-nums` throughout so columns of analytical
values line up.

Scale is fluid `clamp()` with a ratio above 1.25 between steps: `--display`
(max 5.15rem), `--h1`, `--h2`, `--h3`, `--h4`, `--body`, `--small`, `--micro`.
Display letter-spacing is `-0.036em`, comfortably above the −0.04em floor.

Chinese neutralises both the width axis and the tight tracking (`:lang(zh)`
block) and falls back to a CJK stack, because Archivo carries no Han glyphs
and Latin tracking makes Han characters look cramped.

`.field-label` is the only small-caps treatment, and it is reserved for unit
and field names inside data readouts. It is not a section eyebrow.

## Layout

Container `--max: 1290px` with a fluid `--gutter`. Sections use `--section`
padding and alternate `.band` (surface) against plain paper for rhythm.
`.wrap--narrow` (880px) carries long-form reading on the concept page.

Prose is capped at `--measure: 68ch`.

**Rows, not cards.** Feeds and supplements are dense full-width `<details>`
rows rather than a card grid, because the point is comparison: shared columns
let a fancier read fat and carbohydrate across ten mixtures at a glance.
Cards appear only where they are genuinely the right affordance: the range
index and the dealer list.

Grid cells draw their separators with an inset box-shadow rather than a 1px
gap over a coloured container, so a short final row does not leave a grey hole.

## Signature components

- **`.macro`**: the fingerprint. A segmented fat/protein/carbohydrate bar
  with three separated bands, each labelled with its true published value.
- **`.hero--grain`**: selected Hero A from the demos: a full-width Mix 3
  photograph, three headline lines and a bottom strip with the published
  nutritional values and a link to the featured mixture.
- **`.spec`**: the seven analytical values as a proper readout.
- **`.season-timeline`**: selected Season 1 from the demos: four numbered
  phases connected by a rail, horizontal on desktop and vertical on mobile.
  Each phase links to the corresponding feed filter.
- **`.compare`**: sortable table across all ten mixtures.

## Motion

Exponential ease-out (`--ease: cubic-bezier(0.16, 1, 0.3, 1)`), no bounce.
Durations `--t-fast` 140ms, `--t` 260ms, `--t-slow` 620ms.

Motion never gates content. `script.js` adds text reveal states with observer
fallbacks and a `beforeprint` release. Nutrient bars use Hero C's animation:
each segment grows from its left edge over 800ms, with a 260ms lead-in and
a fixed 60ms stagger per product. Profile rows remain visible during the draw.
Segments are prepared at their empty first frame and paused until they enter
the viewport, so the completed bars never flash before drawing. Print and
reduced-motion changes release both playing and offscreen paused effects.
Hero A uses its own 1100ms bar wipe after 520ms, with figures counting over
1100ms after 380ms, and 900ms headline reveals spaced by 90ms.
The timeline draws over 1400ms and lights its nodes
in sequence. These use temporary Web Animations effects over fully visible
default styles. Reduced motion skips the segment growth, rail drawing and
hero photo zoom; printing cancels any active data animations.
Hero line wrappers retain `display: block` throughout the reveal: changing
them back to inline text would stop the vertical transforms from rendering.

Layout properties are not animated. The header keeps a constant height and
scales the wordmark with a transform instead.

`prefers-reduced-motion: reduce` drops all animation and reveals everything.

## Elevation and shape

Shadows are blue-tinted, never grey: `--shadow-1/2/3`. Radii are modest,
`--r-sm` 4px through `--r-xl` 24px, and read engineered rather than bubbly.

`z-index` follows a semantic scale: `--z-sticky` 100, `--z-dropdown` 200,
`--z-backdrop` 300, `--z-modal` 400, `--z-toast` 500. No arbitrary values.

## Imagery

Art direction differs by section, deliberately:

- **Feeds** use AIDI's own macro photography of the grain mixes: full-bleed,
  tactile, and unique to the brand.
- **Supplements** use the packshots, floated on white with `object-fit: contain`.
- **Team** uses the photograph of Eddy and Ivan, captioned.

The wings from the AIDI logo were traced to `assets/brand/wings.svg`
(`fill: currentColor`) and serve as the watermark on dark panels, the favicon
and the placeholder where a product has no photograph.

## Accessibility

WCAG 2.2 AA. Visible focus on everything (2.5px signal outline, 3px offset).
One `h1` per page and no skipped heading levels. Product names are real `h2`
headings so a screen-reader user can move between them. Touch targets ≥44px.
Five languages carry correct `lang` attributes, including `zh-Hans`.
