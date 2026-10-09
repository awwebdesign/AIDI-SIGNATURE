/* AIDI - structured product, dealer and results data.
   Language-independent: numbers, slugs, images, taxonomy.
   All translated strings live in i18n.js, keyed by these slugs. */

/* Season phases a fancier actually thinks in. */
const PHASES = ['winter', 'kweek', 'vlucht', 'rui'];

/* Distance bands, KBDB-style. */
const BANDS = ['sprint', 'midfond', 'dagfond', 'fond'];

/* ---------------------------------------------------------------- feeds -- */
/* macro values are the published analytical values, in percent.
   kcal is metabolisable energy per kg. omega is the omega 6:3 ratio. */
const FEEDS = [
  {
    slug: 'aidi-speedy-sprint',
    img: 'aidi-speedy-sprint-nieuw',
    isNew: true,
    phases: ['vlucht'],
    bands: ['sprint'],
    macro: { fat: 4.6, protein: 10.5, absorbable: 6.2, carbs: 67.4, kcal: 3315, fibre: 2.7, omega: 5.9 },
    sizes: ['5 kg', '20 kg']
  },
  {
    slug: 'aidi-mix-1',
    img: 'aidi-mix-1',
    phases: ['vlucht'],
    bands: ['sprint', 'midfond', 'dagfond'],
    macro: { fat: 7.3, protein: 12.4, absorbable: 7.3, carbs: 59.9, kcal: 3277, fibre: 7.1, omega: 5.6 },
    sizes: []
  },
  {
    slug: 'aidi-mix-2',
    img: 'aidi-mix-2',
    phases: ['vlucht'],
    bands: ['midfond', 'dagfond'],
    macro: { fat: 11.4, protein: 15.23, absorbable: 8.07, carbs: 51.92, kcal: 3551, fibre: 7.54, omega: 3.5 },
    sizes: []
  },
  {
    slug: 'aidi-mix-3',
    img: 'aidi-mix-3',
    phases: ['vlucht'],
    bands: ['dagfond', 'fond'],
    macro: { fat: 13.52, protein: 13.95, absorbable: 8.24, carbs: 50.63, kcal: 3695, fibre: 7.9, omega: 3.9 },
    sizes: []
  },
  {
    slug: 'aidi-girl-power',
    img: 'aidi-girl-power',
    phases: ['vlucht'],
    bands: ['midfond', 'dagfond'],
    macro: { fat: 13.1, protein: 14.6, absorbable: 8.4, carbs: 49.8, kcal: 3622, fibre: 8.6, omega: 5.6 },
    sizes: []
  },
  {
    slug: 'aidi-long-distance-mix',
    img: 'aidi-long-distance-mix',
    phases: ['vlucht'],
    bands: ['fond'],
    macro: { fat: 14.5, protein: 16.9, absorbable: 8.9, carbs: 47.1, kcal: 3713, fibre: 8.2, omega: 4.9 },
    sizes: []
  },
  {
    slug: 'aidi-super-kweek',
    img: 'aidi-super-kweek',
    phases: ['kweek'],
    bands: [],
    macro: { fat: 12.8, protein: 16.4, absorbable: 8.8, carbs: 49.1, kcal: 3608, fibre: 7.7, omega: 3.2 },
    sizes: []
  },
  {
    slug: 'aidi-super-rui',
    img: 'aidi-super-rui',
    phases: ['rui'],
    bands: [],
    macro: { fat: 13.0, protein: 15.13, absorbable: 8.49, carbs: 49.24, kcal: 3586, fibre: 8.58, omega: 3.6 },
    sizes: []
  },
  {
    slug: 'aidi-winter-rust',
    img: 'aidi-winterrust',
    phases: ['winter'],
    bands: [],
    macro: { fat: 6.8, protein: 11.3, absorbable: 6.7, carbs: 61.3, kcal: 3259, fibre: 6.3, omega: 6.4 },
    sizes: []
  },
  {
    slug: 'aidi-extra-power-snoepmix',
    img: 'aidi-extra-power-snoepmix',
    phases: ['winter', 'kweek', 'vlucht', 'rui'],
    bands: [],
    macro: { fat: 17.3, protein: 14.8, absorbable: 8.4, carbs: 37.2, kcal: 3588, fibre: 9.0, omega: 4.2 },
    sizes: ['5 kg', '20 kg']
  }
];

