/**
 * Content en configuratie van de website.
 *
 * LET OP: de contactgegevens hieronder zijn voorbeeldgegevens.
 * Vervang ze door de echte gegevens van WEBRNDS voordat de site live gaat.
 */

export const site = {
  name: "WEBRNDS",
  tagline: "Websites bouwen en content bijhouden voor lokale bedrijven.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contact: {
    email: "hallo@webrnds.nl",
    phone: "+31 6 00 00 00 00",
    city: "Nederland",
    isPlaceholder: true,
  },
};

export const navigation = [
  { href: "/diensten", label: "Diensten" },
  { href: "/werk", label: "Werk" },
  { href: "/huisstijl", label: "Huisstijl" },
  { href: "/contact", label: "Contact" },
];

export type CycleStep = { step: string; description: string };

export const cycle = [
  { step: "Bouwen", description: "Structuur, teksten en vormgeving van je website." },
  { step: "Publiceren", description: "Live gang, met beheer die je zelf kunt aanpassen." },
  { step: "Meten", description: "Bezoek, gedrag en wat je klanten zoeken." },
  { step: "Bijhouden", description: "Content maken en de site onderhouden." },
] as const satisfies readonly CycleStep[];

export const tracks = [
  {
    title: "Websites",
    intro:
      "Een site die snel is, op elke telefoon werkt en door jou of door ons wordt bijgewerkt.",
    items: [
      "Structuur en teksten, geschreven in jouw taal",
      "Mobiel eerst, met beheer in je eigen browser",
      "Snel geladen, zonder onnodige plug-ins",
      "Domein, hosting en beveiliging geregeld",
    ],
  },
  {
    title: "Content",
    intro:
      "Content die je zelf wilt delen: korte teksten, beelden en een vaste cadans zodat je niet hoeft te bedenken wat je moet posten.",
    items: [
      "Berichten voor Instagram en Facebook",
      "Korte video's en foto's van je werk",
      "Nieuws, vacatures en aanbiedingen",
      "Alles klaar om te plaatsen, met de juiste teksten",
    ],
  },
];

export const stappen = [
  {
    number: "01",
    title: "Kennismaking",
    description:
      "We bespreken wat je wilt bereiken, wat je nu hebt en wie je wilt bereiken. Je hoeft niet met een plan te komen.",
  },
  {
    number: "02",
    title: "Bouw",
    description:
      "We zetten de website op in koppen die je begrijpt. Je ziet elke week wat er staat en wat er nog moet.",
  },
  {
    number: "03",
    title: "Content in gang",
    description:
      "Na livegang start de cadens: wekelijks of per twee weken. Jij levert foto's en tips, wij maken de berichten.",
  },
  {
    number: "04",
    title: "Meten en bijhouden",
    description:
      "We kijken naar wat er bezocht wordt en passen aan waar het kan. Kleine verbeteringen gaan door zonder extra traject.",
  },
];

export const audiences = [
  {
    type: "Horeca",
    need: "Openingstijden, menu, evenementen en een drukke zomer waarin de site het werk moet doen.",
  },
  {
    type: "Handwerk en bouw",
    need: "Werk voor de deur, reviews en foto's van het werk dat je trots op bent.",
  },
  {
    type: "Diensten",
    need: "Vertrouwen, een heldere uitleg van je aanpak en snel antwoord op vragen.",
  },
  {
    type: "Winkels en retail",
    need: "Openingstijden, assortiment en gevonden worden in je eigen buurt.",
  },
];

export const deliverables = [
  {
    onderdeel: "Website",
    wat: "Een site die je zelf kunt beheren en die op elke scherm werkt.",
    frequentie: "Eenmalig",
  },
  {
    onderdeel: "Content",
    wat: "Berichten met beeld en tekst, klaar om te plaatsen.",
    frequentie: "Per week of per twee weken",
  },
  {
    onderdeel: "Bijhouden",
    wat: "Updates, hosting en kleine aanpassingen door ons.",
    frequentie: "Doorlopend",
  },
  {
    onderdeel: "Rapportage",
    wat: "Elke maand wat er werkte en wat we daarna aanpassen.",
    frequentie: "Maandelijks",
  },
];

export const faqs = [
  {
    question: "Wat kost het?",
    answer:
      "Elk project begint met een kennismaking. Daarna krijg je een offerte met een vast bedrag voor de website en een vast maandbedrag voor content en bijhouden.",
  },
  {
    question: "Ik weet niet wat ik nodig heb.",
    answer:
      "Dat is precies waar de kennismaking voor is. Jij vertelt wat er speelt, wij vertalen dat naar een website en een contentplan.",
  },
  {
    question: "Kan ik de website zelf aanpassen?",
    answer:
      "Ja. Je krijgt een beheeromgeving waarmee je teksten en afbeeldingen aanpast. Wil je niets doen, dan doen wij het.",
  },
  {
    question: "Welke social media pakken jullie aan?",
    answer:
      "We werken met het platform waar je klanten al zitten. Meestal Instagram en Facebook, soms LinkedIn.",
  },
];

