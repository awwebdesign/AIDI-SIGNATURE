/* AIDI: translations.
   Five languages. Every visible string lives here, keyed by dotted path and
   resolved onto [data-i18n] nodes by script.js.
   Product copy is keyed by the slugs defined in data.js. */

const LANGS = [
  { code: 'nl', name: 'Nederlands', html: 'nl' },
  { code: 'fr', name: 'Français',   html: 'fr' },
  { code: 'en', name: 'English',    html: 'en' },
  { code: 'de', name: 'Deutsch',    html: 'de' },
  { code: 'zh', name: '中文',        html: 'zh-Hans' }
];

const I18N = {};

/* ========================================================== NEDERLANDS === */
I18N.nl = {
  ui: {
    skip: 'Ga naar hoofdinhoud',
    menu: 'Menu',
    close: 'Sluiten',
    language: 'Taal',
    languageChoose: 'Kies een taal',
    tagline: 'Voeding voor duivensport',
    details: 'Details',
    composition: 'Samenstelling',
    analytics: 'Analytische bestanddelen',
    usage: 'Gebruiksaanwijzing',
    available: 'Verkrijgbaar in',
    new: 'Nieuw',
    all: 'Alles',
    results: 'producten',
    resultsOne: 'product',
    dealers: 'verkooppunten',
    dealersOne: 'verkooppunt',
    noResults: 'Niets gevonden',
    noResultsBody: 'Pas uw zoekopdracht of filters aan om meer resultaten te zien.',
    reset: 'Filters wissen',
    clear: 'Wissen',
    searchDealers: 'Zoek op winkel, gemeente of postcode',
    download: 'Download PDF',
    phone: 'Bellen',
    email: 'Mailen',
    website: 'Website',
    orderOnly: 'Enkel op bestelling',
    byAppointment: 'Open op afspraak',
    distributor: 'Invoerder',
    findDealer: 'Vind een verkooppunt',
    exploreRange: 'Ontdek het gamma',
    back: 'Terug',
    home: 'Home',
    sortBy: 'Sorteren op'
  },

  nav: {
    concept: 'Concept',
    voeders: 'Voeders',
    supplementen: 'Supplementen',
    equipment: 'Equipment',
    systeem: 'Systeem',
    team: 'Team',
    verkooppunten: 'Verkooppunten',
    contact: 'Contact'
  },

  spec: {
    fat: 'Ruw vet',
    protein: 'Ruw eiwit',
    absorbable: 'Opneembaar eiwit',
    carbs: 'Koolhydraten',
    kcal: 'Omzetbare energie',
    fibre: 'Ruwe celstof',
    omega: 'Omega-verhouding',
    kcalUnit: 'kcal/kg',
    energy: 'Energie'
  },

  phase: {
    winter: 'Winter & rust',
    kweek: 'Kweek',
    vlucht: 'Vlucht',
    rui: 'Rui',
    algemeen: 'Algemeen'
  },

  band: {
    sprint: 'Snelheid',
    midfond: 'Halve fond',
    dagfond: 'Dagfond',
    fond: 'Zware fond & overnacht'
  },

  group: {
    energie: 'Energie',
    conditie: 'Conditie',
    herstel: 'Herstel',
    darmflora: 'Darmflora',
    mineralen: 'Mineralen',
    verzorging: 'Verzorging'
  },

  country: {
    be: 'België', nl: 'Nederland', de: 'Duitsland', fr: 'Frankrijk',
    gb: 'Groot-Brittannië', it: 'Italië', hu: 'Hongarije', hr: 'Kroatië',
    us: 'VS & Noord-Amerika', cz: 'Tsjechië & Slowakije', pl: 'Polen'
  },

  home: {
    heroFinal: "Voeder ze ernaar.",
    heroPunctuation: ".",
    featuredLabel: "In beeld:",
    seasonWinterWhen: "nov – dec",
    seasonKweekWhen: "jan – mrt",
    seasonVluchtWhen: "apr – aug",
    seasonRuiWhen: "aug – okt",
    title: 'AIDI: voeding voor duivensport | Team Noël-Willockx',
    meta: 'Tien mengelingen en veertien supplementen voor duivensport, elk met de gemeten analytische waarden. Ontwikkeld door Team Noël-Willockx, 45 jaar voedingsexpertise.',
    h1a: 'Uw duiven zijn ',
    h1b: 'atleten',
    h1c: '. Voeder ze ernaar.',
    lede: 'AIDI is het voedingsconcept van Team Noël-Willockx. Tien mengelingen, veertien supplementen, en bij elk product de gemeten waarden. Geen beloftes, cijfers.',
    fact1: 'jaar voedingsexpertise',
    fact2: 'producten in het gamma',
    fact3: 'landen met verkooppunten',
    fact4: 'duiven geklopt op 1. Nat. Argenton',
    analyserTitle: 'Analytische waarden',
    analyserLive: 'Uit het gamma',
    analyserHint: 'Toon',

    seasonTitle: 'Een duif heeft niet het hele jaar hetzelfde nodig',
    seasonLede: 'Het gamma volgt het seizoen. Elke fase stelt andere eisen aan brandstof, bouwstoffen en herstel, en dus een andere mengeling.',
    seasonWinterD: 'Veel ruwvezel, weinig vet. Ongelimiteerd te voederen zonder dat duiven aanvetten.',
    seasonKweekD: 'Hoog gediversifieerd opneembaar eiwit voor de jongen, zonder de ouderdieren uit te putten.',
    seasonVluchtD: 'Zes vliegmengelingen, van snelheidsvlucht tot overnachtfond. Elk met een eigen macroprofiel.',
    seasonRuiD: 'Verhoogd aandeel aminozuren en een goede omega-verhouding voor een vlekkeloze pluimkwaliteit.',
    seasonCta: 'Bekijk de mengelingen',

    conceptTitle: 'Waarom wij de cijfers erbij zetten',
    conceptP1: 'Koolhydraten en vetten als brandstof, eiwitten voor de opbouw, vitamines en mineralen als bescherming. De best mogelijke balans tussen die groepen is de sleutel tot succes: voor déze afstand, in dít weer, na díe vlucht.',
    conceptP2: 'Daarom publiceren we bij elke mengeling het ruw vet, het ruw eiwit, het opneembare eiwit, de koolhydraten, de omzetbare energie, de ruwe celstof en de omega-verhouding. Niet omdat het mooi staat, maar omdat u er een keuze mee kunt maken.',
    conceptP3: 'Het gaat om het opneembare eiwit, niet om het ruwe. Dat onderscheid maakt het verschil tussen een duif die de opeenvolgende wedstrijden afwerkt en een duif die halverwege het seizoen leegloopt.',
    conceptCompare: "Alle tien mengelingen vergeleken",
    conceptCompareNote: 'Verhouding vet / eiwit / koolhydraten. De volledige waarden staan bij elk product.',
    conceptCta: 'Lees het AIDI Concept',

    rangeTitle: 'Het gamma',
    rangeLede: "Zesentwintig producten in drie lijnen. Alles wordt in België gemaakt.",
    rangeVoedersD: 'Tien mengelingen voor vlucht, kweek, rui en rust, elk met de volledige analyse.',
    rangeSupplementenD: 'Veertien supplementen voor energie, conditie, herstel, darmflora en mineralen.',
    rangeEquipmentD: "Automatische voederbakken en opleermanden.",
    itemsN: 'producten',

    proofTitle: 'De resultaten',
    proofLede: 'Op eigen hok en bij anderen. Nationale asduiven van de KBDB over de laatste jaren, telkens met de betrokkenheid van Team Noël-Willockx.',
    proofCta: 'Alle resultaten',
    proofHighlights: 'Hoogtepunten 2022',
    proofAces: 'Nationale asduiven KBDB',
    proofBirds: 'duiven',

    teamTitle: 'Twee specialisten, vijfenveertig jaar',
    teamP1: 'Eddy Noël staat voor meer dan veertig jaar ervaring in de duivensport. Een ruim deel daarvan werkte hij als gespecialiseerd voedingsdeskundige en ontwikkelde hij hoogkwalitatieve, uitgebalanceerde voermengelingen en bijproducten. Hij is een autoriteit op vlak van voeding, geeft lezingen over verduisteren en bijlichten, kweek- en vliegprestaties en hokklimaat, en begeleidde diverse tophokken.',
    teamP2: 'Ivan Willockx leerde de kneepjes van het topsportvak als ex-profvoetballer. Vandaag is hij duivenmakelaar en bezoekt hij in die hoedanigheid veel liefhebbers. Daardoor kent hij als geen ander de dagdagelijkse noden van topspelers.',
    teamCta: 'Over het team',
    teamCaption: 'Eddy Noël en Ivan Willockx',

    plansTitle: 'Het systeem, uitgeschreven',
    plansLede: 'Veertien vlieg-, kweek- en ruischema\'s. Week per week, met de juiste mengeling en het juiste supplement op het juiste moment. Gratis te downloaden.',
    plansCta: 'Alle schema\'s',

    ctaTitle: 'Waar koopt u AIDI?',
    ctaBody: 'AIDI is verkrijgbaar bij ruim zestig verkooppunten en invoerders in elf landen. Of bel Eddy of Ivan rechtstreeks. Advies kost niets.'
  },

  concept: {
    title: 'AIDI Concept: bij een professionele aanpak maken details het verschil',
    meta: 'Het AIDI Concept: 45 jaar expertise, uitgebreide testen en de meest recente wetenschappelijke inzichten, vertaald naar mengelingen met gepubliceerde analytische waarden.',
    h1: 'Bij een professionele aanpak maken details het verschil',
    lede: 'Prestaties en recuperatie van onze atleten kunnen sterk verbeterd worden door een juist voedingspatroon. Dat is geen slogan. Het is de reden waarom het AIDI Concept bestaat.',
    s1t: 'Het jaar rond, niet alleen op zondag',
    s1p1: 'Een gezond, evenwichtig dieet is van zeer groot belang. De juiste voeding het jaar rond heeft invloed op de algemene gezondheidstoestand, het vormpeil, het aanhouden van dat vormpeil, de intensiteit en duur van de inspanning, en de recuperatie. Dat zijn onmisbare pijlers om onze atleten topprestaties te laten leveren, en het vraagt zeer specifieke begeleiding.',
    s1p2: 'Voor het seizoen bereiden we de vliegduiven met een aangepast programma voor op de wedvluchten. Tijdens het seizoen voorzien we hen week na week van voldoende brandstof. Na de wedstrijd kiezen we op gepaste tijdstippen voor een goede recuperatiemengeling met aanvullende bijproducten.',
    s2t: 'Het allerbeste is maar net goed genoeg',
    s2p1: 'Daarom gebruiken we uitsluitend kwalitatief hoogwaardige ingrediënten om onze mengelingen samen te stellen. Dat, samen met 45 jaar expertise, uitgebreide testen en de meest recente wetenschappelijke inzichten, ligt aan de basis van het AIDI concept.',
    s2p2: 'Koolhydraten en vetten als brandstof, eiwitten voor de opbouw, vitamines, mineralen en sporenelementen als bescherming. De best mogelijke balans tussen de verschillende soorten koolhydraten, eiwitten en vetten voor verschillende afstanden en omstandigheden is hier de sleutel tot succes.',
    s3t: 'Zo compleet dat bijproducten bijzaak worden',
    s3p1: 'In het AIDI concept zijn alle mengelingen zodanig compleet samengesteld dat het gebruik van bijproducten tot een minimum herleid kan worden. De hoge opneembaarheid van energie en bouwstoffen zorgt voor een zo compleet mogelijke vetverbranding met bijzonder weinig afvalstoffen. Dat laat duiven toe een intens vliegprogramma af te werken zonder verlies van conditie en vorm.',
    s3p2: 'Om op het juiste moment topprestaties te leveren hebben supplementen wel degelijk hun nut. De boodschap is zo weinig mogelijk, doch efficiënt en doelgericht te handelen en te anticiperen op de voorbije en de zich aandienende omstandigheden.',
    s4t: 'Een duif heeft niet veel nodig',
    s4p1: 'Wat u ook geeft, hou er rekening mee dat alles door de lever van dat kleine duivenlichaam verwerkt moet worden. De kunst is de juiste dingen op de juiste momenten te doen, en te weten wat u wanneer, waarom en hoe doet.',
    s4p2: 'Gebruik alleen dingen die de tekortkomingen van uw voer opvangen en bewezen hebben dat ze prestatiegericht een meerwaarde creëren. Even bijsturen voor zware vluchten of naarmate het seizoen vordert laat onze atleten toe telkens weer in de beste conditie aan de start te verschijnen.',
    numbersT: 'Wat wij publiceren',
    numbersP: 'Bij elke mengeling staan zeven gemeten waarden. Ze zijn er niet om indruk te maken. Ze zijn er om een keuze mogelijk te maken.',
    numbersFat: 'Bepaalt hoeveel energie in reserve gaat en hoe snel een duif herstelt.',
    numbersProtein: 'Het ruwe gehalte zegt weinig; alles hangt af van wat er effectief opneembaar is.',
    numbersAbsorbable: 'Dít cijfer bepaalt of spieren tussen twee wedstrijden herstellen.',
    numbersCarbs: 'De snelst beschikbare brandstof. Bepalend voor snelheidsvluchten.',
    numbersKcal: 'De totale omzetbare energie per kilo voer.',
    numbersFibre: 'Reinigende werking, houdt de darmflora in conditie.',
    numbersOmega: 'De verhouding omega 6 op omega 3. Lager betekent efficiëntere verbranding.'
  },

  voeders: {
    filterHelp: "Kies een fase. Voor vluchten kunt u ook op afstand verfijnen. Klik op een mengeling voor de volledige analyse.",
    title: 'Voeders: tien mengelingen met hun volledige analyse | AIDI',
    meta: 'Tien AIDI-mengelingen voor snelheid, halve fond, dagfond, zware fond, kweek, rui en winterrust. Elk met gepubliceerd vet-, eiwit- en koolhydraatgehalte.',
    h1: 'Tien mengelingen, tien profielen',
    lede: 'Van een sprintmengeling met 67% koolhydraten tot een fondmengeling met 14,5% vet. Filter op fase en afstand, of vergelijk alles in één tabel.',
    filterPhase: 'Fase',
    filterBand: 'Afstand',
    compareTitle: 'Alles vergelijken',
    compareLede: 'Dezelfde zeven waarden voor alle tien de mengelingen. Klik op een kolomtitel om te sorteren.',
    colName: 'Mengeling',
    colPhase: 'Fase'
  },

  supplementen: {
    title: 'Supplementen: veertien producten voor conditie, herstel en darmflora | AIDI',
    meta: 'Veertien AIDI-supplementen: energie, conditie, herstel, darmflora, mineralen en verzorging. Met volledige gebruiksaanwijzing per product.',
    h1: 'Zo weinig mogelijk, doch doelgericht',
    lede: 'Een goed uitgebalanceerd voer maakt supplementen grotendeels overbodig. Wat overblijft is gericht bijsturen: op het juiste moment, met de juiste hoeveelheid.',
    filterGroup: 'Doel'
  },

  equipment: {
    title: "Equipment: voederbakken en manden | AIDI",
    meta: "AIDI equipment: volautomatische voederbakken in vier maten en houten opleermanden.",
    h1: 'Equipment',
    lede: 'Dezelfde maatstaf als voor het voer: kwaliteit en degelijkheid, gemaakt om jaren mee te gaan.',
    specSize: 'Maat',
    specBirds: 'Duiven',
    specLength: 'Lengte',
    specFeed: 'Voer',
    featTimer: 'Nauwkeurig instelbaar per seconde, met ingebouwde schakelklok',
    featTimes: 'Tot 8 voederbeurten per dag',
    featPower: 'Werkt op netstroom en oplaadbare batterij 12 VDC',
    featBattery: 'Volle batterij houdt tot 30 dagen'
  },

  systeem: {
    moultT: "Rui",
    title: 'Het systeem: veertien vlieg-, kweek- en ruischema\'s | AIDI',
    meta: 'Download de AIDI vliegplannen: snelheid, halve fond, dagfond, overnachtfond, jonge duiven, kweek, rui en winterrust. Week per week uitgeschreven.',
    h1: 'Het systeem, week per week uitgeschreven',
    lede: 'Weten welke mengeling bestaat is één ding. Weten wanneer u ze geeft, is het systeem. Veertien schema\'s, gratis te downloaden.',
    generalT: 'Om te beginnen',
    flightT: 'Vliegschema\'s',
    breedT: "Kweek",
    restT: 'Winter en rust',
    p: {
      'optimaal-gebruik-aidi-concept': 'Hoe gebruik ik de AIDI voeders?',
      'mis-de-start-van-het-seizoen-niet': 'Mis de start van het seizoen niet',
      'vliegplan-snelheid-aidi-speedy-sprint': 'Vliegplan Snelheid: AIDI Speedy Sprint',
      'vliegplan-snelheid': 'Vliegplan Snelheid',
      'vliegschema-aidi-halve-fond': 'Vliegschema Halve Fond',
      'vliegschema-aidi-dagfond': 'Vliegschema Dagfond',
      'vliegschema-aidi-girl-power': 'Vliegschema Girl Power (duivinnen)',
      'overnachtfond': 'Vliegschema Overnachtfond',
      'vliegschema-aidi-jonge-duiven': 'Vliegschema Jonge Duiven',
      'vliegplan-thuisblijvende-doffers-duivinnen': 'Thuisblijvende doffers en duivinnen',
      'rui': 'Ruischema',
      'kweek': 'Kweekschema',
      'kweekschema-met-pro-bacterial': 'Kweekschema met AIDI Pro Bacterial',
      'winter-rust-schema': 'Winter- en rustschema'
    }
  },

  team: {
    title: 'Team Noël-Willockx: vijfenveertig jaar voedingsexpertise | AIDI',
    meta: 'Eddy Noël en Ivan Willockx: 45 jaar voedingsexpertise in de duivensport, met nationale asduiven KBDB en topresultaten op eigen hok.',
    h1: 'Team Noël-Willockx',
    lede: 'Twee specialisten die weten wat nodig is om een lichaam in topvorm te krijgen en te houden. Dat bewijzen de resultaten, op eigen hok en bij anderen.',
    eddyT: 'Eddy Noël',
    eddyP1: 'Meer dan veertig jaar ervaring in de duivensport. Een ruim deel daarvan was hij werkzaam als gespecialiseerd voedingsdeskundige en ontwikkelde hij diverse hoogkwalitatieve, perfect uitgebalanceerde voermengelingen en bijproducten, aangepast aan de hedendaagse duivensport.',
    eddyP2: 'Eddy is een autoriteit op vlak van voeding en bijproducten voor duivensport en deelt die kennis graag tijdens zijn vele lezingen: over voeding, over verduisteren en bijlichten, over betere kweek- en vliegprestaties, over spelen met jonge duiven, over een gezond hokklimaat. Hij is auteur van vele artikels en begeleidde diverse succesvolle tophokken.',
    ivanT: 'Ivan Willockx',
    ivanP1: 'Ivan leerde de kneepjes van het topsportvak als ex-profvoetballer. Vandaag is hij actief als duivenmakelaar en bezoekt hij in die hoedanigheid vele liefhebbers.',
    ivanP2: 'Daardoor kent hij als geen ander de dagdagelijkse noden van topspelers: welke vragen er leven op het hok, en waar het in de praktijk misloopt.',
    resultsT: 'Hoogtepunten 2022',
    resultsLede: '15× top 100 nationaal, 63× top 100 nationale zone en 56× top 100 provinciaal.',
    acesT: 'Nationale asduiven KBDB',
    acesLede: 'Over de laatste jaren, met telkens de betrokkenheid van Team Noël-Willockx vermeld.',
    share: 'aandeel',
    birds: 'duiven'
  },

  verkooppunten: {
    nearbyTitle: "Vind een verkooppunt dichtbij",
    nearbyHelp: "Gebruik uw locatie om de dichtstbijzijnde verkooppunten te vinden, of zoek hieronder op gemeente of postcode.",
    locate: "Gebruik mijn locatie",
    locating: "Uw locatie wordt bepaald…",
    locationFound: "De drie dichtstbijzijnde verkooppunten met een bekend adres. Afstanden zijn hemelsbreed; bel vooraf voor beschikbaarheid.",
    locationDenied: "Geen toegang tot uw locatie. Geef toestemming in uw browser en probeer opnieuw, of zoek hieronder op gemeente of postcode.",
    locationUnavailable: "Uw locatie is niet beschikbaar. Probeer opnieuw of zoek hieronder op gemeente of postcode.",
    nearest: "Dichtstbijzijnde",
    straightLine: "hemelsbreed",
    route: "Plan uw route",
    searchLooking: "Dichtstbijzijnde verkooppunten bij {place} zoeken…",
    searchNearest: "Geen verkooppunt in {place}. Dit zijn de drie dichtstbijzijnde, hemelsbreed gemeten:",
    title: 'Verkooppunten: waar koopt u AIDI? | AIDI',
    meta: 'Ruim zestig AIDI-verkooppunten in België en Nederland, plus invoerders in Duitsland, Frankrijk, het VK, Italië, Hongarije, Kroatië, de VS, Tsjechië en Polen.',
    h1: 'Waar koopt u AIDI?',
    lede: 'Ruim zestig winkels en invoerders in elf landen. Zoek op naam, gemeente of postcode.',
    ctaTitle: 'Uw winkel staat er niet bij?',
    ctaBody: 'Bent u handelaar en wilt u AIDI in uw assortiment? Neem contact op met Eddy of Ivan.'
  },

  contact: {
    title: 'Contact: Team Noël-Willockx | AIDI',
    meta: 'Contacteer Team Noël-Willockx rechtstreeks: Eddy Noël, Ivan Willockx en de internationale AIDI-invoerders.',
    h1: 'Contact',
    lede: 'Vragen over een mengeling, een schema of uw eigen situatie? Bel gerust. Advies kost niets.',
    directT: 'Rechtstreeks',
    directP: 'Eddy en Ivan nemen zelf op. Voor vragen over voeding, schema\'s of een specifiek probleem op uw hok.',
    mailT: 'Per e-mail',
    mailP: 'Voor bestellingen, handelsaanvragen en alles wat geen haast heeft.',
    intlT: 'Internationale invoerders',
    intlP: 'Buiten België en Nederland loopt de verdeling via onze invoerders.',
    dealerT: 'Liever in de winkel?',
    dealerP: 'AIDI is verkrijgbaar bij ruim zestig verkooppunten.'
  },

  footer: {
    about: 'Voeding voor duivensport, ontwikkeld door Team Noël-Willockx. Alles wordt in België gemaakt.',
    madeIn: 'Gemaakt in België',
    range: 'Gamma',
    company: 'Het bedrijf',
    support: 'Praktisch',
    rights: 'Alle rechten voorbehouden.',
    colophon: 'Herontworpen door AW Webdesign'
  },

  /* ------------------------------------------------------------ products */
  p: {
    'aidi-speedy-sprint': {
      name: 'AIDI Speedy Sprint',
      tag: 'Extreem hoog koolhydraatgehalte voor snelheidsvluchten en alles met één nacht mand.',
      desc: [
        'Op koolhydraten vliegen duiven het snelst. AIDI Speedy Sprint vult de koolhydraattank volledig met makkelijk en snel verteerbare suikers die grote hoeveelheden onmiddellijk beschikbare energie leveren. Die hogere snelheid houden de duiven bovendien langer aan.',
        'Te gebruiken op vluchten met één nacht mand, of die nu 50 of 350 km lang is. Alleen het doordeweekse voedingsplan verschilt naargelang de afstand; de opbouw van energie uit vetten gebeurt eerder in de week. Duiven die met een volle voorraadtank de mand ingaan vliegen vlotjes twee tot drie minuten per uur vlucht sneller.'
      ],
      use: [
        'Vluchten met 1 nacht mand: naar believen verstrekken op de dag van, en tot aan, de inkorving.',
        'Tip: wilt u de duiven flink laten doortrainen, geef ze 1 à 2 maaltijden AIDI Speedy Sprint.'
      ],
      ing: 'Bordeaux mais, cribbs mais, tarwe, gepelde gerst, rode millo, witte dari, gepelde haver, rondrijst, lijnzaad, kempzaad, millet, kanariezaad, katjang idjoe.'
    },
    'aidi-mix-1': {
      name: 'AIDI Mix 1',
      tag: 'De lichte basismengeling van het vliegassortiment, van de kortste tot de langste afstand.',
      desc: [
        'Makkelijk verteerbaar, met een hoge opneembaarheid en weinig afvalstoffen bij verbranding. Duiven vliegen langer snel en herstellen bijzonder snel, waardoor u uw dieren intensiever kunt trainen en laten vliegen.',
        'De aanwezige ruwvezel heeft een reinigende werking en houdt de darmflora in optimale conditie. Het hoge opneembare eiwitgehalte laat spieren snel recupereren, terwijl het relatief hoge vetgehalte meteen zorgt voor de energieopbouw naar de volgende vlucht toe.'
      ],
      use: [],
      ing: 'Bordeaux mais, cribbs mais, tarwe, gerst, rode milo, witte dari, paddy, cardy, lijnzaad, kempzaad, millet, kanariezaad, boekweit, katjang idjoe, getoaste soja.'
    },
    'aidi-mix-2': {
      name: 'AIDI Mix 2',
      tag: 'Kleine granen en peulen voor een betere verdeling en opneembaarheid. Tot 3 dagen voor de vlucht.',
      desc: [
        'De bewust gekozen granen en peulen van klein formaat zorgen voor een betere verdeling en opneembaarheid. Net als bij de andere mengelingen zorgt natuurlijk gedroogde mais, met een hoger aandeel suikers en zetmelen, voor een verhoogde voedingswaarde.',
        'Wedstrijdduiven hebben een grote eiwitbehoefte, maar het is het opneembare eiwitgehalte dat telt, niet het ruwe. Een juiste balans tussen het aan de gang houden van de stofwisseling en het voorzien van de benodigde aminozuren is hier de sleutel tot succes.'
      ],
      use: ['Kan gegeven worden tot 3 dagen voor de vlucht.'],
      ing: 'Bordeaux cribbs mais, kleine gele cribbsmais, tarwe, rode milo, witte dari, gepelde haver, rondrijst, cardi, lijnzaad, koolzaad, kempzaad, kanariezaad, katjang idjoe, getoaste soya, kleine groene erwten.'
    },
    'aidi-mix-3': {
      name: 'AIDI Mix 3',
      tag: 'Energierijk, met een hoog en gevarieerd aanbod aan vetzuren.',
      desc: [
        'Een bijzonder energierijke mengeling die onze atleten van de benodigde brandstof voorziet via een hoog en gevarieerd aanbod aan verschillende vetzuren.',
        'Die vetzuren bouwen niet alleen de nodige vetreserves voor de vlucht op, ze maken de mengeling ook bijzonder geschikt om een zeer snel herstel bij thuiskomst te garanderen.'
      ],
      use: ['Afhankelijk van het aantal te voorziene vlieguren: te gebruiken van 1 tot 3 dagen voor de inkorving.'],
      ing: 'Bordeauxmais, popcornmais, kleine cribbsmais, tarwe, rode milo, witte dari, gepelde haver, paddy, rondrijst, cardi, zonnepitten, gepelde zonnepitten, lijnzaad, raapzaad, kempzaad, millet, kanariezaad, katjang idjoe, getoaste soya.'
    },
    'aidi-girl-power': {
      name: 'AIDI Girl Power',
      tag: 'Speciaal ontworpen voor duivinnen met een intensief programma tussen 300 en 700 km.',
      desc: [
        'Een weloverwogen, wetenschappelijk verantwoorde mix van verschillende koolhydraat-, vet- en eiwitbronnen. Die zorgen voor een zeer makkelijk te verteren voer, een bijzonder hoge opneembaarheid en een verbranding met minder afvalstoffen. De duivin verteert de vele vliegkilometers zuiniger en economischer.',
        'De aanwezige ruwe celstof zorgt voor een constant perfecte darmwerking. Daardoor blijven duivinnen het hele vliegseizoen makkelijk in optimale conditie en recupereren ze zeer snel, zelfs na de moeilijkste vluchten.'
      ],
      use: [],
      ing: 'Kleine cribsmais, bordeauxmais, popcornmais, tarwe, gerst, gepelde gerst, rode milo, witte dari, gepelde haver, paddy, rondrijst, kardi, gepelde zonnepitten, lijnzaad bruin, koolzaad, kempzaad, millet, kanariezaad, wikken, katjang idjoe, getoaste soya.'
    },
    'aidi-long-distance-mix': {
      name: 'AIDI Long Distance Mix',
      tag: 'Ontwikkeld voor de verste afstanden en de overnachtfond.',
      desc: [
        'Elke discipline binnen een steeds meer gespecialiseerde duivensport vraagt een zeer specifieke voorbereiding. Duiven op de verste afstanden krijgen het vaak hard te verduren, en daar kunnen ze maar beter goed op voorbereid zijn.',
        'AIDI Long Distance Mix staat garant voor een goede balans tussen de verschillende soorten koolhydraten, vetten en eiwitten. Dat is hier nog meer dan anders van cruciaal belang om het volledige potentieel en het volle rendement van uw duiven te kunnen benutten.'
      ],
      use: [],
      ing: 'Gele cribbsmais, tarwe, rode millo, witte dari, gepelde haver, paddy, rondrijst, cardy, gepelde zonnepitten, lijnzaad, raapzaad, koolzaad, kempzaad, millet, kanariezaad, wikken, kadjang idjoe, getoaste soya, maple peas, groene erwten.'
    },
    'aidi-super-kweek': {
      name: 'AIDI Super Kweek',
      tag: 'Brengt de jongen groot én houdt de ouderdieren in uitstekende conditie.',
      desc: [
        'Het hoge, gediversifieerde opneembare eiwitgehalte levert alle benodigde bouwstoffen om jonge duiven probleemloos te laten opgroeien en hen alle kansen te geven uit te groeien tot sterke atleten.',
        'De zorgvuldig uitgekozen vetrijke granen en zaden maken het voer licht verteerbaar. Samen met voldoende ruwe celstof houden ze de jongen én de ouderdieren in perfecte conditie, ook na meerdere kweekrondes. De samenstelling is zo afgestemd op kwekende duiven dat de ouderdieren het zonder verspilling opnemen en vlot afazen aan de jongen.'
      ],
      use: [],
      ing: 'Bordeauxmais, cribbs mais, tarwe, rode milo, witte dari, gepelde haver, paddy, rondrijst, kardi, gestreepte zonnepitten, gepelde zonnepitten, lijnzaad, raapzaad, hennep, millet, kanariezaad, wikken, katjang idjoe, getoaste soja, maple peas, groene erwten, gele erwten.'
    },
    'aidi-super-rui': {
      name: 'AIDI Super Rui',
      tag: 'Afgestemd op de verhoogde eiwitbehoefte tijdens de ruiperiode.',
      desc: [
        'De hoge opneembaarheid, de grote diversiteit aan benutbare eiwitten, de goede omega 3-6 verhouding en het specifiek voor de rui verhoogde aandeel aminozuren zorgen voor een uitstekende rui en een perfecte pluimkwaliteit.',
        'Deze vernieuwde samenstelling is nog minder belastend voor de duif. Ze zorgt daardoor voor een constant optimale conditie en garandeert een vlekkeloze rui.'
      ],
      use: [],
      ing: 'Bordeaux mais, cribbs mais, tarwe, gerst, rode millo, witte dari, gepelde haver, paddy, cardy, zonnepitten, gepelde zonnepitten, lijnzaad, koolzaad, raapzaad, kempzaad, millet, kanariezaad, wikken, kadjang idjoe, getoaste soya, erwten.'
    },
    'aidi-winter-rust': {
      name: 'AIDI Winter / Rust',
      tag: 'Voor na de ruiperiode, de wintermaanden en loszittende of opgesloten duiven.',
      desc: [
        'Veel ruwe celstof in de vorm van diverse ruwvezels zorgt ervoor dat de spijsvertering en de opname van voedingsstoffen optimaal blijven, met een reinigende werking.',
        'De juiste verhoudingen en de aard van de aanwezige vetzuren, koolhydraten en eiwitten maken dat AIDI Winter/Rust probleemloos ongelimiteerd gevoederd kan worden zonder dat de duiven aanvetten.'
      ],
      use: [],
      ing: 'Paddy rijst, gerst, gele cribbs mais, gepunte haver, bordeaux cribbs mais, witte tarwe, gestreepte zonnepitten, milo corn rood, cardy, boekweit, lijnzaad, kempzaad, katjang idjoe, getoaste soyabonen.'
    },
    'aidi-extra-power-snoepmix': {
      name: 'AIDI Extra Power Snoepmix',
      tag: 'Snoepzaad als conditioneringsmiddel, met perilla- en mariadistelzaad.',
      desc: [
        'Duiven krijgen na de training vaak een handje snoepzaad. Ze eten die dingen graag, en dat maakt het uitstekend geschikt om onze dieren te conditioneren, op voorwaarde dat je er een uitgelezen en aanvullende mix van maakt.',
        'Perilla- en mariadistelzaad hebben we bewust niet in de andere mengelingen gestoken, des te meer in deze. Geeft u elke duif na de training een snuifje, dan bent u zeker dat ieder dier zijn of haar dagelijkse portie verorbert. Door het hoge vetgehalte ook zeer geschikt als laatste toetje voor de inkorving.'
      ],
      use: [],
      ing: ''
    },

    'aidi-carbo-boost': {
      name: 'AIDI Carbo Boost',
      tag: 'Energiemix die het organisme sneller glycogeen laat aanmaken.',
      desc: [
        'Een wetenschappelijk uitgebalanceerde hoogwaardige energiemix die zorgt voor een prima werking van de spieren. De unieke samenstelling laat het organisme sneller glycogeen aanmaken, waardoor duiven langer aan een hogere snelheid kunnen vliegen.',
        'De toegevoegde antioxidanten, vitamines en elektrolyten zorgen respectievelijk voor ondersteuning van het immuunsysteem, een betere stressbestendigheid en een betere regeling van de waterhuishouding tijdens transport, trainingen en wedstrijden.'
      ],
      use: [
        '1 maatje (10 g) 1 maal per dag mengen met 600 g voer. Bevochtig het voer eerst met AIDI Omega Plus Olie Extra.',
        'Tijdens het vluchtseizoen: 1 à 2 dagen voor de inkorving.',
        'Om duiven beter en intenser te laten trainen: 3-5 dagen na elkaar, samen met AIDI Condition Booster.'
      ],
      ing: ''
    },
    'aidi-omega-plus-olie-extra': {
      name: 'AIDI Omega Plus Olie Extra',
      tag: 'Omega-3 oliën met lecithine, voor een snellere en efficiëntere vetzuuropname.',
      desc: [
        'Dagelijks gebruik verbetert de omega 3-6 verhouding van het voer aanzienlijk, wat zorgt voor een betere gezondheid en conditie. De toegevoegde lecithine zorgt voor een snellere, hogere en efficiëntere opname van deze vetzuren in het lichaam, waardoor duiven zonder problemen vaker en meer wedstrijdkilometers kunnen vliegen.',
        'Lecithine beïnvloedt bovendien de werking van de hersenen en het oriënteringsvermogen positief. Het resultaat is daarnaast een bijzonder strak en glad verenpak.'
      ],
      use: [
        'Het hele jaar door, tijdens kweek, rui en vooral het vliegseizoen: 1 maal per dag 5 ml door 1 kg voer mengen, bij voorkeur \'s avonds.',
        'Ook perfect te gebruiken om andere supplementen in poedervorm aan het voer te laten kleven.',
        'Flink schudden voor gebruik. Tip: meng de olie \'s morgens door het voer voor het avondeten, zodat ze voldoende kan intrekken.'
      ],
      ing: ''
    },
    'aidi-omega-3-krill-olie': {
      name: 'AIDI Omega 3 Krill Olie',
      tag: 'Rijke bron van ALA, DHA en EPA, zonder de vervelende vissmaak.',
      desc: [
        'Vetzuren maken de hoofdmoot uit van de energievoorziening van een duif. Een efficiëntere verbranding reduceert de hoeveelheid afvalstoffen gevoelig, en dat is precies waar omega-3 het verschil maakt.',
        'AIDI Omega 3 Krill Olie is een rijke bron van hoogwaardig ALA (alfa-linoleenzuur), DHA (docosahexaeenzuur) en EPA (eicosapentaeenzuur). Alle voordelen van de perfecte omega-3 balans, zonder de vervelende vissmaak.'
      ],
      use: [
        'Vastzittende duiven, duiven die niet aan wedstrijden deelnemen en gedurende de winter: dagelijks 5 ml per 600 g voer.',
        'Wedstrijdduiven van 1 tot 3 uur vliegen: 5 ml per 600 g voer, 1 dag voor en op de dag van inkorving.',
        'Moeten er meer vlieguren gevlogen worden, dan blijft AIDI Omega Plus Olie aanbevolen.'
      ],
      ing: ''
    },
    'aidi-condition-booster': {
      name: 'AIDI Condition Booster',
      tag: 'Conditietonic van vitamines, aminozuren en mineralen voor het vliegseizoen.',
      desc: [
        'Activeert de stofwisseling, zorgt voor een groter uithoudingsvermogen en een betere zuurstofopname, en ondersteunt het spierstelsel.',
        'Zorgt bovendien voor een prima conditie en de opbouw van meer energie en energiereserves, waardoor de vluchtprestaties verbeteren. De werking is verhoogd bij gelijktijdige toediening met AIDI Carbo Boost.'
      ],
      use: [
        '30 ml per kg volledig diervoeder, of 10 ml per liter drinkwater.',
        'Vluchtseizoen: de dag voor inkorving, en bij thuiskomst samen met AIDI Recup Fast voor een supersnel herstel.',
        'Bij slecht trainen door mindere conditie: 2-5 dagen samen met AIDI Carbo Boost.',
        'Tijdens het kweekseizoen: 3-5 dagen bij de overgang van kropmelk naar vast voer.',
        'Tijdens de rui: 1 maal per week; verduisterde en bijgelichte duiven 2 maal per week.'
      ],
      ing: ''
    },
    'aidi-health-elixir': {
      name: 'AIDI Health Elixir',
      tag: 'Tinctuur van twintig kruiden, bladeren, wortels en planten.',
      desc: [
        'Met onder meer een antioxidante werking en ondersteuning van de bloeddoorstroming. Dat resulteert in een betere donsrui en brengt de duiven op korte tijd in topvorm.',
        'Verhoogt de weerstand en verbetert het immuunsysteem, ondersteunt de luchtwegen, zorgt voor een hogere zuurstofopname en werkt eetlustopwekkend. Na een meerdaagse kuur hebben duiven mooi roze borstspieren, krijtwitte neuzen en oogranden.'
      ],
      use: [
        '20 ml per liter water, of over 600 g voer per 20 duiven.',
        'Ter voorbereiding van de kweek- of vliegperiode: 8 à 10 dagen voor het koppelen of de aanvang van de vluchten.',
        'Tijdens het vluchtseizoen: 1 à 2 maal per week na de vlucht. Tijdens de rui: 3 à 4 maal per week.'
      ],
      ing: ''
    },
    'aidi-chelats': {
      name: 'AIDI Chelats',
      tag: 'Vitamines, sporenelementen en mineralen in chelaatvorm.',
      desc: [
        'Chelaten hebben het voordeel dat ze door het lichaam volledig opgenomen worden en zo makkelijk tekorten in het voer kunnen aanvullen.',
        'Te gebruiken bij een verminderde conditionele toestand. Het intensieve wedstrijdritme zorgt voor een verhoogde behoefte aan vitamines, mineralen en sporenelementen; regelmatig gebruik vult die aan en houdt duiven in topvorm tijdens het vliegseizoen. Ook essentieel voor de ontwikkeling van de jongen tijdens de kweek en van het nieuwe verenkleed tijdens de rui.'
      ],
      use: [
        'Vitesse: maandelijks 10 ml op 1 kg voer, de dag voor de inkorving.',
        'Halve fond: om de 3 weken. Zware halve fond: om de 2 weken bij wekelijks vliegen, om de 3 weken bij tweewekelijks vliegen.',
        'Zware fond en overnachtfond: 10 ml op 1 kg voer, de dag voor de inkorving.',
        'Na ziekte en medicatie: 2 dagen 10 ml per kg voer. Na enting: 10 ml per kg voer.',
        'Tijdens de kweek en de rui: 1 maal per week 10 ml per kg voer.'
      ],
      ing: ''
    },
    'aidi-recup-fast': {
      name: 'AIDI Recup Fast',
      tag: 'Wateroplosbaar herstelmengsel voor onmiddellijk na thuiskomst.',
      desc: [
        'Bij thuiskomst van een wedstrijd is het bijzonder belangrijk dat de duif de verbruikte reserves zo snel mogelijk kan aanvullen: enkelvoudige en meervoudige suikers, onmiddellijk beschikbare vetzuren en bouwstoffen voor eiwitten.',
        'AIDI Recup Fast bevat die bestanddelen in de juiste verhoudingen voor een snelle recuperatie en een vlot herstel. Het is het product bij uitstek voor na de vlucht.'
      ],
      use: [
        '4 maatschepjes (20 g) per liter drinkwater, onmiddellijk na thuiskomst ter beschikking stellen.',
        'Ververs het mengsel na een half uur: door oxidatie van licht en lucht daalt de kwaliteit.'
      ],
      ing: ''
    },
    'aidi-proteine-boost': {
      name: 'AIDI Proteine Boost',
      tag: 'Hoogwaardige whey-eiwitten met een bijzonder hoge biologische waarde.',
      desc: [
        'Deze eiwitten worden uiterst snel door het lichaam opgenomen. Dat zorgt voor een sneller herstel na de vlucht bij duiven die gevoelig zijn voor overbelasting van de spieren, een betere groei en ontwikkeling van de jongen tijdens de kweek, en een goede opbouw van de bevedering tijdens de rui.',
        'De toevoeging van extra mineralen helpt de natuurlijke weerstand te versterken en ondersteunt het immuunsysteem, zodat duiven in een prima gezondheid verkeren en hun prestatievermogen verhoogd wordt.'
      ],
      use: [
        '15 g (3 maatlepels) per kg volledig diervoeder. Bevochtig het voer eerst met AIDI Omega Plus Olie Extra.',
        'Tijdens de rui en de kweekperiode: 1 à 2 maal per week.',
        'Tijdens de overgang van kropmelk naar vast voer: 3-5 dagen.',
        'Vluchtseizoen: na een zware vlucht 2 à 3 maaltijden. Na ziekte of enting: 2 à 3 dagen.'
      ],
      ing: ''
    },
    'aidi-pro-bacterial': {
      name: 'AIDI Pro Bacterial',
      tag: 'Ferment van rietsuikermelasse dat de positie van de goede bacteriën verstevigt.',
      desc: [
        'Een goede gezondheid, immuniteit, weerstand en vitaliteit begint bij een goede darmflora. Onevenwichtige of vervuilde voeding in de reismanden, vuil drinkwater tijdens transport, stress, het gebruik van antibiotica en vermoeidheid door te zware vluchten verstoren het evenwicht tussen goede en slechte bacteriën.',
        'AIDI Pro Bacterial zorgt voor een betere vertering van het voedsel en een hogere opname van voedingsstoffen, en helpt zo de natuurlijke weerstand te versterken. Duiven gaan er strakker door in de veren zitten en vertonen betere trainingsarbeid.'
      ],
      use: [
        'Tijdens kweek, rui, vliegseizoen en rustperiode: 10 ml per liter water (dagelijks te verversen) of 10 ml over 600 g voer.',
        'Laat stadswater goed ontluchten: het bevat chloor.',
        'Het product kan na verloop van tijd wat beginnen vlokken. Dat is volkomen normaal en doet niets af aan de kwaliteit.'
      ],
      ing: ''
    },
    'aidi-probiotica-plus': {
      name: 'AIDI Probiotica Plus',
      tag: 'Hoog geconcentreerde pre- en probioticamix voor natuurlijke weerstand.',
      desc: [
        'Bevordert en stimuleert een goede darmflora, helpt de natuurlijke weerstand te versterken en speelt een rol bij de ziekteafweer.',
        'De hoge concentratie lactobacillen nestelt en vermeerdert zich in de slijmvliezen van de dunne darm en bevordert zo de vertering van de voedingsstoffen. Dat resulteert in een uitstekende vitaliteit, gezondheid en een zijdezacht verenkleed.'
      ],
      use: [
        '3 maatlepels (15 g) mengen met 1 kg voer. Bevochtig het voer eerst met AIDI Omega Plus Olie Extra.',
        'Tijdens het vluchtseizoen: 1 dag voor de inkorving, ter bevordering van de conditie.',
        'Tijdens de rui- en kweekperiode: 2 maal per week.',
        'Na een antibioticakuur of enting: 3 dagen, 1 maal per dag.'
      ],
      ing: ''
    },
    'aidi-calcium-forte': {
      name: 'AIDI Calcium Forte',
      tag: 'Mineralenmengsel met weinig fosfor en een hoog calciumgehalte.',
      desc: [
        'Bevat alle mineralen, sporenelementen en aminozuren om tekorten in het voer op te vangen tijdens het vliegseizoen, de kweek en de ruiperiode. Het lage fosfor- en hoge calciumgehalte zorgt voor een hoge opneembaarheid.',
        'Zorgt voor een beter functioneren van de stofwisseling tijdens zware inspanningen zoals wedstrijden, de opfok van jongen en het wisselen van het verenkleed, en verbetert de kweek- en vliegprestaties aanzienlijk. Door de geschikte structuur wordt het graag door duiven opgenomen.'
      ],
      use: [
        '1,5 g per duif per dag, in kleine potjes op het hok beschikbaar stellen.',
        'Van het koppelen tot aan het leggen van de eieren: dagelijks.',
        'Tijdens de opgroeiperiode van de jongen: 3 maal per week.',
        'Tijdens het vluchtseizoen: 1 maal per week, 3 dagen voor de inkorving. In de ruiperiode: 3 maal per week.'
      ],
      ing: ''
    },
    'aidi-condition-plus-minerals': {
      name: 'AIDI Condition Plus Minerals',
      tag: 'Mineralen, vitamines en grit voor vlieg-, kweek- en ruiperiode.',
      desc: [
        'Ontwikkeld op basis van de nieuwste wetenschappelijke kennis over het voeren van duiven: een mix van verschillende mineralen en vitamines die duiven graag eten. Het bevat alles wat onze atleten nodig hebben voor het kweken en voor topprestaties tijdens de wedstrijden.',
        'Het hoge calciumgehalte in verhouding tot fosfor en de aanwezige grit zorgen voor een zeer goede vertering van het voer. Zo worden de tekortkomingen in de voeding op de juiste manier aangevuld.'
      ],
      use: [
        '2,5 g per duif per dag, in kleine potjes op het hok beschikbaar stellen. Het hele jaar door 2 à 3 keer per week.',
        'Meng er wat snoepzaad door voordat u het aan de duiven geeft.',
        'Vluchtseizoen: 2 dagen vóór de inkorving en bij terugkomst van de vlucht.',
        'Kweekperiode: tijdens het broeden 2 maal per week; zijn de jongen 4-5 dagen oud, dan dagelijks. Ruiperiode: 2 maal per week.'
      ],
      ing: ''
    },
    'aidi-grit-met-anijs': {
      name: 'AIDI Grit met anijs',
      tag: 'Grit met kiezel en oesterschelpen, bewust zonder roodsteen.',
      desc: [
        'Grit zijn de tanden van onze duiven: hoe beter het voer vermalen wordt, hoe meer voedingsstoffen eruit gehaald worden. Kiezel en oesterschelpen blijven langere tijd in de maag aanwezig en helpen daar het voer vermalen, wat de opname van voedingsstoffen vergroot. In de meeste gritsoorten op de markt zitten die nauwelijks, omdat ze relatief duur zijn.',
        'Roodsteen wordt daarentegen mee vermalen met het voer en levert niets op. Duiven blijven ervan eten om calcium op te nemen, maar door de verkeerde calcium-fosforverhouding neemt het duivenlichaam die calcium niet op. Van onze grit met anijs hebben duiven maar heel weinig nodig. Dat is volkomen normaal.'
      ],
      use: ['Dagelijks een heel kleine hoeveelheid vers in een potje ter beschikking stellen van de duiven.'],
      ing: ''
    },
    'aidi-eye-drops': {
      name: 'AIDI Eye Drops',
      tag: 'Verzorgt en reinigt de ogen, de neus en het traankanaal.',
      desc: [
        'Voor een perfect verzorgende en reinigende werking van ogen, neus en traankanaal. AIDI Eye Drops voorkomen en verzachten tevens irritaties van het oogvlies en hebben een herstellende werking.'
      ],
      use: [
        '1 druppel in elk oog voor de inkorving en na de wedstrijd.',
        'Bij irritatie of ontsteking van het oogvlies: 3 tot 5 keer per dag 1 druppel in elk oog.'
      ],
      ing: ''
    },

    'aidi-automatische-voederbakken': {
      name: 'AIDI Automatische voederbakken',
      tag: 'Volautomatisch voederen, tot acht beurten per dag, in vier maten.',
      desc: [
        'Werken, vakantie, of gewoonweg niet op tijd en stond voor uw duiven kunnen zorgen zoals u dat zelf zou wensen? De hoogkwalitatieve volautomatische voederbak biedt de oplossing. Bijkomend voordeel: de voederbeurten gebeuren met zeer stipte regelmaat.',
        'Nauwkeurig instelbaar per seconde, zodat u de gewenste hoeveelheid voeder exact bereikt. Werkt op netstroom en een oplaadbare 12 VDC-batterij; bij twee beurten per dag blijft een volle batterij ongeveer een maand op spanning. Laad hem om de twee weken op voor een langere levensduur.'
      ],
      use: [],
      ing: ''
    },
    'aidi-manden': {
      name: 'AIDI Manden',
      tag: 'Opleermanden in hout van de allerbeste kwaliteit.',
      desc: [
        'Ons AIDI concept staat voor absolute kwaliteit en degelijkheid. Dat is niet anders voor onze jongste telg: de opleermanden. Stoer, hout van de allerbeste kwaliteit, zeer fijne afwerking en weloverdacht samengesteld: twee afdelingen en een makkelijk te bevestigen eet- en drinkgoot. U bent verzekerd van jarenlang duivenplezier.'
      ],
      use: [],
      ing: ''
    }
  }
};

