/* AIDI, page generator (development tool).
   Reads data.js + i18n.js and writes the nine static HTML pages.

   Why a generator: the shipped deliverable is plain HTML/CSS/JS with no
   runtime dependency, but hand-maintaining 26 products across nine pages
   invites drift. Pages are emitted with Dutch already in the markup and a
   data-i18n key on every string, so the site is complete without JavaScript
   and script.js only has to swap languages.

   Run:  node build.mjs
*/

import { readFileSync, writeFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { createHash } from 'node:crypto';

/* Short content hash per asset, appended to its URL. Without this a browser
   keeps serving the previous style.css or i18n.js after an edit, and stale
   translations look exactly like broken ones. */
const rev = (file) =>
  file + '?v=' + createHash('sha1').update(readFileSync(file)).digest('hex').slice(0, 8);

/* ------------------------------------------------------------- context -- */

const NAMES = [
  'FEEDS', 'SUPPLEMENTS', 'SUPP_GROUPS', 'EQUIPMENT', 'PLANS', 'DEALERS',
  'COUNTRY_ORDER', 'HIGHLIGHTS_2022', 'ACES', 'CONTACT', 'LANGS', 'I18N',
  'PHASES', 'BANDS'
];

/* `const` at the top level of a vm script does not land on the context
   object, so the sources are concatenated and the bindings handed back
   through one trailing expression. */
const ctx = createContext({});
const {
  FEEDS, SUPPLEMENTS, SUPP_GROUPS, EQUIPMENT, PLANS, DEALERS, COUNTRY_ORDER,
  HIGHLIGHTS_2022, ACES, CONTACT, LANGS, I18N, PHASES, BANDS
} = runInContext(
  readFileSync('data.js', 'utf8') + '\n' +
  readFileSync('i18n.js', 'utf8') + '\n' +
  `({ ${NAMES.join(', ')} })`,
  ctx
);

const NL = I18N.nl;
const GEO = JSON.parse(readFileSync('assets/geo.json', 'utf8'));
const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

/* Dutch decimal comma for the shipped markup; script.js re-formats per locale. */
const num = (v, dec = 1) => Number(v).toFixed(dec).replace('.', ',');
const nl = (path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), NL);

/* Translated text plus its key, the pattern used everywhere below. */
const T = (key, tag = 'span', attrs = '') =>
  `<${tag} data-i18n="${key}"${attrs ? ' ' + attrs : ''}>${esc(nl(key))}</${tag}>`;

/* Heading wrapped in a mask so it can wipe up on arrival. */
const TMask = (key, tag = 'h1', cls = '') =>
  `<${tag} class="rv-mask${cls ? ' ' + cls : ''}"><span data-i18n="${key}">${esc(nl(key))}</span></${tag}>`;

const N = (value, dec = 1) =>
  `<span data-num="${value}" data-dec="${dec}">${num(value, dec)}</span>`;

/* --------------------------------------------------------------- icons -- */
/* One set, drawn on the same 24-grid with the same 1.75 stroke. */
const svg = (paths, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${paths}</svg>`;

const ICON = {
  chevronDown: svg('<path d="M5 9l7 7 7-7"/>'),
  arrowRight: svg('<path d="M4 12h15M13 6l6 6-6 6"/>'),
  search: svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>'),
  x: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  phone: svg('<path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6 8.5-6"/>'),
  file: svg('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>'),
  basket: svg('<path d="M4 9h16l-1.4 9.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8z"/><path d="M8.5 9 12 3.5 15.5 9"/>'),
  link: svg('<path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.8-2.8a4 4 0 0 0-5.7-5.7L11.8 6.5"/><path d="M13.5 10.5a4 4 0 0 0-5.7 0L5 13.3a4 4 0 0 0 5.7 5.7l1.5-1.5"/>')
};

const WINGS = readFileSync('assets/brand/wings.svg', 'utf8')
  .replace('<svg ', '<svg class="mark" ');

/* --------------------------------------------------------------- shell -- */

const NAV = [
  ['concept', 'concept.html'],
  ['voeders', 'voeders.html'],
  ['supplementen', 'supplementen.html'],
  ['equipment', 'equipment.html'],
  ['systeem', 'systeem.html'],
  ['team', 'team.html'],
  ['verkooppunten', 'verkooppunten.html']
];

/* The signature shell: a quiet bar (logo, stockist link, language, menu) that
   inverts over dark sections, and a full-screen menu at every width. The
   .burger / .drawer / .drawer__link names are kept so script.js still owns
   opening, closing and Escape. */
const RANGE_COUNT = { voeders: FEEDS.length, supplementen: SUPPLEMENTS.length, equipment: EQUIPMENT.length };

function masthead(active) {
  const langOptions = LANGS.map((l) =>
    `<button type="button" class="lang__option" data-lang="${l.code}" lang="${l.html}" aria-current="${l.code === 'nl'}"><span class="lang__code">${l.code.toUpperCase()}</span>${esc(l.name)}</button>`
  ).join('\n              ');

  const menuLinks = [...NAV, ['contact', 'contact.html']].map(([key, href]) =>
    `<a class="drawer__link" href="${href}"${href === active ? ' aria-current="page"' : ''}>
            <span class="drawer__word" data-i18n="nav.${key}">${esc(nl('nav.' + key))}</span>${RANGE_COUNT[key] ? `<sup class="drawer__count">${RANGE_COUNT[key]}</sup>` : ''}
          </a>`
  ).join('\n          ');

  return `  <header class="masthead" data-tone="light">
    <div class="masthead__bar">
      <a class="brand" href="index.html" aria-label="AIDI, home">
        <img src="assets/brand/logo-aidi.png" alt="AIDI" width="433" height="225">
      </a>
      <div class="masthead__end">
        <a class="masthead__link" href="verkooppunten.html" data-i18n="ui.findDealer">${esc(nl('ui.findDealer'))}</a>
        <div class="lang">
          <button type="button" class="lang__toggle" aria-expanded="false" aria-haspopup="true">
            <span class="visually-hidden" data-i18n="ui.language">${esc(nl('ui.language'))}</span>
            <span class="lang__current">NL</span>
            ${ICON.chevronDown}
          </button>
          <div class="lang__menu" role="menu" hidden>
              ${langOptions}
          </div>
        </div>
        <button type="button" class="burger" aria-expanded="false" aria-controls="drawer" aria-label="${esc(nl('ui.menu'))}">
          <span class="burger__label" data-i18n="sig.menuTitle">${esc(nl('sig.menuTitle'))}</span>
          <span class="burger__lines" aria-hidden="true"><i></i><i></i></span>
        </button>
      </div>
    </div>
  </header>

  <div class="drawer" id="drawer" hidden>
    <div class="drawer__inner">
      <nav class="drawer__nav" aria-label="Hoofdnavigatie">
          ${menuLinks}
      </nav>
      <div class="drawer__side">
        <p class="drawer__line" data-i18n="sig.advice">${esc(nl('sig.advice'))}</p>
        <a class="drawer__tel" href="${CONTACT.eddy.href}"><span>${esc(CONTACT.eddy.name)}</span>${esc(CONTACT.eddy.tel)}</a>
        <a class="drawer__tel" href="${CONTACT.ivan.href}"><span>${esc(CONTACT.ivan.name)}</span>${esc(CONTACT.ivan.tel)}</a>
        <a class="drawer__tel" href="mailto:${CONTACT.email}"><span>E-mail</span>${CONTACT.email}</a>
        ${WINGS.replace('class="mark"', 'class="mark drawer__mark"')}
      </div>
    </div>
  </div>`;
}

function footer() {
  const col = (heading, items) =>
    `<div>
          <h2 class="foot__h" data-i18n="footer.${heading}">${esc(nl('footer.' + heading))}</h2>
          ${items.map(([key, href]) => `<a href="${href}" data-i18n="${key}">${esc(nl(key))}</a>`).join('\n          ')}
        </div>`;

  return `  <footer class="foot" data-tone="dark">
    <div class="wrap">
      <div class="foot__top">
        <p class="foot__sign">${T('sig.heroC')}</p>
        <div class="foot__call">
          <a href="${CONTACT.eddy.href}"><span>${esc(CONTACT.eddy.name)}</span>${esc(CONTACT.eddy.tel)}</a>
          <a href="${CONTACT.ivan.href}"><span>${esc(CONTACT.ivan.name)}</span>${esc(CONTACT.ivan.tel)}</a>
          <a href="mailto:${CONTACT.email}"><span>E-mail</span>${CONTACT.email}</a>
        </div>
      </div>
      <div class="foot__grid">
        <div class="foot__brand">
          <p data-i18n="footer.about">${esc(nl('footer.about'))}</p>
          <p class="foot__made">
            <img src="assets/brand/made-in-belgium.png" alt="" width="124" height="120">
            <span data-i18n="footer.madeIn">${esc(nl('footer.madeIn'))}</span>
          </p>
        </div>
        ${col('range', [['nav.voeders', 'voeders.html'], ['nav.supplementen', 'supplementen.html'], ['nav.equipment', 'equipment.html']])}
        ${col('company', [['nav.concept', 'concept.html'], ['nav.team', 'team.html'], ['nav.systeem', 'systeem.html']])}
        ${col('support', [['nav.verkooppunten', 'verkooppunten.html'], ['nav.contact', 'contact.html']])}
      </div>
      <div class="foot__base">
        <span>© <span data-year>2026</span> Team Noël-Willockx. <span data-i18n="footer.rights">${esc(nl('footer.rights'))}</span></span>
        <span data-i18n="footer.colophon">${esc(nl('footer.colophon'))}</span>
      </div>
    </div>
    <p class="foot__word" aria-hidden="true">AIDI</p>
  </footer>`;
}

function page({ file, key, active, body }) {
  return `<!doctype html>
<html lang="nl" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(nl(key + '.title'))}</title>
<meta name="description" content="${esc(nl(key + '.meta'))}">
<meta name="theme-color" content="#0b1322">
<link rel="icon" href="assets/brand/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="assets/brand/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap">
<link rel="stylesheet" href="${rev('style.css')}">
<link rel="stylesheet" href="${rev('signature.css')}">
<script>document.documentElement.className = 'js';</script>
</head>
<body data-page="${key}">
<a class="skip-link" href="#main" data-i18n="ui.skip">${esc(nl('ui.skip'))}</a>

