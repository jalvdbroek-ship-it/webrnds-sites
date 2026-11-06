# WeBrnds — websites

Deze repository bevat de websites van WeBrnds zelf:

- **de site van het bureau** (deze map): statisch, zonder build-stap, met de
  twaalf Blobz-figuren, de speelse beweging en de prijsconfigurator.
- **`sites/webrnds-website`**: de vorige versie van de site, gebouwd met
  Next.js, inclusief de huisstijlpagina als levend merkhandboek.

Daarnaast staat de proefversie van de bureausite in de donkere mint-noir-stijl
in een eigen repository: **[webrnds-test](https://github.com/jalvdbroek-ship-it/webrnds-test)**,
live op
**[jalvdbroek-ship-it.github.io/webrnds-test](https://jalvdbroek-ship-it.github.io/webrnds-test/)**.

De websites voor klanten staan per project in hun eigen repository, zodat
klantinformatie gescheiden blijft. Het volledige overzicht staat in
[WEBSITES.md](WEBSITES.md).

De live site staat op
**[jalvdbroek-ship-it.github.io/webrnds-sites](https://jalvdbroek-ship-it.github.io/webrnds-sites/)**.

---

# De site van het bureau

Een statische website voor **WeBrnds**, Rozenburg. Geen build-stap, geen
dependencies. Dit is de speelse versie: twaalf eigen figuren (de Blobz), dikke
donkerblauwe randen, knoppen die indrukken, en een palet dat uit de figuren
komt.

## De site lokaal openen

**Windows: dubbelklik `start-site.bat`.** De browser gaat vanzelf open op
<http://localhost:4321>. Sluit het venster om de server te stoppen.

Of via de terminal:

```bash
npm start
```

of direct:

```bash
node server.mjs
```

De server levert de bestanden uit deze map en heeft één extra route:
`POST /api/brief`. Die ontvangt de aanvraag, logt hem in het terminalvenster
en stuurt een bevestiging terug. De site toont daarna een resultaatkaart met
een mailto-link als terugval.

## Mapstructuur

```
index.html              de hele site
sites/webrnds-website/  de vorige WeBrnds-site (Next.js)
WEBSITES.md             overzicht van alle websites
assets/css/site.css     alle stijlen, met het kleurenpalet en de beweging
assets/js/site.js       menu, reveal, het pad, prijzen en het formulier
assets/img/blobs/       de twaalf figuren als webp
assets/img/             het woordmerk en de projectbeelden
assets/fonts/           Fredoka en Nunito (SIL OFL)
server.mjs              lokale server met de route /api/brief
start-site.bat          start de lokale server en open de browser
OPDRACHT.md             de opdracht, het onderzoek en de eisen
DESIGN.md               ontwerpkeuzes, kleuren en beweging
tools/                  contrastmeting, toetsingen, screenshots
shots/                  de schermafbeeldingen van de laatste controle
```

## Controle

De server moet draaien (`npm start`), daarna:

```bash
npm run contrast      # WCAG-contrast van het kleurenpalet
npm run check:a11y    # toegankelijkheid, contrast, doelwit en reflow
npm run check:content # koppenstructuur, em-dash, emoji
npm run check:form    # de volledige invulflow van het aanvraagformulier
npm run shots         # schermafbeeldingen op 1440px en 390px
```

De controles gebruiken `URL` als de site op een andere plek draait:

```bash
URL=http://localhost:4321/ npm run check:a11y
```

Laatste stand: contrast alle paren groen, toegankelijkheid 27/27, inhoud 5/5,
formulier 8/8 en de terugval op de e-mailapp 5/5. Geen horizontale overloop
op 320, 390, 768, 1024, 1280, 1440 en 1920px.

## De opbouw van de pagina

Eén pagina met ankers, in deze volgorde:

1. **Hero**: de vier figuren, de belofte, de knop en de drie feiten
2. **Diensten**: vijf diensten, twee breed en drie compact
3. **Werkwijze**: het leerpad met vier stappen en een lijn die oploopt
4. **Werk**: de drie projecten
5. **Prijzen**: de configurator met de live indicatie
6. **Waarom WeBrnds**: drie redenen
7. **Veelgestelde vragen**: vijf vragen
8. **Contact**: het formulier, de gegevens en de terugval
9. **Afsluitende CTA**: nog een keer de uitnodiging, met twee figuren
10. **Footer**: de kolommen

## Wat er staat vast

- **KvK 42127859**, gevestigd in Rozenburg (Zuid-Holland).
- **E-mail**: schreuderdarren@gmail.com — uit de preview, nog niet extern
  gecontroleerd.
- **Werkgebied**: heel Nederland, vanuit Rozenburg.
- **Diensten**: websites & webapps, workflow-automatisering, API-koppelingen,
  AI-integraties, beeldmerk & huisstijl.
- **Prijzen**: website vanaf €2.500, webapp vanaf €5.000, platform of
  klantportaal vanaf €10.000, koppeling vanaf €2.000, complete eerste workflow
  vanaf €5.000, onderhoud €175 per maand. Exclusief btw.
- **Geen cookies, geen trackers**, en de site bewaart niets.

## Wat je nog moet doen voor livegang

1. **E-mailadres controleren.** `schreuderdarren@gmail.com` staat in
   `index.html` (contactblok en footer) en in `assets/js/site.js` bij `MAIL`.
2. **Aanvragen echt afleveren.** `/api/brief` is nu een mock die in het
   terminal logt. Voor livegang moet die route naar een mailbox of een
   formulierservice wijzen, of de site moet alleen de mailto-terugval gebruiken.
3. **Projectbeelden vervangen.** Leg in `assets/img/` de bestanden
   `project-lils-haarsalon.jpg`, `project-wesleys-ambacht.jpg` en
   `project-gevel-helden.jpg` met echte beelden (1200×900). De placeholders
   hebben dezelfde naam en worden dus meteen vervangen; de figuur erop blijft
   staan tot de foto's er zijn.
4. **Figuren aanvullen.** Er staan nu twaalf figuren in `assets/img/blobs/`.
   Elke dienst, elke stap en elk project heeft er één. Er zijn nog figuren
   over (magenta, periwinkle, rood) die je kunt inzetten waar je wilt.
5. **Privacyverklaring schrijven.** Deze site heeft er nog geen; de footer
   belooft alleen "geen cookies, geen trackers".
6. **Publiceren.** De site staat op GitHub Pages via de workflow in
   `.github/workflows/pages.yml`: elke push naar `main` bouwt hem opnieuw.
   De route `/api/brief` bestaat daar niet; het formulier valt daarom terug
   op de mailto-link. Wil je de aanvragen server-side verwerken, dan moet er
   een eigen eindpunt bij, bijvoorbeeld op de bestaande webrnds.com-hosting.
7. **Telefoonnummer** toevoegen als je er wilt praten; er staat nu bewust geen
   verzonnen nummer.

## Techniek

Standaard HTML, CSS en JavaScript, zonder frameworks. De kleuren staan als
tokens in `assets/css/site.css` en zijn gemeten op WCAG 2.2 AA met
`tools/contrast.mjs`. De pictogrammen komen uit Lucide (ISC) en staan als
inline sprite in `index.html`. De lettertypen zijn Fredoka en Nunito, beide
SIL OFL, lokaal gezet.

De figuren zijn PNG's met een witte achtergrond geleverd; ze zijn
bijgesneden en transparant gemaakt, en daarna naar webp omgezet (15 kB per
stuk). Wil je ze vervangen: leg een nieuwe PNG met dezelfde naam in
`assets/img/blobs/` en zet hem om met:

```bash
ffmpeg -i nieuw.png -vf "scale=520:-1" -c:v libwebp -quality 88 nieuw.webp
```

De beweging is bewust langzaam: elke figuur veert tevoorschijn als hij in
beeld komt (1200ms, 180ms verschil per figuur), de figuren zweven in een
zachte slag van 9px, de lijn van het leerpad kleurt op tot de stap die je
leest, de mascotte naast de prijs veert als het totaal verandert, en bij een
verstuurde aanvraag dwarrelen er stukjes confetti uit de resultaatkaart.
Knoppen duiken in als je klikt en wiebelen even bij hover.

De figuren in de hero volgen je aanwijzer zachtjes mee, elk met een eigen
diepte: de grote beweegt bijna niet, de kleine het meest. Het gaat om
twaalf pixels op het hoogste, gedempt per frame, dus het is een hint.

De vier figuren in de hero vormen één compositie met de verhoudingen van
het referentiebeeld. Het blok heeft een vaste verhouding van 4 : 3, dus
de compositie schaalt mee en blijft op elke schermbreedte hetzelfde beeld.

Verder helpt de navigatie op een lange pagina: de scroll naar een anker
duurt altijd 700ms (de standaard deed er ruim twee seconden over), er
loopt een voortgangsbalk bovenin, en het menu markeert de sectie waar je
bent.

Zonder JavaScript staan alle figuren meteen in beeld: de pagina is nooit
leeg. Onder `prefers-reduced-motion: reduce` staan alle bewegingen stil.