/* ============================================================ FRANÇAIS === */
I18N.fr = {
  ui: {
    skip: 'Aller au contenu principal',
    menu: 'Menu',
    close: 'Fermer',
    language: 'Langue',
    languageChoose: 'Choisir une langue',
    tagline: 'Alimentation pour le sport colombophile',
    details: 'Détails',
    composition: 'Composition',
    analytics: 'Constituants analytiques',
    usage: "Mode d'emploi",
    available: 'Disponible en',
    new: 'Nouveau',
    all: 'Tout',
    results: 'produits',
    resultsOne: 'produit',
    dealers: 'points de vente',
    dealersOne: 'point de vente',
    noResults: 'Aucun résultat',
    noResultsBody: 'Modifiez votre recherche ou vos filtres pour voir plus de résultats.',
    reset: 'Effacer les filtres',
    clear: 'Effacer',
    searchDealers: 'Rechercher par magasin, commune ou code postal',
    download: 'Télécharger le PDF',
    phone: 'Appeler',
    email: 'Envoyer un e-mail',
    website: 'Site web',
    orderOnly: 'Uniquement sur commande',
    byAppointment: 'Ouvert sur rendez-vous',
    distributor: 'Importateur',
    findDealer: 'Trouver un point de vente',
    exploreRange: 'Découvrir la gamme',
    back: 'Retour',
    home: 'Accueil',
    sortBy: 'Trier par'
  },

  nav: {
    concept: 'Concept', voeders: 'Aliments', supplementen: 'Suppléments',
    equipment: 'Équipement', systeem: 'Système', team: 'Équipe',
    verkooppunten: 'Points de vente', contact: 'Contact'
  },

  spec: {
    fat: 'Matières grasses brutes', protein: 'Protéines brutes',
    absorbable: 'Protéines assimilables', carbs: 'Glucides',
    kcal: 'Énergie métabolisable', fibre: 'Cellulose brute',
    omega: 'Rapport oméga', kcalUnit: 'kcal/kg', energy: 'Énergie'
  },

  phase: { winter: 'Hiver & repos', kweek: 'Élevage', vlucht: 'Concours', rui: 'Mue', algemeen: 'Général' },
  band: { sprint: 'Vitesse', midfond: 'Demi-fond', dagfond: 'Grand demi-fond', fond: 'Fond & fond de nuit' },
  group: {
    energie: 'Énergie', conditie: 'Condition', herstel: 'Récupération',
    darmflora: 'Flore intestinale', mineralen: 'Minéraux', verzorging: 'Soins'
  },
  country: {
    be: 'Belgique', nl: 'Pays-Bas', de: 'Allemagne', fr: 'France',
    gb: 'Royaume-Uni', it: 'Italie', hu: 'Hongrie', hr: 'Croatie',
    us: 'États-Unis & Amérique du Nord', cz: 'Tchéquie & Slovaquie', pl: 'Pologne'
  },

  home: {
    heroFinal: "Nourrissez-les comme tels.",
    heroPunctuation: ".",
    featuredLabel: "À l’image :",
    seasonWinterWhen: "nov. – déc.",
    seasonKweekWhen: "janv. – mars",
    seasonVluchtWhen: "avr. – août",
    seasonRuiWhen: "août – oct.",
    title: 'AIDI: alimentation pour le sport colombophile | Team Noël-Willockx',
    meta: "Dix mélanges et quatorze suppléments pour le sport colombophile, chacun avec ses valeurs analytiques mesurées. Développés par Team Noël-Willockx, 45 ans d'expertise en nutrition.",
    h1a: 'Vos pigeons sont des ',
    h1b: 'athlètes',
    h1c: '. Nourrissez-les comme tels.',
    lede: "AIDI est le concept nutritionnel de Team Noël-Willockx. Dix mélanges, quatorze suppléments, et pour chaque produit les valeurs mesurées. Pas de promesses, des chiffres.",
    fact1: "ans d'expertise en nutrition",
    fact2: 'produits dans la gamme',
    fact3: 'pays avec points de vente',
    fact4: 'pigeons battus au 1er Nat. Argenton',
    analyserTitle: 'Valeurs analytiques',
    analyserLive: 'Dans la gamme',
    analyserHint: 'Afficher',

    seasonTitle: "Un pigeon n'a pas les mêmes besoins toute l'année",
    seasonLede: "La gamme suit la saison. Chaque phase impose d'autres exigences en carburant, en matériaux de construction et en récupération, et demande donc un autre mélange.",
    seasonWinterD: "Beaucoup de fibres brutes, peu de graisse. À volonté, sans que les pigeons ne s'engraissent.",
    seasonKweekD: 'Protéines assimilables élevées et diversifiées pour les jeunes, sans épuiser les reproducteurs.',
    seasonVluchtD: 'Six mélanges de vol, de la vitesse au fond de nuit. Chacun avec son propre profil.',
    seasonRuiD: "Part accrue d'acides aminés et bon rapport oméga pour un plumage impeccable.",
    seasonCta: 'Voir les mélanges',

    conceptTitle: 'Pourquoi nous publions les chiffres',
    conceptP1: "Glucides et graisses comme carburant, protéines pour la construction, vitamines et minéraux comme protection. Le meilleur équilibre possible entre ces groupes est la clé du succès : pour cette distance, par ce temps, après ce concours.",
    conceptP2: "C'est pourquoi nous publions pour chaque mélange les matières grasses brutes, les protéines brutes, les protéines assimilables, les glucides, l'énergie métabolisable, la cellulose brute et le rapport oméga. Non pas parce que cela fait bien, mais parce que cela vous permet de choisir.",
    conceptP3: "Ce qui compte, ce sont les protéines assimilables, pas les protéines brutes. Cette distinction fait la différence entre un pigeon qui enchaîne les concours et un pigeon qui s'écroule à la mi-saison.",
    conceptCompare: "Les dix mélanges comparés",
    conceptCompareNote: 'Rapport graisses / protéines / glucides. Les valeurs complètes figurent sur chaque produit.',
    conceptCta: 'Lire le Concept AIDI',

    rangeTitle: 'La gamme',
    rangeLede: "Vingt-six produits en trois lignes. Tout est fabriqué en Belgique.",
    rangeVoedersD: "Dix mélanges pour le concours, l'élevage, la mue et le repos, chacun avec son analyse complète.",
    rangeSupplementenD: "Quatorze suppléments pour l'énergie, la condition, la récupération, la flore intestinale et les minéraux.",
    rangeEquipmentD: "Mangeoires automatiques et paniers d’entraînement.",
    itemsN: 'produits',

    proofTitle: 'Les résultats',
    proofLede: "Au colombier et chez les autres. Les as-pigeons nationaux KBDB de ces dernières années, chaque fois avec l'implication de Team Noël-Willockx.",
    proofCta: 'Tous les résultats',
    proofHighlights: 'Temps forts 2022',
    proofAces: 'As-pigeons nationaux KBDB',
    proofBirds: 'pigeons',

    teamTitle: 'Deux spécialistes, quarante-cinq ans',
    teamP1: "Eddy Noël cumule plus de quarante ans d'expérience dans le sport colombophile. Il a longtemps travaillé comme nutritionniste spécialisé et a développé des mélanges et sous-produits de haute qualité, parfaitement équilibrés. Autorité en matière d'alimentation, il donne des conférences sur l'obscurcissement et l'éclairage, sur les performances d'élevage et de vol et sur le climat du colombier, et a accompagné plusieurs colombiers de pointe.",
    teamP2: "Ivan Willockx a appris les ficelles du sport de haut niveau comme ancien footballeur professionnel. Aujourd'hui courtier en pigeons, il visite de nombreux amateurs et connaît donc mieux que quiconque les besoins quotidiens des meilleurs joueurs.",
    teamCta: "À propos de l'équipe",
    teamCaption: 'Eddy Noël et Ivan Willockx',

    plansTitle: 'Le système, noir sur blanc',
    plansLede: "Quatorze plans de vol, d'élevage et de mue. Semaine par semaine, avec le bon mélange et le bon supplément au bon moment. Téléchargement gratuit.",
    plansCta: 'Tous les plans',

    ctaTitle: 'Où acheter AIDI ?',
    ctaBody: "AIDI est disponible chez plus de soixante points de vente et importateurs dans onze pays. Ou appelez directement Eddy ou Ivan. Le conseil est gratuit."
  },

  concept: {
    title: 'Concept AIDI: dans une approche professionnelle, les détails font la différence',
    meta: "Le Concept AIDI : 45 ans d'expertise, des tests approfondis et les connaissances scientifiques les plus récentes, traduits en mélanges dont les valeurs analytiques sont publiées.",
    h1: 'Dans une approche professionnelle, les détails font la différence',
    lede: "Les performances et la récupération de nos athlètes peuvent être fortement améliorées par une alimentation correcte. Ce n'est pas un slogan. C'est la raison d'être du Concept AIDI.",
    s1t: "Toute l'année, pas seulement le dimanche",
    s1p1: "Un régime sain et équilibré est de la plus haute importance. Une alimentation correcte tout au long de l'année influence l'état de santé général, le niveau de forme, le maintien de cette forme, l'intensité et la durée de l'effort, et la récupération. Ce sont des piliers indispensables pour permettre à nos athlètes de réaliser des performances de pointe, et cela demande un accompagnement très spécifique.",
    s1p2: "Avant la saison, nous préparons les voyageurs aux concours par un programme adapté. Pendant la saison, nous leur fournissons semaine après semaine suffisamment de carburant. Après le concours, nous choisissons aux bons moments un bon mélange de récupération avec des sous-produits complémentaires.",
    s2t: 'Le meilleur est tout juste assez bon',
    s2p1: "C'est pourquoi nous utilisons exclusivement des ingrédients de haute qualité pour composer nos mélanges. Cela, associé à 45 ans d'expertise, à des tests approfondis et aux connaissances scientifiques les plus récentes, constitue la base du concept AIDI.",
    s2p2: "Glucides et graisses comme carburant, protéines pour la construction, vitamines, minéraux et oligo-éléments comme protection. Le meilleur équilibre possible entre les différents types de glucides, de protéines et de graisses selon les distances et les circonstances est ici la clé du succès.",
    s3t: 'Si complet que les sous-produits deviennent secondaires',
    s3p1: "Dans le concept AIDI, tous les mélanges sont composés de manière si complète que l'usage de sous-produits peut être réduit au minimum. La haute assimilabilité de l'énergie et des matériaux de construction assure une combustion des graisses aussi complète que possible, avec très peu de déchets. Cela permet aux pigeons de boucler un programme de vol intense sans perte de condition ni de forme.",
    s3p2: "Pour réaliser des performances de pointe au bon moment, les suppléments ont bel et bien leur utilité. Le message est d'agir le moins possible, mais de manière efficace et ciblée, en anticipant les circonstances passées et à venir.",
    s4t: "Un pigeon n'a pas besoin de grand-chose",
    s4p1: "Quoi que vous donniez, gardez à l'esprit que tout devra être traité par le foie de ce petit corps de pigeon. L'art consiste à faire les bonnes choses aux bons moments, et à savoir ce que vous faites, quand, pourquoi et comment.",
    s4p2: "N'utilisez que ce qui compense les manques de votre aliment et qui a prouvé apporter une plus-value en matière de performance. Un ajustement avant les concours difficiles ou au fil de la saison permet à nos athlètes de se présenter chaque fois au départ dans les meilleures conditions.",
    numbersT: 'Ce que nous publions',
    numbersP: "Chaque mélange est accompagné de sept valeurs mesurées. Elles ne sont pas là pour impressionner. Elles sont là pour permettre un choix.",
    numbersFat: "Détermine la part d'énergie mise en réserve et la vitesse de récupération.",
    numbersProtein: "Le taux brut dit peu de chose ; tout dépend de ce qui est réellement assimilable.",
    numbersAbsorbable: 'Ce chiffre-là détermine si les muscles récupèrent entre deux concours.',
    numbersCarbs: 'Le carburant le plus rapidement disponible. Déterminant pour les concours de vitesse.',
    numbersKcal: "L'énergie métabolisable totale par kilo d'aliment.",
    numbersFibre: 'Action nettoyante, maintient la flore intestinale en condition.',
    numbersOmega: 'Le rapport oméga 6 sur oméga 3. Plus bas signifie une combustion plus efficace.'
  },

  voeders: {
    filterHelp: "Choisissez une phase. Pour les concours, affinez aussi par distance. Cliquez sur un mélange pour son analyse complète.",
    title: 'Aliments: dix mélanges avec leur analyse complète | AIDI',
    meta: "Dix mélanges AIDI pour la vitesse, le demi-fond, le grand demi-fond, le fond, l'élevage, la mue et le repos hivernal. Chacun avec ses taux publiés de graisses, protéines et glucides.",
    h1: 'Dix mélanges, dix profils',
    lede: "D'un mélange sprint à 67 % de glucides à un mélange fond à 14,5 % de graisses. Filtrez par phase et distance, ou comparez tout dans un seul tableau.",
    filterPhase: 'Phase',
    filterBand: 'Distance',
    compareTitle: 'Tout comparer',
    compareLede: 'Les mêmes sept valeurs pour les dix mélanges. Cliquez sur un titre de colonne pour trier.',
    colName: 'Mélange',
    colPhase: 'Phase'
  },

  supplementen: {
    title: 'Suppléments: quatorze produits pour la condition, la récupération et la flore intestinale | AIDI',
    meta: "Quatorze suppléments AIDI : énergie, condition, récupération, flore intestinale, minéraux et soins. Avec le mode d'emploi complet par produit.",
    h1: 'Le moins possible, mais de manière ciblée',
    lede: "Un aliment bien équilibré rend les suppléments largement superflus. Ce qui reste, c'est l'ajustement ciblé : au bon moment, à la bonne dose.",
    filterGroup: 'Objectif'
  },

  equipment: {
    title: "Équipement: mangeoires et paniers | AIDI",
    meta: "Équipement AIDI : mangeoires entièrement automatiques en quatre tailles et paniers d’entraînement en bois.",
    h1: 'Équipement',
    lede: "Le même critère que pour l'aliment : qualité et robustesse, fait pour durer des années.",
    specSize: 'Taille', specBirds: 'Pigeons', specLength: 'Longueur', specFeed: 'Aliment',
    featTimer: 'Réglable à la seconde près, avec horloge de commutation intégrée',
    featTimes: "Jusqu'à 8 distributions par jour",
    featPower: 'Fonctionne sur secteur et sur batterie rechargeable 12 VDC',
    featBattery: "Une batterie pleine tient jusqu'à 30 jours"
  },

  systeem: {
    moultT: "Mue",
    title: "Le système: quatorze plans de vol, d'élevage et de mue | AIDI",
    meta: 'Téléchargez les plans AIDI : vitesse, demi-fond, grand demi-fond, fond de nuit, jeunes pigeons, élevage, mue et repos hivernal. Détaillés semaine par semaine.',
    h1: 'Le système, détaillé semaine par semaine',
    lede: "Savoir quel mélange existe est une chose. Savoir quand le donner, c'est le système. Quatorze plans, en téléchargement gratuit.",
    generalT: 'Pour commencer',
    flightT: 'Plans de vol',
    breedT: "Élevage",
    restT: 'Hiver et repos',
    p: {
      'optimaal-gebruik-aidi-concept': 'Comment utiliser les aliments AIDI ?',
      'mis-de-start-van-het-seizoen-niet': 'Ne manquez pas le début de la saison',
      'vliegplan-snelheid-aidi-speedy-sprint': 'Plan de vol Vitesse: AIDI Speedy Sprint',
      'vliegplan-snelheid': 'Plan de vol Vitesse',
      'vliegschema-aidi-halve-fond': 'Plan de vol Demi-fond',
      'vliegschema-aidi-dagfond': 'Plan de vol Grand demi-fond',
      'vliegschema-aidi-girl-power': 'Plan de vol Girl Power (femelles)',
      'overnachtfond': 'Plan de vol Fond de nuit',
      'vliegschema-aidi-jonge-duiven': 'Plan de vol Jeunes pigeons',
      'vliegplan-thuisblijvende-doffers-duivinnen': 'Mâles et femelles restant au colombier',
      'rui': 'Plan de mue',
      'kweek': "Plan d'élevage",
      'kweekschema-met-pro-bacterial': "Plan d'élevage avec AIDI Pro Bacterial",
      'winter-rust-schema': 'Plan hiver et repos'
    }
  },

  team: {
    title: "Team Noël-Willockx: quarante-cinq ans d'expertise en nutrition | AIDI",
    meta: "Eddy Noël et Ivan Willockx : 45 ans d'expertise nutritionnelle dans le sport colombophile, avec des as-pigeons nationaux KBDB et des résultats de pointe au colombier.",
    h1: 'Team Noël-Willockx',
    lede: "Deux spécialistes qui savent ce qu'il faut pour amener un corps au sommet de sa forme et l'y maintenir. Les résultats le prouvent, au colombier et chez les autres.",
    eddyT: 'Eddy Noël',
    eddyP1: "Plus de quarante ans d'expérience dans le sport colombophile. Il a longtemps travaillé comme nutritionniste spécialisé et a développé divers mélanges et sous-produits de haute qualité, parfaitement équilibrés et adaptés au sport colombophile actuel.",
    eddyP2: "Eddy est une autorité en matière d'alimentation et de sous-produits pour le sport colombophile, et partage volontiers ce savoir lors de ses nombreuses conférences : sur l'alimentation, sur l'obscurcissement et l'éclairage, sur de meilleures performances d'élevage et de vol, sur le jeu avec les jeunes pigeons, sur un climat sain au colombier. Il est l'auteur de nombreux articles et a accompagné plusieurs colombiers de pointe.",
    ivanT: 'Ivan Willockx',
    ivanP1: "Ivan a appris les ficelles du sport de haut niveau comme ancien footballeur professionnel. Il est aujourd'hui courtier en pigeons et visite à ce titre de nombreux amateurs.",
    ivanP2: "Il connaît donc mieux que quiconque les besoins quotidiens des meilleurs joueurs : les questions qui se posent au colombier, et là où les choses coincent en pratique.",
    resultsT: 'Temps forts 2022',
    resultsLede: '15× top 100 national, 63× top 100 zone nationale et 56× top 100 provincial.',
    acesT: 'As-pigeons nationaux KBDB',
    acesLede: "Sur les dernières années, avec chaque fois l'implication de Team Noël-Willockx.",
    share: 'part',
    birds: 'pigeons'
  },

  verkooppunten: {
    nearbyTitle: "Trouvez un point de vente à proximité",
    nearbyHelp: "Utilisez votre position pour trouver les points de vente les plus proches, ou recherchez ci-dessous par commune ou code postal.",
    locate: "Utiliser ma position",
    locating: "Recherche de votre position…",
    locationFound: "Les trois points de vente les plus proches avec une adresse connue. Distances à vol d’oiseau ; appelez pour vérifier la disponibilité.",
    locationDenied: "Accès à votre position refusé. Autorisez-le dans votre navigateur et réessayez, ou recherchez ci-dessous par commune ou code postal.",
    locationUnavailable: "Votre position est indisponible. Réessayez ou recherchez ci-dessous par commune ou code postal.",
    nearest: "Le plus proche",
    straightLine: "à vol d’oiseau",
    route: "Planifier votre itinéraire",
    searchLooking: "Recherche des points de vente les plus proches de {place}…",
    searchNearest: "Aucun point de vente à {place}. Voici les trois plus proches, à vol d’oiseau :",
    title: 'Points de vente: où acheter AIDI ? | AIDI',
    meta: 'Plus de soixante points de vente AIDI en Belgique et aux Pays-Bas, plus des importateurs en Allemagne, France, Royaume-Uni, Italie, Hongrie, Croatie, aux États-Unis, en Tchéquie et en Pologne.',
    h1: 'Où acheter AIDI ?',
    lede: 'Plus de soixante magasins et importateurs dans onze pays. Recherchez par nom, commune ou code postal.',
    ctaTitle: "Votre magasin n'y figure pas ?",
    ctaBody: 'Vous êtes commerçant et souhaitez AIDI dans votre assortiment ? Contactez Eddy ou Ivan.'
  },

  contact: {
    title: 'Contact: Team Noël-Willockx | AIDI',
    meta: 'Contactez directement Team Noël-Willockx : Eddy Noël, Ivan Willockx et les importateurs internationaux AIDI.',
    h1: 'Contact',
    lede: "Des questions sur un mélange, un plan ou votre propre situation ? Appelez sans hésiter. Le conseil est gratuit.",
    directT: 'Directement',
    directP: "Eddy et Ivan répondent eux-mêmes. Pour des questions sur l'alimentation, les plans ou un problème précis au colombier.",
    mailT: 'Par e-mail',
    mailP: "Pour les commandes, les demandes commerciales et tout ce qui n'est pas urgent.",
    intlT: 'Importateurs internationaux',
    intlP: 'En dehors de la Belgique et des Pays-Bas, la distribution passe par nos importateurs.',
    dealerT: 'Vous préférez en magasin ?',
    dealerP: 'AIDI est disponible chez plus de soixante points de vente.'
  },

  footer: {
    about: 'Alimentation pour le sport colombophile, développée par Team Noël-Willockx. Tout est fabriqué en Belgique.',
    madeIn: 'Fabriqué en Belgique',
    range: 'Gamme',
    company: "L'entreprise",
    support: 'Pratique',
    rights: 'Tous droits réservés.',
    colophon: 'Redesign par AW Webdesign'
  },

  p: {
    'aidi-speedy-sprint': {
      name: 'AIDI Speedy Sprint',
      tag: "Taux de glucides extrêmement élevé pour les concours de vitesse et tout ce qui compte une nuit de panier.",
      desc: [
        "C'est sur les glucides que les pigeons volent le plus vite. AIDI Speedy Sprint remplit complètement le réservoir de glucides avec des sucres facilement et rapidement digestibles, qui fournissent de grandes quantités d'énergie immédiatement disponible. Les pigeons maintiennent en outre cette vitesse plus longtemps.",
        "À utiliser pour les concours avec une nuit de panier, qu'ils fassent 50 ou 350 km. Seul le plan alimentaire de la semaine change selon la distance ; la constitution de l'énergie à partir des graisses se fait plus tôt dans la semaine. Les pigeons qui partent au panier avec un réservoir plein volent aisément deux à trois minutes plus vite par heure de vol."
      ],
      use: [
        "Concours avec 1 nuit de panier : à volonté le jour de l'enlogement et jusqu'à celui-ci.",
        "Astuce : pour faire bien travailler vos pigeons à l'entraînement, donnez-leur 1 à 2 repas d'AIDI Speedy Sprint."
      ],
      ing: 'Maïs bordeaux, maïs cribbs, froment, orge décortiquée, milo rouge, dari blanc, avoine décortiquée, riz rond, graines de lin, chènevis, millet, alpiste, katjang idjoe.'
    },
    'aidi-mix-1': {
      name: 'AIDI Mix 1',
      tag: "Le mélange de base léger de l'assortiment de vol, de la plus courte à la plus longue distance.",
      desc: [
        "Facile à digérer, avec une assimilabilité élevée et peu de déchets à la combustion. Les pigeons volent vite plus longtemps et récupèrent particulièrement vite, ce qui vous permet de les entraîner et de les faire concourir plus intensivement.",
        "La cellulose brute présente a une action nettoyante et maintient la flore intestinale en condition optimale. Le taux élevé de protéines assimilables permet aux muscles de récupérer rapidement, tandis que le taux de graisses relativement élevé assure immédiatement la constitution de l'énergie pour le concours suivant."
      ],
      use: [],
      ing: 'Maïs bordeaux, maïs cribbs, froment, orge, milo rouge, dari blanc, paddy, cardy, graines de lin, chènevis, millet, alpiste, sarrasin, katjang idjoe, soja toasté.'
    },
    'aidi-mix-2': {
      name: 'AIDI Mix 2',
      tag: "Petites graines et légumineuses pour une meilleure répartition et assimilabilité. Jusqu'à 3 jours avant le concours.",
      desc: [
        "Les graines et légumineuses de petit format, délibérément choisies, assurent une meilleure répartition et assimilabilité. Comme dans les autres mélanges, le maïs séché naturellement, plus riche en sucres et en amidons, augmente la valeur nutritive.",
        "Les pigeons de concours ont un grand besoin de protéines, mais c'est le taux de protéines assimilables qui compte, pas le taux brut. Un juste équilibre entre le maintien du métabolisme et l'apport des acides aminés nécessaires est ici la clé du succès."
      ],
      use: ["Peut être donné jusqu'à 3 jours avant le concours."],
      ing: 'Maïs cribbs bordeaux, petit maïs cribbs jaune, froment, milo rouge, dari blanc, avoine décortiquée, riz rond, cardi, graines de lin, colza, chènevis, alpiste, katjang idjoe, soja toasté, petits pois verts.'
    },
    'aidi-mix-3': {
      name: 'AIDI Mix 3',
      tag: "Riche en énergie, avec une offre large et variée d'acides gras.",
      desc: [
        "Un mélange particulièrement riche en énergie qui fournit à nos athlètes le carburant nécessaire grâce à une offre élevée et variée de différents acides gras.",
        "Ces acides gras ne constituent pas seulement les réserves de graisse nécessaires au concours : ils rendent aussi le mélange particulièrement apte à garantir une récupération très rapide au retour."
      ],
      use: ["Selon le nombre d'heures de vol prévues : à utiliser de 1 à 3 jours avant l'enlogement."],
      ing: 'Maïs bordeaux, maïs à pop-corn, petit maïs cribbs, froment, milo rouge, dari blanc, avoine décortiquée, paddy, riz rond, cardi, graines de tournesol, tournesol décortiqué, graines de lin, navette, chènevis, millet, alpiste, katjang idjoe, soja toasté.'
    },
    'aidi-girl-power': {
      name: 'AIDI Girl Power',
      tag: 'Spécialement conçu pour les femelles avec un programme intensif entre 300 et 700 km.',
      desc: [
        "Un mélange scientifiquement fondé et mûrement réfléchi de différentes sources de glucides, de graisses et de protéines. Ils assurent un aliment très facile à digérer, une assimilabilité particulièrement élevée et une combustion produisant moins de déchets. La femelle digère les nombreux kilomètres de vol de manière plus économe.",
        "La cellulose brute présente assure un fonctionnement intestinal constamment parfait. Les femelles restent ainsi facilement en condition optimale toute la saison et récupèrent très vite, même après les concours les plus difficiles."
      ],
      use: [],
      ing: 'Petit maïs cribbs, maïs bordeaux, maïs à pop-corn, froment, orge, orge décortiquée, milo rouge, dari blanc, avoine décortiquée, paddy, riz rond, cardi, tournesol décortiqué, lin brun, colza, chènevis, millet, alpiste, vesces, katjang idjoe, soja toasté.'
    },
    'aidi-long-distance-mix': {
      name: 'AIDI Long Distance Mix',
      tag: 'Développé pour les plus longues distances et le fond de nuit.',
      desc: [
        "Chaque discipline d'un sport colombophile de plus en plus spécialisé exige une préparation très spécifique. Les pigeons des plus longues distances sont souvent mis à rude épreuve, et ils ont tout intérêt à y être bien préparés.",
        "AIDI Long Distance Mix garantit un bon équilibre entre les différents types de glucides, de graisses et de protéines. C'est ici, plus encore qu'ailleurs, d'une importance cruciale pour exploiter tout le potentiel et tout le rendement de vos pigeons."
      ],
      use: [],
      ing: 'Maïs cribbs jaune, froment, milo rouge, dari blanc, avoine décortiquée, paddy, riz rond, cardy, tournesol décortiqué, graines de lin, navette, colza, chènevis, millet, alpiste, vesces, katjang idjoe, soja toasté, maple peas, pois verts.'
    },
    'aidi-super-kweek': {
      name: 'AIDI Super Kweek',
      tag: 'Élève les jeunes et maintient les reproducteurs en excellente condition.',
      desc: [
        "Le taux élevé et diversifié de protéines assimilables fournit tous les matériaux nécessaires pour que les jeunes pigeons grandissent sans problème et aient toutes les chances de devenir des athlètes solides.",
        "Les graines riches en graisses soigneusement sélectionnées rendent l'aliment léger à digérer. Avec suffisamment de cellulose brute, elles maintiennent jeunes et reproducteurs en parfaite condition, même après plusieurs tours d'élevage. La composition est si bien adaptée aux pigeons reproducteurs que ceux-ci la consomment sans gaspillage et la transmettent aisément aux jeunes."
      ],
      use: [],
      ing: 'Maïs bordeaux, maïs cribbs, froment, milo rouge, dari blanc, avoine décortiquée, paddy, riz rond, cardi, tournesol strié, tournesol décortiqué, graines de lin, navette, chanvre, millet, alpiste, vesces, katjang idjoe, soja toasté, maple peas, pois verts, pois jaunes.'
    },
    'aidi-super-rui': {
      name: 'AIDI Super Rui',
      tag: 'Adapté au besoin accru en protéines pendant la mue.',
      desc: [
        "La haute assimilabilité, la grande diversité de protéines utilisables, le bon rapport oméga 3-6 et la part d'acides aminés spécifiquement accrue pour la mue assurent une excellente mue et une qualité de plumage parfaite.",
        "Cette composition renouvelée est encore moins contraignante pour le pigeon. Elle assure donc une condition constamment optimale et garantit une mue impeccable."
      ],
      use: [],
      ing: 'Maïs bordeaux, maïs cribbs, froment, orge, milo rouge, dari blanc, avoine décortiquée, paddy, cardy, graines de tournesol, tournesol décortiqué, graines de lin, colza, navette, chènevis, millet, alpiste, vesces, katjang idjoe, soja toasté, pois.'
    },
    'aidi-winter-rust': {
      name: 'AIDI Winter / Repos',
      tag: "Pour l'après-mue, les mois d'hiver et les pigeons en volière ou enfermés.",
      desc: [
        "Une forte teneur en cellulose brute, sous forme de fibres variées, maintient la digestion et l'absorption des nutriments à un niveau optimal, avec une action nettoyante.",
        "Les justes proportions et la nature des acides gras, glucides et protéines présents font qu'AIDI Winter/Repos peut être donné à volonté sans problème, sans que les pigeons ne s'engraissent."
      ],
      use: [],
      ing: 'Riz paddy, orge, maïs cribbs jaune, avoine pointue, maïs cribbs bordeaux, froment blanc, tournesol strié, milo rouge, cardy, sarrasin, graines de lin, chènevis, katjang idjoe, fèves de soja toastées.'
    },
    'aidi-extra-power-snoepmix': {
      name: 'AIDI Extra Power Snoepmix',
      tag: 'Le mélange friandise comme moyen de conditionnement, avec périlla et chardon-Marie.',
      desc: [
        "Après l'entraînement, les pigeons reçoivent souvent une poignée de graines de friandise. Ils les mangent volontiers, ce qui les rend parfaitement adaptées au conditionnement de nos animaux, à condition d'en faire un mélange complémentaire de choix.",
        "Les graines de périlla et de chardon-Marie ont délibérément été écartées des autres mélanges, et d'autant plus présentes dans celui-ci. En donnant à chaque pigeon une pincée après l'entraînement, vous êtes certain que chaque animal reçoit sa portion quotidienne. Grâce au taux de graisses élevé, également très indiqué comme dernière touche avant l'enlogement."
      ],
      use: [],
      ing: ''
    },

    'aidi-carbo-boost': {
      name: 'AIDI Carbo Boost',
      tag: "Mélange énergétique qui permet à l'organisme de produire du glycogène plus rapidement.",
      desc: [
        "Un mélange énergétique de haute qualité, scientifiquement équilibré, qui assure un excellent fonctionnement des muscles. Sa composition unique permet à l'organisme de produire du glycogène plus rapidement, ce qui permet aux pigeons de voler plus longtemps à vitesse élevée.",
        "Les antioxydants, vitamines et électrolytes ajoutés assurent respectivement le soutien du système immunitaire, une meilleure résistance au stress et une meilleure régulation de l'équilibre hydrique pendant le transport, les entraînements et les concours."
      ],
      use: [
        "1 mesurette (10 g) une fois par jour à mélanger à 600 g d'aliment. Humidifiez d'abord l'aliment avec AIDI Omega Plus Olie Extra.",
        "Pendant la saison de vol : 1 à 2 jours avant l'enlogement.",
        'Pour faire travailler les pigeons mieux et plus intensivement : 3 à 5 jours de suite, avec AIDI Condition Booster.'
      ],
      ing: ''
    },
    'aidi-omega-plus-olie-extra': {
      name: 'AIDI Omega Plus Olie Extra',
      tag: "Huiles oméga-3 avec lécithine, pour une absorption plus rapide et plus efficace des acides gras.",
      desc: [
        "L'usage quotidien améliore considérablement le rapport oméga 3-6 de l'aliment, ce qui se traduit par une meilleure santé et une meilleure condition. La lécithine ajoutée assure une absorption plus rapide, plus élevée et plus efficace de ces acides gras dans l'organisme, ce qui permet aux pigeons de voler sans problème plus souvent et davantage de kilomètres de concours.",
        "La lécithine influence en outre positivement le fonctionnement du cerveau et le sens de l'orientation. Le résultat est également un plumage particulièrement serré et lisse."
      ],
      use: [
        "Toute l'année, pendant l'élevage, la mue et surtout la saison de vol : une fois par jour, 5 ml à mélanger à 1 kg d'aliment, de préférence le soir.",
        "Également parfait pour faire adhérer d'autres suppléments en poudre à l'aliment.",
        "Bien agiter avant emploi. Astuce : mélangez l'huile à l'aliment le matin pour le repas du soir, afin qu'elle ait le temps de pénétrer."
      ],
      ing: ''
    },
    'aidi-omega-3-krill-olie': {
      name: 'AIDI Omega 3 Krill Olie',
      tag: "Source riche en ALA, DHA et EPA, sans le désagréable goût de poisson.",
      desc: [
        "Les acides gras constituent l'essentiel de l'approvisionnement énergétique d'un pigeon. Une combustion plus efficace réduit sensiblement la quantité de déchets, et c'est précisément là que l'oméga-3 fait la différence.",
        "AIDI Omega 3 Krill Olie est une source riche en ALA (acide alpha-linolénique), DHA (acide docosahexaénoïque) et EPA (acide eicosapentaénoïque) de haute qualité. Tous les avantages d'un équilibre oméga-3 parfait, sans le désagréable goût de poisson."
      ],
      use: [
        "Pigeons en volière, pigeons ne participant pas aux concours et pendant l'hiver : 5 ml par 600 g d'aliment, chaque jour.",
        "Pigeons de concours de 1 à 3 heures de vol : 5 ml par 600 g d'aliment, la veille et le jour de l'enlogement.",
        "Si davantage d'heures de vol sont à prévoir, AIDI Omega Plus Olie reste recommandée."
      ],
      ing: ''
    },
    'aidi-condition-booster': {
      name: 'AIDI Condition Booster',
      tag: 'Tonique de condition à base de vitamines, acides aminés et minéraux pour la saison de vol.',
      desc: [
        "Active le métabolisme, assure une plus grande endurance et une meilleure absorption d'oxygène, et soutient le système musculaire.",
        "Assure en outre une excellente condition et la constitution de plus d'énergie et de réserves énergétiques, ce qui améliore les performances en concours. L'effet est renforcé en cas d'administration simultanée avec AIDI Carbo Boost."
      ],
      use: [
        "30 ml par kg d'aliment complet, ou 10 ml par litre d'eau de boisson.",
        "Saison de vol : la veille de l'enlogement, et au retour avec AIDI Recup Fast pour une récupération ultra-rapide.",
        'En cas de mauvais entraînement dû à une condition moindre : 2 à 5 jours avec AIDI Carbo Boost.',
        "Pendant la saison d'élevage : 3 à 5 jours lors du passage du lait de jabot à l'aliment solide.",
        'Pendant la mue : 1 fois par semaine ; pigeons obscurcis et éclairés 2 fois par semaine.'
      ],
      ing: ''
    },
    'aidi-health-elixir': {
      name: 'AIDI Health Elixir',
      tag: 'Teinture de vingt herbes, feuilles, racines et plantes.',
      desc: [
        "Avec notamment une action antioxydante et un soutien de la circulation sanguine. Cela se traduit par une meilleure mue du duvet et amène les pigeons en pleine forme en peu de temps.",
        "Augmente la résistance et améliore le système immunitaire, soutient les voies respiratoires, assure une meilleure absorption d'oxygène et stimule l'appétit. Après une cure de plusieurs jours, les pigeons ont de beaux muscles pectoraux roses, des cires et des cercles oculaires blanc craie."
      ],
      use: [
        "20 ml par litre d'eau, ou sur 600 g d'aliment pour 20 pigeons.",
        "En préparation de la période d'élevage ou de vol : 8 à 10 jours avant l'accouplement ou le début des concours.",
        'Pendant la saison de vol : 1 à 2 fois par semaine après le concours. Pendant la mue : 3 à 4 fois par semaine.'
      ],
      ing: ''
    },
    'aidi-chelats': {
      name: 'AIDI Chelats',
      tag: 'Vitamines, oligo-éléments et minéraux sous forme chélatée.',
      desc: [
        "Les chélates présentent l'avantage d'être intégralement absorbés par l'organisme et de combler ainsi facilement les manques de l'aliment.",
        "À utiliser en cas de condition affaiblie. Le rythme intensif des concours augmente le besoin en vitamines, minéraux et oligo-éléments ; un usage régulier les complète et maintient les pigeons en pleine forme pendant la saison. Également essentiel pour le développement des jeunes pendant l'élevage et du nouveau plumage pendant la mue."
      ],
      use: [
        "Vitesse : 10 ml sur 1 kg d'aliment une fois par mois, la veille de l'enlogement.",
        'Demi-fond : toutes les 3 semaines. Grand demi-fond : toutes les 2 semaines en cas de vol hebdomadaire.',
        "Fond et fond de nuit : 10 ml sur 1 kg d'aliment, la veille de l'enlogement.",
        "Après maladie ou médication : 2 jours. Après vaccination : 1 jour. Élevage et mue : 1 fois par semaine."
      ],
      ing: ''
    },
    'aidi-recup-fast': {
      name: 'AIDI Recup Fast',
      tag: 'Mélange de récupération hydrosoluble, pour immédiatement après le retour.',
      desc: [
        "Au retour d'un concours, il est particulièrement important que le pigeon puisse reconstituer au plus vite les réserves consommées : sucres simples et complexes, acides gras immédiatement disponibles et matériaux de construction pour les protéines.",
        "AIDI Recup Fast contient ces composants dans les bonnes proportions pour une récupération rapide et un rétablissement aisé. C'est le produit par excellence pour l'après-concours."
      ],
      use: [
        "4 mesurettes (20 g) par litre d'eau de boisson, à mettre à disposition immédiatement au retour.",
        "Renouvelez le mélange après une demi-heure : l'oxydation par la lumière et l'air en réduit la qualité."
      ],
      ing: ''
    },
    'aidi-proteine-boost': {
      name: 'AIDI Proteine Boost',
      tag: 'Protéines de lactosérum de haute qualité à valeur biologique particulièrement élevée.',
      desc: [
        "Ces protéines sont absorbées extrêmement vite par l'organisme. Cela assure une récupération plus rapide après le concours chez les pigeons sensibles à la surcharge musculaire, une meilleure croissance des jeunes pendant l'élevage et une bonne formation du plumage pendant la mue.",
        "L'ajout de minéraux supplémentaires aide à renforcer la résistance naturelle et soutient le système immunitaire, de sorte que les pigeons restent en excellente santé et voient leurs capacités augmenter."
      ],
      use: [
        "15 g (3 cuillères-mesure) par kg d'aliment complet. Humidifiez d'abord l'aliment avec AIDI Omega Plus Olie Extra.",
        "Pendant la mue et l'élevage : 1 à 2 fois par semaine.",
        "Lors du passage du lait de jabot à l'aliment solide : 3 à 5 jours.",
        'Saison de vol : après un concours difficile, 2 à 3 repas. Après maladie ou vaccination : 2 à 3 jours.'
      ],
      ing: ''
    },
    'aidi-pro-bacterial': {
      name: 'AIDI Pro Bacterial',
      tag: 'Ferment de mélasse de canne à sucre qui renforce la position des bonnes bactéries.',
      desc: [
        "Une bonne santé, une bonne immunité, une bonne résistance et une bonne vitalité commencent par une bonne flore intestinale. Une alimentation déséquilibrée ou souillée dans les paniers, une eau de boisson sale pendant le transport, le stress, les antibiotiques et la fatigue due à des concours trop durs perturbent l'équilibre entre bonnes et mauvaises bactéries.",
        "AIDI Pro Bacterial assure une meilleure digestion et une meilleure absorption des nutriments, et aide ainsi à renforcer la résistance naturelle. Les pigeons se tiennent plus serrés dans les plumes et travaillent mieux à l'entraînement."
      ],
      use: [
        "Pendant l'élevage, la mue, la saison de vol et la période de repos : 10 ml par litre d'eau (à renouveler chaque jour) ou 10 ml sur 600 g d'aliment.",
        "Laissez bien s'aérer l'eau de ville : elle contient du chlore.",
        "Le produit peut légèrement floculer avec le temps. C'est parfaitement normal et sans incidence sur la qualité."
      ],
      ing: ''
    },
    'aidi-probiotica-plus': {
      name: 'AIDI Probiotica Plus',
      tag: 'Mélange pré- et probiotique fortement concentré pour la résistance naturelle.',
      desc: [
        "Favorise et stimule une bonne flore intestinale, aide à renforcer la résistance naturelle et joue un rôle dans la défense contre les maladies.",
        "La forte concentration de lactobacilles se niche et se multiplie dans les muqueuses de l'intestin grêle et favorise ainsi la digestion des nutriments. Il en résulte une excellente vitalité et un plumage doux comme la soie."
      ],
      use: [
        "3 cuillères-mesure (15 g) à mélanger à 1 kg d'aliment. Humidifiez d'abord l'aliment avec AIDI Omega Plus Olie Extra.",
        "Pendant la saison de vol : 1 jour avant l'enlogement, pour favoriser la condition.",
        "Pendant la mue et l'élevage : 2 fois par semaine.",
        'Après une cure antibiotique ou une vaccination : 3 jours, 1 fois par jour.'
      ],
      ing: ''
    },
    'aidi-calcium-forte': {
      name: 'AIDI Calcium Forte',
      tag: 'Mélange minéral pauvre en phosphore et riche en calcium.',
      desc: [
        "Contient tous les minéraux, oligo-éléments et acides aminés permettant de combler les manques de l'aliment pendant la saison de vol, l'élevage et la mue. Le faible taux de phosphore et le taux élevé de calcium assurent une grande assimilabilité.",
        "Améliore le fonctionnement du métabolisme lors des efforts intenses comme les concours, l'élevage des jeunes et le renouvellement du plumage, et améliore sensiblement les performances d'élevage et de vol. Grâce à sa structure adaptée, il est consommé volontiers."
      ],
      use: [
        '1,5 g par pigeon et par jour, à mettre à disposition dans de petits godets au colombier.',
        "De l'accouplement à la ponte : chaque jour.",
        'Pendant la croissance des jeunes : 3 fois par semaine.',
        "Pendant la saison de vol : 1 fois par semaine, 3 jours avant l'enlogement. Pendant la mue : 3 fois par semaine."
      ],
      ing: ''
    },
    'aidi-condition-plus-minerals': {
      name: 'AIDI Condition Plus Minerals',
      tag: "Minéraux, vitamines et grit pour la saison de vol, l'élevage et la mue.",
      desc: [
        "Développé sur la base des connaissances scientifiques les plus récentes sur l'alimentation des pigeons : un mélange de minéraux et de vitamines que les pigeons mangent volontiers. Il contient tout ce dont nos athlètes ont besoin pour l'élevage et pour des performances de pointe en concours.",
        "Le taux élevé de calcium par rapport au phosphore et le grit présent assurent une très bonne digestion de l'aliment. Les manques de l'alimentation sont ainsi comblés correctement."
      ],
      use: [
        "2,5 g par pigeon et par jour, à mettre à disposition dans de petits godets au colombier. Toute l'année, 2 à 3 fois par semaine.",
        'Mélangez-y un peu de graines de friandise avant de le donner aux pigeons.',
        "Saison de vol : 2 jours avant l'enlogement et au retour du concours.",
        "Période d'élevage : 2 fois par semaine pendant la couvaison ; quand les jeunes ont 4-5 jours, chaque jour. Mue : 2 fois par semaine."
      ],
      ing: ''
    },
    'aidi-grit-met-anijs': {
      name: "AIDI Grit à l'anis",
      tag: "Grit avec gravier et coquilles d'huîtres, délibérément sans pierre rouge.",
      desc: [
        "Le grit, ce sont les dents de nos pigeons : mieux l'aliment est broyé, plus les nutriments en sont extraits. Le gravier et les coquilles d'huîtres restent longtemps présents dans l'estomac et y aident à broyer l'aliment, ce qui augmente l'absorption des nutriments. La plupart des grits du marché n'en contiennent guère, car ils coûtent relativement cher.",
        "La pierre rouge, en revanche, est broyée avec l'aliment et n'apporte rien. Les pigeons continuent d'en manger pour absorber du calcium, mais en raison du mauvais rapport calcium-phosphore, le corps du pigeon ne l'absorbe pas. De notre grit à l'anis, les pigeons n'ont besoin que de très peu. C'est parfaitement normal."
      ],
      use: ['Mettez chaque jour une toute petite quantité fraîche à disposition dans un godet.'],
      ing: ''
    },
    'aidi-eye-drops': {
      name: 'AIDI Eye Drops',
      tag: 'Soigne et nettoie les yeux, le nez et le canal lacrymal.',
      desc: [
        "Pour une action parfaitement soignante et nettoyante des yeux, du nez et du canal lacrymal. AIDI Eye Drops prévient et apaise également les irritations de la conjonctive et a une action réparatrice."
      ],
      use: [
        "1 goutte dans chaque œil avant l'enlogement et après le concours.",
        "En cas d'irritation ou d'inflammation de la conjonctive : 3 à 5 fois par jour, 1 goutte dans chaque œil."
      ],
      ing: ''
    },

    'aidi-automatische-voederbakken': {
      name: 'Mangeoires automatiques AIDI',
      tag: "Alimentation entièrement automatique, jusqu'à huit distributions par jour, en quatre tailles.",
      desc: [
        "Le travail, les vacances, ou simplement l'impossibilité de vous occuper de vos pigeons aussi ponctuellement que vous le souhaiteriez ? La mangeoire entièrement automatique de haute qualité résout le problème. Avantage supplémentaire : les distributions se font avec une régularité parfaite.",
        "Réglable à la seconde près, pour atteindre exactement la quantité souhaitée. Fonctionne sur secteur et sur batterie rechargeable 12 VDC ; à raison de deux distributions par jour, une batterie pleine tient environ un mois. Rechargez-la toutes les deux semaines pour prolonger sa durée de vie."
      ],
      use: [],
      ing: ''
    },
    'aidi-manden': {
      name: "Paniers AIDI",
      tag: "Paniers d'entraînement en bois de toute première qualité.",
      desc: [
        "Notre concept AIDI est synonyme de qualité et de solidité absolues. Il en va de même pour notre dernier-né : les paniers d'entraînement. Robustes, en bois de toute première qualité, finition très soignée et conception réfléchie : deux compartiments et une mangeoire-abreuvoir facile à fixer. Des années de plaisir colombophile garanties."
      ],
      use: [],
      ing: ''
    }
  }
};

