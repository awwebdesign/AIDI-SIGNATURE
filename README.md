# AIDI: website

Static site. No build tooling, no framework, no dependencies: upload the folder
to any web host and it runs.

## What is in here

```
index.html          Home
concept.html        AIDI Concept
voeders.html        10 feeds: filter, expand, compare
supplementen.html   14 supplements: filter, expand
equipment.html      2 equipment lines
systeem.html        14 feeding schedules (PDF)
team.html           Team Noël-Willockx + full results
verkooppunten.html  Searchable stockists + nearby recommendations, 11 countries
contact.html        Contact + international distributors

style.css           All styling. Tokens at the top, see DESIGN.md.
script.js           Language switching, filters, search, sorting, navigation.
i18n.js             All text, in five languages.
data.js             Products, analytical values, dealers, results.

assets/brand/       Logo, traced wings mark, favicons, team photo
assets/products/    26 product photographs
assets/plannen/     14 feeding schedules as PDF
assets/geo.json     Coordinate per dealer, produced by geocode.mjs
assets/maps.json    Simplified country outlines for the map proposals

build.mjs           Development tool: regenerates the HTML. See below.
geocode.mjs         Development tool: looks up a coordinate per dealer.
hero-texture.py     Development tool: grows the sharp 2560px hero grain texture.
demos.html          Design proposals: hero and season section (not linked).
demos-kaart.html    Design proposals: stockists on a map (not linked).
demos.css/.js       Styles and behaviour for those proposal pages only.
PRODUCT.md          Strategy: audience, positioning, principles.
DESIGN.md           The visual system.
```

## Languages

Dutch, French, English, German and Chinese. The pages ship with Dutch already
written into the HTML, so the site is complete and search-engine readable with
JavaScript switched off; `script.js` swaps the text when a visitor picks
another language and remembers the choice in `localStorage`.

Numbers follow the chosen language too: `3.695` in Dutch, `3 695` in French,
`3,695` in English.

## Changing text

All text lives in `i18n.js`, keyed by language. To correct a sentence, find it
there and edit it in each of the five language blocks, then run the build (see
below) so the change lands in the HTML.

## Changing products, prices or dealers

`data.js` holds the structure: which products exist, their analytical values,
which season phase and distance they belong to, and the full dealer list.
`i18n.js` holds their names and descriptions, keyed by the same slug.

To add a stockist, add an entry to `DEALERS` in `data.js` and run the build.

## Rebuilding the HTML

The nine HTML files are generated from `data.js` + `i18n.js` so that 26
products across 9 pages in 5 languages cannot drift out of step. After editing
either file:

```bash
node build.mjs
```

That rewrites the HTML files in place. Nothing is installed and nothing is
downloaded: it only needs Node.

The build stamps a content hash onto the `style.css`, `script.js`, `i18n.js`
and `data.js` links (`i18n.js?v=9f8423b8`). That is what stops a returning
visitor's browser from serving an old copy of the text after you edit it, so
run the build after any change to `i18n.js` or `data.js` and upload the HTML
files along with them.

If you would rather not use it, the HTML files are ordinary static pages and
can be edited by hand; just keep the `data-i18n` attributes intact, since the
language switcher uses them.

## Dealers on a map

The stockist page also uses `assets/geo.json` at build time to recommend the
three closest shops after a visitor clicks “Gebruik mijn locatie”. Browser
location requires HTTPS (or localhost). Coordinates are held only in page
memory; distances are labelled as straight-line estimates. Dealers without
coordinates remain searchable in the full list. Rebuild after updating the
coordinate file.

`geocode.mjs` looks up one coordinate per dealer through OpenStreetMap's
Nominatim service and caches the result in `assets/geo.json`. After adding a
dealer to `data.js`, run:

```bash
node geocode.mjs
```

Existing entries are not looked up again, and the script keeps to Nominatim's
one-request-per-second rule. Five distributors have only a phone number and an
email address, no street address, so they appear in a list rather than as a pin.

## A note on animations

The site honours `prefers-reduced-motion`. On Windows, switching off Settings,
Accessibility, Visual effects, Animation effects sets that preference, and the
hero photo stays still and the nutritional bars and season timeline appear
fully drawn.
That is deliberate. The two proposal pages carry an "Animaties forceren"
checkbox so the motion can still be reviewed on such a machine; the live site
has no override.

## Local preview

```bash
python -m http.server 8322
```

Then open `http://localhost:8322`. Opening the files directly with `file://`
will not work, because the browser blocks the scripts.

## Notes for whoever takes this over

- The logo supplied was a 153×75 JPEG. It has been keyed to a transparent PNG
  and the wings traced to SVG, which covers every size used here: but a proper
  vector original from the designer would be better if one exists.
- `AIDI Manden` has no photograph; that card falls back to the wings mark. Drop
  a file at `assets/products/aidi-manden.jpg` and set `img: 'aidi-manden'` in
  `data.js` to use it.
- The 2022 results are the most recent published on the old site. They are in
  `HIGHLIGHTS_2022` in `data.js` and should be refreshed each season.