${masthead(active)}

<main id="main">
${body}
</main>

${footer()}

<script src="${rev('data.js')}"></script>
<script src="${rev('i18n.js')}"></script>
<script src="${rev('script.js')}"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js"></script>
<script src="${rev('signature.js')}"></script>
</body>
</html>
`;
}

/* ---------------------------------------------------------- components -- */

function macroBar(m, { large = false, reveal = true } = {}) {
  const sum = m.fat + m.protein + m.carbs;
  const segs = [
    ['fat', m.fat, 'spec.fat'],
    ['pro', m.protein, 'spec.protein'],
    ['carb', m.carbs, 'spec.carbs']
  ];
  return `<span class="macro${large ? ' macro--lg' : ''}">
              <span class="macro__track"${reveal ? ' data-reveal' : ''}>
                ${segs.map(([c, v]) => `<span class="macro__seg macro__seg--${c}" style="width:${(v / sum * 100).toFixed(2)}%"></span>`).join('\n                ')}
              </span>
              <span class="macro__key">
                ${segs.map(([c, v, k]) => `<span class="macro__item"><span class="macro__swatch" style="background:var(--m-${c})"></span><span data-i18n="${k}">${esc(nl(k))}</span> <span class="macro__val">${N(v)}%</span></span>`).join('\n                ')}
              </span>
            </span>`;
}

function specList(m) {
  const rows = [
    ['spec.fat', `${N(m.fat)}<small>%</small>`],
    ['spec.protein', `${N(m.protein)}<small>%</small>`],
    ['spec.absorbable', `${N(m.absorbable)}<small>%</small>`],
    ['spec.carbs', `${N(m.carbs)}<small>%</small>`],
    ['spec.fibre', `${N(m.fibre)}<small>%</small>`],
    ['spec.kcal', `${N(m.kcal, 0)}<small> ${esc(nl('spec.kcalUnit'))}</small>`],
    ['spec.omega', `${N(m.omega)}<small> : 1</small>`]
  ];
  return `<dl class="spec">
                ${rows.map(([k, v]) => `<div><dt data-i18n="${k}">${esc(nl(k))}</dt><dd>${v}</dd></div>`).join('\n                ')}
              </dl>`;
}

function detailBody(slug, { spec = null, sizes = [], extra = '' } = {}) {
  const p = NL.p[slug];
  const paras = p.desc.map((d) => `<p>${esc(d)}</p>`).join('\n                  ');
  const usage = p.use.length
    ? `<div class="detail-block" data-usage-block>
                  <h3 data-i18n="ui.usage">${esc(nl('ui.usage'))}</h3>
                  <ul class="usage" data-i18n-items="p.${slug}.use">
                    ${p.use.map((u) => `<li>${esc(u)}</li>`).join('\n                    ')}
                  </ul>
                </div>` : '';
  const ing = p.ing
    ? `<div class="detail-block">
                  <h3 data-i18n="ui.composition">${esc(nl('ui.composition'))}</h3>
                  <p class="ingredients" data-i18n="p.${slug}.ing">${esc(p.ing)}</p>
                </div>` : '';
  const sizeBlock = sizes.length
    ? `<div class="detail-block">
                  <h3 data-i18n="ui.available">${esc(nl('ui.available'))}</h3>
                  <div class="tags">${sizes.map((s) => `<span class="badge badge--phase">${esc(s)}</span>`).join('')}</div>
                </div>` : '';

  return `<div class="row__detail">
            <div class="row__detail-grid">
              <div>
                <div class="detail-block prose" data-i18n-paras="p.${slug}.desc">
                  ${paras}
                </div>
                ${usage}
                ${ing}
              </div>
              <div>
                ${spec ? `<div class="detail-block"><h3 data-i18n="ui.analytics">${esc(nl('ui.analytics'))}</h3>${specList(spec)}</div>` : ''}
                ${sizeBlock}
                ${extra}
                <div class="detail-block">
                  <a class="arrow-link" href="verkooppunten.html"><span data-i18n="ui.findDealer">${esc(nl('ui.findDealer'))}</span>${ICON.arrowRight}</a>
                </div>
              </div>
            </div>
          </div>`;
}

function thumb(img, kind) {
  if (!img) {
    return `<span class="row__thumb row__thumb--none">${WINGS}</span>`;
  }
  const cls = kind === 'pack' ? ' row__thumb--pack' : '';
  return `<span class="row__thumb${cls}"><img src="assets/products/${img}.jpg" alt="" loading="lazy" decoding="async" width="700" height="700"></span>`;
}

function feedRow(f) {
  const p = NL.p[f.slug];
  const badges = f.phases.map((ph) => `<span class="badge badge--phase" data-i18n="phase.${ph}">${esc(nl('phase.' + ph))}</span>`).join('')
    + f.bands.map((b) => `<span class="badge badge--phase" data-i18n="band.${b}">${esc(nl('band.' + b))}</span>`).join('');

  return `        <details class="row" id="${f.slug}" data-phase="${f.phases.join(' ')}" data-band="${f.bands.join(' ')}" data-rise>
          <summary class="row__summary">
            ${thumb(f.img)}
            <span class="row__main">
              <h2 class="row__name">
                <span data-i18n="p.${f.slug}.name">${esc(p.name)}</span>
                ${f.isNew ? `<span class="badge badge--new" data-i18n="ui.new">${esc(nl('ui.new'))}</span>` : ''}
              </h2>
              <span class="row__tag" data-i18n="p.${f.slug}.tag">${esc(p.tag)}</span>
              <span class="tags">${badges}</span>
            </span>
            <span class="row__data">
              ${macroBar(f.macro)}
            </span>
            <span class="row__end">
              <span class="row__kcal">
                <span class="field-label" data-i18n="spec.energy">${esc(nl('spec.energy'))}</span>
                <b>${N(f.macro.kcal, 0)}</b>
                <span class="field-label" data-i18n="spec.kcalUnit">${esc(nl('spec.kcalUnit'))}</span>
              </span>
              <span class="row__chevron">${ICON.chevronDown}</span>
            </span>
          </summary>
          ${detailBody(f.slug, { spec: f.macro, sizes: f.sizes })}
        </details>`;
}

function suppRow(s) {
  const p = NL.p[s.slug];
  return `        <details class="row" id="${s.slug}" data-group="${s.group}" data-rise>
          <summary class="row__summary">
            ${thumb(s.img, 'pack')}
            <span class="row__main">
              <h2 class="row__name">
                <span data-i18n="p.${s.slug}.name">${esc(p.name)}</span>
                ${s.isNew ? `<span class="badge badge--new" data-i18n="ui.new">${esc(nl('ui.new'))}</span>` : ''}
              </h2>
              <span class="row__tag" data-i18n="p.${s.slug}.tag">${esc(p.tag)}</span>
              <span class="tags"><span class="badge badge--phase" data-i18n="group.${s.group}">${esc(nl('group.' + s.group))}</span></span>
            </span>
            <span class="row__end">
              <span class="row__kcal">
                ${s.sizes.length ? `<span class="field-label" data-i18n="ui.available">${esc(nl('ui.available'))}</span><b>${esc(s.sizes[0])}</b>` : ''}
              </span>
              <span class="row__chevron">${ICON.chevronDown}</span>
            </span>
          </summary>
          ${detailBody(s.slug, { sizes: s.sizes })}
        </details>`;
}

function cta(kind = 'default') {
  const title = kind === 'dealer' ? 'verkooppunten.ctaTitle' : 'home.ctaTitle';
  const body = kind === 'dealer' ? 'verkooppunten.ctaBody' : 'home.ctaBody';
  return `  <section class="section">
    <div class="wrap">
      <div class="cta on-dark" data-rise>
        ${WINGS.replace('class="mark"', 'class="mark cta__mark"')}
        <div class="cta__inner">
          <div>
            ${T(title, 'h2')}
            ${T(body, 'p')}
          </div>
          <div class="btn-row">
            <a class="btn btn--signal" href="verkooppunten.html" data-i18n="ui.findDealer">${esc(nl('ui.findDealer'))}</a>
            <a class="btn btn--outline" href="contact.html" data-i18n="nav.contact">${esc(nl('nav.contact'))}</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function pagehead(key, crumbLabel, narrow = false) {
  return `  <section class="pagehead">
    <div class="wrap${narrow ? ' wrap--narrow' : ''}">
      <nav class="crumbs" aria-label="Kruimelpad">
        <a href="index.html" data-i18n="ui.home">${esc(nl('ui.home'))}</a>
        <span aria-hidden="true">/</span>
        <span data-i18n="nav.${crumbLabel}">${esc(nl('nav.' + crumbLabel))}</span>
      </nav>
      ${TMask(key + '.h1')}
      ${T(key + '.lede', 'p', 'class="lede"')}
    </div>
  </section>`;
}