/* ============================================================= ENGLISH === */
I18N.en = {
  ui: {
    skip: 'Skip to main content',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    languageChoose: 'Choose a language',
    tagline: 'Nutrition for pigeon racing',
    details: 'Details',
    composition: 'Composition',
    analytics: 'Analytical constituents',
    usage: 'Directions for use',
    available: 'Available in',
    new: 'New',
    all: 'All',
    results: 'products',
    resultsOne: 'product',
    dealers: 'stockists',
    dealersOne: 'stockist',
    noResults: 'Nothing found',
    noResultsBody: 'Adjust your search or filters to see more results.',
    reset: 'Clear filters',
    clear: 'Clear',
    searchDealers: 'Search by shop, town or postcode',
    download: 'Download PDF',
    phone: 'Call',
    email: 'Email',
    website: 'Website',
    orderOnly: 'To order only',
    byAppointment: 'Open by appointment',
    distributor: 'Distributor',
    findDealer: 'Find a stockist',
    exploreRange: 'Explore the range',
    back: 'Back',
    home: 'Home',
    sortBy: 'Sort by'
  },

  nav: {
    concept: 'Concept', voeders: 'Feeds', supplementen: 'Supplements',
    equipment: 'Equipment', systeem: 'System', team: 'Team',
    verkooppunten: 'Stockists', contact: 'Contact'
  },

  spec: {
    fat: 'Crude fat', protein: 'Crude protein',
    absorbable: 'Absorbable protein', carbs: 'Carbohydrates',
    kcal: 'Metabolisable energy', fibre: 'Crude fibre',
    omega: 'Omega ratio', kcalUnit: 'kcal/kg', energy: 'Energy'
  },

  phase: { winter: 'Winter & rest', kweek: 'Breeding', vlucht: 'Racing', rui: 'Moult', algemeen: 'General' },
  band: { sprint: 'Sprint', midfond: 'Middle distance', dagfond: 'Long middle distance', fond: 'Long distance & overnight' },
  group: {
    energie: 'Energy', conditie: 'Condition', herstel: 'Recovery',
    darmflora: 'Gut flora', mineralen: 'Minerals', verzorging: 'Care'
  },
  country: {
    be: 'Belgium', nl: 'Netherlands', de: 'Germany', fr: 'France',
    gb: 'United Kingdom', it: 'Italy', hu: 'Hungary', hr: 'Croatia',
    us: 'USA & North America', cz: 'Czechia & Slovakia', pl: 'Poland'
  },

  home: {
    heroFinal: "Feed them like it.",
    heroPunctuation: ".",
    featuredLabel: "Pictured:",
    seasonWinterWhen: "Nov – Dec",
    seasonKweekWhen: "Jan – Mar",
    seasonVluchtWhen: "Apr – Aug",
    seasonRuiWhen: "Aug – Oct",
    title: 'AIDI: nutrition for pigeon racing | Team Noël-Willockx',
    meta: 'Ten mixtures and fourteen supplements for pigeon racing, each with its measured analytical values. Developed by Team Noël-Willockx, 45 years of nutritional expertise.',
    h1a: 'Your pigeons are ',
    h1b: 'athletes',
    h1c: '. Feed them like it.',
    lede: 'AIDI is the nutrition concept of Team Noël-Willockx. Ten mixtures, fourteen supplements, and the measured values with every product. No promises, numbers.',
    fact1: 'years of nutritional expertise',
    fact2: 'products in the range',
    fact3: 'countries with stockists',
    fact4: 'birds beaten at 1st Nat. Argenton',
    analyserTitle: 'Analytical values',
    analyserLive: 'From the range',
    analyserHint: 'Show',

    seasonTitle: 'A pigeon does not need the same thing all year',
    seasonLede: 'The range follows the season. Every phase places different demands on fuel, building blocks and recovery, and therefore needs a different mixture.',
    seasonWinterD: 'High in crude fibre, low in fat. Can be fed without limit and the birds will not run to fat.',
    seasonKweekD: 'High, diversified absorbable protein for the youngsters, without draining the breeders.',
    seasonVluchtD: 'Six racing mixtures, from sprint to overnight long distance. Each with its own macro profile.',
    seasonRuiD: 'Raised amino acid content and a good omega ratio for flawless feather quality.',
    seasonCta: 'View the mixtures',

    conceptTitle: 'Why we publish the numbers',
    conceptP1: 'Carbohydrates and fats as fuel, protein for building, vitamins and minerals as protection. The best possible balance between those groups is the key to success: for this distance, in this weather, after that race.',
    conceptP2: 'That is why we publish the crude fat, crude protein, absorbable protein, carbohydrates, metabolisable energy, crude fibre and omega ratio for every mixture. Not because it looks good, but because it lets you make a choice.',
    conceptP3: 'What matters is the absorbable protein, not the crude figure. That distinction is the difference between a pigeon that works through consecutive races and a pigeon that empties out halfway through the season.',
    conceptCompare: "All ten mixtures compared",
    conceptCompareNote: 'Ratio of fat / protein / carbohydrate. The full values appear with every product.',
    conceptCta: 'Read the AIDI Concept',

    rangeTitle: 'The range',
    rangeLede: "Twenty-six products across three lines. Everything is made in Belgium.",
    rangeVoedersD: 'Ten mixtures for racing, breeding, moult and rest, each with its full analysis.',
    rangeSupplementenD: 'Fourteen supplements for energy, condition, recovery, gut flora and minerals.',
    rangeEquipmentD: "Automatic feeders and training baskets.",
    itemsN: 'products',

    proofTitle: 'The results',
    proofLede: 'At our own loft and at others. KBDB National Ace Pigeons over recent years, each with the involvement of Team Noël-Willockx.',
    proofCta: 'All results',
    proofHighlights: '2022 highlights',
    proofAces: 'KBDB National Ace Pigeons',
    proofBirds: 'birds',

    teamTitle: 'Two specialists, forty-five years',
    teamP1: 'Eddy Noël brings more than forty years of experience in pigeon racing. For much of that time he worked as a specialist nutritionist and developed high-quality, perfectly balanced feed mixtures and by-products. He is an authority on nutrition, lectures on darkening and lighting, on breeding and racing performance and on loft climate, and has guided several top lofts.',
    teamP2: 'Ivan Willockx learned the trade of elite sport as a former professional footballer. Today he works as a pigeon broker and visits many fanciers in that capacity, which is why he knows the day-to-day needs of top players better than anyone.',
    teamCta: 'About the team',
    teamCaption: 'Eddy Noël and Ivan Willockx',

    plansTitle: 'The system, written out',
    plansLede: 'Fourteen racing, breeding and moulting schedules. Week by week, with the right mixture and the right supplement at the right moment. Free to download.',
    plansCta: 'All schedules',

    ctaTitle: 'Where do you buy AIDI?',
    ctaBody: 'AIDI is available at more than sixty stockists and distributors across eleven countries. Or call Eddy or Ivan directly. Advice costs nothing.'
  },

  concept: {
    title: 'AIDI Concept: in a professional approach, details make the difference',
    meta: 'The AIDI Concept: 45 years of expertise, extensive testing and the most recent scientific insight, translated into mixtures with published analytical values.',
    h1: 'In a professional approach, details make the difference',
    lede: 'The performance and recovery of our athletes can be greatly improved by a correct feeding pattern. That is not a slogan. It is the reason the AIDI Concept exists.',
    s1t: 'All year round, not just on Sunday',
    s1p1: 'A healthy, balanced diet is of the greatest importance. Correct nutrition throughout the year affects general health, the level of form, holding that form, the intensity and duration of the effort, and recovery. These are indispensable pillars in allowing our athletes to perform at the top, and it demands very specific guidance.',
    s1p2: 'Before the season we prepare the racers for the competitions with an adapted programme. During the season we supply them with sufficient fuel week after week. After the race we choose, at the right moments, a good recovery mixture with supporting by-products.',
    s2t: 'The very best is only just good enough',
    s2p1: 'That is why we use exclusively high-quality ingredients to compose our mixtures. That, together with 45 years of expertise, extensive testing and the most recent scientific insight, forms the basis of the AIDI concept.',
    s2p2: 'Carbohydrates and fats as fuel, protein for building, vitamins, minerals and trace elements as protection. The best possible balance between the different types of carbohydrate, protein and fat for different distances and conditions is the key to success here.',
    s3t: 'So complete that by-products become secondary',
    s3p1: 'In the AIDI concept all mixtures are composed so completely that the use of by-products can be reduced to a minimum. The high absorbability of energy and building blocks produces the most complete possible fat burn with remarkably little waste. That allows pigeons to work through an intense racing programme without loss of condition or form.',
    s3p2: 'To deliver top performance at the right moment, supplements certainly do have their use. The message is to do as little as possible, but efficiently and purposefully, anticipating the conditions just past and those still to come.',
    s4t: 'A pigeon does not need much',
    s4p1: 'Whatever you give, bear in mind that everything has to be processed by the liver of that small pigeon body. The art is doing the right things at the right moments, and knowing what you do, when, why and how.',
    s4p2: 'Use only what makes up for the shortcomings of your feed and has proven it can add performance value. Steering slightly before hard races, or as the season progresses, lets our athletes appear at the start in the best condition every time.',
    numbersT: 'What we publish',
    numbersP: 'Seven measured values accompany every mixture. They are not there to impress. They are there to make a choice possible.',
    numbersFat: 'Determines how much energy goes into reserve and how fast a pigeon recovers.',
    numbersProtein: 'The crude figure says little; everything depends on what is actually absorbable.',
    numbersAbsorbable: 'This is the figure that decides whether muscles recover between two races.',
    numbersCarbs: 'The fastest available fuel. Decisive for sprint races.',
    numbersKcal: 'The total metabolisable energy per kilo of feed.',
    numbersFibre: 'Cleansing action, keeps the gut flora in condition.',
    numbersOmega: 'The ratio of omega 6 to omega 3. Lower means a more efficient burn.'
  },

  voeders: {
    filterHelp: "Choose a phase. For racing, you can also narrow by distance. Click a mixture for its full analysis.",
    title: 'Feeds: ten mixtures with their full analysis | AIDI',
    meta: 'Ten AIDI mixtures for sprint, middle distance, long middle distance, long distance, breeding, moult and winter rest. Each with published fat, protein and carbohydrate content.',
    h1: 'Ten mixtures, ten profiles',
    lede: 'From a sprint mixture at 67% carbohydrate to a long-distance mixture at 14.5% fat. Filter by phase and distance, or compare everything in one table.',
    filterPhase: 'Phase',
    filterBand: 'Distance',
    compareTitle: 'Compare everything',
    compareLede: 'The same seven values for all ten mixtures. Click a column heading to sort.',
    colName: 'Mixture',
    colPhase: 'Phase'
  },

  supplementen: {
    title: 'Supplements: fourteen products for condition, recovery and gut flora | AIDI',
    meta: 'Fourteen AIDI supplements: energy, condition, recovery, gut flora, minerals and care. With full directions for use per product.',
    h1: 'As little as possible, but purposefully',
    lede: 'A well-balanced feed makes supplements largely unnecessary. What remains is targeted steering: at the right moment, in the right amount.',
    filterGroup: 'Purpose'
  },

  equipment: {
    title: "Equipment: feeders and baskets | AIDI",
    meta: "AIDI equipment: fully automatic feeders in four sizes and wooden training baskets.",
    h1: 'Equipment',
    lede: 'The same standard as for the feed: quality and solidity, built to last for years.',
    specSize: 'Size', specBirds: 'Pigeons', specLength: 'Length', specFeed: 'Feed',
    featTimer: 'Adjustable to the second, with a built-in timer',
    featTimes: 'Up to 8 feeds per day',
    featPower: 'Runs on mains power and a rechargeable 12 VDC battery',
    featBattery: 'A full battery lasts up to 30 days'
  },

  systeem: {
    moultT: "Moult",
    title: 'The system: fourteen racing, breeding and moulting schedules | AIDI',
    meta: 'Download the AIDI schedules: sprint, middle distance, long middle distance, overnight long distance, young birds, breeding, moult and winter rest. Written out week by week.',
    h1: 'The system, written out week by week',
    lede: 'Knowing which mixture exists is one thing. Knowing when to give it is the system. Fourteen schedules, free to download.',
    generalT: 'To begin with',
    flightT: 'Racing schedules',
    breedT: "Breeding",
    restT: 'Winter and rest',
    p: {
      'optimaal-gebruik-aidi-concept': 'How do I use the AIDI feeds?',
      'mis-de-start-van-het-seizoen-niet': 'Do not miss the start of the season',
      'vliegplan-snelheid-aidi-speedy-sprint': 'Racing plan Sprint: AIDI Speedy Sprint',
      'vliegplan-snelheid': 'Racing plan Sprint',
      'vliegschema-aidi-halve-fond': 'Racing plan Middle Distance',
      'vliegschema-aidi-dagfond': 'Racing plan Long Middle Distance',
      'vliegschema-aidi-girl-power': 'Racing plan Girl Power (hens)',
      'overnachtfond': 'Racing plan Overnight Long Distance',
      'vliegschema-aidi-jonge-duiven': 'Racing plan Young Birds',
      'vliegplan-thuisblijvende-doffers-duivinnen': 'Cocks and hens staying at home',
      'rui': 'Moulting schedule',
      'kweek': 'Breeding schedule',
      'kweekschema-met-pro-bacterial': 'Breeding schedule with AIDI Pro Bacterial',
      'winter-rust-schema': 'Winter and rest schedule'
    }
  },

  team: {
    title: 'Team Noël-Willockx: forty-five years of nutritional expertise | AIDI',
    meta: 'Eddy Noël and Ivan Willockx: 45 years of nutritional expertise in pigeon racing, with KBDB National Ace Pigeons and top results at their own loft.',
    h1: 'Team Noël-Willockx',
    lede: 'Two specialists who know what it takes to bring a body into top form and keep it there. The results prove it, at our own loft and at others.',
    eddyT: 'Eddy Noël',
    eddyP1: 'More than forty years of experience in pigeon racing. For much of that time he worked as a specialist nutritionist and developed a range of high-quality, perfectly balanced feed mixtures and by-products, adapted to present-day pigeon racing.',
    eddyP2: 'Eddy is an authority on nutrition and by-products for pigeon racing, and shares that knowledge readily in his many lectures: on feeding, on darkening and lighting, on better breeding and racing performance, on playing with young birds, on a healthy loft climate. He is the author of many articles and has guided several successful top lofts.',
    ivanT: 'Ivan Willockx',
    ivanP1: 'Ivan learned the trade of elite sport as a former professional footballer. Today he is active as a pigeon broker and visits many fanciers in that capacity.',
    ivanP2: 'As a result he knows the day-to-day needs of top players better than anyone: which questions come up at the loft, and where things go wrong in practice.',
    resultsT: '2022 highlights',
    resultsLede: '15× top 100 national, 63× top 100 national zone and 56× top 100 provincial.',
    acesT: 'KBDB National Ace Pigeons',
    acesLede: 'Over recent years, with the involvement of Team Noël-Willockx noted in each case.',
    share: 'share',
    birds: 'birds'
  },

  verkooppunten: {
    nearbyTitle: "Find a stockist nearby",
    nearbyHelp: "Use your location to find the closest stockists, or search below by town or postcode.",
    locate: "Use my location",
    locating: "Finding your location…",
    locationFound: "The three closest stockists with a known address. Distances are straight-line estimates; call ahead for availability.",
    locationDenied: "Location access was denied. Allow it in your browser and retry, or search below by town or postcode.",
    locationUnavailable: "Your location is unavailable. Try again or search below by town or postcode.",
    nearest: "Closest",
    straightLine: "straight-line distance",
    route: "Get directions",
    searchLooking: "Finding the closest stockists to {place}…",
    searchNearest: "No stockist in {place}. These are the three closest, as the crow flies:",
    title: 'Stockists: where do you buy AIDI? | AIDI',
    meta: 'More than sixty AIDI stockists in Belgium and the Netherlands, plus distributors in Germany, France, the UK, Italy, Hungary, Croatia, the USA, Czechia and Poland.',
    h1: 'Where do you buy AIDI?',
    lede: 'More than sixty shops and distributors across eleven countries. Search by name, town or postcode.',
    ctaTitle: 'Your shop not listed?',
    ctaBody: 'Are you a retailer and would you like AIDI in your range? Get in touch with Eddy or Ivan.'
  },

  contact: {
    title: 'Contact: Team Noël-Willockx | AIDI',
    meta: 'Contact Team Noël-Willockx directly: Eddy Noël, Ivan Willockx and the international AIDI distributors.',
    h1: 'Contact',
    lede: 'Questions about a mixture, a schedule or your own situation? Feel free to call. Advice costs nothing.',
    directT: 'Directly',
    directP: 'Eddy and Ivan answer themselves. For questions about feeding, schedules or a specific problem at your loft.',
    mailT: 'By email',
    mailP: 'For orders, trade enquiries and anything that is not urgent.',
    intlT: 'International distributors',
    intlP: 'Outside Belgium and the Netherlands, distribution runs through our distributors.',
    dealerT: 'Prefer to buy in a shop?',
    dealerP: 'AIDI is available at more than sixty stockists.'
  },

  footer: {
    about: 'Nutrition for pigeon racing, developed by Team Noël-Willockx. Everything is made in Belgium.',
    madeIn: 'Made in Belgium',
    range: 'Range',
    company: 'The company',
    support: 'Practical',
    rights: 'All rights reserved.',
    colophon: 'Redesigned by AW Webdesign'
  },

  p: {
    'aidi-speedy-sprint': {
      name: 'AIDI Speedy Sprint',
      tag: 'Extremely high carbohydrate content for sprint races and anything with one night in the basket.',
      desc: [
        'Pigeons fly fastest on carbohydrate. AIDI Speedy Sprint fills the carbohydrate tank completely with easily and quickly digestible sugars that deliver large amounts of immediately available energy. The birds also hold that higher speed for longer.',
        'For use on races with one night in the basket, whether they are 50 or 350 km. Only the mid-week feeding plan differs with the distance; energy is built from fats earlier in the week. Pigeons that go into the basket with a full tank comfortably fly two to three minutes faster per hour of flight.'
      ],
      use: [
        'Races with 1 night in the basket: feed to appetite on the day of basketing, and up to it.',
        'Tip: to get the birds training hard, give them 1 to 2 meals of AIDI Speedy Sprint.'
      ],
      ing: 'Bordeaux maize, cribbs maize, wheat, hulled barley, red milo, white dari, hulled oats, round rice, linseed, hemp seed, millet, canary seed, katjang idjoe.'
    },
    'aidi-mix-1': {
      name: 'AIDI Mix 1',
      tag: 'The light base mixture of the racing assortment, from the shortest to the longest distance.',
      desc: [
        'Easily digestible, with high absorbability and little waste on burning. Pigeons fly fast for longer and recover remarkably quickly, which lets you train and race your birds more intensively.',
        'The crude fibre present has a cleansing action and keeps the gut flora in optimal condition. The high absorbable protein content lets muscles recover quickly, while the relatively high fat content immediately builds energy towards the next race.'
      ],
      use: [],
      ing: 'Bordeaux maize, cribbs maize, wheat, barley, red milo, white dari, paddy, cardy, linseed, hemp seed, millet, canary seed, buckwheat, katjang idjoe, toasted soya.'
    },
    'aidi-mix-2': {
      name: 'AIDI Mix 2',
      tag: 'Small grains and pulses for better distribution and absorbability. Up to 3 days before the race.',
      desc: [
        'The deliberately chosen small-format grains and pulses give better distribution and absorbability. As in the other mixtures, naturally dried maize, with a higher share of sugars and starches, raises the nutritional value.',
        'Racing pigeons have a large protein requirement, but it is the absorbable protein content that counts, not the crude figure. The right balance between keeping the metabolism running and supplying the necessary amino acids is the key to success here.'
      ],
      use: ['Can be given up to 3 days before the race.'],
      ing: 'Bordeaux cribbs maize, small yellow cribbs maize, wheat, red milo, white dari, hulled oats, round rice, cardi, linseed, rapeseed, hemp seed, canary seed, katjang idjoe, toasted soya, small green peas.'
    },
    'aidi-mix-3': {
      name: 'AIDI Mix 3',
      tag: 'Energy-rich, with a high and varied range of fatty acids.',
      desc: [
        'A particularly energy-rich mixture that supplies our athletes with the fuel they need through a high and varied range of different fatty acids.',
        'Those fatty acids not only build the fat reserves needed for the race, they also make the mixture particularly suited to guaranteeing very fast recovery on arrival home.'
      ],
      use: ['Depending on the number of flying hours expected: to be used from 1 to 3 days before basketing.'],
      ing: 'Bordeaux maize, popcorn maize, small cribbs maize, wheat, red milo, white dari, hulled oats, paddy, round rice, cardi, sunflower seed, hulled sunflower seed, linseed, rapeseed, hemp seed, millet, canary seed, katjang idjoe, toasted soya.'
    },
    'aidi-girl-power': {
      name: 'AIDI Girl Power',
      tag: 'Designed specifically for hens on an intensive programme between 300 and 700 km.',
      desc: [
        'A considered, scientifically sound mix of different carbohydrate, fat and protein sources. They produce a feed that is very easy to digest, with particularly high absorbability and a burn that leaves fewer waste products. The hen covers the many racing kilometres more economically.',
        'The crude fibre present keeps gut function consistently perfect. Hens therefore stay in optimal condition easily throughout the racing season and recover very quickly, even after the hardest races.'
      ],
      use: [],
      ing: 'Small cribbs maize, bordeaux maize, popcorn maize, wheat, barley, hulled barley, red milo, white dari, hulled oats, paddy, round rice, cardi, hulled sunflower seed, brown linseed, rapeseed, hemp seed, millet, canary seed, vetches, katjang idjoe, toasted soya.'
    },
    'aidi-long-distance-mix': {
      name: 'AIDI Long Distance Mix',
      tag: 'Developed for the longest distances and the overnight races.',
      desc: [
        'Every discipline within an increasingly specialised sport demands very specific preparation. Pigeons on the longest distances often have a hard time of it, and they had better be well prepared for it.',
        'AIDI Long Distance Mix guarantees a good balance between the different types of carbohydrate, fat and protein. Here more than anywhere that is crucial if you are to use the full potential and full return of your pigeons.'
      ],
      use: [],
      ing: 'Yellow cribbs maize, wheat, red milo, white dari, hulled oats, paddy, round rice, cardy, hulled sunflower seed, linseed, rapeseed, colza, hemp seed, millet, canary seed, vetches, katjang idjoe, toasted soya, maple peas, green peas.'
    },
    'aidi-super-kweek': {
      name: 'AIDI Super Kweek',
      tag: 'Raises the youngsters and keeps the breeders in excellent condition.',
      desc: [
        'The high, diversified absorbable protein content supplies all the building blocks needed for young pigeons to grow up without trouble and to be given every chance of becoming strong athletes.',
        'The carefully selected fat-rich grains and seeds make the feed light to digest. Together with sufficient crude fibre they keep both youngsters and breeders in perfect condition, even after several rounds. The composition is so well matched to breeding birds that the parents take it without waste and pass it on readily to the young.'
      ],
      use: [],
      ing: 'Bordeaux maize, cribbs maize, wheat, red milo, white dari, hulled oats, paddy, round rice, cardi, striped sunflower seed, hulled sunflower seed, linseed, rapeseed, hemp, millet, canary seed, vetches, katjang idjoe, toasted soya, maple peas, green peas, yellow peas.'
    },
    'aidi-super-rui': {
      name: 'AIDI Super Rui',
      tag: 'Matched to the raised protein requirement during the moult.',
      desc: [
        'The high absorbability, the wide diversity of usable proteins, the good omega 3-6 ratio and the amino acid content specifically raised for the moult produce an excellent moult and perfect feather quality.',
        'This renewed composition is even less demanding on the pigeon. It therefore delivers consistently optimal condition and guarantees a flawless moult.'
      ],
      use: [],
      ing: 'Bordeaux maize, cribbs maize, wheat, barley, red milo, white dari, hulled oats, paddy, cardy, sunflower seed, hulled sunflower seed, linseed, colza, rapeseed, hemp seed, millet, canary seed, vetches, katjang idjoe, toasted soya, peas.'
    },
    'aidi-winter-rust': {
      name: 'AIDI Winter / Rest',
      tag: 'For after the moult, the winter months and birds in the aviary or shut in.',
      desc: [
        'A high crude fibre content, in the form of various roughages, keeps digestion and the uptake of nutrients optimal, with a cleansing action.',
        'The right proportions and the nature of the fatty acids, carbohydrates and proteins present mean AIDI Winter/Rest can be fed without limit and without the pigeons running to fat.'
      ],
      use: [],
      ing: 'Paddy rice, barley, yellow cribbs maize, pointed oats, bordeaux cribbs maize, white wheat, striped sunflower seed, red milo corn, cardy, buckwheat, linseed, hemp seed, katjang idjoe, toasted soya beans.'
    },
    'aidi-extra-power-snoepmix': {
      name: 'AIDI Extra Power Treat Mix',
      tag: 'Treat seed as a conditioning tool, with perilla and milk thistle.',
      desc: [
        'Pigeons often get a handful of treat seed after training. They eat it gladly, which makes it perfectly suited to conditioning our birds, provided you can make a select, complementary mix of it.',
        'Perilla and milk thistle seed were deliberately kept out of the other mixtures, and are all the more present in this one. Give every pigeon a pinch after training and you can be sure each bird gets its daily portion. Thanks to the high fat content it is also very well suited as a last touch before basketing.'
      ],
      use: [],
      ing: ''
    },

    'aidi-carbo-boost': {
      name: 'AIDI Carbo Boost',
      tag: 'Energy mix that lets the body produce glycogen faster.',
      desc: [
        'A scientifically balanced, high-quality energy mix that keeps the muscles working well. Its unique composition lets the body produce glycogen faster, which allows pigeons to fly at a higher speed for longer.',
        'The added antioxidants, vitamins and electrolytes respectively support the immune system, improve stress resistance and better regulate the water balance during transport, training and racing.'
      ],
      use: [
        '1 scoop (10 g) once a day mixed with 600 g of feed. Moisten the feed first with AIDI Omega Plus Olie Extra.',
        'During the racing season: 1 to 2 days before basketing.',
        'To make pigeons train better and harder: 3 to 5 consecutive days, together with AIDI Condition Booster.'
      ],
      ing: ''
    },
    'aidi-omega-plus-olie-extra': {
      name: 'AIDI Omega Plus Olie Extra',
      tag: 'Omega-3 oils with lecithin, for faster and more efficient fatty acid uptake.',
      desc: [
        'Daily use considerably improves the omega 3-6 ratio of the feed, which means better health and condition. The added lecithin brings faster, higher and more efficient uptake of these fatty acids into the body, allowing pigeons to fly more often and cover more racing kilometres without trouble.',
        'Lecithin also has a positive effect on brain function and the sense of orientation. The result is, in addition, a particularly tight and smooth plumage.'
      ],
      use: [
        'All year round, during breeding, the moult and above all the racing season: once a day, mix 5 ml through 1 kg of feed, preferably in the evening.',
        'Also perfect for making other powdered supplements stick to the feed.',
        'Shake well before use. Tip: mix the oil through the feed in the morning for the evening meal, so it has time to soak in.'
      ],
      ing: ''
    },
    'aidi-omega-3-krill-olie': {
      name: 'AIDI Omega 3 Krill Oil',
      tag: 'A rich source of ALA, DHA and EPA, without the unpleasant fishy taste.',
      desc: [
        'Fatty acids make up the bulk of a pigeon’s energy supply. A more efficient burn considerably reduces the amount of waste products, and that is exactly where omega-3 makes the difference.',
        'AIDI Omega 3 Krill Oil is a rich source of high-grade ALA (alpha-linolenic acid), DHA (docosahexaenoic acid) and EPA (eicosapentaenoic acid). All the benefits of a perfect omega-3 balance, without the unpleasant fishy taste.'
      ],
      use: [
        'Birds shut in, pigeons not racing and during the winter: 5 ml per 600 g of feed daily.',
        'Racing pigeons flying 1 to 3 hours: 5 ml per 600 g of feed, the day before and on the day of basketing.',
        'If more flying hours are expected, AIDI Omega Plus Olie remains recommended.'
      ],
      ing: ''
    },
    'aidi-condition-booster': {
      name: 'AIDI Condition Booster',
      tag: 'A condition tonic of vitamins, amino acids and minerals for the racing season.',
      desc: [
        'Activates the metabolism, gives greater stamina and better oxygen uptake, and supports the muscular system.',
        'It also delivers excellent condition and builds more energy and energy reserves, which improves racing performance. The effect is stronger when given together with AIDI Carbo Boost.'
      ],
      use: [
        '30 ml per kg of complete feed, or 10 ml per litre of drinking water.',
        'Racing season: the day before basketing, and on arrival home together with AIDI Recup Fast for very fast recovery.',
        'For poor training due to lesser condition: 2 to 5 days together with AIDI Carbo Boost.',
        'During the breeding season: 3 to 5 days at the change from crop milk to solid feed.',
        'During the moult: once a week; darkened and lit pigeons twice a week.'
      ],
      ing: ''
    },
    'aidi-health-elixir': {
      name: 'AIDI Health Elixir',
      tag: 'A tincture of twenty herbs, leaves, roots and plants.',
      desc: [
        'With, among other properties, an antioxidant action and support for blood circulation. That results in a better down moult and brings pigeons into top form in a short time.',
        'It raises resistance and improves the immune system, supports the airways, gives higher oxygen uptake and stimulates appetite. After a course of several days pigeons have fine pink breast muscles and chalk-white wattles and eye ceres.'
      ],
      use: [
        '20 ml per litre of water, or over 600 g of feed per 20 pigeons.',
        'In preparation for the breeding or racing period: 8 to 10 days before pairing or the start of the races.',
        'During the racing season: 1 to 2 times a week after the race. During the moult: 3 to 4 times a week.'
      ],
      ing: ''
    },
    'aidi-chelats': {
      name: 'AIDI Chelats',
      tag: 'Vitamins, trace elements and minerals in chelated form.',
      desc: [
        'Chelates have the advantage of being fully absorbed by the body, so they easily make up shortfalls in the feed.',
        'For use when the birds are in reduced condition. The intensive racing rhythm raises the need for vitamins, minerals and trace elements; regular use replenishes them and keeps pigeons in top form through the racing season. Also essential for the development of the young during breeding and of the new plumage during the moult.'
      ],
      use: [
        'Sprint: 10 ml on 1 kg of feed monthly, the day before basketing.',
        'Middle distance: every 3 weeks. Hard middle distance: every 2 weeks when racing weekly.',
        'Long distance and overnight: 10 ml on 1 kg of feed, the day before basketing.',
        'After illness and medication: 2 days. After vaccination: 1 day. Breeding and moult: once a week.'
      ],
      ing: ''
    },
    'aidi-recup-fast': {
      name: 'AIDI Recup Fast',
      tag: 'A water-soluble recovery mix for immediately after arrival home.',
      desc: [
        'On returning from a race it is particularly important that the pigeon can replenish the reserves it has used as quickly as possible: simple and complex sugars, immediately available fatty acids and building blocks for protein.',
        'AIDI Recup Fast contains those components in the right proportions for fast recuperation and smooth recovery. It is the product of choice for after the race.'
      ],
      use: [
        '4 scoops (20 g) per litre of drinking water, made available immediately on arrival home.',
        'Refresh the mixture after half an hour: oxidation from light and air reduces the quality.'
      ],
      ing: ''
    },
    'aidi-proteine-boost': {
      name: 'AIDI Proteine Boost',
      tag: 'High-grade whey proteins with a particularly high biological value.',
      desc: [
        'These proteins are absorbed extremely quickly by the body. That means faster recovery after the race in pigeons prone to muscular overload, better growth and development of the young during breeding, and good feather formation during the moult.',
        'The addition of extra minerals helps strengthen natural resistance and supports the immune system, so pigeons stay in fine health and their performance capacity is raised.'
      ],
      use: [
        '15 g (3 scoops) per kg of complete feed. Moisten the feed first with AIDI Omega Plus Olie Extra.',
        'During the moult and the breeding period: 1 to 2 times a week.',
        'During the change from crop milk to solid feed: 3 to 5 days.',
        'Racing season: after a hard race, 2 to 3 meals. After illness or vaccination: 2 to 3 days.'
      ],
      ing: ''
    },
    'aidi-pro-bacterial': {
      name: 'AIDI Pro Bacterial',
      tag: 'A cane molasses ferment that strengthens the position of the good bacteria.',
      desc: [
        'Good health, immunity, resistance and vitality begin with good gut flora. Unbalanced or contaminated feed in the transport baskets, dirty drinking water during transport, stress, the use of antibiotics and fatigue from races that are too hard all disturb the balance between good and bad bacteria.',
        'AIDI Pro Bacterial gives better digestion of the feed and higher uptake of nutrients, and so helps strengthen natural resistance. Pigeons sit tighter in the feather and show better work in training.'
      ],
      use: [
        'During breeding, the moult, the racing season and the rest period: 10 ml per litre of water (refreshed daily) or 10 ml over 600 g of feed.',
        'Let mains water air thoroughly: it contains chlorine.',
        'The product may begin to flocculate slightly over time. That is entirely normal and does not affect the quality.'
      ],
      ing: ''
    },
    'aidi-probiotica-plus': {
      name: 'AIDI Probiotica Plus',
      tag: 'A highly concentrated pre- and probiotic mix for natural resistance.',
      desc: [
        'Promotes and stimulates good gut flora, helps strengthen natural resistance and plays a part in the defence against disease.',
        'The high concentration of lactobacilli settles and multiplies in the mucous membranes of the small intestine and so promotes the digestion of nutrients. The result is excellent vitality, health and a silky-soft plumage.'
      ],
      use: [
        '3 scoops (15 g) mixed with 1 kg of feed. Moisten the feed first with AIDI Omega Plus Olie Extra.',
        'During the racing season: 1 day before basketing, to promote condition.',
        'During the moult and breeding period: twice a week.',
        'After a course of antibiotics or a vaccination: 3 days, once a day.'
      ],
      ing: ''
    },
    'aidi-calcium-forte': {
      name: 'AIDI Calcium Forte',
      tag: 'A mineral mix low in phosphorus and high in calcium.',
      desc: [
        'Contains all the minerals, trace elements and amino acids needed to make up shortfalls in the feed during the racing season, breeding and the moult. The low phosphorus and high calcium content give high absorbability.',
        'It improves the working of the metabolism during heavy efforts such as races, rearing young and changing the plumage, and considerably improves breeding and racing performance. Thanks to its suitable structure it is taken up readily.'
      ],
      use: [
        '1.5 g per pigeon per day, made available in small pots in the loft.',
        'From pairing until the eggs are laid: daily.',
        'During the growth of the young: 3 times a week.',
        'During the racing season: once a week, 3 days before basketing. During the moult: 3 times a week.'
      ],
      ing: ''
    },
    'aidi-condition-plus-minerals': {
      name: 'AIDI Condition Plus Minerals',
      tag: 'Minerals, vitamins and grit for the racing, breeding and moulting period.',
      desc: [
        'Developed on the basis of the newest scientific knowledge about feeding pigeons: a mix of different minerals and vitamins that pigeons eat gladly. It contains everything our athletes need for breeding and for top performance in the races.',
        'The high calcium content relative to phosphorus and the grit it contains give very good digestion of the feed. Shortcomings in the diet are thus made up in the right way.'
      ],
      use: [
        '2.5 g per pigeon per day, made available in small pots in the loft. All year round, 2 to 3 times a week.',
        'Mix some treat seed through it before you give it to the pigeons.',
        'Racing season: 2 days before basketing and on return from the race.',
        'Breeding period: twice a week during brooding; when the young are 4-5 days old, daily. Moult: twice a week.'
      ],
      ing: ''
    },
    'aidi-grit-met-anijs': {
      name: 'AIDI Grit with aniseed',
      tag: 'Grit with gravel and oyster shell, deliberately without redstone.',
      desc: [
        'Grit is our pigeons’ teeth: the better the feed is ground, the more nutrients they can take from it. Gravel and oyster shell stay present in the stomach for a long time and help grind the feed there, which increases the uptake of nutrients. Most grits on the market contain little or none of these, because they are relatively expensive.',
        'Redstone, by contrast, is ground up along with the feed and delivers nothing. Pigeons keep eating it to take up calcium, but because of the wrong calcium-phosphorus ratio the pigeon’s body does not absorb it. Of our grit with aniseed, pigeons need only very little. That is entirely normal.'
      ],
      use: ['Make a very small amount available fresh in a pot every day.'],
      ing: ''
    },
    'aidi-eye-drops': {
      name: 'AIDI Eye Drops',
      tag: 'Cares for and cleanses the eyes, the nose and the tear duct.',
      desc: [
        'For a perfectly caring and cleansing action on the eyes, nose and tear duct. AIDI Eye Drops also prevent and soothe irritation of the conjunctiva and have a restorative action.'
      ],
      use: [
        '1 drop in each eye before basketing and after the race.',
        'For irritation or inflammation of the conjunctiva: 3 to 5 times a day, 1 drop in each eye.'
      ],
      ing: ''
    },

    'aidi-automatische-voederbakken': {
      name: 'AIDI Automatic feeders',
      tag: 'Fully automatic feeding, up to eight feeds a day, in four sizes.',
      desc: [
        'Work, holidays, or simply not being able to look after your pigeons as punctually as you would like? The high-quality fully automatic feeder solves it. An added advantage: the feeds happen with strict regularity.',
        'Adjustable to the second, so you hit exactly the amount of feed you want. Runs on mains power and a rechargeable 12 VDC battery; at two feeds a day a full battery holds charge for about a month. Recharge it every two weeks for a longer service life.'
      ],
      use: [],
      ing: ''
    },
    'aidi-manden': {
      name: 'AIDI Baskets',
      tag: 'Training baskets in wood of the very best quality.',
      desc: [
        'Our AIDI concept stands for absolute quality and solidity. That is no different for our newest addition: the training baskets. Sturdy, in wood of the very best quality, very finely finished and well thought through: two compartments and an easily fitted feed and drink trough. Years of pigeon pleasure guaranteed.'
      ],
      use: [],
      ing: ''
    }
  }
};