/* ---------------------------------------------------------- supplements -- */
const SUPP_GROUPS = ['energie', 'conditie', 'herstel', 'darmflora', 'mineralen', 'verzorging'];

const SUPPLEMENTS = [
  { slug: 'aidi-carbo-boost', img: 'aidi-carbo-boost', group: 'energie', sizes: ['500 g'] },
  { slug: 'aidi-omega-plus-olie-extra', img: 'aidi-omega-plus-olie-extra', group: 'energie', sizes: ['500 ml'] },
  { slug: 'aidi-omega-3-krill-olie', img: 'aidi-omega-3-krill-olie-nieuw', group: 'energie', isNew: true, sizes: [] },
  { slug: 'aidi-condition-booster', img: 'aidi-condition-booster', group: 'conditie', sizes: ['1000 ml'] },
  { slug: 'aidi-health-elixir', img: 'aidi-health-elixir', group: 'conditie', sizes: ['1000 ml'] },
  { slug: 'aidi-chelats', img: 'aidi-chelats', group: 'conditie', sizes: ['250 ml'] },
  { slug: 'aidi-recup-fast', img: 'aidi-recup-fast', group: 'herstel', sizes: ['500 g'] },
  { slug: 'aidi-proteine-boost', img: 'aidi-proteine-boost', group: 'herstel', sizes: ['400 g'] },
  { slug: 'aidi-pro-bacterial', img: 'aidi-pro-bacterial', group: 'darmflora', sizes: ['1000 ml', '5000 ml'] },
  { slug: 'aidi-probiotica-plus', img: 'aidi-probiotica-plus', group: 'darmflora', sizes: ['500 g'] },
  { slug: 'aidi-calcium-forte', img: 'aidi-calcium-forte', group: 'mineralen', sizes: ['1,750 kg', '10 kg'] },
  { slug: 'aidi-condition-plus-minerals', img: 'aidi-condition-plus-minerals', group: 'mineralen', sizes: ['1,750 kg', '10 kg'] },
  { slug: 'aidi-grit-met-anijs', img: 'aidi-grit-met-anijs', group: 'mineralen', sizes: ['5 kg', '10 kg'] },
  { slug: 'aidi-eye-drops', img: 'aidi-eye-drops', group: 'verzorging', sizes: ['30 ml'] }
];

/* ------------------------------------------------------------ equipment -- */
const EQUIPMENT = [
  {
    slug: 'aidi-automatische-voederbakken',
    img: 'aidi-automatische-voederbakken',
    specs: [
      { size: 'Small', birds: 20, length: '90 cm', feed: '7,5 kg' },
      { size: 'Medium', birds: 30, length: '120 cm', feed: '10 kg' },
      { size: 'Large', birds: 45, length: '160 cm', feed: '15 kg' },
      { size: 'X-Large', birds: 60, length: '190 cm', feed: '20 kg' }
    ]
  },
  { slug: 'aidi-manden', img: null, specs: [] }
];

/* -------------------------------------------------------- flight plans -- */
/* The AIDI system: 14 published feeding schedules, served as PDF. */
const PLANS = [
  { file: 'optimaal-gebruik-aidi-concept', phase: 'algemeen' },
  { file: 'mis-de-start-van-het-seizoen-niet', phase: 'algemeen' },
  { file: 'vliegplan-snelheid-aidi-speedy-sprint', phase: 'vlucht' },
  { file: 'vliegplan-snelheid', phase: 'vlucht' },
  { file: 'vliegschema-aidi-halve-fond', phase: 'vlucht' },
  { file: 'vliegschema-aidi-dagfond', phase: 'vlucht' },
  { file: 'vliegschema-aidi-girl-power', phase: 'vlucht' },
  { file: 'overnachtfond', phase: 'vlucht' },
  { file: 'vliegschema-aidi-jonge-duiven', phase: 'vlucht' },
  { file: 'vliegplan-thuisblijvende-doffers-duivinnen', phase: 'vlucht' },
  { file: 'rui', phase: 'rui' },
  { file: 'kweek', phase: 'kweek' },
  { file: 'kweekschema-met-pro-bacterial', phase: 'kweek' },
  { file: 'winter-rust-schema', phase: 'winter' }
];