function filterBar(target, groups) {
  const group = (facet, labelKey, values) => `
        <div class="filters__group" role="group" aria-label="${esc(nl(labelKey))}" data-i18n-attr="aria-label:${labelKey}">
          <span class="field-label filters__label" data-i18n="${labelKey}">${esc(nl(labelKey))}</span>
          <button type="button" class="chip" data-facet="${facet}" data-value="" aria-pressed="true" data-i18n="ui.all">${esc(nl('ui.all'))}</button>
          ${values.map(([v, k]) => `<button type="button" class="chip" data-facet="${facet}" data-value="${v}" aria-pressed="false" data-i18n="${k}">${esc(nl(k))}</button>`).join('\n          ')}
        </div>`;

  return `      <div class="filters" data-filters="${target}">
        ${groups.map(([facet, labelKey, values]) => group(facet, labelKey, values)).join('\n')}
        ${target === 'feed-list' ? T('voeders.filterHelp', 'p', 'class="filters__help"') : ''}
        <span class="filters__count" data-count role="status" aria-live="polite"></span>
        <button type="button" class="btn btn--outline btn--sm" data-filter-reset hidden data-i18n="ui.reset">${esc(nl('ui.reset'))}</button>
      </div>`;
}

function emptyState() {
  return `      <div class="empty" data-empty hidden>
        ${T('ui.noResults', 'h3')}
        ${T('ui.noResultsBody', 'p')}
        <p><button type="button" class="btn btn--outline btn--sm" data-reset data-i18n="ui.reset">${esc(nl('ui.reset'))}</button></p>
      </div>`;
}

/* =============================================================== pages == */

/* --------------------------------------------------------------- home -- */

/* --------------------------------------------------------------- home -- */
/* The signature homepage. Four ideas, each taken from the fancier's world:
   a kilo of grain that sorts itself into its published analysis (one grain
   is one gram), a season dial set to today, the 2022 national races drawn
   from release site to Belgium, and the stockists as dots on the map. */

const MAPS = JSON.parse(readFileSync('assets/maps.json', 'utf8'));

/* Equirectangular projection, corrected for latitude so Belgium is not
   stretched. Returns a projector plus the viewBox height for a given width. */
function projector({ lon0, lon1, lat0, lat1, w }) {
  const k = Math.cos(((lat0 + lat1) / 2) * Math.PI / 180);
  const s = w / ((lon1 - lon0) * k);
  const p = (lon, lat) => [+((lon - lon0) * k * s).toFixed(1), +((lat1 - lat) * s).toFixed(1)];
  return { p, h: Math.round((lat1 - lat0) * s), w };
}

function ringPath(ring, p) {
  return 'M' + ring.map(([lon, lat]) => p(lon, lat).join(' ')).join('L') + 'Z';
}

/* Only the polygons that fall inside the frame (drops French overseas
   territories and Dutch Caribbean islands). */
function countryPaths(codes, box, p) {
  return codes.flatMap((c) => MAPS[c]
    .filter((ring) => ring.some(([lon, lat]) => lon > box.lon0 && lon < box.lon1 && lat > box.lat0 && lat < box.lat1))
    .map((ring) => `<path class="map__land map__land--${c}" d="${ringPath(ring, p)}"/>`)).join('');
}