/* ============================================================= DEUTSCH === */
I18N.de = {
  ui: {
    skip: 'Zum Hauptinhalt springen',
    menu: 'Menü',
    close: 'Schließen',
    language: 'Sprache',
    languageChoose: 'Sprache wählen',
    tagline: 'Ernährung für den Taubensport',
    details: 'Details',
    composition: 'Zusammensetzung',
    analytics: 'Analytische Bestandteile',
    usage: 'Anwendung',
    available: 'Erhältlich in',
    new: 'Neu',
    all: 'Alle',
    results: 'Produkte',
    resultsOne: 'Produkt',
    dealers: 'Verkaufsstellen',
    dealersOne: 'Verkaufsstelle',
    noResults: 'Nichts gefunden',
    noResultsBody: 'Passen Sie Ihre Suche oder Filter an, um mehr Ergebnisse zu sehen.',
    reset: 'Filter zurücksetzen',
    clear: 'Löschen',
    searchDealers: 'Nach Geschäft, Ort oder Postleitzahl suchen',
    download: 'PDF herunterladen',
    phone: 'Anrufen',
    email: 'E-Mail schreiben',
    website: 'Website',
    orderOnly: 'Nur auf Bestellung',
    byAppointment: 'Geöffnet nach Vereinbarung',
    distributor: 'Importeur',
    findDealer: 'Verkaufsstelle finden',
    exploreRange: 'Sortiment entdecken',
    back: 'Zurück',
    home: 'Start',
    sortBy: 'Sortieren nach'
  },

  nav: {
    concept: 'Konzept', voeders: 'Futter', supplementen: 'Ergänzungen',
    equipment: 'Zubehör', systeem: 'System', team: 'Team',
    verkooppunten: 'Verkaufsstellen', contact: 'Kontakt'
  },

  spec: {
    fat: 'Rohfett', protein: 'Rohprotein',
    absorbable: 'Verwertbares Protein', carbs: 'Kohlenhydrate',
    kcal: 'Umsetzbare Energie', fibre: 'Rohfaser',
    omega: 'Omega-Verhältnis', kcalUnit: 'kcal/kg', energy: 'Energie'
  },

  phase: { winter: 'Winter & Ruhe', kweek: 'Zucht', vlucht: 'Flug', rui: 'Mauser', algemeen: 'Allgemein' },
  band: { sprint: 'Schnelligkeit', midfond: 'Mittelstrecke', dagfond: 'Weite Mittelstrecke', fond: 'Langstrecke & Übernachtflug' },
  group: {
    energie: 'Energie', conditie: 'Kondition', herstel: 'Erholung',
    darmflora: 'Darmflora', mineralen: 'Mineralien', verzorging: 'Pflege'
  },
  country: {
    be: 'Belgien', nl: 'Niederlande', de: 'Deutschland', fr: 'Frankreich',
    gb: 'Großbritannien', it: 'Italien', hu: 'Ungarn', hr: 'Kroatien',
    us: 'USA & Nordamerika', cz: 'Tschechien & Slowakei', pl: 'Polen'
  },

  home: {
    heroFinal: "Füttern Sie danach.",
    heroPunctuation: ".",
    featuredLabel: "Im Bild:",
    seasonWinterWhen: "Nov. – Dez.",
    seasonKweekWhen: "Jan. – März",
    seasonVluchtWhen: "Apr. – Aug.",
    seasonRuiWhen: "Aug. – Okt.",
    title: 'AIDI: Ernährung für den Taubensport | Team Noël-Willockx',
    meta: 'Zehn Mischungen und vierzehn Ergänzungen für den Taubensport, jeweils mit den gemessenen analytischen Werten. Entwickelt von Team Noël-Willockx, 45 Jahre Ernährungsexpertise.',
    h1a: 'Ihre Tauben sind ',
    h1b: 'Athleten',
    h1c: '. Füttern Sie danach.',
    lede: 'AIDI ist das Ernährungskonzept von Team Noël-Willockx. Zehn Mischungen, vierzehn Ergänzungen, und zu jedem Produkt die gemessenen Werte. Keine Versprechen, Zahlen.',
    fact1: 'Jahre Ernährungsexpertise',
    fact2: 'Produkte im Sortiment',
    fact3: 'Länder mit Verkaufsstellen',
    fact4: 'Tauben geschlagen beim 1. Nat. Argenton',
    analyserTitle: 'Analytische Werte',
    analyserLive: 'Aus dem Sortiment',
    analyserHint: 'Anzeigen',

    seasonTitle: 'Eine Taube braucht nicht das ganze Jahr dasselbe',
    seasonLede: 'Das Sortiment folgt der Saison. Jede Phase stellt andere Anforderungen an Brennstoff, Baustoffe und Erholung, und braucht deshalb eine andere Mischung.',
    seasonWinterD: 'Viel Rohfaser, wenig Fett. Unbegrenzt zu füttern, ohne dass die Tauben verfetten.',
    seasonKweekD: 'Hoher, breit gefächerter Anteil verwertbaren Proteins für die Jungen, ohne die Zuchttiere auszuzehren.',
    seasonVluchtD: 'Sechs Flugmischungen, vom Schnelligkeitsflug bis zum Übernachtflug. Jede mit eigenem Makroprofil.',
    seasonRuiD: 'Erhöhter Aminosäureanteil und ein gutes Omega-Verhältnis für makellose Gefiederqualität.',
    seasonCta: 'Mischungen ansehen',

    conceptTitle: 'Warum wir die Zahlen dazuschreiben',
    conceptP1: 'Kohlenhydrate und Fette als Brennstoff, Proteine für den Aufbau, Vitamine und Mineralien als Schutz. Das bestmögliche Gleichgewicht zwischen diesen Gruppen ist der Schlüssel zum Erfolg: für diese Entfernung, bei diesem Wetter, nach jenem Flug.',
    conceptP2: 'Deshalb veröffentlichen wir zu jeder Mischung das Rohfett, das Rohprotein, das verwertbare Protein, die Kohlenhydrate, die umsetzbare Energie, die Rohfaser und das Omega-Verhältnis. Nicht weil es gut aussieht, sondern weil Sie damit eine Wahl treffen können.',
    conceptP3: 'Es geht um das verwertbare Protein, nicht um das rohe. Dieser Unterschied entscheidet, ob eine Taube die aufeinanderfolgenden Wettflüge durchsteht oder mitten in der Saison leerläuft.',
    conceptCompare: "Alle zehn Mischungen im Vergleich",
    conceptCompareNote: 'Verhältnis Fett / Protein / Kohlenhydrate. Die vollständigen Werte stehen bei jedem Produkt.',
    conceptCta: 'Das AIDI Konzept lesen',

    rangeTitle: 'Das Sortiment',
    rangeLede: "Sechsundzwanzig Produkte in drei Linien. Alles wird in Belgien hergestellt.",
    rangeVoedersD: 'Zehn Mischungen für Flug, Zucht, Mauser und Ruhe, jeweils mit vollständiger Analyse.',
    rangeSupplementenD: 'Vierzehn Ergänzungen für Energie, Kondition, Erholung, Darmflora und Mineralien.',
    rangeEquipmentD: "Automatische Futterautomaten und Lernkörbe.",
    itemsN: 'Produkte',

    proofTitle: 'Die Ergebnisse',
    proofLede: 'Auf dem eigenen Schlag und bei anderen. Nationale Asstauben der KBDB der letzten Jahre, jeweils unter Beteiligung von Team Noël-Willockx.',
    proofCta: 'Alle Ergebnisse',
    proofHighlights: 'Höhepunkte 2022',
    proofAces: 'Nationale Asstauben KBDB',
    proofBirds: 'Tauben',

    teamTitle: 'Zwei Spezialisten, fünfundvierzig Jahre',
    teamP1: 'Eddy Noël steht für mehr als vierzig Jahre Erfahrung im Taubensport. Einen großen Teil davon arbeitete er als spezialisierter Ernährungsfachmann und entwickelte hochwertige, perfekt ausgewogene Futtermischungen und Nebenprodukte. Er ist eine Autorität auf dem Gebiet der Ernährung, hält Vorträge über Verdunkeln und Belichten, über bessere Zucht- und Flugleistungen und über das Schlagklima, und hat mehrere Spitzenschläge begleitet.',
    teamP2: 'Ivan Willockx lernte das Handwerk des Spitzensports als ehemaliger Profifußballer. Heute ist er als Taubenmakler tätig und besucht in dieser Eigenschaft viele Liebhaber. Deshalb kennt er die täglichen Bedürfnisse von Spitzenspielern wie kaum ein anderer.',
    teamCta: 'Über das Team',
    teamCaption: 'Eddy Noël und Ivan Willockx',

    plansTitle: 'Das System, ausgeschrieben',
    plansLede: 'Vierzehn Flug-, Zucht- und Mauserpläne. Woche für Woche, mit der richtigen Mischung und der richtigen Ergänzung zum richtigen Zeitpunkt. Kostenlos zum Download.',
    plansCta: 'Alle Pläne',

    ctaTitle: 'Wo kaufen Sie AIDI?',
    ctaBody: 'AIDI ist bei über sechzig Verkaufsstellen und Importeuren in elf Ländern erhältlich. Oder rufen Sie Eddy oder Ivan direkt an. Beratung kostet nichts.'
  },

  concept: {
    title: 'AIDI Konzept: bei einem professionellen Ansatz machen Details den Unterschied',
    meta: 'Das AIDI Konzept: 45 Jahre Expertise, umfangreiche Tests und die neuesten wissenschaftlichen Erkenntnisse, übersetzt in Mischungen mit veröffentlichten analytischen Werten.',
    h1: 'Bei einem professionellen Ansatz machen Details den Unterschied',
    lede: 'Leistung und Erholung unserer Athleten lassen sich durch ein richtiges Ernährungsmuster erheblich verbessern. Das ist kein Slogan. Es ist der Grund, warum das AIDI Konzept existiert.',
    s1t: 'Das ganze Jahr, nicht nur am Sonntag',
    s1p1: 'Eine gesunde, ausgewogene Ernährung ist von größter Bedeutung. Die richtige Fütterung das ganze Jahr über beeinflusst den allgemeinen Gesundheitszustand, das Formniveau, das Halten dieser Form, Intensität und Dauer der Anstrengung sowie die Erholung. Das sind unverzichtbare Säulen, damit unsere Athleten Spitzenleistungen erbringen können, und es verlangt eine sehr spezifische Begleitung.',
    s1p2: 'Vor der Saison bereiten wir die Reisetauben mit einem angepassten Programm auf die Wettflüge vor. Während der Saison versorgen wir sie Woche für Woche mit ausreichend Brennstoff. Nach dem Wettflug wählen wir zu den passenden Zeitpunkten eine gute Erholungsmischung mit ergänzenden Nebenprodukten.',
    s2t: 'Das Allerbeste ist gerade gut genug',
    s2p1: 'Deshalb verwenden wir ausschließlich qualitativ hochwertige Zutaten für unsere Mischungen. Das bildet zusammen mit 45 Jahren Expertise, umfangreichen Tests und den neuesten wissenschaftlichen Erkenntnissen die Grundlage des AIDI Konzepts.',
    s2p2: 'Kohlenhydrate und Fette als Brennstoff, Proteine für den Aufbau, Vitamine, Mineralien und Spurenelemente als Schutz. Das bestmögliche Gleichgewicht zwischen den verschiedenen Arten von Kohlenhydraten, Proteinen und Fetten für unterschiedliche Entfernungen und Umstände ist hier der Schlüssel zum Erfolg.',
    s3t: 'So vollständig, dass Nebenprodukte zur Nebensache werden',
    s3p1: 'Im AIDI Konzept sind alle Mischungen so vollständig zusammengesetzt, dass der Einsatz von Nebenprodukten auf ein Minimum reduziert werden kann. Die hohe Verwertbarkeit von Energie und Baustoffen sorgt für eine möglichst vollständige Fettverbrennung mit besonders wenig Abfallstoffen. Das erlaubt Tauben, ein intensives Flugprogramm ohne Verlust von Kondition und Form durchzustehen.',
    s3p2: 'Um zum richtigen Zeitpunkt Spitzenleistung zu bringen, haben Ergänzungen durchaus ihren Nutzen. Die Botschaft lautet: so wenig wie möglich, aber effizient und zielgerichtet handeln und auf die vergangenen wie die kommenden Umstände vorausschauen.',
    s4t: 'Eine Taube braucht nicht viel',
    s4p1: 'Was Sie auch geben, bedenken Sie, dass alles von der Leber dieses kleinen Taubenkörpers verarbeitet werden muss. Die Kunst besteht darin, die richtigen Dinge zu den richtigen Zeitpunkten zu tun und zu wissen, was Sie wann, warum und wie tun.',
    s4p2: 'Verwenden Sie nur Dinge, die die Mängel Ihres Futters ausgleichen und bewiesen haben, dass sie leistungsbezogen einen Mehrwert schaffen. Ein kurzes Nachsteuern vor schweren Flügen oder im Verlauf der Saison lässt unsere Athleten immer wieder in bester Verfassung an den Start gehen.',
    numbersT: 'Was wir veröffentlichen',
    numbersP: 'Zu jeder Mischung stehen sieben gemessene Werte. Sie sind nicht da, um zu beeindrucken. Sie sind da, um eine Wahl zu ermöglichen.',
    numbersFat: 'Bestimmt, wie viel Energie in die Reserve geht und wie schnell eine Taube sich erholt.',
    numbersProtein: 'Der Rohwert sagt wenig; alles hängt davon ab, was tatsächlich verwertbar ist.',
    numbersAbsorbable: 'Diese Zahl entscheidet, ob die Muskeln sich zwischen zwei Wettflügen erholen.',
    numbersCarbs: 'Der schnellstverfügbare Brennstoff. Entscheidend für Schnelligkeitsflüge.',
    numbersKcal: 'Die gesamte umsetzbare Energie je Kilo Futter.',
    numbersFibre: 'Reinigende Wirkung, hält die Darmflora in Kondition.',
    numbersOmega: 'Das Verhältnis von Omega 6 zu Omega 3. Niedriger bedeutet eine effizientere Verbrennung.'
  },

  voeders: {
    filterHelp: "Wählen Sie eine Phase. Für Flüge können Sie zusätzlich nach Entfernung filtern. Klicken Sie auf eine Mischung für die vollständige Analyse.",
    title: 'Futter: zehn Mischungen mit vollständiger Analyse | AIDI',
    meta: 'Zehn AIDI Mischungen für Schnelligkeit, Mittelstrecke, weite Mittelstrecke, Langstrecke, Zucht, Mauser und Winterruhe. Jeweils mit veröffentlichtem Fett-, Protein- und Kohlenhydratgehalt.',
    h1: 'Zehn Mischungen, zehn Profile',
    lede: 'Von einer Sprintmischung mit 67 % Kohlenhydraten bis zu einer Langstreckenmischung mit 14,5 % Fett. Filtern Sie nach Phase und Entfernung oder vergleichen Sie alles in einer Tabelle.',
    filterPhase: 'Phase',
    filterBand: 'Entfernung',
    compareTitle: 'Alles vergleichen',
    compareLede: 'Dieselben sieben Werte für alle zehn Mischungen. Klicken Sie auf eine Spaltenüberschrift, um zu sortieren.',
    colName: 'Mischung',
    colPhase: 'Phase'
  },

  supplementen: {
    title: 'Ergänzungen: vierzehn Produkte für Kondition, Erholung und Darmflora | AIDI',
    meta: 'Vierzehn AIDI Ergänzungen: Energie, Kondition, Erholung, Darmflora, Mineralien und Pflege. Mit vollständiger Anwendung je Produkt.',
    h1: 'So wenig wie möglich, doch zielgerichtet',
    lede: 'Ein gut ausgewogenes Futter macht Ergänzungen weitgehend überflüssig. Was bleibt, ist gezieltes Nachsteuern: zum richtigen Zeitpunkt, in der richtigen Menge.',
    filterGroup: 'Zweck'
  },

  equipment: {
    title: "Zubehör: Futterautomaten und Körbe | AIDI",
    meta: "AIDI Zubehör: vollautomatische Futterautomaten in vier Größen und Lernkörbe aus Holz.",
    h1: 'Zubehör',
    lede: 'Derselbe Maßstab wie beim Futter: Qualität und Solidität, gebaut, um Jahre zu halten.',
    specSize: 'Größe', specBirds: 'Tauben', specLength: 'Länge', specFeed: 'Futter',
    featTimer: 'Sekundengenau einstellbar, mit eingebauter Schaltuhr',
    featTimes: 'Bis zu 8 Fütterungen pro Tag',
    featPower: 'Läuft über Netzstrom und einen aufladbaren 12-VDC-Akku',
    featBattery: 'Ein voller Akku hält bis zu 30 Tage'
  },

  systeem: {
    moultT: "Mauser",
    title: 'Das System: vierzehn Flug-, Zucht- und Mauserpläne | AIDI',
    meta: 'Laden Sie die AIDI Pläne herunter: Schnelligkeit, Mittelstrecke, weite Mittelstrecke, Übernachtflug, Jungtauben, Zucht, Mauser und Winterruhe. Woche für Woche ausgeschrieben.',
    h1: 'Das System, Woche für Woche ausgeschrieben',
    lede: 'Zu wissen, welche Mischung es gibt, ist das eine. Zu wissen, wann Sie sie geben, ist das System. Vierzehn Pläne, kostenlos zum Download.',
    generalT: 'Zum Anfang',
    flightT: 'Flugpläne',
    breedT: "Zucht",
    restT: 'Winter und Ruhe',
    p: {
      'optimaal-gebruik-aidi-concept': 'Wie verwende ich die AIDI Futtersorten?',
      'mis-de-start-van-het-seizoen-niet': 'Verpassen Sie den Saisonstart nicht',
      'vliegplan-snelheid-aidi-speedy-sprint': 'Flugplan Schnelligkeit: AIDI Speedy Sprint',
      'vliegplan-snelheid': 'Flugplan Schnelligkeit',
      'vliegschema-aidi-halve-fond': 'Flugplan Mittelstrecke',
      'vliegschema-aidi-dagfond': 'Flugplan Weite Mittelstrecke',
      'vliegschema-aidi-girl-power': 'Flugplan Girl Power (Täubinnen)',
      'overnachtfond': 'Flugplan Übernachtflug',
      'vliegschema-aidi-jonge-duiven': 'Flugplan Jungtauben',
      'vliegplan-thuisblijvende-doffers-duivinnen': 'Zu Hause bleibende Täuber und Täubinnen',
      'rui': 'Mauserplan',
      'kweek': 'Zuchtplan',
      'kweekschema-met-pro-bacterial': 'Zuchtplan mit AIDI Pro Bacterial',
      'winter-rust-schema': 'Winter- und Ruheplan'
    }
  },

  team: {
    title: 'Team Noël-Willockx: fünfundvierzig Jahre Ernährungsexpertise | AIDI',
    meta: 'Eddy Noël und Ivan Willockx: 45 Jahre Ernährungsexpertise im Taubensport, mit nationalen Asstauben der KBDB und Spitzenergebnissen auf dem eigenen Schlag.',
    h1: 'Team Noël-Willockx',
    lede: 'Zwei Spezialisten, die wissen, was nötig ist, um einen Körper in Topform zu bringen und dort zu halten. Die Ergebnisse beweisen es, auf dem eigenen Schlag und bei anderen.',
    eddyT: 'Eddy Noël',
    eddyP1: 'Mehr als vierzig Jahre Erfahrung im Taubensport. Einen großen Teil davon war er als spezialisierter Ernährungsfachmann tätig und entwickelte verschiedene hochwertige, perfekt ausgewogene Futtermischungen und Nebenprodukte, angepasst an den heutigen Taubensport.',
    eddyP2: 'Eddy ist eine Autorität auf dem Gebiet der Ernährung und der Nebenprodukte für den Taubensport und teilt dieses Wissen gern in seinen vielen Vorträgen: über Ernährung, über Verdunkeln und Belichten, über bessere Zucht- und Flugleistungen, über das Spiel mit Jungtauben, über ein gesundes Schlagklima. Er ist Autor vieler Artikel und hat mehrere erfolgreiche Spitzenschläge begleitet.',
    ivanT: 'Ivan Willockx',
    ivanP1: 'Ivan lernte das Handwerk des Spitzensports als ehemaliger Profifußballer. Heute ist er als Taubenmakler aktiv und besucht in dieser Eigenschaft viele Liebhaber.',
    ivanP2: 'Dadurch kennt er die täglichen Bedürfnisse von Spitzenspielern wie kaum ein anderer: welche Fragen auf dem Schlag aufkommen und wo es in der Praxis hakt.',
    resultsT: 'Höhepunkte 2022',
    resultsLede: '15× Top 100 national, 63× Top 100 nationale Zone und 56× Top 100 provinzial.',
    acesT: 'Nationale Asstauben KBDB',
    acesLede: 'Über die letzten Jahre, mit jeweils angegebener Beteiligung von Team Noël-Willockx.',
    share: 'Anteil',
    birds: 'Tauben'
  },

  verkooppunten: {
    nearbyTitle: "Finden Sie eine Verkaufsstelle in Ihrer Nähe",
    nearbyHelp: "Nutzen Sie Ihren Standort, um die nächsten Verkaufsstellen zu finden, oder suchen Sie unten nach Ort oder Postleitzahl.",
    locate: "Meinen Standort verwenden",
    locating: "Ihr Standort wird ermittelt…",
    locationFound: "Die drei nächsten Verkaufsstellen mit bekannter Adresse. Entfernungen in Luftlinie; bitte Verfügbarkeit telefonisch prüfen.",
    locationDenied: "Standortzugriff verweigert. Erlauben Sie ihn im Browser und versuchen Sie es erneut, oder suchen Sie unten nach Ort oder Postleitzahl.",
    locationUnavailable: "Ihr Standort ist nicht verfügbar. Versuchen Sie es erneut oder suchen Sie unten nach Ort oder Postleitzahl.",
    nearest: "Am nächsten",
    straightLine: "Luftlinie",
    route: "Route planen",
    searchLooking: "Nächste Verkaufsstellen bei {place} werden gesucht…",
    searchNearest: "Keine Verkaufsstelle in {place}. Das sind die drei nächsten, in Luftlinie:",
    title: 'Verkaufsstellen: wo kaufen Sie AIDI? | AIDI',
    meta: 'Über sechzig AIDI Verkaufsstellen in Belgien und den Niederlanden sowie Importeure in Deutschland, Frankreich, Großbritannien, Italien, Ungarn, Kroatien, den USA, Tschechien und Polen.',
    h1: 'Wo kaufen Sie AIDI?',
    lede: 'Über sechzig Geschäfte und Importeure in elf Ländern. Suchen Sie nach Name, Ort oder Postleitzahl.',
    ctaTitle: 'Ihr Geschäft fehlt?',
    ctaBody: 'Sie sind Händler und möchten AIDI in Ihr Sortiment aufnehmen? Nehmen Sie Kontakt mit Eddy oder Ivan auf.'
  },

  contact: {
    title: 'Kontakt: Team Noël-Willockx | AIDI',
    meta: 'Kontaktieren Sie Team Noël-Willockx direkt: Eddy Noël, Ivan Willockx und die internationalen AIDI Importeure.',
    h1: 'Kontakt',
    lede: 'Fragen zu einer Mischung, einem Plan oder Ihrer eigenen Situation? Rufen Sie ruhig an. Beratung kostet nichts.',
    directT: 'Direkt',
    directP: 'Eddy und Ivan gehen selbst ans Telefon. Für Fragen zur Fütterung, zu Plänen oder zu einem bestimmten Problem auf Ihrem Schlag.',
    mailT: 'Per E-Mail',
    mailP: 'Für Bestellungen, Händleranfragen und alles, was keine Eile hat.',
    intlT: 'Internationale Importeure',
    intlP: 'Außerhalb Belgiens und der Niederlande läuft der Vertrieb über unsere Importeure.',
    dealerT: 'Lieber im Geschäft?',
    dealerP: 'AIDI ist bei über sechzig Verkaufsstellen erhältlich.'
  },

  footer: {
    about: 'Ernährung für den Taubensport, entwickelt von Team Noël-Willockx. Alles wird in Belgien hergestellt.',
    madeIn: 'Hergestellt in Belgien',
    range: 'Sortiment',
    company: 'Das Unternehmen',
    support: 'Praktisch',
    rights: 'Alle Rechte vorbehalten.',
    colophon: 'Neugestaltet von AW Webdesign'
  },

  p: {
    'aidi-speedy-sprint': {
      name: 'AIDI Speedy Sprint',
      tag: 'Extrem hoher Kohlenhydratgehalt für Schnelligkeitsflüge und alles mit einer Nacht im Korb.',
      desc: [
        'Auf Kohlenhydraten fliegen Tauben am schnellsten. AIDI Speedy Sprint füllt den Kohlenhydratspeicher vollständig mit leicht und schnell verdaulichen Zuckern, die große Mengen sofort verfügbarer Energie liefern. Diese höhere Geschwindigkeit halten die Tauben zudem länger.',
        'Zu verwenden bei Flügen mit einer Nacht im Korb, ob 50 oder 350 km. Nur der Fütterungsplan unter der Woche unterscheidet sich je nach Entfernung; der Energieaufbau aus Fetten erfolgt früher in der Woche. Tauben, die mit vollem Speicher in den Korb gehen, fliegen locker zwei bis drei Minuten je Flugstunde schneller.'
      ],
      use: [
        'Flüge mit 1 Nacht im Korb: nach Belieben am Einsatztag und bis zum Einsetzen verfügbar machen.',
        'Tipp: Wenn Sie die Tauben kräftig durchtrainieren lassen wollen, geben Sie ihnen 1 bis 2 Mahlzeiten AIDI Speedy Sprint.'
      ],
      ing: 'Bordeauxmais, Cribbsmais, Weizen, geschälte Gerste, roter Milo, weiße Dari, geschälter Hafer, Rundreis, Leinsamen, Hanfsamen, Millet, Kanariensaat, Katjang Idjoe.'
    },
    'aidi-mix-1': {
      name: 'AIDI Mix 1',
      tag: 'Die leichte Basismischung des Flugsortiments, von der kürzesten bis zur längsten Entfernung.',
      desc: [
        'Leicht verdaulich, mit hoher Verwertbarkeit und wenig Abfallstoffen bei der Verbrennung. Tauben fliegen länger schnell und erholen sich besonders rasch, wodurch Sie Ihre Tiere intensiver trainieren und fliegen lassen können.',
        'Die enthaltene Rohfaser hat eine reinigende Wirkung und hält die Darmflora in optimaler Kondition. Der hohe Anteil verwertbaren Proteins lässt die Muskeln schnell regenerieren, während der relativ hohe Fettgehalt sofort den Energieaufbau für den nächsten Flug sichert.'
      ],
      use: [],
      ing: 'Bordeauxmais, Cribbsmais, Weizen, Gerste, roter Milo, weiße Dari, Paddy, Cardy, Leinsamen, Hanfsamen, Millet, Kanariensaat, Buchweizen, Katjang Idjoe, getoastete Soja.'
    },
    'aidi-mix-2': {
      name: 'AIDI Mix 2',
      tag: 'Kleine Körner und Hülsenfrüchte für bessere Verteilung und Verwertbarkeit. Bis 3 Tage vor dem Flug.',
      desc: [
        'Die bewusst gewählten Körner und Hülsenfrüchte im Kleinformat sorgen für bessere Verteilung und Verwertbarkeit. Wie bei den anderen Mischungen erhöht natürlich getrockneter Mais, mit höherem Anteil an Zuckern und Stärken, den Nährwert.',
        'Wettflugtauben haben einen großen Proteinbedarf, doch zählt der Anteil verwertbaren Proteins, nicht der rohe. Das richtige Gleichgewicht zwischen dem Aufrechterhalten des Stoffwechsels und der Versorgung mit den nötigen Aminosäuren ist hier der Schlüssel zum Erfolg.'
      ],
      use: ['Kann bis 3 Tage vor dem Flug gegeben werden.'],
      ing: 'Bordeaux-Cribbsmais, kleiner gelber Cribbsmais, Weizen, roter Milo, weiße Dari, geschälter Hafer, Rundreis, Cardi, Leinsamen, Raps, Hanfsamen, Kanariensaat, Katjang Idjoe, getoastete Soja, kleine grüne Erbsen.'
    },
    'aidi-mix-3': {
      name: 'AIDI Mix 3',
      tag: 'Energiereich, mit einem hohen und vielfältigen Angebot an Fettsäuren.',
      desc: [
        'Eine besonders energiereiche Mischung, die unseren Athleten den nötigen Brennstoff über ein hohes und vielfältiges Angebot verschiedener Fettsäuren liefert.',
        'Diese Fettsäuren bauen nicht nur die für den Flug nötigen Fettreserven auf, sie machen die Mischung auch besonders geeignet, eine sehr schnelle Erholung bei der Heimkehr zu gewährleisten.'
      ],
      use: ['Je nach Anzahl der zu erwartenden Flugstunden: 1 bis 3 Tage vor dem Einsetzen zu verwenden.'],
      ing: 'Bordeauxmais, Popcornmais, kleiner Cribbsmais, Weizen, roter Milo, weiße Dari, geschälter Hafer, Paddy, Rundreis, Cardi, Sonnenblumenkerne, geschälte Sonnenblumenkerne, Leinsamen, Rübsen, Hanfsamen, Millet, Kanariensaat, Katjang Idjoe, getoastete Soja.'
    },
    'aidi-girl-power': {
      name: 'AIDI Girl Power',
      tag: 'Speziell entwickelt für Täubinnen mit einem intensiven Programm zwischen 300 und 700 km.',
      desc: [
        'Eine wohlüberlegte, wissenschaftlich fundierte Mischung verschiedener Kohlenhydrat-, Fett- und Proteinquellen. Sie ergeben ein sehr leicht verdauliches Futter, eine besonders hohe Verwertbarkeit und eine Verbrennung mit weniger Abfallstoffen. Die Täubin bewältigt die vielen Flugkilometer sparsamer und wirtschaftlicher.',
        'Die enthaltene Rohfaser sorgt für eine konstant perfekte Darmfunktion. Dadurch bleiben Täubinnen die ganze Flugsaison leicht in optimaler Kondition und erholen sich sehr schnell, selbst nach den schwersten Flügen.'
      ],
      use: [],
      ing: 'Kleiner Cribbsmais, Bordeauxmais, Popcornmais, Weizen, Gerste, geschälte Gerste, roter Milo, weiße Dari, geschälter Hafer, Paddy, Rundreis, Cardi, geschälte Sonnenblumenkerne, brauner Leinsamen, Raps, Hanfsamen, Millet, Kanariensaat, Wicken, Katjang Idjoe, getoastete Soja.'
    },
    'aidi-long-distance-mix': {
      name: 'AIDI Long Distance Mix',
      tag: 'Entwickelt für die weitesten Entfernungen und den Übernachtflug.',
      desc: [
        'Jede Disziplin in einem immer stärker spezialisierten Taubensport verlangt eine sehr spezifische Vorbereitung. Tauben auf den weitesten Entfernungen bekommen es oft hart zu spüren, und darauf sollten sie besser gut vorbereitet sein.',
        'AIDI Long Distance Mix steht für ein gutes Gleichgewicht zwischen den verschiedenen Arten von Kohlenhydraten, Fetten und Proteinen. Das ist hier mehr noch als sonst entscheidend, um das volle Potenzial und den vollen Ertrag Ihrer Tauben nutzen zu können.'
      ],
      use: [],
      ing: 'Gelber Cribbsmais, Weizen, roter Milo, weiße Dari, geschälter Hafer, Paddy, Rundreis, Cardy, geschälte Sonnenblumenkerne, Leinsamen, Rübsen, Raps, Hanfsamen, Millet, Kanariensaat, Wicken, Katjang Idjoe, getoastete Soja, Maple Peas, grüne Erbsen.'
    },
    'aidi-super-kweek': {
      name: 'AIDI Super Kweek',
      tag: 'Zieht die Jungen groß und hält die Zuchttiere in ausgezeichneter Kondition.',
      desc: [
        'Der hohe, breit gefächerte Anteil verwertbaren Proteins liefert alle nötigen Baustoffe, damit Jungtauben problemlos heranwachsen und alle Chancen erhalten, zu starken Athleten zu werden.',
        'Die sorgfältig ausgewählten fettreichen Körner und Samen machen das Futter leicht verdaulich. Zusammen mit ausreichend Rohfaser halten sie Jungtiere und Zuchttiere in perfekter Kondition, auch nach mehreren Zuchtrunden. Die Zusammensetzung ist so auf brütende Tauben abgestimmt, dass die Elterntiere sie ohne Verschwendung aufnehmen und mühelos an die Jungen weitergeben.'
      ],
      use: [],
      ing: 'Bordeauxmais, Cribbsmais, Weizen, roter Milo, weiße Dari, geschälter Hafer, Paddy, Rundreis, Cardi, gestreifte Sonnenblumenkerne, geschälte Sonnenblumenkerne, Leinsamen, Rübsen, Hanf, Millet, Kanariensaat, Wicken, Katjang Idjoe, getoastete Soja, Maple Peas, grüne Erbsen, gelbe Erbsen.'
    },
    'aidi-super-rui': {
      name: 'AIDI Super Rui',
      tag: 'Abgestimmt auf den erhöhten Proteinbedarf während der Mauser.',
      desc: [
        'Die hohe Verwertbarkeit, die große Vielfalt nutzbarer Proteine, das gute Omega-3-6-Verhältnis und der speziell für die Mauser erhöhte Aminosäureanteil sorgen für eine ausgezeichnete Mauser und perfekte Gefiederqualität.',
        'Diese erneuerte Zusammensetzung ist noch weniger belastend für die Taube. Sie sorgt dadurch für eine konstant optimale Kondition und garantiert eine makellose Mauser.'
      ],
      use: [],
      ing: 'Bordeauxmais, Cribbsmais, Weizen, Gerste, roter Milo, weiße Dari, geschälter Hafer, Paddy, Cardy, Sonnenblumenkerne, geschälte Sonnenblumenkerne, Leinsamen, Raps, Rübsen, Hanfsamen, Millet, Kanariensaat, Wicken, Katjang Idjoe, getoastete Soja, Erbsen.'
    },
    'aidi-winter-rust': {
      name: 'AIDI Winter / Ruhe',
      tag: 'Für die Zeit nach der Mauser, die Wintermonate und Tauben in der Voliere oder eingesperrt.',
      desc: [
        'Viel Rohfaser in Form verschiedener Faserstoffe sorgt dafür, dass Verdauung und Nährstoffaufnahme optimal bleiben, mit reinigender Wirkung.',
        'Die richtigen Verhältnisse und die Art der enthaltenen Fettsäuren, Kohlenhydrate und Proteine machen, dass AIDI Winter/Ruhe problemlos unbegrenzt gefüttert werden kann, ohne dass die Tauben verfetten.'
      ],
      use: [],
      ing: 'Paddyreis, Gerste, gelber Cribbsmais, Spitzhafer, Bordeaux-Cribbsmais, weißer Weizen, gestreifte Sonnenblumenkerne, roter Milo, Cardy, Buchweizen, Leinsamen, Hanfsamen, Katjang Idjoe, getoastete Sojabohnen.'
    },
    'aidi-extra-power-snoepmix': {
      name: 'AIDI Extra Power Leckermischung',
      tag: 'Leckersaat als Konditionierungsmittel, mit Perilla und Mariendistel.',
      desc: [
        'Tauben bekommen nach dem Training oft eine Handvoll Leckersaat. Sie fressen das gern, und das macht es hervorragend geeignet, unsere Tiere zu konditionieren, sofern man daraus eine erlesene und ergänzende Mischung machen kann.',
        'Perilla- und Mariendistelsamen haben wir bewusst nicht in die anderen Mischungen gegeben, umso mehr in diese. Geben Sie jeder Taube nach dem Training eine Prise, dann sind Sie sicher, dass jedes Tier seine Tagesration bekommt. Durch den hohen Fettgehalt auch sehr gut geeignet als letzter Zusatz vor dem Einsetzen.'
      ],
      use: [],
      ing: ''
    },

    'aidi-carbo-boost': {
      name: 'AIDI Carbo Boost',
      tag: 'Energiemischung, die den Organismus schneller Glykogen bilden lässt.',
      desc: [
        'Eine wissenschaftlich ausgewogene, hochwertige Energiemischung, die für eine hervorragende Muskelfunktion sorgt. Die einzigartige Zusammensetzung lässt den Organismus schneller Glykogen bilden, wodurch Tauben länger mit höherer Geschwindigkeit fliegen können.',
        'Die zugesetzten Antioxidantien, Vitamine und Elektrolyte unterstützen jeweils das Immunsystem, eine bessere Stressresistenz und eine bessere Regulierung des Wasserhaushalts während Transport, Training und Wettflug.'
      ],
      use: [
        '1 Messlöffel (10 g) einmal täglich mit 600 g Futter mischen. Befeuchten Sie das Futter zuerst mit AIDI Omega Plus Olie Extra.',
        'Während der Flugsaison: 1 bis 2 Tage vor dem Einsetzen.',
        'Um Tauben besser und intensiver trainieren zu lassen: 3 bis 5 Tage hintereinander, zusammen mit AIDI Condition Booster.'
      ],
      ing: ''
    },
    'aidi-omega-plus-olie-extra': {
      name: 'AIDI Omega Plus Olie Extra',
      tag: 'Omega-3-Öle mit Lecithin, für eine schnellere und effizientere Fettsäureaufnahme.',
      desc: [
        'Die tägliche Anwendung verbessert das Omega-3-6-Verhältnis des Futters erheblich, was für bessere Gesundheit und Kondition sorgt. Das zugesetzte Lecithin sorgt für eine schnellere, höhere und effizientere Aufnahme dieser Fettsäuren im Körper, wodurch Tauben problemlos häufiger und mehr Wettflugkilometer fliegen können.',
        'Lecithin beeinflusst zudem die Gehirnfunktion und den Orientierungssinn positiv. Das Ergebnis ist außerdem ein besonders straffes und glattes Gefieder.'
      ],
      use: [
        'Das ganze Jahr über, während Zucht, Mauser und vor allem der Flugsaison: einmal täglich 5 ml unter 1 kg Futter mischen, vorzugsweise abends.',
        'Ebenso perfekt geeignet, um andere pulverförmige Ergänzungen am Futter haften zu lassen.',
        'Vor Gebrauch kräftig schütteln. Tipp: Mischen Sie das Öl morgens unter das Futter für die Abendmahlzeit, damit es ausreichend einziehen kann.'
      ],
      ing: ''
    },
    'aidi-omega-3-krill-olie': {
      name: 'AIDI Omega 3 Krillöl',
      tag: 'Reiche Quelle für ALA, DHA und EPA, ohne den lästigen Fischgeschmack.',
      desc: [
        'Fettsäuren machen den Hauptteil der Energieversorgung einer Taube aus. Eine effizientere Verbrennung reduziert die Menge an Abfallstoffen spürbar, und genau dort macht Omega-3 den Unterschied.',
        'AIDI Omega 3 Krillöl ist eine reiche Quelle für hochwertiges ALA (Alpha-Linolensäure), DHA (Docosahexaensäure) und EPA (Eicosapentaensäure). Alle Vorteile der perfekten Omega-3-Balance, ohne den lästigen Fischgeschmack.'
      ],
      use: [
        'Eingesperrte Tauben, Tauben ohne Wettflugteilnahme und während des Winters: täglich 5 ml je 600 g Futter.',
        'Wettflugtauben mit 1 bis 3 Flugstunden: 5 ml je 600 g Futter, einen Tag vor und am Tag des Einsetzens.',
        'Sind mehr Flugstunden zu erwarten, bleibt AIDI Omega Plus Olie empfohlen.'
      ],
      ing: ''
    },
    'aidi-condition-booster': {
      name: 'AIDI Condition Booster',
      tag: 'Konditionstonikum aus Vitaminen, Aminosäuren und Mineralien für die Flugsaison.',
      desc: [
        'Aktiviert den Stoffwechsel, sorgt für größere Ausdauer und bessere Sauerstoffaufnahme und unterstützt das Muskelsystem.',
        'Sorgt darüber hinaus für hervorragende Kondition und den Aufbau von mehr Energie und Energiereserven, wodurch sich die Flugleistungen verbessern. Die Wirkung ist bei gleichzeitiger Gabe mit AIDI Carbo Boost verstärkt.'
      ],
      use: [
        '30 ml je kg Alleinfuttermittel oder 10 ml je Liter Trinkwasser.',
        'Flugsaison: am Tag vor dem Einsetzen und bei der Heimkehr zusammen mit AIDI Recup Fast für eine sehr schnelle Erholung.',
        'Bei schlechtem Training durch geringere Kondition: 2 bis 5 Tage zusammen mit AIDI Carbo Boost.',
        'Während der Zuchtsaison: 3 bis 5 Tage beim Übergang von Kropfmilch auf festes Futter.',
        'Während der Mauser: einmal pro Woche; verdunkelte und belichtete Tauben zweimal pro Woche.'
      ],
      ing: ''
    },
    'aidi-health-elixir': {
      name: 'AIDI Health Elixir',
      tag: 'Tinktur aus zwanzig Kräutern, Blättern, Wurzeln und Pflanzen.',
      desc: [
        'Mit unter anderem antioxidativer Wirkung und Unterstützung der Blutzirkulation. Das führt zu einer besseren Daunenmauser und bringt die Tauben in kurzer Zeit in Topform.',
        'Erhöht die Widerstandskraft und verbessert das Immunsystem, unterstützt die Atemwege, sorgt für eine höhere Sauerstoffaufnahme und wirkt appetitanregend. Nach einer mehrtägigen Kur haben Tauben schön rosa Brustmuskeln, kreidweiße Nasen und Augenränder.'
      ],
      use: [
        '20 ml je Liter Wasser oder über 600 g Futter je 20 Tauben.',
        'Zur Vorbereitung auf die Zucht- oder Flugperiode: 8 bis 10 Tage vor dem Paaren oder dem Beginn der Flüge.',
        'Während der Flugsaison: 1 bis 2 Mal pro Woche nach dem Flug. Während der Mauser: 3 bis 4 Mal pro Woche.'
      ],
      ing: ''
    },
    'aidi-chelats': {
      name: 'AIDI Chelats',
      tag: 'Vitamine, Spurenelemente und Mineralien in Chelatform.',
      desc: [
        'Chelate haben den Vorteil, dass sie vom Körper vollständig aufgenommen werden und so Mängel im Futter leicht ausgleichen können.',
        'Zu verwenden bei verminderter Kondition. Der intensive Wettflugrhythmus erhöht den Bedarf an Vitaminen, Mineralien und Spurenelementen; regelmäßige Anwendung ergänzt sie und hält Tauben während der Flugsaison in Topform. Ebenso wesentlich für die Entwicklung der Jungen während der Zucht und des neuen Gefieders während der Mauser.'
      ],
      use: [
        'Schnelligkeit: monatlich 10 ml auf 1 kg Futter, am Tag vor dem Einsetzen.',
        'Mittelstrecke: alle 3 Wochen. Schwere Mittelstrecke: alle 2 Wochen bei wöchentlichem Fliegen.',
        'Langstrecke und Übernachtflug: 10 ml auf 1 kg Futter am Tag vor dem Einsetzen.',
        'Nach Krankheit und Medikation: 2 Tage. Nach Impfung: 1 Tag. Zucht und Mauser: einmal pro Woche.'
      ],
      ing: ''
    },
    'aidi-recup-fast': {
      name: 'AIDI Recup Fast',
      tag: 'Wasserlösliche Erholungsmischung für unmittelbar nach der Heimkehr.',
      desc: [
        'Bei der Heimkehr von einem Wettflug ist es für die Taube besonders wichtig, die verbrauchten Reserven so schnell wie möglich aufzufüllen: einfache und mehrfache Zucker, sofort verfügbare Fettsäuren und Baustoffe für Proteine.',
        'AIDI Recup Fast enthält diese Bestandteile in den richtigen Verhältnissen für eine schnelle Regeneration und eine reibungslose Erholung. Es ist das Produkt schlechthin für die Zeit nach dem Flug.'
      ],
      use: [
        '4 Messlöffel (20 g) je Liter Trinkwasser, unmittelbar nach der Heimkehr zur Verfügung stellen.',
        'Erneuern Sie die Mischung nach einer halben Stunde: Oxidation durch Licht und Luft mindert die Qualität.'
      ],
      ing: ''
    },
    'aidi-proteine-boost': {
      name: 'AIDI Proteine Boost',
      tag: 'Hochwertige Molkenproteine mit besonders hoher biologischer Wertigkeit.',
      desc: [
        'Diese Proteine werden vom Körper äußerst schnell aufgenommen. Das sorgt für eine schnellere Erholung nach dem Flug bei Tauben, die für Muskelüberlastung anfällig sind, für besseres Wachstum und bessere Entwicklung der Jungen während der Zucht und für einen guten Aufbau des Gefieders während der Mauser.',
        'Der Zusatz zusätzlicher Mineralien hilft, die natürliche Widerstandskraft zu stärken, und unterstützt das Immunsystem, sodass Tauben stets bei bester Gesundheit sind und ihre Leistungsfähigkeit steigt.'
      ],
      use: [
        '15 g (3 Messlöffel) je kg Alleinfuttermittel. Befeuchten Sie das Futter zuerst mit AIDI Omega Plus Olie Extra.',
        'Während Mauser und Zuchtperiode: 1 bis 2 Mal pro Woche.',
        'Beim Übergang von Kropfmilch auf festes Futter: 3 bis 5 Tage.',
        'Flugsaison: nach einem schweren Flug 2 bis 3 Mahlzeiten. Nach Krankheit oder Impfung: 2 bis 3 Tage.'
      ],
      ing: ''
    },
    'aidi-pro-bacterial': {
      name: 'AIDI Pro Bacterial',
      tag: 'Ferment aus Rohrzuckermelasse, das die Position der guten Bakterien stärkt.',
      desc: [
        'Gute Gesundheit, Immunität, Widerstandskraft und Vitalität beginnen bei einer guten Darmflora. Unausgewogenes oder verschmutztes Futter in den Reisekörben, verschmutztes Trinkwasser während des Transports, Stress, der Einsatz von Antibiotika und Ermüdung durch zu schwere Flüge stören das Gleichgewicht zwischen guten und schlechten Bakterien.',
        'AIDI Pro Bacterial sorgt für eine bessere Verdauung des Futters und eine höhere Nährstoffaufnahme und hilft so, die natürliche Widerstandskraft zu stärken. Tauben sitzen straffer im Gefieder und zeigen bessere Trainingsarbeit.'
      ],
      use: [
        'Während Zucht, Mauser, Flugsaison und Ruhezeit: 10 ml je Liter Wasser (täglich zu erneuern) oder 10 ml über 600 g Futter.',
        'Lassen Sie Leitungswasser gut ausgasen: es enthält Chlor.',
        'Das Produkt kann mit der Zeit leicht ausflocken. Das ist völlig normal und mindert die Qualität nicht.'
      ],
      ing: ''
    },
    'aidi-probiotica-plus': {
      name: 'AIDI Probiotica Plus',
      tag: 'Hoch konzentrierte Prä- und Probiotikamischung für die natürliche Widerstandskraft.',
      desc: [
        'Fördert und stimuliert eine gute Darmflora, hilft die natürliche Widerstandskraft zu stärken und spielt eine Rolle bei der Krankheitsabwehr.',
        'Die hohe Konzentration an Laktobazillen siedelt sich in den Schleimhäuten des Dünndarms an und vermehrt sich dort, wodurch die Verdauung der Nährstoffe gefördert wird. Das führt zu ausgezeichneter Vitalität, Gesundheit und einem seidenweichen Gefieder.'
      ],
      use: [
        '3 Messlöffel (15 g) mit 1 kg Futter mischen. Befeuchten Sie das Futter zuerst mit AIDI Omega Plus Olie Extra.',
        'Während der Flugsaison: 1 Tag vor dem Einsetzen, zur Förderung der Kondition.',
        'Während Mauser und Zuchtperiode: zweimal pro Woche.',
        'Nach einer Antibiotikakur oder Impfung: 3 Tage, einmal täglich.'
      ],
      ing: ''
    },
    'aidi-calcium-forte': {
      name: 'AIDI Calcium Forte',
      tag: 'Mineralmischung mit wenig Phosphor und hohem Calciumgehalt.',
      desc: [
        'Enthält alle Mineralien, Spurenelemente und Aminosäuren, um Mängel im Futter während Flugsaison, Zucht und Mauser auszugleichen. Der niedrige Phosphor- und der hohe Calciumgehalt sorgen für hohe Verwertbarkeit.',
        'Sorgt für ein besseres Funktionieren des Stoffwechsels bei schweren Anstrengungen wie Wettflügen, der Aufzucht von Jungen und dem Wechsel des Gefieders und verbessert die Zucht- und Flugleistungen erheblich. Durch die geeignete Struktur wird es gern aufgenommen.'
      ],
      use: [
        '1,5 g je Taube und Tag, in kleinen Töpfen im Schlag zur Verfügung stellen.',
        'Vom Paaren bis zum Legen der Eier: täglich.',
        'Während der Aufzucht der Jungen: 3 Mal pro Woche.',
        'Während der Flugsaison: einmal pro Woche, 3 Tage vor dem Einsetzen. In der Mauser: 3 Mal pro Woche.'
      ],
      ing: ''
    },
    'aidi-condition-plus-minerals': {
      name: 'AIDI Condition Plus Minerals',
      tag: 'Mineralien, Vitamine und Grit für Flug-, Zucht- und Mauserperiode.',
      desc: [
        'Entwickelt auf Grundlage der neuesten wissenschaftlichen Erkenntnisse zur Taubenfütterung: eine Mischung verschiedener Mineralien und Vitamine, die Tauben gern fressen. Sie enthält alles, was unsere Athleten für die Zucht und für Spitzenleistungen im Wettflug brauchen.',
        'Der hohe Calciumgehalt im Verhältnis zu Phosphor und der enthaltene Grit sorgen für eine sehr gute Verdauung des Futters. So werden die Mängel in der Ernährung auf die richtige Weise ausgeglichen.'
      ],
      use: [
        '2,5 g je Taube und Tag, in kleinen Töpfen im Schlag zur Verfügung stellen. Das ganze Jahr über 2 bis 3 Mal pro Woche.',
        'Mischen Sie etwas Leckersaat darunter, bevor Sie es den Tauben geben.',
        'Flugsaison: 2 Tage vor dem Einsetzen und bei der Rückkehr vom Flug.',
        'Zuchtperiode: während des Brütens zweimal pro Woche; sind die Jungen 4-5 Tage alt, täglich. Mauser: zweimal pro Woche.'
      ],
      ing: ''
    },
    'aidi-grit-met-anijs': {
      name: 'AIDI Grit mit Anis',
      tag: 'Grit mit Kiesel und Austernschalen, bewusst ohne Rotstein.',
      desc: [
        'Grit sind die Zähne unserer Tauben: je besser das Futter zermahlen wird, desto mehr Nährstoffe können die Tauben daraus ziehen. Kiesel und Austernschalen bleiben längere Zeit im Magen und helfen dort, das Futter zu zermahlen, was die Nährstoffaufnahme erhöht. In den meisten Gritsorten am Markt stecken davon kaum welche, weil sie verhältnismäßig teuer sind.',
        'Rotstein hingegen wird mit dem Futter zermahlen und bringt nichts. Tauben fressen weiter davon, um Calcium aufzunehmen, doch durch das falsche Calcium-Phosphor-Verhältnis nimmt der Taubenkörper dieses Calcium nicht auf. Von unserem Grit mit Anis brauchen Tauben nur sehr wenig. Das ist völlig normal.'
      ],
      use: ['Täglich eine ganz kleine Menge frisch in einem Töpfchen zur Verfügung stellen.'],
      ing: ''
    },
    'aidi-eye-drops': {
      name: 'AIDI Eye Drops',
      tag: 'Pflegt und reinigt Augen, Nase und Tränenkanal.',
      desc: [
        'Für eine perfekt pflegende und reinigende Wirkung auf Augen, Nase und Tränenkanal. AIDI Eye Drops beugen zudem Reizungen der Bindehaut vor, lindern sie und haben eine regenerierende Wirkung.'
      ],
      use: [
        '1 Tropfen in jedes Auge vor dem Einsetzen und nach dem Wettflug.',
        'Bei Reizung oder Entzündung der Bindehaut: 3 bis 5 Mal täglich 1 Tropfen in jedes Auge.'
      ],
      ing: ''
    },

    'aidi-automatische-voederbakken': {
      name: 'AIDI Automatische Futterautomaten',
      tag: 'Vollautomatisch füttern, bis zu acht Gaben pro Tag, in vier Größen.',
      desc: [
        'Arbeit, Urlaub oder schlicht die Unmöglichkeit, sich so pünktlich um die Tauben zu kümmern, wie Sie es gern täten? Der hochwertige vollautomatische Futterautomat löst das. Zusätzlicher Vorteil: Die Fütterungen erfolgen mit strenger Regelmäßigkeit.',
        'Sekundengenau einstellbar, sodass Sie die gewünschte Futtermenge exakt erreichen. Läuft über Netzstrom und einen aufladbaren 12-VDC-Akku; bei zwei Gaben pro Tag hält ein voller Akku etwa einen Monat. Laden Sie ihn alle zwei Wochen für eine längere Lebensdauer.'
      ],
      use: [],
      ing: ''
    },
    'aidi-manden': {
      name: 'AIDI Körbe',
      tag: 'Lernkörbe aus Holz allerbester Qualität.',
      desc: [
        'Unser AIDI Konzept steht für absolute Qualität und Solidität. Das ist bei unserem jüngsten Zuwachs nicht anders: den Lernkörben. Robust, aus Holz allerbester Qualität, sehr fein verarbeitet und durchdacht zusammengestellt: zwei Abteilungen und eine leicht zu befestigende Fress- und Trinkrinne. Jahrelange Taubenfreude ist Ihnen sicher.'
      ],
      use: [],
      ing: ''
    }
  }
};