export const services = [
  {
    id: "website",
    title: "Website bouwen",
    intro:
      "Van een eerste schets tot een site die live staat en door jou of door ons wordt bijgewerkt.",
    includes: [
      "Intake: doelen, doelgroep en wat je nu hebt",
      "Structuur en teksten in jouw woorden",
      "Vormgeving op basis van de huisstijl",
      "Mobiel, snelheid en toetsenbordbediening",
      "Domein, hosting en beveiliging",
      "Beheeromgeving met uitleg",
    ],
    needs: [
      "Je verhaal, je aanbod en je openingstijden",
      "Logo's, foto's en teksten die je al hebt",
      "Een contactpersoon die snel kan antwoorden",
    ],
  },
  {
    id: "content",
    title: "Content maken",
    intro:
      "Een vaste cadans met berichten die je kunt plaatsen zonder er nog een avond aan te besteden.",
    includes: [
      "Een contentplan per maand",
      "Berichten met tekst, beeld en hashtags",
      "Korte video's en foto's van je werk",
      "Nieuws, vacatures en aanbiedingen",
      "Afstemming op wat er in de winkel of op de werf speelt",
      "Publicatieklaar, met de rechten op orde",
    ],
    needs: [
      "Foto's of korte video's van je werk",
      "Wat er speelt: agenda, nieuws, aanbiedingen",
      "Een vast moment in de week waarop je kunt leveren",
    ],
  },
  {
    id: "bijhouden",
    title: "Bijhouden en verbeteren",
    intro:
      "Deel je stopt niet bij livegang. We houden de site en de content bij en gebruiken de cijfers om te verbeteren.",
    includes: [
      "Technisch onderhoud en updates",
      "Hosting, domein en certificaten",
      "Kleine aanpassingen op aanvraag",
      "Maandelijkse rapportage over bezoek en gedrag",
      "Verbeteringen op basis van wat we zien",
      "Nieuwe onderdelen als je die nodig hebt",
    ],
    needs: [
      "Toegang tot je eigen accounts en materialen",
      "Een korte reactie als er iets toegevoegd mag worden",
    ],
  },
];

export const serviceMatrix = {
  columns: ["Onderdeel", "Wat je krijgt", "Wanneer"],
  rows: [
    { onderdeel: "Website", wat: "Een site die je zelf kunt beheren", wanneer: "Eenmalig" },
    {
      onderdeel: "Content",
      wat: "Berichten met beeld en tekst",
      wanneer: "Per week of per twee weken",
    },
    {
      onderdeel: "Bijhouden",
      wat: "Updates, hosting en aanpassingen",
      wanneer: "Doorlopend",
    },
    {
      onderdeel: "Rapportage",
      wat: "Wat werkte en wat we veranderen",
      wanneer: "Maandelijks",
    },
  ],
};

/**
 * Voorbeeldprojecten. Deze zijn bewust als voorbeeld gemarkeerd en moeten
 * vervangen worden door echte projecten voordat de site live gaat.
 */
export const cases = [
  {
    name: "Bakkerij De Korenaar",
    sector: "Horeca",
    problem:
      "De bakkerij had een verouderde website en geen tijd voor berichten op social media.",
    approach: [
      "Nieuwe site met openingstijden, menu en bestellen",
      "Wekelijkse berichten met het brood van die dag",
      "Foto's door de familie zelf aangeleverd",
    ],
    result:
      "De site is de plek waar openingstijden en het menu staan. Het bakken duurt nu een half uur per week.",
  },
  {
    name: "Schrijverij Van Der Veen",
    sector: "Handwerk en bouw",
    problem:
      "Werk voor de deur zat verspreid over WhatsApp, Instagram en een oude map met foto's.",
    approach: [
      "Projectpagina's per opdracht met foto's",
      "Berichten die naar de juiste projectpagina verwijzen",
      "Vormgeving die bij het merk van de schrijverij past",
    ],
    result:
      "Nieuwe aanvragen komen binnen met het project erbij. De schrijverij hoeft alleen foto's te sturen.",
  },
  {
    name: "Fysiotherapie Praktijk Zuid",
    sector: "Diensten",
    problem:
      "De praktijk had veel vragen over verzekering en afspraken die telkens telefonisch kwamen.",
    approach: [
      "Voorbeelden van behandelingen en praktische uitleg",
      "Afspraken en verzekering direct op de site",
      "Elke maand een bericht over een veelgestelde vraag",
    ],
    result:
      "Veelgestelde vragen staan nu op de site. De receptie hoeft minder tijd te besteden aan uitleg.",
  },
];

export const toneRules = [
  {
    rule: "Zeg wat je doet, niet wat je kunt",
    do_: "Wij maken de berichten en zetten ze klaar voor jouw Instagram.",
    dont: "Wij bieden een complete content oplossing met measurable impact.",
  },
  {
    rule: "Schrijf voor een ondernemer die het druk heeft",
    do_: "Je hoeft alleen foto's te sturen, de rest regelen wij.",
    dont: "Ontdek onze geïntegreerde full service propositie.",
  },
  {
    rule: "Noem het probleem van de klant",
    do_: "Geen zorgen over een verouderde website, daar beginnen we mee.",
    dont: "Wij transformeren uw digitale footprint naar next level.",
  },
  {
    rule: "Kort is duidelijk",
    do_: "Elke week een bericht. Klaar om te plaatsen.",
    dont: "Onze contentstrategie is erop gericht om merkconsistentie te maximaliseren.",
  },
];

export const wordAvoid = [
  "seamless",
  "effortless",
  "supercharge",
  "next level",
  "game changer",
  "one stop shop",
  "we zijn uw one stop shop voor digitale groei",
];