/* Release sites of the 2022 national highlights. */
const RELEASE = {
  'Nat. Argenton': { id: 'argenton', name: 'Argenton', lat: 46.587, lon: 1.520 },
  'Nat. Bourges': { id: 'bourges', name: 'Bourges', lat: 47.081, lon: 2.398 },
  'Nat. Agen': { id: 'agen', name: 'Agen', lat: 44.203, lon: 0.616 },
  'Nat. Narbonne': { id: 'narbonne', name: 'Narbonne', lat: 43.184, lon: 3.004 }
};
const HOME_LOFT = { lat: 50.93, lon: 4.25 };

function raceMap() {
  const box = { lon0: -5.3, lon1: 8.4, lat0: 42.2, lat1: 53.6, w: 600 };
  const { p, h, w } = projector(box);
  const [hx, hy] = p(HOME_LOFT.lon, HOME_LOFT.lat);
  const sites = Object.values(RELEASE).map((r) => {
    const km = HIGHLIGHTS_2022.find((x) => RELEASE[x.race] === r).km;
    const [x, y] = p(r.lon, r.lat);
    /* A gentle bow, the way a route looks on a loft wall map. */
    const mx = (x + hx) / 2 + (hy - y) * 0.12;
    const my = (y + hy) / 2 - (hx - x) * 0.12;
    const d = `M${x} ${y}Q${mx.toFixed(1)} ${my.toFixed(1)} ${hx} ${hy}`;
    const i = Object.values(RELEASE).indexOf(r);
    return `<g class="route" data-route="${r.id}">
          <path class="route__line" d="${d}" pathLength="1"/>
          <circle class="route__bird" r="4"><animateMotion dur="${(3.2 + km / 400).toFixed(1)}s" begin="${(i * 0.9).toFixed(1)}s" repeatCount="indefinite" path="${d}" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.45 0 0.55 1"/></circle>`
    + `
          <circle class="route__site" cx="${x}" cy="${y}" r="6"/>
          <text class="route__label" x="${x + 10}" y="${y + 4}">${r.name} <tspan class="route__km">${km} km</tspan></text>
        </g>`;
  }).join('\n        ');

  return `<svg class="map map--race" viewBox="0 0 ${w} ${h}" role="img" aria-label="Lossingsplaatsen 2022: Argenton, Bourges, Agen en Narbonne, naar België">
        <g>${countryPaths(['fr', 'be', 'nl'], box, p)}</g>
        ${sites}
        <circle class="route__home-ring" cx="${hx}" cy="${hy}" r="13"/>
        <circle class="route__home" cx="${hx}" cy="${hy}" r="5"/>
      </svg>`;
}

function dealerMap() {
  const box = { lon0: 2.45, lon1: 7.25, lat0: 49.45, lat1: 53.55, w: 560 };
  const { p, h, w } = projector(box);
  const dots = Object.values(GEO)
    .filter((g) => g && g.lat > box.lat0 && g.lat < box.lat1 && g.lon > box.lon0 && g.lon < box.lon1)
    .map((g, i) => { const [x, y] = p(g.lon, g.lat); return `<circle class="dot" cx="${x}" cy="${y}" r="4" style="--i:${i}"/>`; })
    .join('');
  return `<svg class="map map--dealers" viewBox="0 0 ${w} ${h}" role="img" aria-label="Verkooppunten in België en Nederland">
        <g>${countryPaths(['fr', 'de', 'be', 'nl'], box, p)}</g>
        <g>${dots}</g>
      </svg>`;
}

/* One grain is one gram: published percentages × 10, the remainder being
   fibre, moisture and ash. Absorbable protein is split out of crude. */
function grams(m) {
  const fat = Math.round(m.fat * 10);
  const abs = Math.round(m.absorbable * 10);
  const pro = Math.round(m.protein * 10) - abs;
  const carb = Math.round(m.carbs * 10);
  return { fat, abs, pro, carb, rest: 1000 - fat - abs - pro - carb };
}

const PHASE_SPAN = {             /* day of year, start inclusive → end */
  kweek: [0, 90], vlucht: [90, 227], rui: [227, 304], winter: [304, 365]
};

function arc(cx, cy, r, d0, d1) {
  const a = (d) => (d / 365) * Math.PI * 2 - Math.PI / 2;
  const pt = (d) => [(cx + r * Math.cos(a(d))).toFixed(1), (cy + r * Math.sin(a(d))).toFixed(1)];
  const [x0, y0] = pt(d0), [x1, y1] = pt(d1);
  return `M${x0} ${y0}A${r} ${r} 0 ${d1 - d0 > 182 ? 1 : 0} 1 ${x1} ${y1}`;
}

function seasonDial() {
  const c = 200, r = 150;
  const months = Array.from({ length: 12 }, (_, i) => {
    const d = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][i];
    const a = (d / 365) * Math.PI * 2 - Math.PI / 2;
    const am = ((d + 15) / 365) * Math.PI * 2 - Math.PI / 2;
    const tick = `<line class="dial__tick" x1="${(c + 128 * Math.cos(a)).toFixed(1)}" y1="${(c + 128 * Math.sin(a)).toFixed(1)}" x2="${(c + 172 * Math.cos(a)).toFixed(1)}" y2="${(c + 172 * Math.sin(a)).toFixed(1)}"/>`;
    const label = `<text class="dial__month" data-month="${i}" x="${(c + 186 * Math.cos(am)).toFixed(1)}" y="${(c + 186 * Math.sin(am) + 3.5).toFixed(1)}">${'JFMAMJJASOND'[i]}</text>`;
    return tick + label;
  }).join('');
  const arcs = PHASES.map((ph) => {
    const [d0, d1] = PHASE_SPAN[ph];
    return `<path class="dial__arc" data-phase="${ph}" d="${arc(c, c, r, d0 + 1.5, d1 - 1.5)}"/>`;
  }).join('');
  return `<svg class="dial__svg" viewBox="-30 -30 460 460" aria-hidden="true">
          <circle class="dial__ring" cx="${c}" cy="${c}" r="${r}"/>
          ${months}
          ${arcs}
          <g class="dial__needle" data-needle><line x1="${c}" y1="${c - 112}" x2="${c}" y2="${c - 178}"/><circle cx="${c}" cy="${c - 150}" r="7"/></g>
        </svg>`;
}

function miniBar(m) {
  const sum = m.fat + m.protein + m.carbs;
  return `<span class="mini" aria-hidden="true"><i style="width:${(m.fat / sum * 100).toFixed(1)}%"></i><i style="width:${(m.protein / sum * 100).toFixed(1)}%"></i><i style="width:${(m.carbs / sum * 100).toFixed(1)}%"></i></span>`;
}