/* ================================================================ 中文 === */
I18N.zh = {
  ui: {
    skip: '跳至主要内容',
    menu: '菜单',
    close: '关闭',
    language: '语言',
    languageChoose: '选择语言',
    tagline: '赛鸽运动营养',
    details: '详情',
    composition: '配料',
    analytics: '分析成分',
    usage: '使用方法',
    available: '规格',
    new: '新品',
    all: '全部',
    results: '款产品',
    resultsOne: '款产品',
    dealers: '个销售点',
    dealersOne: '个销售点',
    noResults: '未找到结果',
    noResultsBody: '请调整搜索或筛选条件以查看更多结果。',
    reset: '清除筛选',
    clear: '清除',
    searchDealers: '按店名、城市或邮编搜索',
    download: '下载 PDF',
    phone: '致电',
    email: '发邮件',
    website: '网站',
    orderOnly: '仅接受预订',
    byAppointment: '预约开放',
    distributor: '进口商',
    findDealer: '查找销售点',
    exploreRange: '浏览产品线',
    back: '返回',
    home: '首页',
    sortBy: '排序方式'
  },

  nav: {
    concept: '理念', voeders: '饲料', supplementen: '补充剂',
    equipment: '器材', systeem: '系统', team: '团队',
    verkooppunten: '销售点', contact: '联系'
  },

  spec: {
    fat: '粗脂肪', protein: '粗蛋白',
    absorbable: '可吸收蛋白', carbs: '碳水化合物',
    kcal: '代谢能', fibre: '粗纤维',
    omega: 'Omega 比例', kcalUnit: '千卡/公斤', energy: '能量'
  },

  phase: { winter: '冬季与休整', kweek: '育雏', vlucht: '比赛', rui: '换羽', algemeen: '通用' },
  band: { sprint: '短距离', midfond: '中距离', dagfond: '长中距离', fond: '长距离与过夜赛' },
  group: {
    energie: '能量', conditie: '状态', herstel: '恢复',
    darmflora: '肠道菌群', mineralen: '矿物质', verzorging: '护理'
  },
  country: {
    be: '比利时', nl: '荷兰', de: '德国', fr: '法国',
    gb: '英国', it: '意大利', hu: '匈牙利', hr: '克罗地亚',
    us: '美国与北美', cz: '捷克与斯洛伐克', pl: '波兰'
  },

  home: {
    heroFinal: "请按此喂养。",
    heroPunctuation: "。",
    featuredLabel: "图中：",
    seasonWinterWhen: "11月–12月",
    seasonKweekWhen: "1月–3月",
    seasonVluchtWhen: "4月–8月",
    seasonRuiWhen: "8月–10月",
    title: 'AIDI: 赛鸽运动营养 | Team Noël-Willockx',
    meta: '十款饲料与十四款补充剂，每一款都附有实测分析数值。由 Team Noël-Willockx 研制，四十五年营养专业经验。',
    h1a: '您的鸽子是',
    h1b: '运动员',
    h1c: '。请按此喂养。',
    lede: 'AIDI 是 Team Noël-Willockx 的营养理念。十款饲料、十四款补充剂，每一款都附上实测数值。不谈承诺，只讲数字。',
    fact1: '年营养专业经验',
    fact2: '款产品',
    fact3: '个国家设有销售点',
    fact4: '羽鸽中夺得全国 Argenton 冠军',
    analyserTitle: '分析数值',
    analyserLive: '来自产品线',
    analyserHint: '显示',

    seasonTitle: '鸽子全年所需并不相同',
    seasonLede: '产品线随赛季而变。每个阶段对燃料、构建物质与恢复的要求都不同，因此需要不同的配方。',
    seasonWinterD: '粗纤维高、脂肪低。可以不限量投喂而不会让鸽子发胖。',
    seasonKweekD: '为幼鸽提供高含量、多来源的可吸收蛋白，同时不消耗种鸽。',
    seasonVluchtD: '六款比赛配方，从短距离到过夜长距离。各有独立的营养结构。',
    seasonRuiD: '提高氨基酸比例并保持良好的 Omega 比例，换出完美羽质。',
    seasonCta: '查看配方',

    conceptTitle: '我们为什么公布数值',
    conceptP1: '碳水化合物与脂肪提供燃料，蛋白质负责构建，维生素与矿物质提供保护。这些成分之间的最佳平衡正是成绩的关键：针对这个距离、这样的天气、那场比赛之后。',
    conceptP2: '因此我们为每一款配方公布粗脂肪、粗蛋白、可吸收蛋白、碳水化合物、代谢能、粗纤维与 Omega 比例。不是为了好看，而是为了让您据此作出选择。',
    conceptP3: '关键在可吸收蛋白，而不是粗蛋白。这个差别决定了一羽鸽子能连续完成多场比赛，还是在赛季中途就掉状态。',
    conceptCompare: "十款配方对比",
    conceptCompareNote: '脂肪 / 蛋白 / 碳水化合物的比例。完整数值列于每款产品之下。',
    conceptCta: '阅读 AIDI 理念',

    rangeTitle: '产品线',
    rangeLede: "三条产品线，共二十六款产品。全部在比利时生产。",
    rangeVoedersD: '十款配方，涵盖比赛、育雏、换羽与休整，每款均附完整分析。',
    rangeSupplementenD: '十四款补充剂，涵盖能量、状态、恢复、肠道菌群与矿物质。',
    rangeEquipmentD: "自动喂食器与训练笼。",
    itemsN: '款产品',

    proofTitle: '成绩',
    proofLede: '在自家鸽舍，也在其他鸽友处。近年来的 KBDB 全国名次鸽，每一项均有 Team Noël-Willockx 的参与。',
    proofCta: '全部成绩',
    proofHighlights: '2022 年亮点',
    proofAces: 'KBDB 全国名次鸽',
    proofBirds: '羽',

    teamTitle: '两位专家，四十五年',
    teamP1: 'Eddy Noël 在赛鸽运动中拥有四十余年经验。其中很长一段时间他从事专业营养工作，研制出多款高品质、配比精准的饲料与副产品。他是营养领域的权威，经常就遮黑与补光、育种与竞翔成绩、鸽舍环境等主题举办讲座，并指导过多个顶尖鸽舍。',
    teamP2: 'Ivan Willockx 作为前职业足球运动员，深谙顶级竞技之道。如今他是鸽业经纪人，因此走访大量鸽友，比谁都清楚顶尖鸽友每天面对的实际问题。',
    teamCta: '了解团队',
    teamCaption: 'Eddy Noël 与 Ivan Willockx',

    plansTitle: '把系统写清楚',
    plansLede: '十四份竞翔、育雏与换羽计划。逐周安排，在正确的时间给出正确的配方与补充剂。免费下载。',
    plansCta: '全部计划',

    ctaTitle: '在哪里购买 AIDI？',
    ctaBody: 'AIDI 在十一个国家的六十多个销售点与进口商处有售。也可以直接致电 Eddy 或 Ivan。咨询免费。'
  },

  concept: {
    title: 'AIDI 理念: 专业的做法，细节决定成败',
    meta: 'AIDI 理念：四十五年专业经验、大量测试与最新科学认知，落实为公布分析数值的配方。',
    h1: '专业的做法，细节决定成败',
    lede: '正确的饲喂方式能显著提升我们这些运动员的表现与恢复能力。这不是口号。这正是 AIDI 理念存在的理由。',
    s1t: '全年如此，不只是周日',
    s1p1: '健康均衡的日粮至关重要。全年正确的饲喂会影响整体健康状况、状态水平、状态的保持、运动的强度与时长以及恢复能力。这些是让我们的运动员发挥顶尖水平不可或缺的支柱，也需要非常具体的指导。',
    s1p2: '赛季前，我们通过针对性方案让赛鸽为比赛做好准备。赛季中，我们逐周为它们提供充足燃料。比赛之后，我们在恰当的时机选用优质恢复配方，并配合相应副产品。',
    s2t: '最好的才刚刚够好',
    s2p1: '因此我们只使用高品质原料来配制饲料。这一点，加上四十五年的专业经验、大量测试与最新科学认知，构成了 AIDI 理念的基础。',
    s2p2: '碳水化合物与脂肪提供燃料，蛋白质负责构建，维生素、矿物质与微量元素提供保护。针对不同距离与不同条件，在各类碳水化合物、蛋白质与脂肪之间找到最佳平衡，正是成绩的关键。',
    s3t: '配方足够完整，副产品便退居次要',
    s3p1: '在 AIDI 理念中，所有配方都设计得足够完整，使副产品的使用可以降到最低。能量与构建物质的高吸收率带来尽可能彻底的脂肪燃烧，废物极少。这让鸽子能够完成高强度的竞翔安排，而不损失状态与竞技水平。',
    s3p2: '若要在关键时刻发挥顶尖水平，补充剂确实有其价值。原则是：用得越少越好，但要高效、有针对性，并对刚过去和即将到来的条件有所预判。',
    s4t: '鸽子其实需要得不多',
    s4p1: '无论您给什么，都要记住这一切都要由这具小小鸽体的肝脏来处理。关键在于在正确的时间做正确的事，并且清楚自己在什么时候、为什么、以何种方式去做。',
    s4p2: '只使用能弥补饲料不足、且已证明能带来竞技增益的东西。在艰难比赛前或随着赛季推进稍作调整，能让我们的运动员每次都以最佳状态站上起点。',
    numbersT: '我们公布的内容',
    numbersP: '每款配方都附有七项实测数值。它们不是为了让人印象深刻，而是为了让选择成为可能。',
    numbersFat: '决定多少能量转入储备，以及鸽子恢复的快慢。',
    numbersProtein: '粗值说明不了什么；一切取决于真正可被吸收的部分。',
    numbersAbsorbable: '正是这个数字，决定肌肉能否在两场比赛之间恢复。',
    numbersCarbs: '最快可用的燃料。对短距离比赛具有决定意义。',
    numbersKcal: '每公斤饲料的总代谢能。',
    numbersFibre: '具有清理作用，维持肠道菌群状态。',
    numbersOmega: 'Omega 6 与 Omega 3 之比。数值越低，燃烧越高效。'
  },

  voeders: {
    filterHelp: "选择阶段。比赛阶段还可按距离筛选。点击配方查看完整分析。",
    title: '饲料: 十款配方及完整分析 | AIDI',
    meta: '十款 AIDI 配方，覆盖短距离、中距离、长中距离、长距离、育雏、换羽与冬季休整。每款均公布脂肪、蛋白与碳水化合物含量。',
    h1: '十款配方，十种结构',
    lede: '从碳水化合物达 67% 的短距离配方，到脂肪达 14.5% 的长距离配方。可按阶段与距离筛选，也可在一张表中比较全部。',
    filterPhase: '阶段',
    filterBand: '距离',
    compareTitle: '全部比较',
    compareLede: '十款配方的同一组七项数值。点击列标题即可排序。',
    colName: '配方',
    colPhase: '阶段'
  },

  supplementen: {
    title: '补充剂: 十四款用于状态、恢复与肠道菌群的产品 | AIDI',
    meta: '十四款 AIDI 补充剂：能量、状态、恢复、肠道菌群、矿物质与护理。每款均附完整使用方法。',
    h1: '尽量少用，但要用在点上',
    lede: '配比良好的饲料让补充剂在很大程度上变得多余。剩下的就是有针对性的调整：在正确的时间，用正确的量。',
    filterGroup: '用途'
  },

  equipment: {
    title: "器材: 喂食器与训练笼 | AIDI",
    meta: "AIDI 器材：四种规格的全自动喂食器，以及木制训练笼。",
    h1: '器材',
    lede: '与饲料同一标准：品质与结实，做成能用上多年的东西。',
    specSize: '规格', specBirds: '鸽数', specLength: '长度', specFeed: '容量',
    featTimer: '可精确到秒设定，内置定时器',
    featTimes: '每天最多 8 次投喂',
    featPower: '可用市电或 12 VDC 可充电电池',
    featBattery: '充满电可使用长达 30 天'
  },

  systeem: {
    moultT: "换羽",
    title: '系统: 十四份竞翔、育雏与换羽计划 | AIDI',
    meta: '下载 AIDI 计划：短距离、中距离、长中距离、过夜长距离、幼鸽、育雏、换羽与冬季休整。逐周写明。',
    h1: '系统，逐周写明',
    lede: '知道有哪些配方是一回事，知道什么时候给才是系统。十四份计划，免费下载。',
    generalT: '入门',
    flightT: '竞翔计划',
    breedT: "育雏",
    restT: '冬季与休整',
    p: {
      'optimaal-gebruik-aidi-concept': '如何使用 AIDI 饲料？',
      'mis-de-start-van-het-seizoen-niet': '不要错过赛季开局',
      'vliegplan-snelheid-aidi-speedy-sprint': '短距离竞翔计划: AIDI Speedy Sprint',
      'vliegplan-snelheid': '短距离竞翔计划',
      'vliegschema-aidi-halve-fond': '中距离竞翔计划',
      'vliegschema-aidi-dagfond': '长中距离竞翔计划',
      'vliegschema-aidi-girl-power': 'Girl Power 竞翔计划（雌鸽）',
      'overnachtfond': '过夜长距离竞翔计划',
      'vliegschema-aidi-jonge-duiven': '幼鸽竞翔计划',
      'vliegplan-thuisblijvende-doffers-duivinnen': '留舍雄鸽与雌鸽',
      'rui': '换羽计划',
      'kweek': '育雏计划',
      'kweekschema-met-pro-bacterial': '配合 AIDI Pro Bacterial 的育雏计划',
      'winter-rust-schema': '冬季与休整计划'
    }
  },

  team: {
    title: 'Team Noël-Willockx: 四十五年营养专业经验 | AIDI',
    meta: 'Eddy Noël 与 Ivan Willockx：四十五年赛鸽营养专业经验，拥有 KBDB 全国名次鸽与自家鸽舍的顶尖成绩。',
    h1: 'Team Noël-Willockx',
    lede: '两位专家，深知如何把一具身体带入巅峰状态并保持住。成绩就是证明：在自家鸽舍，也在其他鸽友处。',
    eddyT: 'Eddy Noël',
    eddyP1: '在赛鸽运动中拥有四十余年经验。其中很长一段时间他从事专业营养工作，研制出多款高品质、配比精准并适应当代赛鸽运动的饲料与副产品。',
    eddyP2: 'Eddy 是赛鸽营养与副产品领域的权威，并乐于在众多讲座中分享这些知识：关于饲喂，关于遮黑与补光，关于提升育种与竞翔成绩，关于幼鸽的赛制，关于健康的鸽舍环境。他撰写过大量文章，并指导过多个成功的顶尖鸽舍。',
    ivanT: 'Ivan Willockx',
    ivanP1: 'Ivan 作为前职业足球运动员，深谙顶级竞技之道。如今他从事鸽业经纪工作，并因此走访大量鸽友。',
    ivanP2: '正因如此，他比谁都清楚顶尖鸽友每天面对的需求：鸽舍里会出现哪些问题，以及实践中问题究竟出在哪里。',
    resultsT: '2022 年亮点',
    resultsLede: '全国前 100 名 15 次、全国分区前 100 名 63 次、省级前 100 名 56 次。',
    acesT: 'KBDB 全国名次鸽',
    acesLede: '近年来的成绩，每项均注明 Team Noël-Willockx 的参与程度。',
    share: '参与',
    birds: '羽'
  },

  verkooppunten: {
    nearbyTitle: "查找附近销售点",
    nearbyHelp: "使用您的位置查找最近的销售点，或在下方按城市或邮编搜索。",
    locate: "使用我的位置",
    locating: "正在定位…",
    locationFound: "以下为有已知地址的三个最近销售点。距离为直线距离；请提前致电确认供货情况。",
    locationDenied: "位置访问被拒绝。请在浏览器中允许后重试，或在下方按城市或邮编搜索。",
    locationUnavailable: "无法获取您的位置。请重试或在下方按城市或邮编搜索。",
    nearest: "最近",
    straightLine: "直线距离",
    route: "规划路线",
    searchLooking: "正在查找 {place} 附近的销售点…",
    searchNearest: "{place} 没有销售点。以下是直线距离最近的三个：",
    title: '销售点: 在哪里购买 AIDI？| AIDI',
    meta: '比利时与荷兰共有六十多个 AIDI 销售点，另在德国、法国、英国、意大利、匈牙利、克罗地亚、美国、捷克与波兰设有进口商。',
    h1: '在哪里购买 AIDI？',
    lede: '十一个国家的六十多家门店与进口商。可按名称、城市或邮编搜索。',
    ctaTitle: '没有找到您的门店？',
    ctaBody: '您是经销商，希望把 AIDI 纳入产品线吗？请联系 Eddy 或 Ivan。'
  },

  contact: {
    title: '联系: Team Noël-Willockx | AIDI',
    meta: '直接联系 Team Noël-Willockx：Eddy Noël、Ivan Willockx 以及 AIDI 各国进口商。',
    h1: '联系',
    lede: '对某款配方、某份计划或您自己的情况有疑问？欢迎来电。咨询免费。',
    directT: '直接联系',
    directP: 'Eddy 与 Ivan 亲自接听。可咨询饲喂、计划，或鸽舍里的具体问题。',
    mailT: '电子邮件',
    mailP: '订货、经销咨询，以及所有不急的事宜。',
    intlT: '各国进口商',
    intlP: '比利时与荷兰以外的地区，由我们的进口商负责分销。',
    dealerT: '更想到店购买？',
    dealerP: 'AIDI 在六十多个销售点有售。'
  },

  footer: {
    about: '赛鸽运动营养，由 Team Noël-Willockx 研制。全部在比利时生产。',
    madeIn: '比利时制造',
    range: '产品线',
    company: '关于公司',
    support: '实用信息',
    rights: '版权所有。',
    colophon: '由 AW Webdesign 重新设计'
  },

  p: {
    'aidi-speedy-sprint': {
      name: 'AIDI Speedy Sprint',
      tag: '碳水化合物含量极高，适用于短距离比赛及所有只关一夜笼的赛事。',
      desc: [
        '鸽子依靠碳水化合物飞得最快。AIDI Speedy Sprint 以易于快速消化的糖类把碳水化合物储备完全填满，提供大量即时可用的能量。而且鸽子还能把这个较高的速度维持更久。',
        '适用于只关一夜笼的比赛，无论是 50 公里还是 350 公里。只有平日的饲喂方案会随距离不同而调整；由脂肪构建能量的工作在一周较早时完成。储备满仓入笼的鸽子，每小时飞行可轻松快上二至三分钟。'
      ],
      use: [
        '关一夜笼的比赛：在交鸽当天，直至交鸽为止，任其自由采食。',
        '提示：若想让鸽子好好加练，给它们喂 1 至 2 餐 AIDI Speedy Sprint。'
      ],
      ing: '波尔多玉米、cribbs 玉米、小麦、去壳大麦、红高粱、白达里、去壳燕麦、圆粒米、亚麻籽、火麻仁、小米、加那利籽、绿豆。'
    },
    'aidi-mix-1': {
      name: 'AIDI Mix 1',
      tag: '比赛系列中的清淡基础配方，从最短到最长距离皆可使用。',
      desc: [
        '易于消化，吸收率高，燃烧后残留废物少。鸽子能保持高速更久，恢复也格外迅速，因此您可以更高强度地训练与参赛。',
        '配方中的粗纤维具有清理作用，使肠道菌群保持最佳状态。高含量的可吸收蛋白让肌肉快速恢复，而相对较高的脂肪含量则立即为下一场比赛积累能量。'
      ],
      use: [],
      ing: '波尔多玉米、cribbs 玉米、小麦、大麦、红高粱、白达里、稻谷、红花籽、亚麻籽、火麻仁、小米、加那利籽、荞麦、绿豆、烘烤大豆。'
    },
    'aidi-mix-2': {
      name: 'AIDI Mix 2',
      tag: '小颗粒谷物与豆类，分布与吸收更好。可用至赛前 3 天。',
      desc: [
        '刻意选用的小颗粒谷物与豆类使分布与吸收更好。与其他配方一样，自然干燥的玉米糖分与淀粉比例更高，提升了营养价值。',
        '赛鸽对蛋白需求很大，但真正起作用的是可吸收蛋白含量，而非粗蛋白。在维持代谢运转与供给必需氨基酸之间取得平衡，正是此处成绩的关键。'
      ],
      use: ['可用至赛前 3 天。'],
      ing: '波尔多 cribbs 玉米、小粒黄 cribbs 玉米、小麦、红高粱、白达里、去壳燕麦、圆粒米、红花籽、亚麻籽、油菜籽、火麻仁、加那利籽、绿豆、烘烤大豆、小粒青豌豆。'
    },
    'aidi-mix-3': {
      name: 'AIDI Mix 3',
      tag: '高能量，脂肪酸种类丰富、含量高。',
      desc: [
        '一款能量特别丰富的配方，通过大量且多样的脂肪酸为我们的运动员提供所需燃料。',
        '这些脂肪酸不仅构建比赛所需的脂肪储备，也使该配方特别适合保证归巢后的快速恢复。'
      ],
      use: ['视预计飞行时长而定：在交鸽前 1 至 3 天使用。'],
      ing: '波尔多玉米、爆裂玉米、小粒 cribbs 玉米、小麦、红高粱、白达里、去壳燕麦、稻谷、圆粒米、红花籽、葵花籽、去壳葵花籽、亚麻籽、芜菁籽、火麻仁、小米、加那利籽、绿豆、烘烤大豆。'
    },
    'aidi-girl-power': {
      name: 'AIDI Girl Power',
      tag: '专为每周需完成 300 至 700 公里高强度赛程的雌鸽设计。',
      desc: [
        '经过深思熟虑、有科学依据的碳水化合物、脂肪与蛋白来源组合。它们造就一款极易消化的饲料，吸收率特别高，燃烧废物更少。雌鸽能更省力、更经济地消化大量飞行里程。',
        '配方中的粗纤维使肠道功能始终保持良好。雌鸽因此能轻松在整个赛季保持最佳状态，即使在最艰难的比赛之后也恢复得很快。'
      ],
      use: [],
      ing: '小粒 cribbs 玉米、波尔多玉米、爆裂玉米、小麦、大麦、去壳大麦、红高粱、白达里、去壳燕麦、稻谷、圆粒米、红花籽、去壳葵花籽、褐亚麻籽、油菜籽、火麻仁、小米、加那利籽、野豌豆、绿豆、烘烤大豆。'
    },
    'aidi-long-distance-mix': {
      name: 'AIDI Long Distance Mix',
      tag: '专为最远距离与过夜赛研制。',
      desc: [
        '在日益专业化的赛鸽运动中，每个项目都需要非常具体的准备。飞最远距离的鸽子常常要吃不少苦头，因此更需要充分准备。',
        'AIDI Long Distance Mix 保证各类碳水化合物、脂肪与蛋白之间的良好平衡。在这里，这一点比任何时候都更关键，才能发挥鸽子的全部潜力与效益。'
      ],
      use: [],
      ing: '黄 cribbs 玉米、小麦、红高粱、白达里、去壳燕麦、稻谷、圆粒米、红花籽、去壳葵花籽、亚麻籽、芜菁籽、油菜籽、火麻仁、小米、加那利籽、野豌豆、绿豆、烘烤大豆、枫豌豆、青豌豆。'
    },
    'aidi-super-kweek': {
      name: 'AIDI Super Kweek',
      tag: '既把幼鸽带大，也让种鸽保持极佳状态。',
      desc: [
        '高含量、多来源的可吸收蛋白提供全部所需构建物质，让幼鸽顺利成长，并拥有成为强壮运动员的一切条件。',
        '精心挑选的高脂谷物与种子让饲料易于消化。配合充足的粗纤维，即使连续几轮育雏，幼鸽与种鸽都能保持良好状态。该配方与育雏鸽的需求高度契合，种鸽采食不浪费，也乐于哺喂幼鸽。'
      ],
      use: [],
      ing: '波尔多玉米、cribbs 玉米、小麦、红高粱、白达里、去壳燕麦、稻谷、圆粒米、红花籽、条纹葵花籽、去壳葵花籽、亚麻籽、芜菁籽、大麻籽、小米、加那利籽、野豌豆、绿豆、烘烤大豆、枫豌豆、青豌豆、黄豌豆。'
    },
    'aidi-super-rui': {
      name: 'AIDI Super Rui',
      tag: '针对换羽期升高的蛋白需求而调配。',
      desc: [
        '高吸收率、可利用蛋白来源多样、良好的 Omega 3-6 比例，以及专为换羽提高的氨基酸比例，共同带来出色的换羽与完美的羽质。',
        '这一改进配方对鸽体的负担更小，因此能维持始终最佳的状态，并保证换羽顺利无瑕。'
      ],
      use: [],
      ing: '波尔多玉米、cribbs 玉米、小麦、大麦、红高粱、白达里、去壳燕麦、稻谷、红花籽、葵花籽、去壳葵花籽、亚麻籽、油菜籽、芜菁籽、火麻仁、小米、加那利籽、野豌豆、绿豆、烘烤大豆、豌豆。'
    },
    'aidi-winter-rust': {
      name: 'AIDI Winter / 休整',
      tag: '适用于换羽之后、冬季月份，以及散养或关棚的鸽子。',
      desc: [
        '以多种粗纤维形式提供的大量粗纤维，使消化与营养吸收保持最佳，并具清理作用。',
        '所含脂肪酸、碳水化合物与蛋白的比例与性质，使 AIDI Winter/休整可以毫无问题地不限量投喂，而鸽子不会发胖。'
      ],
      use: [],
      ing: '稻谷、大麦、黄 cribbs 玉米、尖燕麦、波尔多 cribbs 玉米、白小麦、条纹葵花籽、红高粱、红花籽、荞麦、亚麻籽、火麻仁、绿豆、烘烤大豆。'
    },
    'aidi-extra-power-snoepmix': {
      name: 'AIDI Extra Power 零食配方',
      tag: '作为调理手段的零食籽，含紫苏与水飞蓟。',
      desc: [
        '训练之后，鸽子常会得到一把零食籽。它们爱吃，这也让零食籽非常适合用来调理鸽子，前提是能把它做成一款精选的补充性配方。',
        '紫苏籽与水飞蓟籽被刻意排除在其他配方之外，而在这一款中含量更高。训练后给每羽鸽子一小撮，您就能确定每只都吃到了当天的份量。由于脂肪含量高，也非常适合作为交鸽前的最后一道加餐。'
      ],
      use: [],
      ing: ''
    },

    'aidi-carbo-boost': {
      name: 'AIDI Carbo Boost',
      tag: '让机体更快合成糖原的能量配方。',
      desc: [
        '一款经科学配比的高品质能量配方，保障肌肉良好运作。其独特组成让机体更快合成糖原，使鸽子能以更高速度飞行更久。',
        '所添加的抗氧化物、维生素与电解质，分别用于支持免疫系统、提高抗应激能力，以及在运输、训练与比赛期间更好地调节水分平衡。'
      ],
      use: [
        '每日一次，1 小勺（10 克）拌入 600 克饲料。请先用 AIDI Omega Plus Olie Extra 湿润饲料。',
        '赛季期间：交鸽前 1 至 2 天。',
        '为让鸽子训练得更好更投入：连续 3 至 5 天，配合 AIDI Condition Booster 使用。'
      ],
      ing: ''
    },
    'aidi-omega-plus-olie-extra': {
      name: 'AIDI Omega Plus Olie Extra',
      tag: '添加卵磷脂的 Omega-3 油，脂肪酸吸收更快更高效。',
      desc: [
        '每日使用可显著改善饲料的 Omega 3-6 比例，从而带来更好的健康与状态。所添加的卵磷脂使这些脂肪酸在体内吸收更快、更多、更高效，让鸽子能够毫无问题地更频繁地飞行、完成更多比赛里程。',
        '卵磷脂还对大脑功能与定向能力有正面影响。此外，羽毛也会变得格外紧致光滑。'
      ],
      use: [
        '全年适用，育雏、换羽尤其是比赛期间：每日一次，5 毫升拌入 1 公斤饲料，建议在傍晚使用。',
        '也非常适合用来让其他粉状补充剂附着在饲料上。',
        '使用前充分摇匀。提示：早晨就把油拌入晚餐的饲料，让其充分渗入。'
      ],
      ing: ''
    },
    'aidi-omega-3-krill-olie': {
      name: 'AIDI Omega 3 磷虾油',
      tag: 'ALA、DHA 与 EPA 的丰富来源，且没有恼人的鱼腥味。',
      desc: [
        '脂肪酸构成鸽子能量供应的主体。更高效的燃烧能明显减少废物的产生，而这正是 Omega-3 发挥作用之处。',
        'AIDI Omega 3 磷虾油富含优质 ALA（α-亚麻酸）、DHA（二十二碳六烯酸）与 EPA（二十碳五烯酸）。既有完美 Omega-3 平衡的全部益处，又没有恼人的鱼腥味。'
      ],
      use: [
        '关棚鸽、不参赛鸽以及冬季期间：每日 5 毫升配 600 克饲料。',
        '飞行 1 至 3 小时的赛鸽：交鸽前一天与交鸽当天，5 毫升配 600 克饲料。',
        '若需飞行更长时间，仍推荐使用 AIDI Omega Plus Olie。'
      ],
      ing: ''
    },
    'aidi-condition-booster': {
      name: 'AIDI Condition Booster',
      tag: '由维生素、氨基酸与矿物质组成的赛季状态补剂。',
      desc: [
        '激活代谢，提升耐力与摄氧能力，并支持肌肉系统。',
        '同时带来良好状态，积累更多能量与能量储备，从而改善比赛表现。与 AIDI Carbo Boost 同时使用时效果更强。'
      ],
      use: [
        '每公斤全价饲料 30 毫升，或每升饮水 10 毫升。',
        '赛季：交鸽前一天，以及归巢时配合 AIDI Recup Fast 使用，实现极快恢复。',
        '状态欠佳导致训练不佳时：连续 2 至 5 天，配合 AIDI Carbo Boost。',
        '育雏季：由鸽乳转为固体饲料期间连用 3 至 5 天。',
        '换羽期：每周一次；遮黑与补光的鸽子每周两次。'
      ],
      ing: ''
    },
    'aidi-health-elixir': {
      name: 'AIDI Health Elixir',
      tag: '由二十种草药、叶、根与植物制成的酊剂。',
      desc: [
        '具备抗氧化作用并支持血液循环等特性。这带来更好的绒羽更换，并让鸽子在短时间内进入巅峰状态。',
        '提高抵抗力、改善免疫系统、支持呼吸道、提升摄氧量并促进食欲。连续数日使用后，鸽子胸肌呈漂亮的粉红色，鼻瘤与眼圈洁白如粉。'
      ],
      use: [
        '每升水 20 毫升，或每 20 羽鸽子拌 600 克饲料。',
        '育雏期或比赛期前准备：配对或开赛前 8 至 10 天。',
        '赛季期间：赛后每周 1 至 2 次。换羽期：每周 3 至 4 次。'
      ],
      ing: ''
    },
    'aidi-chelats': {
      name: 'AIDI Chelats',
      tag: '螯合形式的维生素、微量元素与矿物质。',
      desc: [
        '螯合物的优点在于能被机体完全吸收，因此可以轻松弥补饲料中的不足。',
        '适用于状态下降时。高强度的比赛节奏提高了对维生素、矿物质与微量元素的需求；规律使用可加以补充，使鸽子在整个赛季保持巅峰状态。对育雏期幼鸽的发育与换羽期新羽的生成同样必不可少。'
      ],
      use: [
        '短距离：每月一次，交鸽前一天每公斤饲料 10 毫升。',
        '中距离：每 3 周一次。重中距离：每周参赛时每 2 周一次。',
        '长距离与过夜赛：交鸽前一天每公斤饲料 10 毫升。',
        '病后与用药后：连用 2 天。免疫接种后：1 天。育雏与换羽期：每周一次。'
      ],
      ing: ''
    },
    'aidi-recup-fast': {
      name: 'AIDI Recup Fast',
      tag: '归巢后立即使用的水溶性恢复配方。',
      desc: [
        '比赛归巢时，鸽子能否尽快补回消耗掉的储备至关重要：单糖与多糖、即时可用的脂肪酸，以及蛋白质的构建物质。',
        'AIDI Recup Fast 以正确比例含有这些成分，用于快速恢复与顺利复原，是赛后首选的产品。'
      ],
      use: [
        '每升饮水 4 小勺（20 克），归巢后立即提供。',
        '半小时后请更换：光照与空气引起的氧化会降低品质。'
      ],
      ing: ''
    },
    'aidi-proteine-boost': {
      name: 'AIDI Proteine Boost',
      tag: '生物价特别高的优质乳清蛋白。',
      desc: [
        '这些蛋白被机体吸收得极快。这让易出现肌肉负荷过度的鸽子在赛后恢复更快，让育雏期幼鸽生长发育更好，也让换羽期羽毛生成更佳。',
        '额外添加的矿物质有助于增强自然抵抗力并支持免疫系统，使鸽子始终保持良好健康，运动能力得到提升。'
      ],
      use: [
        '每公斤全价饲料 15 克（3 小勺）。请先用 AIDI Omega Plus Olie Extra 湿润饲料。',
        '换羽期与育雏期：每周 1 至 2 次。',
        '由鸽乳转为固体饲料期间：连用 3 至 5 天。',
        '赛季：艰难比赛后连喂 2 至 3 餐。病后或免疫接种后：连用 2 至 3 天。'
      ],
      ing: ''
    },
    'aidi-pro-bacterial': {
      name: 'AIDI Pro Bacterial',
      tag: '甘蔗糖蜜发酵物，巩固有益菌的地位。',
      desc: [
        '良好的健康、免疫、抵抗力与活力，都始于良好的肠道菌群。运输笼中不均衡或受污染的饲料、运输途中不洁的饮水、应激、抗生素的使用，以及比赛过重造成的疲劳，都会破坏有益菌与有害菌之间的平衡。',
        'AIDI Pro Bacterial 让饲料消化更好、营养吸收更高，从而有助于增强自然抵抗力。鸽子羽毛更为紧致，训练表现也更好。'
      ],
      use: [
        '育雏、换羽、赛季与休整期：每升水 10 毫升（每日更换），或 10 毫升拌 600 克饲料。',
        '自来水请充分静置排气：其中含有氯。',
        '产品放置一段时间后可能出现轻微絮状物。这完全正常，不影响品质。'
      ],
      ing: ''
    },
    'aidi-probiotica-plus': {
      name: 'AIDI Probiotica Plus',
      tag: '高浓度益生元与益生菌组合，增强自然抵抗力。',
      desc: [
        '促进并激发良好的肠道菌群，有助于增强自然抵抗力，并在抵御疾病方面发挥作用。',
        '其中的高浓度乳酸菌在小肠黏膜中定植繁殖，从而促进营养物质的消化。结果是极佳的活力、健康状态与丝般柔滑的羽衣。'
      ],
      use: [
        '3 小勺（15 克）拌入 1 公斤饲料。请先用 AIDI Omega Plus Olie Extra 湿润饲料。',
        '赛季期间：交鸽前一天使用，以提升状态。',
        '换羽期与育雏期：每周两次。',
        '抗生素疗程或免疫接种之后：连用 3 天，每日一次。'
      ],
      ing: ''
    },
    'aidi-calcium-forte': {
      name: 'AIDI Calcium Forte',
      tag: '低磷高钙的矿物质配方。',
      desc: [
        '含有全部矿物质、微量元素与氨基酸，用于弥补赛季、育雏与换羽期饲料中的不足。低磷高钙带来很高的吸收率。',
        '在比赛、育雏与换羽等高强度消耗期间改善代谢运作，并显著提升育种与竞翔表现。由于结构合适，鸽子乐于采食。'
      ],
      use: [
        '每羽每天 1.5 克，放在鸽舍的小盆中供其取食。',
        '从配对到产蛋：每日提供。',
        '幼鸽生长期：每周 3 次。',
        '赛季：每周一次，交鸽前 3 天。换羽期：每周 3 次。'
      ],
      ing: ''
    },
    'aidi-condition-plus-minerals': {
      name: 'AIDI Condition Plus Minerals',
      tag: '供比赛、育雏与换羽期使用的矿物质、维生素与砂砾。',
      desc: [
        '依据鸽子饲喂领域最新的科学认知研制：一款鸽子乐于采食的矿物质与维生素混合物。它含有我们的运动员在育种与比赛中取得顶尖成绩所需的一切。',
        '相对于磷的高钙含量，以及其中所含的砂砾，使饲料消化非常良好。饮食中的不足由此得到正确弥补。'
      ],
      use: [
        '每羽每天 2.5 克，放在鸽舍的小盆中供其取食。全年每周 2 至 3 次。',
        '给鸽子之前，请拌入少量零食籽。',
        '赛季：交鸽前 2 天以及比赛归巢时。',
        '育雏期：孵蛋期间每周两次；幼鸽 4-5 日龄起每日提供。换羽期：每周两次。'
      ],
      ing: ''
    },
    'aidi-grit-met-anijs': {
      name: 'AIDI 茴香砂砾',
      tag: '含石砾与牡蛎壳的砂砾，刻意不含红石。',
      desc: [
        '砂砾就是鸽子的牙齿：饲料研磨得越细，鸽子能从中获取的营养就越多。石砾与牡蛎壳会在胃中停留较长时间，在那里帮助研磨饲料，从而提高营养吸收。市面上多数砂砾几乎不含这两样，因为它们相对昂贵。',
        '而红石会随饲料一起被磨碎，毫无益处。鸽子会不断采食红石以摄取钙，但由于钙磷比例不当，鸽体并不能吸收这些钙。我们这款茴香砂砾，鸽子只需很少的量，这完全正常。'
      ],
      use: ['每天在小盆中新鲜提供极少量即可。'],
      ing: ''
    },
    'aidi-eye-drops': {
      name: 'AIDI Eye Drops',
      tag: '护理并清洁眼部、鼻部与泪管。',
      desc: [
        '对眼睛、鼻子与泪管具有完善的护理与清洁作用。AIDI Eye Drops 还能预防并缓解结膜刺激，具有修复作用。'
      ],
      use: [
        '交鸽前与比赛后，每只眼各滴 1 滴。',
        '结膜受刺激或发炎时：每天 3 至 5 次，每只眼各滴 1 滴。'
      ],
      ing: ''
    },

    'aidi-automatische-voederbakken': {
      name: 'AIDI 自动喂食器',
      tag: '全自动投喂，每天最多八次，共四种规格。',
      desc: [
        '要上班、要休假，或者就是没法像自己希望的那样准时照料鸽子？这款高品质全自动喂食器正好解决问题。额外的好处是：每次投喂都非常准时规律。',
        '可精确到秒设定，让您准确达到想要的投喂量。可用市电与 12 VDC 可充电电池；按每天两次投喂计算，充满电约可维持一个月。建议每两周充电一次以延长电池寿命。'
      ],
      use: [],
      ing: ''
    },
    'aidi-manden': {
      name: 'AIDI 训练笼',
      tag: '采用最优质木材制作的训练笼。',
      desc: [
        '我们的 AIDI 理念代表绝对的品质与结实。最新的产品训练笼同样如此。结实耐用，采用最优质木材，做工非常精细，结构经过周密考量：两个隔间，食槽与水槽易于固定。保您多年使用无忧。'
      ],
      use: [],
      ing: ''
    }
  }
};