/* --------------------------------------------------------------- proof -- */
/* Highlights first, then the national ace record. `share` is the AIDI /
   Team Noël-Willockx involvement as published on aidi.be. */
const HIGHLIGHTS_2022 = [
  { rank: 1, race: 'Nat. Argenton', km: 528, birds: 5166 },
  { rank: 10, race: 'Nat. Agen', km: 806, birds: 7331 },
  { rank: 18, race: 'Nat. Argenton', km: 528, birds: 2276 },
  { rank: 35, race: 'Nat. Bourges', km: 462, birds: 23846 },
  { rank: 40, race: 'Nat. Bourges', km: 462, birds: 23846 },
  { rank: 46, race: 'Nat. Narbonne', km: 881, birds: 5749 },
  { rank: 48, race: 'Nat. Argenton', km: 528, birds: 5166 },
  { rank: 61, race: 'Nat. Argenton', km: 528, birds: 5166 },
  { rank: 75, race: 'Nat. Argenton', km: 528, birds: 22869 },
  { rank: 77, race: 'Nat. Argenton', km: 528, birds: 22869 },
  { rank: 82, race: 'Nat. Argenton', km: 528, birds: 5166 },
  { rank: 90, race: 'Nat. Bourges', km: 462, birds: 23846 },
  { rank: 93, race: 'Nat. Argenton', km: 528, birds: 22869 },
  { rank: 98, race: 'Nat. Bourges', km: 462, birds: 23846 },
  { rank: 100, race: 'Nat. Argenton', km: 528, birds: 2276 }
];

const ACES = [
  { rank: 1, title: 'Nat. Ace KBDB Long Distance Old Birds', year: 2022, loft: 'Roziers-Xiang', share: '25%' },
  { rank: 1, title: 'Nat. Ace KBDB Great Middle Distance Young Birds', year: 2021, loft: 'Roziers-Xiang', share: '25%' },
  { rank: 1, title: 'Nat. Brive, 3.755 old birds', year: 2020, loft: 'F & J Vandenheede', share: '50%' },
  { rank: 1, title: 'Nat. Ace KBDB Middle Distance Young Birds', year: 2010, loft: 'Koen Carmeliet', share: '50%' },
  { rank: 2, title: 'Nat. Ace KBDB Great Middle Distance Young Birds', year: 2016, loft: 'Roziers-Xiang', share: '50%' },
  { rank: 2, title: 'Nat. Ace KBDB GMD Young Birds', year: 2018, loft: 'VD Abbeel-Van Paeschen', share: '50%' },
  { rank: 3, title: 'Nat. Ace KBDB GMD Yearlings', year: 2016, loft: 'Nico Van Muylder', share: '50%' },
  { rank: 3, title: 'Nat. Ace KBDB Long Distance Yearlings', year: 2014, loft: 'Ariën-De Keyser', share: 'direct' },
  { rank: 4, title: 'Nat. Ace KBDB SMD Yearlings', year: 2017, loft: 'Kris De Bisschop', share: '25%' },
  { rank: 4, title: 'Nat. Ace KBDB Sprint Yearlings', year: 2017, loft: 'Lieselotte De Bisschop', share: '25%' },
  { rank: 6, title: 'Nat. Ace KBDB Long Distance Yearlings', year: 2013, loft: 'Wesley Limbourg', share: '25%' },
  { rank: 8, title: 'Nat. Ace KBDB Allround', year: 2019, loft: 'Ariën-De Keyser', share: 'direct' },
  { rank: 8, title: 'Nat. Ace KBDB Sprint Young Birds', year: 2016, loft: 'Kris De Bisschop', share: '50%' },
  { rank: 9, title: 'Nat. Ace KBDB Sprint Yearlings', year: 2018, loft: 'Lieselotte De Bisschop', share: '25%' },
  { rank: 11, title: 'Nat. Ace KBDB GMD Yearlings', year: 2017, loft: 'Roziers-Xiang', share: '50%' },
  { rank: 15, title: 'Nat. Ace KBDB Long Distance Yearlings', year: 2019, loft: 'Team Noël-Willockx', share: 'direct' },
  { rank: 15, title: 'Nat. Ace KBDB GMD', year: 2013, loft: 'Van Muylder-Noël-Demul', share: 'direct' },
  { rank: 17, title: 'Nat. Ace KBDB Great Middle Distance Youngsters', year: 2022, loft: 'Team Noël-Willockx', share: 'direct' }
];