function homeBody() {
  const mix3 = FEEDS.find((f) => f.slug === 'aidi-mix-3');
  const g3 = grams(mix3.macro);
  const mixData = FEEDS.map((f) => ({ slug: f.slug, kcal: f.macro.kcal, g: grams(f.macro) }));
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const legend = [
    ['fat', 'sig.legFat'], ['abs', 'sig.legAbs'], ['pro', 'sig.legPro'], ['carb', 'sig.legCarb'], ['rest', 'sig.legRest']
  ].map(([k, key]) => `<li class="legend__row" data-cat="${k}">
              <span class="legend__swatch legend__swatch--${k}" aria-hidden="true"></span>
              ${T(key, 'span', 'class="legend__label"')}
              <span class="legend__val"><b data-leg="${k}">${g3[k]}</b> g</span>
            </li>`).join('\n            ');

  const tabs = FEEDS.map((f) => `<button type="button" class="mixtab" role="tab" data-mix="${f.slug}" aria-selected="${f.slug === 'aidi-mix-3'}" tabindex="${f.slug === 'aidi-mix-3' ? 0 : -1}"><span data-i18n="p.${f.slug}.name">${esc(NL.p[f.slug].name)}</span></button>`).join('\n            ');

  const panels = PHASES.map((ph) => {
    const feeds = FEEDS.filter((f) => f.phases.includes(ph) && f.phases.length < PHASES.length);
    const plans = PLANS.filter((pl) => pl.phase === ph);
    return `<article class="phase" data-phase-panel="${ph}" id="fase-${ph}">
            <p class="phase__when mono" data-i18n="home.season${cap(ph)}When">${esc(nl('home.season' + cap(ph) + 'When'))}</p>
            ${T('phase.' + ph, 'h3', 'class="phase__name"')}
            ${T('home.season' + cap(ph) + 'D', 'p', 'class="phase__d"')}
            <div class="phase__cols">
              <div>
                ${T('sig.phaseFeeds', 'h4', 'class="phase__h"')}
                <ul class="phase__feeds">
                  ${feeds.map((f) => `<li><a href="voeders.html#${f.slug}"><span class="phase__feed" data-i18n="p.${f.slug}.name">${esc(NL.p[f.slug].name)}</span>${miniBar(f.macro)}<span class="phase__kcal mono">${N(f.macro.kcal, 0)}</span></a></li>`).join('\n                  ')}
                </ul>
              </div>
              <div>
                ${T('sig.phasePlans', 'h4', 'class="phase__h"')}
                <ul class="phase__plans">
                  ${plans.map((pl) => `<li><a href="assets/plannen/${pl.file}.pdf">${ICON.file}<span data-i18n="systeem.p.${pl.file}">${esc(nl('systeem.p.' + pl.file))}</span></a></li>`).join('\n                  ')}
                </ul>
              </div>
            </div>
          </article>`;
  }).join('\n          ');

  const phaseTabs = PHASES.map((ph) => `<button type="button" class="phasetab" data-phase="${ph}" aria-pressed="false"><span data-i18n="phase.${ph}">${esc(nl('phase.' + ph))}</span></button>`).join('');

  const uitslag = HIGHLIGHTS_2022.map((h) => `<li class="uitslag__row" data-route="${RELEASE[h.race].id}">
              <span class="uitslag__rank">${h.rank}</span>
              <span class="uitslag__race">${esc(h.race)}</span>
              <span class="uitslag__km mono">${h.km} km</span>
              <span class="uitslag__birds mono">${N(h.birds, 0)}</span>
            </li>`).join('\n            ');

  const aces = ACES.filter((a) => a.rank === 1).map((a) => `<li class="ace">
            <span class="ace__rank">1</span>
            <span class="ace__title">${esc(a.title)}</span>
            <span class="ace__meta mono"><span>${a.year}</span><span>${esc(a.loft)}</span></span>
          </li>`).join('\n          ');

  const ranges = [
    ['voeders', 'voeders.html', 'aidi-mix-3'],
    ['supplementen', 'supplementen.html', 'aidi-condition-plus-minerals'],
    ['equipment', 'equipment.html', 'aidi-automatische-voederbakken']
  ].map(([key, href, img]) => `<li>
            <a class="rangerow" href="${href}" data-img="assets/products/${img}.jpg">
              <span class="rangerow__name"><span data-i18n="nav.${key}">${esc(nl('nav.' + key))}</span><sup class="rangerow__n">${RANGE_COUNT[key]}</sup></span>
              <span class="rangerow__d" data-i18n="home.range${cap(key)}D">${esc(nl('home.range' + cap(key) + 'D'))}</span>
              <span class="rangerow__img" aria-hidden="true"><img src="assets/products/${img}.jpg" alt="" loading="lazy" width="700" height="525"></span>
              <span class="rangerow__go" aria-hidden="true">${ICON.arrowRight}</span>
            </a>
          </li>`).join('\n          ');

  return `  <section class="stage" data-tone="dark" data-stage>
    <div class="stage__sticky">
      <canvas class="stage__canvas" aria-hidden="true"></canvas>

      <div class="stage__hero" data-hero>
        <h1 class="hero-type">
          <span class="hero-type__line"><span data-i18n="sig.heroA">${esc(nl('sig.heroA'))}</span></span>
          <span class="hero-type__line hero-type__line--b"><span data-i18n="sig.heroB">${esc(nl('sig.heroB'))}</span></span>
        </h1>
        <div class="hero-aside">
          ${T('sig.heroC', 'p', 'class="hero-aside__c"')}
          ${T('sig.heroLede', 'p', 'class="hero-aside__lede"')}
          <div class="hero-aside__actions">
            <a class="pill pill--grain" href="voeders.html" data-i18n="ui.exploreRange">${esc(nl('ui.exploreRange'))}</a>
            <a class="pill pill--ghost" href="verkooppunten.html" data-i18n="ui.findDealer">${esc(nl('ui.findDealer'))}</a>
          </div>
        </div>
        <div class="hero-meta mono">
          <span data-i18n="sig.heroTray">${esc(nl('sig.heroTray'))}</span>
          <span class="hero-meta__cue"><i aria-hidden="true"></i><span data-i18n="sig.heroCue">${esc(nl('sig.heroCue'))}</span></span>
        </div>
      </div>

      <div class="stage__sort" data-sort>
        <div class="sort__text">
          ${T('sig.sortTitle', 'h2', 'class="sort__title"')}
          ${T('sig.sortLede', 'p', 'class="sort__lede"')}
          <ul class="legend" aria-live="polite">
            ${legend}
          </ul>
          <p class="sort__kcal"><span class="mono" data-i18n="spec.kcal">${esc(nl('spec.kcal'))}</span><b><span data-kcal data-num="${mix3.macro.kcal}" data-dec="0">${num(mix3.macro.kcal, 0)}</span> <small data-i18n="spec.kcalUnit">${esc(nl('spec.kcalUnit'))}</small></b></p>
        </div>
        <div class="sort__slot" data-slot aria-hidden="true"></div>
        <div class="sort__foot">
          <p class="sort__pick mono" id="mixtabs-label" data-i18n="sig.sortPick">${esc(nl('sig.sortPick'))}</p>
          <div class="mixtabs" role="tablist" aria-labelledby="mixtabs-label">
            ${tabs}
          </div>
          <a class="sort__cta" href="voeders.html#aidi-mix-3" data-mix-link><span data-i18n="sig.sortCta">${esc(nl('sig.sortCta'))}</span>${ICON.arrowRight}</a>
        </div>
      </div>
    </div>
    <script type="application/json" id="mix-data">${JSON.stringify(mixData)}</script>
  </section>

  <section class="cycle" data-tone="light" id="seizoen">
    <div class="wrap">
      <div class="cycle__head">
        ${T('sig.seasonTitle', 'h2', 'class="sec-title" data-split')}
        ${T('sig.seasonLede', 'p', 'class="sec-lede"')}
      </div>
      <div class="cycle__grid">
        <div class="dial" data-dial>
          ${seasonDial()}
          <div class="dial__center">
            <span class="dial__today mono"><span data-i18n="sig.today">${esc(nl('sig.today'))}</span> <span data-today></span></span>
            <span class="dial__phase" data-dial-phase></span>
          </div>
          <div class="phasetabs" role="group" aria-label="${esc(nl('sig.dial'))}" data-i18n-attr="aria-label:sig.dial">${phaseTabs}</div>
        </div>
        <div class="cycle__panels">
          ${panels}
        </div>
      </div>
    </div>
  </section>

  <section class="proof" data-tone="dark">
    <div class="wrap">
      <h2 class="proof__title" data-split-lines>
        <span data-i18n="sig.proofKm">${esc(nl('sig.proofKm'))}</span>
        <span data-i18n="sig.proofBirds">${esc(nl('sig.proofBirds'))}</span>
        <span class="proof__win" data-i18n="sig.proofWin">${esc(nl('sig.proofWin'))}</span>
      </h2>
      ${T('sig.proofLede', 'p', 'class="sec-lede proof__lede"')}
      <div class="proof__grid">
        <figure class="proof__map" data-race-map>
          ${raceMap()}
        </figure>
        <div class="uitslag">
          <p class="uitslag__head mono"><span data-i18n="home.proofHighlights">${esc(nl('home.proofHighlights'))}</span><span data-i18n="home.proofBirds">${esc(nl('home.proofBirds'))}</span></p>
          <ol class="uitslag__list">
            ${uitslag}
          </ol>
        </div>
      </div>
      <div class="aces">
        ${T('sig.proofAces', 'h3', 'class="aces__h mono"')}
        <ul class="aces__list">
          ${aces}
        </ul>
        <a class="textlink" href="team.html"><span data-i18n="home.proofCta">${esc(nl('home.proofCta'))}</span>${ICON.arrowRight}</a>
      </div>
    </div>
  </section>

  <section class="range" data-tone="light">
    <div class="wrap">
      <div class="range__head">
        ${T('home.rangeTitle', 'h2', 'class="sec-title" data-split')}
        ${T('sig.rangeLede', 'p', 'class="sec-lede"')}
      </div>
      <ul class="range__list">
          ${ranges}
      </ul>
    </div>
    <div class="range__float" aria-hidden="true"><img alt="" src="assets/products/aidi-mix-3.jpg" width="700" height="525"></div>
  </section>

  <section class="team-band" data-tone="dark">
    <div class="wrap team-band__grid">
      <figure class="team-band__photo" data-reveal-img>
        <img src="assets/brand/team-noel-willockx.jpg" alt="Eddy Noël en Ivan Willockx bij de hokken" loading="lazy" width="1520" height="1013">
        <figcaption data-i18n="home.teamCaption">${esc(nl('home.teamCaption'))}</figcaption>
      </figure>
      <div class="team-band__text">
        <p class="team-band__kicker mono" data-i18n="sig.teamKicker">${esc(nl('sig.teamKicker'))}</p>
        ${T('home.teamTitle', 'h2', 'class="sec-title"')}
        ${T('home.teamP1', 'p', 'class="team-band__p"')}
        ${T('home.teamP2', 'p', 'class="team-band__p"')}
        <div class="team-band__calls">
          <a class="callcard" href="${CONTACT.eddy.href}"><span class="mono" data-i18n="sig.callEddy">${esc(nl('sig.callEddy'))}</span><b>${esc(CONTACT.eddy.tel)}</b></a>
          <a class="callcard" href="${CONTACT.ivan.href}"><span class="mono" data-i18n="sig.callIvan">${esc(nl('sig.callIvan'))}</span><b>${esc(CONTACT.ivan.tel)}</b></a>
        </div>
        <p class="team-band__advice" data-i18n="sig.advice">${esc(nl('sig.advice'))}</p>
      </div>
    </div>
  </section>

  <section class="stock" data-tone="light">
    <div class="wrap stock__grid">
      <div class="stock__text">
        ${T('sig.dealerTitle', 'h2', 'class="sec-title" data-split')}
        ${T('sig.dealerLede', 'p', 'class="sec-lede"')}
        <form class="locator" action="verkooppunten.html" method="get" role="search">
          <label class="visually-hidden" for="finder-q" data-i18n="sig.dealerField">${esc(nl('sig.dealerField'))}</label>
          <input id="finder-q" name="q" type="search" autocomplete="postal-code" placeholder="${esc(nl('sig.dealerField'))}" data-i18n-attr="placeholder:sig.dealerField">
          <button type="submit" class="pill pill--ink"><span data-i18n="sig.dealerGo">${esc(nl('sig.dealerGo'))}</span>${ICON.arrowRight}</button>
        </form>
        <a class="textlink" href="contact.html"><span data-i18n="nav.contact">${esc(nl('nav.contact'))}</span>${ICON.arrowRight}</a>
      </div>
      <figure class="stock__map" data-dealer-map>
        ${dealerMap()}
      </figure>
    </div>
  </section>`;
}