/* ======================================================= SIGNATURE HOME === */
/* Strings for the signature homepage (grain sorter, season dial, race map).
   Kept in one block per language so the redesign stays easy to diff. */
I18N.nl.sig = {
  heroA: 'Uw duiven',
  heroB: 'zijn atleten.',
  heroC: 'Voeder ze ernaar.',
  heroLede: 'Tien mengelingen en veertien supplementen van Team Noël-Willockx. Bij elk product staan de gemeten waarden, zodat u kiest op cijfers in plaats van op beloftes.',
  heroTray: '1 kg AIDI Mix 3 · 1.000 korrels',
  heroCue: 'Scroll, en de korrels sorteren zich',
  sortTitle: 'Eén kilo, uitgesorteerd.',
  sortLede: 'Elke korrel staat voor één gram. Zo ziet u wat op geen enkele zak staat: hoeveel brandstof, hoeveel bouwstof, en hoeveel eiwit uw duif echt opneemt.',
  sortPick: 'Kies een mengeling',
  legFat: 'Ruw vet',
  legAbs: 'Opneembaar eiwit',
  legPro: 'Overig ruw eiwit',
  legCarb: 'Koolhydraten',
  legRest: 'Celstof, vocht en as',
  perKg: 'gram per kilo',
  sortNote: 'Kijk naar de lichtgroene korrels. Alleen het opneembare eiwit benut het lichaam echt; het verschil met het ruwe eiwit staat op geen enkele andere zak.',
  sortCta: 'Volledige analyse van deze mengeling',
  seasonTitle: 'Wat geeft u deze week?',
  seasonLede: 'Een duif heeft niet het hele jaar hetzelfde nodig. De wijzer staat op vandaag. Kies een andere fase om vooruit te kijken.',
  today: 'Vandaag',
  phaseFeeds: 'Mengelingen voor deze fase',
  phasePlans: 'Schema’s, gratis als PDF',
  dial: 'Seizoenswijzer',
  proofKm: '528 kilometer.',
  proofBirds: '5.166 duiven.',
  proofWin: 'Eén eerste plaats.',
  proofLede: 'Nationaal Argenton, 2022. Op de kaart de nationale vluchten van dat seizoen waarin hokken met de betrokkenheid van Team Noël-Willockx top 100 vlogen.',
  proofRelease: 'Lossing',
  proofAces: 'Nationale asduiven KBDB',
  rangeLede: 'Zesentwintig producten in drie lijnen, allemaal gemaakt in België.',
  teamKicker: 'Sinds 45 jaar',
  callEddy: 'Bel Eddy',
  callIvan: 'Bel Ivan',
  advice: 'Ze nemen zelf op. Advies kost niets.',
  dealerTitle: 'AIDI staat dichter bij uw hok dan u denkt.',
  dealerLede: 'Ruim zestig verkooppunten in België en Nederland, en invoerders in nog negen landen.',
  dealerField: 'Gemeente of postcode',
  dealerGo: 'Zoek',
  menuTitle: 'Menu'
};