/* ------------------------------------------------------------- dealers -- */
/* country codes map to translated country names in i18n.js */
const DEALERS = [
  { c: 'be', name: 'Vanderbauwhede', street: 'Kokerstraat 5', zip: '9750', city: 'Zingem', email: 'info@vanderbauwhede.eu', web: 'https://www.vanderbauwhede.eu' },
  { c: 'be', name: 'Tuincentrum Droogmans', street: 'Kraaistraat 17', zip: '3454', city: 'Rummen', email: 'info@tuincentrumdroogmans.be', web: 'https://www.tuincentrumdroogmans.be/duivensport' },
  { c: 'be', name: 'Horta Huygen', street: 'Boudewijnlaan 5', zip: '2220', city: 'Heist-op-den-Berg', email: 'info@dierenspeciaalzaakhuygen.be', web: 'https://www.dierenspeciaalzaakhuygen.be' },
  { c: 'be', name: 'Hobbycenter Schoors', street: 'Kleine Moerwege 3', zip: '9991', city: 'Adegem', email: 'carmenschoors@gmail.com', tel: '0494 92 65 94' },
  { c: 'be', name: "Pigeon D'or Sajema", street: 'Ch. de Nivelles 155 A', zip: '5140', city: 'Sombreffe', email: 'pigeondor.sajema.sprl@aveve.be' },
  { c: 'be', name: 'Johan Van Extergem', street: 'Bevrijdingslaan 2/A', zip: '9200', city: 'Dendermonde' },
  { c: 'be', name: 'DAP De Kabei', street: 'Kabei 26', zip: '3800', city: 'Sint-Truiden', email: 'dierenartsen@dekabei.be', web: 'https://www.dekabei.be' },
  { c: 'be', name: 'Tuin en Dier Jan Mertens', street: 'Klein-Antwerpenstraat 25a', zip: '9280', city: 'Lebbeke', email: 'info@jan-mertens.be', web: 'https://www.jan-mertens.be' },
  { c: 'be', name: 'Hobbycenter Bernard Lefebre', street: 'Karreweg 58', zip: '9870', city: 'Zulte', email: 'hobbycenter@lefebre-bernard.be', web: 'https://www.lefebre-bernard.be' },
  { c: 'be', name: 'Polderse Zaadhandel', street: 'Ettenhoven 113', zip: '2940', city: 'Stabroek', email: 'polderse.zaadhandel@telenet.be', web: 'https://www.horta.org/nl/Stabroek' },
  { c: 'be', name: 'Dierenspeciaalzaak De Watertoren', street: 'Bruggestraat 154a', zip: '8820', city: 'Torhout', tel: '050 22 35 95', email: 'declerck.marnix@skynet.be' },
  { c: 'be', name: 'Bart Van Impe', street: 'Bruinbekestraat 27', zip: '9260', city: 'Wichelen', tel: '09 368 06 31' },
  { c: 'be', name: 'Leyen Dier- en tuinbenodigdheden', street: 'Venlosesteenweg 136', zip: '3680', city: 'Maaseik', email: 'info@leyen.be', web: 'https://www.leyendierenspeciaalzaak.be/' },
  { c: 'be', name: 'Hobbyshop Van Tilburg', street: 'Zondereigen 43a', zip: '2387', city: 'Baarle-Hertog', tel: '014 63 10 66', email: 'ronny@vantilburgronny.com', web: 'https://www.webshopvantilburg.com' },
  { c: 'be', name: 'Aveve De Dobbeleer', street: 'Zwijnenbergstraat 55', zip: '1750', city: 'Sint-Martens-Lennik', tel: '02 532 04 75', email: 'dedobbeleer.dirk@aveve.be' },
  { c: 'be', name: 'Hobbyzaak Jansseune', street: 'Pervijzestraat 71', zip: '8600', city: 'Diksmuide', tel: '051 55 55 80', note: 'order' },
  { c: 'be', name: 'Bird Trading Ivo', street: 'Houwaartstraat 64', zip: '3270', city: 'Scherpenheuvel', tel: '0475 35 37 58' },
  { c: 'be', name: 'Aveve Lapage Zottegem', street: 'Wassenhovestraat 26 (Leeuwergem)', zip: '9620', city: 'Zottegem', tel: '09 360 16 44', email: 'lapage.marc@aveve.be' },
  { c: 'be', name: 'Horta Kuurne - Dendauw', street: 'Brugsesteenweg 432', zip: '8520', city: 'Kuurne', tel: '056 71 24 52', email: 'info@dendauw.be' },
  { c: 'be', name: 'Animal Friends', street: "Rue d'Abeiche 1", zip: '1420', city: "Braine-l'Alleud", tel: '02 384 23 66', email: 'info@animals-friends.be', web: 'https://www.sprl-luc-van-thuyne.be/' },
  { c: 'be', name: 'Carine Engels', street: 'Peperstraat 2', zip: '9060', city: 'Zelzate', tel: '09 345 53 09' },
  { c: 'be', name: 'Convens', street: 'Graanstraat 19', zip: '2490', city: 'Balen', tel: '014 31 15 74', email: 'info@convens.be', web: 'https://www.convens.be' },
  { c: 'be', name: 'Horta Lemmens', street: 'Pierstraat 12', zip: '2840', city: 'Rumst', tel: '03 888 00 35', email: 'info@hortalemmens.be' },
  { c: 'be', name: 'Animalis.be', street: 'Rue Ernest Montellier 24', zip: '5380', city: 'Noville-les-Bois', email: 'info@animalis.be', web: 'https://www.animalis.be' },
  { c: 'be', name: 'Natuurlijk Goed', street: 'Dendermondse Steenweg 322', zip: '9100', city: 'Sint-Niklaas', tel: '0479 44 90 28', email: 'info@natuurlijkgoed.be', web: 'https://www.natuurlijkgoed.be' },
  { c: 'be', name: 'Animal City', street: 'Rue de Dinant 124', zip: '5570', city: 'Beauraing', tel: '082 71 15 91', email: 'info@animalcity.be' },
  { c: 'be', name: 'Garden Rolland Delbart', street: 'Rue de Tournai 228', zip: '7973', city: 'Beloeil', tel: '069 57 52 21', email: 'info@rollanddelbart.be', note: 'order' },
  { c: 'be', name: 'Verwimp Dier & Tuin', street: 'Lankem 1', zip: '2200', city: 'Herentals', tel: '014 26 50 38' },
  { c: 'be', name: 'Fietsen Geukens', street: 'Zand 1', zip: '2299', city: 'Vorselaar', tel: '0477 54 92 88' },
  { c: 'be', name: 'Poils & Plumes', street: 'Chaussée de Namur 434, Waret-la-Chaussée', zip: '5310', city: 'Éghezée', tel: '081 58 08 66', email: 'WLC@poilsetplumes.be' },
  { c: 'be', name: "Boerens'hof Lede", street: 'Langeweestraat 34', zip: '9340', city: 'Lede', tel: '053 80 51 67', email: 'michael.van.caelenberg@telenet.be' },
  { c: 'be', name: 'Dierenvoeders & Strooisels Hans Mollen', street: 'Nestlaan 124', zip: '2520', city: 'Broechem', tel: '0473 91 58 41', email: 'hans.mollen@telenet.be' },

  { c: 'nl', name: 'Broekema Duivensportcentrum Friesland', street: 'Hogedijken 34-3', zip: '9101 WZ', city: 'Dokkum', tel: '+31 6 54 27 11 11' },
  { c: 'nl', name: 'Obie Diervoeders', street: 'Plesmanweg 25', zip: '7602 PD', city: 'Almelo', tel: '+31 546 49 26 12' },
  { c: 'nl', name: 'Beestenboel Wezep', street: 'Stationsweg 7C', zip: '8091 AA', city: 'Wezep' },
  { c: 'nl', name: 'Rottine dieren- en duivenspeciaalzaak', street: 'Suder Stasjonsstrjitte 7', zip: '9271 HA', city: 'De Westereen', tel: '+31 511 44 58 09', email: 'info@rottinedierenspeciaalzaak.nl', web: 'http://www.rottinedierenspeciaalzaak.nl' },
  { c: 'nl', name: 'De Groot Diervoeders B.V.', street: 'Zwolseweg 115', zip: '8275 AD', city: "'s-Heerenbroek", tel: '+31 38 355 72 14', email: 'info@degrootdiervoeders.nl', web: 'https://www.degrootdiervoeders.nl' },
  { c: 'nl', name: 'Dierenspeciaalzaak Jan Wagemakers', street: 'Kalsdonksestraat 146', zip: '4702 ZJ', city: 'Roosendaal', tel: '+31 165 53 75 34', email: 'info@janwagemakers.nl', web: 'https://www.janwagemakers.nl' },
  { c: 'nl', name: 'Welkoop Staphorst', street: 'Oude Rijksweg 138', zip: '7951 DN', city: 'Staphorst', tel: '+31 522 46 12 18', web: 'https://www.welkoop.nl/winkels/staphorst' },
  { c: 'nl', name: 'De Groene Luifel', street: 'Oude Kerkstraat 12', zip: '4524 CV', city: 'Sluis', tel: '+31 117 46 17 31', email: 'info@degroeneluifel.nl', web: 'https://www.degroeneluifel.nl/' },
  { c: 'nl', name: 'Dierentotaalzaak Ons Schuurtje', street: 'Noorderstraat 23a', zip: '2922 AB', city: 'Krimpen aan den IJssel', tel: '+31 180 55 24 71', email: 'info@ons-schuurtje.nl' },
  { c: 'nl', name: 'Mallepietje Diervoeding', street: 'Van IJsendijkstraat 160 A', zip: '1442 LC', city: 'Purmerend', tel: '+31 6 12 32 58 25', email: 'mallepietjediervoeding@outlook.com' },
  { c: 'nl', name: 'Schamp Diervoeders en Fourage', street: 'Distelbergsestraat 1a', zip: '', city: 'Afferden (Gelderland)', tel: '+31 6 27 24 99 30', note: 'appointment' },
  { c: 'nl', name: 'Theuns Dierenvoeders', street: 'De Hak 16B', zip: '5107 RG', city: 'Dongen', tel: '+31 162 31 30 43', email: 'info@dierenparadijstheuns.nl', web: 'https://www.dierenparadijstheuns.nl/' },

  { c: 'de', name: 'Lasterie Shop', street: 'Altenberger Straße 3', zip: '49733', city: 'Haren (Ems), OT Altenberge', tel: '+49 5934 926 9975', email: 'info@lasterie.nl', web: 'https://www.lasterieshop.eu' },
  { c: 'de', name: 'Horst & Sandeck GmbH & Co. Landhandel KG', street: 'Handelsweg 5', zip: '38539', city: 'Müden (Aller)', tel: '+49 5375 1237', email: 'info@tauben-sandeck.de', web: 'https://shop.tauben-sandeck.de/', note: 'order' },
  { c: 'de', name: 'Lindemeyer Tiernahrung + Taubensport', street: 'Roßkampweg 69', zip: '32130', city: 'Enger', tel: '+49 5224 790 357', email: 'info@tiernahrung-lindemeyer.de', web: 'https://www.tiernahrung-lindemeyer.de', note: 'order' },
  { c: 'de', name: 'Haarhaus H. - Die Fütterscheune', street: 'Eickenstraße 1A', zip: '51709', city: 'Marienheide-Kalsbach', email: 'futterscheune.tiernahrung@t-online.de', note: 'order' },
  { c: 'de', name: 'Futtermittel & Naturkost Mühle Gladen', street: 'Bahnhofstraße 42', zip: '46286', city: 'Dorsten-Lembeck', tel: '+49 2369 7112', email: 'info@muehle-gladen.de', note: 'order' },
  { c: 'de', name: 'Crengeldanzer Mühle Witten', street: 'Bochumer Str. 15', zip: '58455', city: 'Witten', tel: '+49 2302 57623', email: 'Crengeldanzer@web.de' },

  { c: 'fr', name: 'Pigeon Ledoux', street: '24 Rue Haute', zip: '80500', city: 'Rollot', tel: '+33 3 22 78 28 18', email: 'gl.pigeons@orange.fr', web: 'https://www.pigeon-ledoux.com/', note: 'order' },

  { c: 'gb', name: 'MRD Pigeon Supplies', street: '', zip: '', city: '', tel: '+44 7455 676 854', email: 'mark@mrdpigeonsupplies.co.uk', web: 'https://mrdpigeonsupplies.co.uk', distributor: true },

  { c: 'it', name: 'Da Ermanno di Carretti Massimo & C. sas', street: 'Via Guernica 5/C', zip: '42124', city: 'Reggio Emilia', tel: '+39 0522 702 874', email: 'daermanno@alice.it' },

  { c: 'hu', name: 'Iptaloft Kft', street: 'Árpád Vezér u. 2', zip: '2143', city: 'Kistarcsa', tel: '+36 30 960 7997', email: 'iptaloft@gmail.com', web: 'https://www.iptaloft.com' },

  { c: 'hr', name: 'Dalmat d.o.o.', street: 'Murvica IK 2A', zip: '23000', city: 'Zadar', tel: '+385 23 276 322', email: 'info@dalmat.hr', web: 'https://www.dalmat.hr' },

  { c: 'us', name: 'W M Imports, Inc. (Andy Waclaw)', street: '', zip: '', city: '', tel: '+1 773 771 7587', email: 'feedlikeapro@gmail.com', web: 'https://www.feedlikeapro.com', distributor: true },
  { c: 'us', name: 'BigAndysloft LLC (Andy Larentzakis)', street: '', zip: '', city: '', tel: '+1 352 345 6613', email: 'BigAndysloft@yahoo.ca' },

  { c: 'cz', name: 'Lubomír Kubácek', street: '', zip: '', city: '', tel: '+420 607 605 636', email: 'lubomir.kubacek@oswald.cz', web: 'http://www.eshop-provsechny.cz/pigeons/index.php?route=product/category&path=67', distributor: true },

  { c: 'pl', name: 'AIDI Polska (Marek Trzaska)', street: '', zip: '', city: '', tel: '+48 882 063 479', email: 'm.trzaska1@gmail.com', web: 'https://www.aidipolska.pl', distributor: true }
];

const COUNTRY_ORDER = ['be', 'nl', 'de', 'fr', 'gb', 'it', 'hu', 'hr', 'us', 'cz', 'pl'];

/* --------------------------------------------------------- the company -- */
const CONTACT = {
  eddy: { name: 'Eddy Noël', tel: '+32 474 07 52 34', href: 'tel:+32474075234' },
  ivan: { name: 'Ivan Willockx', tel: '+32 475 98 36 15', href: 'tel:+32475983615' },
  email: 'info@aidi.be'
};