function planLink(p) {
  return `<a class="plan" href="assets/plannen/${p.file}.pdf" data-rise>
          <span class="plan__icon">${ICON.file}</span>
          <span class="plan__t">
            <b data-i18n="systeem.p.${p.file}">${esc(nl('systeem.p.' + p.file))}</b>
            <span>PDF · <span data-i18n="phase.${p.phase}">${esc(nl('phase.' + p.phase))}</span></span>
          </span>
        </a>`;
}

/* ------------------------------------------------------------ concept -- */

function conceptBody() {
  const blocks = [
    ['concept.s1t', ['concept.s1p1', 'concept.s1p2']],
    ['concept.s2t', ['concept.s2p1', 'concept.s2p2']],
    ['concept.s3t', ['concept.s3p1', 'concept.s3p2']],
    ['concept.s4t', ['concept.s4p1', 'concept.s4p2']]
  ];

  const numbers = [
    ['spec.fat', 'concept.numbersFat'],
    ['spec.protein', 'concept.numbersProtein'],
    ['spec.absorbable', 'concept.numbersAbsorbable'],
    ['spec.carbs', 'concept.numbersCarbs'],
    ['spec.kcal', 'concept.numbersKcal'],
    ['spec.fibre', 'concept.numbersFibre'],
    ['spec.omega', 'concept.numbersOmega']
  ];

  return `${pagehead('concept', 'concept', true)}

  <section class="section section--flush-top">
    <div class="wrap wrap--narrow">
      ${blocks.map(([h, ps]) => `<div class="concept-block" data-rise>
        ${T(h, 'h2')}
        <div class="prose" style="margin-top:1rem">
          ${ps.map((p) => T(p, 'p')).join('\n          ')}
        </div>
      </div>`).join('\n      ')}
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('concept.numbersT', 'h2')}
          ${T('concept.numbersP', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="defs" data-stagger>
        ${numbers.map(([term, def]) => `<div class="def" data-rise>
          ${T(term, 'h3')}
          ${T(def, 'p')}
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>

${cta()}`;
}

/* ------------------------------------------------------------ voeders -- */

function voedersBody() {
  const cols = [
    ['voeders.colName', 'text'],
    ['spec.fat', 'num'],
    ['spec.protein', 'num'],
    ['spec.absorbable', 'num'],
    ['spec.carbs', 'num'],
    ['spec.fibre', 'num'],
    ['spec.kcal', 'num'],
    ['spec.omega', 'num']
  ];

  return `${pagehead('voeders', 'voeders')}

  <section class="section section--flush-top">
    <div class="wrap">
${filterBar('feed-list', [
  ['phase', 'voeders.filterPhase', PHASES.map((p) => [p, 'phase.' + p])],
  ['band', 'voeders.filterBand', BANDS.map((b) => [b, 'band.' + b])]
])}
      <div class="rows" id="feed-list" data-stagger>
${FEEDS.map(feedRow).join('\n')}
      </div>
${emptyState()}
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('voeders.compareTitle', 'h2')}
          ${T('voeders.compareLede', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="table-scroll">
        <table class="compare">
          <thead>
            <tr>
              ${cols.map(([k, kind]) => `<th scope="col" data-sort="${kind}"><button type="button" class="sortable"><span data-i18n="${k}">${esc(nl(k))}</span>${ICON.chevronDown}</button></th>`).join('\n              ')}
            </tr>
          </thead>
          <tbody>
            ${FEEDS.map((f) => {
              const m = f.macro;
              return `<tr>
              <td data-v="${esc(NL.p[f.slug].name)}"><a href="#${f.slug}" data-i18n="p.${f.slug}.name">${esc(NL.p[f.slug].name)}</a></td>
              <td data-v="${m.fat}">${N(m.fat)}%</td>
              <td data-v="${m.protein}">${N(m.protein)}%</td>
              <td data-v="${m.absorbable}">${N(m.absorbable)}%</td>
              <td data-v="${m.carbs}">${N(m.carbs)}%</td>
              <td data-v="${m.fibre}">${N(m.fibre)}%</td>
              <td data-v="${m.kcal}">${N(m.kcal, 0)}</td>
              <td data-v="${m.omega}">${N(m.omega)} : 1</td>
            </tr>`;
            }).join('\n            ')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

${cta()}`;
}

/* ------------------------------------------------------- supplementen -- */

function supplementenBody() {
  return `${pagehead('supplementen', 'supplementen')}

  <section class="section section--flush-top">
    <div class="wrap">
${filterBar('supp-list', [
  ['group', 'supplementen.filterGroup', SUPP_GROUPS.map((g) => [g, 'group.' + g])]
])}
      <div class="rows rows--simple" id="supp-list" data-stagger>
${SUPPLEMENTS.map(suppRow).join('\n')}
      </div>
${emptyState()}
    </div>
  </section>

${cta()}`;
}

/* ---------------------------------------------------------- equipment -- */

function equipmentBody() {
  const feeder = EQUIPMENT[0];
  const specTable = `<div class="table-scroll" style="margin-top:1.5rem">
          <table class="compare compare--slim feeder-specs">
            <thead><tr>
              <th scope="col" data-i18n="equipment.specSize">${esc(nl('equipment.specSize'))}</th>
              <th scope="col" data-i18n="equipment.specBirds">${esc(nl('equipment.specBirds'))}</th>
              <th scope="col" data-i18n="equipment.specLength">${esc(nl('equipment.specLength'))}</th>
              <th scope="col" data-i18n="equipment.specFeed">${esc(nl('equipment.specFeed'))}</th>
            </tr></thead>
            <tbody>
              ${feeder.specs.map((s) => `<tr><td>${esc(s.size)}</td><td>${s.birds}</td><td>${esc(s.length)}</td><td>${esc(s.feed)}</td></tr>`).join('\n              ')}
            </tbody>
          </table>
        </div>`;

  const features = ['featTimer', 'featTimes', 'featPower', 'featBattery'];

  return `${pagehead('equipment', 'equipment')}

  <section class="section section--flush-top">
    <div class="wrap">
      ${EQUIPMENT.map((e, i) => {
        const p = NL.p[e.slug];
        const media = e.img
          ? `<figure class="media"><img src="assets/products/${e.img}.jpg" alt="${esc(p.name)}" loading="lazy" width="700" height="525"></figure>`
          : `<div class="media media--mark">${WINGS}</div>`;
        return `<article class="gear${i % 2 ? ' gear--flip' : ''}" id="${e.slug}" data-rise>
        ${media}
        <div>
          <h2 data-i18n="p.${e.slug}.name">${esc(p.name)}</h2>
          <p class="lede" style="margin-top:0.75rem" data-i18n="p.${e.slug}.tag">${esc(p.tag)}</p>
          <div class="prose" style="margin-top:1.15rem" data-i18n-paras="p.${e.slug}.desc">
            ${p.desc.map((d) => `<p>${esc(d)}</p>`).join('\n            ')}
          </div>
          ${e.slug === 'aidi-automatische-voederbakken' ? `<ul class="usage" style="margin-top:1.25rem">
            ${features.map((f) => `<li data-i18n="equipment.${f}">${esc(nl('equipment.' + f))}</li>`).join('\n            ')}
          </ul>${specTable}` : ''}
        </div>
      </article>`;
      }).join('\n      ')}
    </div>
  </section>

${cta()}`;
}

/* ------------------------------------------------------------ systeem -- */

function systeemBody() {
  const groups = [
    ['systeem.generalT', PLANS.filter((p) => p.phase === 'algemeen')],
    ['systeem.flightT', PLANS.filter((p) => p.phase === 'vlucht')],
    ['systeem.breedT', PLANS.filter((p) => p.phase === 'kweek')],
    ['systeem.moultT', PLANS.filter((p) => p.phase === 'rui')],
    ['systeem.restT', PLANS.filter((p) => p.phase === 'winter')]
  ];

  return `${pagehead('systeem', 'systeem')}

  <section class="section section--flush-top">
    <div class="wrap">
      ${groups.map(([key, list]) => `<div class="plan-group">
        ${T(key, 'h2')}
        <div class="plans" style="margin-top:1.25rem" data-stagger>
          ${list.map(planLink).join('\n          ')}
        </div>
      </div>`).join('\n      ')}
    </div>
  </section>

${cta()}`;
}

/* --------------------------------------------------------------- team -- */

function teamBody() {
  return `${pagehead('team', 'team')}

  <section class="section section--flush-top">
    <div class="wrap split split--top">
      <figure class="media" data-rise>
        <img src="assets/brand/team-noel-willockx.jpg" alt="Eddy Noël en Ivan Willockx" loading="lazy" width="1200" height="800">
        <figcaption data-i18n="home.teamCaption">${esc(nl('home.teamCaption'))}</figcaption>
      </figure>
      <div>
        <div class="concept-block">
          ${T('team.eddyT', 'h2')}
          <div class="prose" style="margin-top:1rem">
            ${T('team.eddyP1', 'p')}
            ${T('team.eddyP2', 'p')}
          </div>
        </div>
        <div class="concept-block" style="margin-top:2.5rem">
          ${T('team.ivanT', 'h2')}
          <div class="prose" style="margin-top:1rem">
            ${T('team.ivanP1', 'p')}
            ${T('team.ivanP2', 'p')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('team.resultsT', 'h2')}
          ${T('team.resultsLede', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="proof-list">
        ${HIGHLIGHTS_2022.map((h) => `<div class="proof-item${h.rank === 1 ? ' is-top' : ''}">
          <span class="proof-rank">${h.rank}.</span>
          <span class="proof-title">${esc(h.race)} <span style="color:var(--fg-3);font-weight:400">(${h.km} km)</span></span>
          <span class="proof-meta"><span>${N(h.birds, 0)} <span data-i18n="team.birds">${esc(nl('team.birds'))}</span></span></span>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('team.acesT', 'h2')}
          ${T('team.acesLede', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="proof-list">
        ${ACES.map((a) => `<div class="proof-item${a.rank === 1 ? ' is-top' : ''}">
          <span class="proof-rank">${a.rank}.</span>
          <span class="proof-title">${esc(a.title)}</span>
          <span class="proof-meta"><span>${a.year}</span><span>${esc(a.loft)}</span><span>${esc(a.share)}</span></span>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>

${cta()}`;
}

/* ----------------------------------------------------- verkooppunten -- */

function dealerCard(d) {
  const geo = GEO[d.name];
  const coords = geo && Number.isFinite(geo.lat) && Number.isFinite(geo.lon)
    ? ` data-lat="${geo.lat}" data-lon="${geo.lon}"` : '';
  const find = [d.name, d.city, d.zip, d.street].filter(Boolean).join(' ').toLowerCase();
  const addr = [d.street, [d.zip, d.city].filter(Boolean).join(' ')].filter(Boolean).join('<br>');
  const links = [];
  if (d.tel) links.push(`<a href="tel:${d.tel.replace(/[^+\d]/g, '')}">${esc(d.tel)}</a>`);
  if (d.email) links.push(`<a href="mailto:${esc(d.email)}">${esc(d.email)}</a>`);
  if (d.web) links.push(`<a href="${esc(d.web)}" target="_blank" rel="noopener noreferrer" data-i18n="ui.website">${esc(nl('ui.website'))}</a>`);
  const noteKey = d.note === 'order' ? 'ui.orderOnly' : d.note === 'appointment' ? 'ui.byAppointment' : null;

  return `        <article class="dealer" data-find="${esc(find)}"${coords}>
          <h3>${esc(d.name)}</h3>
          ${addr ? `<address>${addr}</address>` : ''}
          ${links.length ? `<div class="dealer__links">${links.join('')}</div>` : ''}
          ${d.distributor ? `<span class="dealer__note" data-i18n="ui.distributor">${esc(nl('ui.distributor'))}</span>` : ''}
          ${noteKey ? `<span class="dealer__note" data-i18n="${noteKey}">${esc(nl(noteKey))}</span>` : ''}
        </article>`;
}

function verkooppuntenBody() {
  const groups = COUNTRY_ORDER.map((code) => {
    const list = DEALERS.filter((d) => d.c === code);
    if (!list.length) return '';
    return `      <div class="country-group">
        <div class="country-head">
          <h2 data-i18n="country.${code}">${esc(nl('country.' + code))}</h2>
          <span>${list.length} ${esc(nl(list.length === 1 ? 'ui.dealersOne' : 'ui.dealers'))}</span>
        </div>
        <div class="dealers">
${list.map(dealerCard).join('\n')}
        </div>
      </div>`;
  }).join('\n');

  return `${pagehead('verkooppunten', 'verkooppunten')}

  <section class="section section--flush-top">
    <div class="wrap">
      <div class="nearby js-only">
        ${T('verkooppunten.nearbyTitle', 'h2')}
        ${T('verkooppunten.nearbyHelp', 'p')}
        <button class="btn btn--primary" type="button" data-locate data-i18n="verkooppunten.locate">${esc(nl('verkooppunten.locate'))}</button>
        <p data-location-status role="status" aria-live="polite"></p>
        <div class="dealers" data-nearby hidden></div>
      </div>
      <div class="finder">
        <div class="search">
          ${ICON.search}
          <label class="visually-hidden" for="dealer-q" data-i18n="ui.searchDealers">${esc(nl('ui.searchDealers'))}</label>
          <input type="search" id="dealer-q" data-dealer-search autocomplete="off"
                 placeholder="${esc(nl('ui.searchDealers'))}" data-i18n-attr="placeholder:ui.searchDealers">
          <button type="button" class="search__clear" aria-label="${esc(nl('ui.clear'))}" data-i18n-attr="aria-label:ui.clear" hidden>${ICON.x}</button>
        </div>
        <span class="filters__count" data-count></span>
      </div>
      <div class="nearby nearby--search" data-search-nearby hidden>
        <p data-search-status role="status" aria-live="polite"></p>
        <div class="dealers" data-search-results></div>
      </div>

${groups}

${emptyState()}
    </div>
  </section>

${cta('dealer')}`;
}

/* ------------------------------------------------------------ contact -- */

function contactBody() {
  const person = (p) => `<a class="person" href="${p.href}">
            <span class="person__icon">${ICON.phone}</span>
            <span><b>${esc(p.name)}</b><span>${esc(p.tel)}</span></span>
          </a>`;

  const intl = DEALERS.filter((d) => d.distributor).map((d) => `<article class="dealer">
          <h3>${esc(d.name)}</h3>
          <p class="field-label" style="margin-top:0.35rem" data-i18n="country.${d.c}">${esc(nl('country.' + d.c))}</p>
          <div class="dealer__links">
            ${d.tel ? `<a href="tel:${d.tel.replace(/[^+\d]/g, '')}">${esc(d.tel)}</a>` : ''}
            ${d.email ? `<a href="mailto:${esc(d.email)}">${esc(d.email)}</a>` : ''}
            ${d.web ? `<a href="${esc(d.web)}" target="_blank" rel="noopener noreferrer" data-i18n="ui.website">${esc(nl('ui.website'))}</a>` : ''}
          </div>
        </article>`).join('\n        ');

  return `${pagehead('contact', 'contact')}

  <section class="section section--flush-top">
    <div class="wrap">
      <div class="contact-grid">
        <div class="contact-card" data-rise>
          ${T('contact.directT', 'h2')}
          ${T('contact.directP', 'p')}
          <div class="people" style="margin-top:1.25rem">
            ${person(CONTACT.eddy)}
            ${person(CONTACT.ivan)}
          </div>
        </div>
        <div class="contact-card" data-rise>
          ${T('contact.mailT', 'h2')}
          ${T('contact.mailP', 'p')}
          <div class="people" style="margin-top:1.25rem">
            <a class="person" href="mailto:${CONTACT.email}">
              <span class="person__icon">${ICON.mail}</span>
              <span><b>${CONTACT.email}</b><span data-i18n="ui.email">${esc(nl('ui.email'))}</span></span>
            </a>
          </div>
        </div>
        <div class="contact-card" data-rise>
          ${T('contact.dealerT', 'h2')}
          ${T('contact.dealerP', 'p')}
          <p style="margin-top:1.25rem"><a class="btn btn--primary" href="verkooppunten.html" data-i18n="ui.findDealer">${esc(nl('ui.findDealer'))}</a></p>
        </div>
      </div>
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('contact.intlT', 'h2')}
          ${T('contact.intlP', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="dealers">
        ${intl}
      </div>
    </div>
  </section>`;
}

/* --------------------------------------------------------------- emit -- */

const PAGES = [
  { file: 'index.html', key: 'home', active: '', body: homeBody() },
  { file: 'concept.html', key: 'concept', active: 'concept.html', body: conceptBody() },
  { file: 'voeders.html', key: 'voeders', active: 'voeders.html', body: voedersBody() },
  { file: 'supplementen.html', key: 'supplementen', active: 'supplementen.html', body: supplementenBody() },
  { file: 'equipment.html', key: 'equipment', active: 'equipment.html', body: equipmentBody() },
  { file: 'systeem.html', key: 'systeem', active: 'systeem.html', body: systeemBody() },
  { file: 'team.html', key: 'team', active: 'team.html', body: teamBody() },
  { file: 'verkooppunten.html', key: 'verkooppunten', active: 'verkooppunten.html', body: verkooppuntenBody() },
  { file: 'contact.html', key: 'contact', active: 'contact.html', body: contactBody() }
];

for (const p of PAGES) {
  writeFileSync(p.file, page(p));
  console.log('wrote', p.file);
}
console.log('\n%d pages · %d products · %d dealers · %d plans',
  PAGES.length, FEEDS.length + SUPPLEMENTS.length + EQUIPMENT.length, DEALERS.length, PLANS.length);