I18N.fr.sig = {
  heroA: 'Vos pigeons',
  heroB: 'sont des athlètes.',
  heroC: 'Nourrissez-les en conséquence.',
  heroLede: 'Dix mélanges et quatorze compléments de la Team Noël-Willockx. Chaque produit avec ses valeurs mesurées, pour choisir sur des chiffres plutôt que sur des promesses.',
  heroTray: '1 kg d’AIDI Mix 3 · 1 000 grains',
  heroCue: 'Faites défiler, les grains se trient',
  sortTitle: 'Un kilo, trié.',
  sortLede: 'Chaque grain représente un gramme. Vous voyez ce qu’aucun sac n’indique : combien de carburant, combien de matériaux de construction, et combien de protéines votre pigeon assimile vraiment.',
  sortPick: 'Choisissez un mélange',
  legFat: 'Matières grasses brutes',
  legAbs: 'Protéines assimilables',
  legPro: 'Autres protéines brutes',
  legCarb: 'Glucides',
  legRest: 'Cellulose, humidité et cendres',
  perKg: 'grammes par kilo',
  sortNote: 'Regardez les grains vert clair. Seules les protéines assimilables sont réellement utilisées par l’organisme ; aucun autre sac n’affiche la différence avec les protéines brutes.',
  sortCta: 'Analyse complète de ce mélange',
  seasonTitle: 'Que donner cette semaine ?',
  seasonLede: 'Un pigeon n’a pas les mêmes besoins toute l’année. L’aiguille indique aujourd’hui. Choisissez une autre phase pour anticiper.',
  today: 'Aujourd’hui',
  phaseFeeds: 'Mélanges pour cette phase',
  phasePlans: 'Schémas, gratuits en PDF',
  dial: 'Cadran des saisons',
  proofKm: '528 kilomètres.',
  proofBirds: '5 166 pigeons.',
  proofWin: 'Une première place.',
  proofLede: 'National Argenton, 2022. Sur la carte, les concours nationaux de cette saison où des colombiers accompagnés par la Team Noël-Willockx ont classé dans le top 100.',
  proofRelease: 'Lâcher',
  proofAces: 'As-pigeons nationaux RFCB',
  rangeLede: 'Vingt-six produits en trois lignes, tous fabriqués en Belgique.',
  teamKicker: 'Depuis 45 ans',
  callEddy: 'Appeler Eddy',
  callIvan: 'Appeler Ivan',
  advice: 'Ils décrochent eux-mêmes. Le conseil est gratuit.',
  dealerTitle: 'AIDI est plus proche de votre colombier que vous ne le pensez.',
  dealerLede: 'Plus de soixante points de vente en Belgique et aux Pays-Bas, et des importateurs dans neuf autres pays.',
  dealerField: 'Commune ou code postal',
  dealerGo: 'Chercher',
  menuTitle: 'Menu'
};

I18N.en.sig = {
  heroA: 'Your pigeons',
  heroB: 'are athletes.',
  heroC: 'Feed them like it.',
  heroLede: 'Ten mixtures and fourteen supplements from Team Noël-Willockx. Every product comes with its measured values, so you choose on numbers rather than promises.',
  heroTray: '1 kg AIDI Mix 3 · 1,000 grains',
  heroCue: 'Scroll, and the grains sort themselves',
  sortTitle: 'One kilo, sorted.',
  sortLede: 'Every grain stands for one gram. It shows what no bag tells you: how much fuel, how much building material, and how much protein your pigeon actually absorbs.',
  sortPick: 'Choose a mixture',
  legFat: 'Crude fat',
  legAbs: 'Absorbable protein',
  legPro: 'Other crude protein',
  legCarb: 'Carbohydrates',
  legRest: 'Fibre, moisture and ash',
  perKg: 'grams per kilo',
  sortNote: 'Watch the light green grains. Only absorbable protein is truly used by the body, and no other bag shows how far it sits below crude protein.',
  sortCta: 'Full analysis of this mixture',
  seasonTitle: 'What to feed this week?',
  seasonLede: 'A pigeon does not need the same thing all year. The needle points at today. Pick another phase to look ahead.',
  today: 'Today',
  phaseFeeds: 'Mixtures for this phase',
  phasePlans: 'Schedules, free as PDF',
  dial: 'Season dial',
  proofKm: '528 kilometres.',
  proofBirds: '5,166 pigeons.',
  proofWin: 'One first place.',
  proofLede: 'National Argenton, 2022. The map shows that season’s national races in which lofts supported by Team Noël-Willockx finished in the top 100.',
  proofRelease: 'Release',
  proofAces: 'KBDB National Ace Pigeons',
  rangeLede: 'Twenty-six products in three lines, all made in Belgium.',
  teamKicker: 'For 45 years',
  callEddy: 'Call Eddy',
  callIvan: 'Call Ivan',
  advice: 'They answer the phone themselves. Advice is free.',
  dealerTitle: 'AIDI is closer to your loft than you think.',
  dealerLede: 'More than sixty stockists in Belgium and the Netherlands, plus importers in nine more countries.',
  dealerField: 'Town or postcode',
  dealerGo: 'Search',
  menuTitle: 'Menu'
};

I18N.de.sig = {
  heroA: 'Ihre Tauben',
  heroB: 'sind Athleten.',
  heroC: 'Füttern Sie sie so.',
  heroLede: 'Zehn Mischungen und vierzehn Ergänzungen von Team Noël-Willockx. Zu jedem Produkt die gemessenen Werte, damit Sie nach Zahlen wählen statt nach Versprechen.',
  heroTray: '1 kg AIDI Mix 3 · 1.000 Körner',
  heroCue: 'Scrollen, und die Körner sortieren sich',
  sortTitle: 'Ein Kilo, sortiert.',
  sortLede: 'Jedes Korn steht für ein Gramm. So sehen Sie, was auf keinem Sack steht: wie viel Brennstoff, wie viel Baustoff und wie viel Eiweiß Ihre Taube wirklich aufnimmt.',
  sortPick: 'Mischung wählen',
  legFat: 'Rohfett',
  legAbs: 'Verwertbares Eiweiß',
  legPro: 'Übriges Rohprotein',
  legCarb: 'Kohlenhydrate',
  legRest: 'Rohfaser, Feuchte und Asche',
  perKg: 'Gramm pro Kilo',
  sortNote: 'Achten Sie auf die hellgrünen Körner. Nur das verwertbare Eiweiß nutzt der Körper wirklich; den Unterschied zum Rohprotein zeigt sonst kein Sack.',
  sortCta: 'Vollständige Analyse dieser Mischung',
  seasonTitle: 'Was füttern Sie diese Woche?',
  seasonLede: 'Eine Taube braucht nicht das ganze Jahr dasselbe. Der Zeiger steht auf heute. Wählen Sie eine andere Phase, um vorauszuschauen.',
  today: 'Heute',
  phaseFeeds: 'Mischungen für diese Phase',
  phasePlans: 'Pläne, kostenlos als PDF',
  dial: 'Saisonzeiger',
  proofKm: '528 Kilometer.',
  proofBirds: '5.166 Tauben.',
  proofWin: 'Ein erster Platz.',
  proofLede: 'National Argenton, 2022. Auf der Karte die Nationalflüge dieser Saison, in denen von Team Noël-Willockx betreute Schläge unter die Top 100 flogen.',
  proofRelease: 'Auflass',
  proofAces: 'Nationale As-Tauben KBDB',
  rangeLede: 'Sechsundzwanzig Produkte in drei Linien, alle in Belgien hergestellt.',
  teamKicker: 'Seit 45 Jahren',
  callEddy: 'Eddy anrufen',
  callIvan: 'Ivan anrufen',
  advice: 'Sie gehen selbst ans Telefon. Beratung ist kostenlos.',
  dealerTitle: 'AIDI ist näher an Ihrem Schlag, als Sie denken.',
  dealerLede: 'Über sechzig Verkaufsstellen in Belgien und den Niederlanden, dazu Importeure in neun weiteren Ländern.',
  dealerField: 'Ort oder Postleitzahl',
  dealerGo: 'Suchen',
  menuTitle: 'Menü'
};

I18N.zh.sig = {
  heroA: '您的赛鸽',
  heroB: '是运动员。',
  heroC: '请按运动员的标准喂养。',
  heroLede: 'Noël-Willockx 团队的十种混合饲料和十四种补充剂。每款产品都附有实测数值，让您依据数据而非承诺做出选择。',
  heroTray: '1 公斤 AIDI Mix 3 · 1000 粒',
  heroCue: '向下滚动，谷粒会自动分类',
  sortTitle: '一公斤，分门别类。',
  sortLede: '每一粒代表一克。您将看到任何饲料袋上都没有的信息：多少燃料、多少构建材料，以及您的鸽子真正吸收了多少蛋白质。',
  sortPick: '选择一种混合饲料',
  legFat: '粗脂肪',
  legAbs: '可吸收蛋白质',
  legPro: '其他粗蛋白',
  legCarb: '碳水化合物',
  legRest: '纤维、水分和灰分',
  perKg: '克 / 公斤',
  sortNote: '请留意浅绿色的谷粒。只有可吸收蛋白质才会被身体真正利用；其他饲料袋都不会标出它与粗蛋白之间的差距。',
  sortCta: '查看该混合饲料的完整分析',
  seasonTitle: '这周该喂什么？',
  seasonLede: '鸽子一年四季的需求各不相同。指针指向今天。选择其他阶段，提前规划。',
  today: '今天',
  phaseFeeds: '本阶段的混合饲料',
  phasePlans: '饲喂方案，免费 PDF',
  dial: '季节表盘',
  proofKm: '528 公里。',
  proofBirds: '5166 羽。',
  proofWin: '一个冠军。',
  proofLede: '2022 年阿尔让通国家赛。地图显示该赛季由 Noël-Willockx 团队参与指导的鸽舍跻身前 100 名的国家级比赛。',
  proofRelease: '司放地',
  proofAces: 'KBDB 国家级王中王',
  rangeLede: '三条产品线共二十六款产品，全部在比利时生产。',
  teamKicker: '45 年经验',
  callEddy: '致电 Eddy',
  callIvan: '致电 Ivan',
  advice: '他们亲自接听电话。咨询免费。',
  dealerTitle: 'AIDI 离您的鸽舍比您想象的更近。',
  dealerLede: '比利时和荷兰有六十多个销售点，另有九个国家设有进口商。',
  dealerField: '城镇或邮编',
  dealerGo: '搜索',
  menuTitle: '菜单'
};
