# DESIGN.md

Huisstijl en ontwerpbesluiten voor de website van WEBRNDS.
De publieke versie van dit handboek staat op `/huisstijl`.

## Onderwerp, publiek en taak

Onderwerp: WEBRNDS, een studio die websites bouwt en social content maakt en bijhoudt
voor lokale en regionale MKB'ers.
Publiek: ondernemers in de regio (horeca, handwerk en bouw, diensten, winkels) die goed
zijn in hun vak en geen tijd hebben voor een website.
Taak: die ondernemer naar een kennismaking brengen, met meteen duidelijk wat WEBRNDS
doet en hoe er samengewerkt wordt.

Signature: de "round", een open ring met een punt in de opening. De ring is de
rondgang van bouwen, publiceren, meten en bijhouden. Het punt is het werk dat nu loopt.
Het beeldmerk is het enige decoratieve element in het ontwerp.

Type: één familie, Archivo (variabel, met breedte-as). Display is gewicht 700 op breedte
112 met 3,5 procent negatieve letterspacing, body is gewicht 400 op breedte 100,
utility is gewicht 600 met 3 procent positieve letterspacing. Schaal is 1,25 met
uitzondering van de display, die per breakpoint schaalt.

Kleur: vijf rollen in OKLCH. Papier (0,982 0,005 250) als basis, inkt
(0,24 0,028 255) voor tekst, signaal (0,47 0,15 253) als werkende kleur, zuurstof
(0,88 0,19 103) als accent, lijn (0,9 0,008 252) als scheiding. Donkere modus gebruikt
dezelfde rollen met eigen, lichtere waarden. Alle contrastparen staan in
`scripts/contrast.ts` en worden gemeten met `npm run contrast`.

Ruimte en dichtheid: basis van 4 px, schaal 4/8/12/16/24/32/48/64/96/128. Eén rail van
1180 px met 20 px gutters op mobiel en 40 px vanaf 768 px. Die rail is eigendom van
`.rail` en wordt overal hergebruikt: header, main, footer.

Radius en materiaal: vlak met haarlijnen. Besturingselementen hebben een radius van 8 px,
vlakken 4 px, het beeldmerk is rond. Geen schaduwen, geen glas, geen verlopen.

Beeld: geen stockfoto's en geen illustraties. Het product is de site zelf, dus de
huisstijlpagina en de pagina's zijn het bewijs. Foto's van klanten komen er zodra die
bestaan.

Beweging: één georkestreeerd moment per pagina, het punt loopt één keer over de ring op
de homepage. Feedback is 120 ms voor hover en 180 ms voor kleur en rand. Met
prefers-reduced-motion blijft het beeld staan.

Uitgelaten standaarden: geen gecentreerde gradient hero, geen drie gelijke
icoonkaarten, geen eyebrow-labels boven elke kop, geen pills, geen spiegelbeeld van
afgeronde kaarten, geen Inter of Geist, geen violet, geen gefilterde schaduwen, geen
emoji, geen em dashes in de tekst, geen uitgelichte woorden in een kop.

## Waarom deze richting

De naam WEBRNDS leent zich voor een rondgang: het werk herhaalt zich. De ring maakt die
herhaling zichtbaar en is tegelijk het enige element dat je meteen herkent. Signaal-blauw
met een zuurstof-accent past bij een studio die snel en wendbaar moet overkomen zonder
de zwaarte van "premium" of de felheid van een jeugdmerk.

## Belangrijk bij het uitbreiden

1. Eén rol per kleur. Componenten consumeren `signaal`, `zuurstof`, `ink` en `line`,
   nooit een losse hexwaarde.
2. Nieuwe pagina's gebruiken `.rail`, `.section` en de typografische rollen uit
   `lib/tokens.ts`.
3. Teksten komen uit `lib/site.ts`. Geen uitleg bij een kop die de kop herhaalt.
4. Contrast meten, niet schatten: `npm run contrast` moet zonder fouten eindigen.
5. De AI-gedreven werkwijze is een interne toolkeuze en komt niet in de merkcommunicatie.

## Geteste punten

Alle onderstaande punten zijn gemeten of in een browser gecontroleerd, niet geschat.
- Contrast: alle 17 paren in licht en donker, gemeten met `scripts/contrast.ts`
  (`npm run contrast`). Alle paren halen WCAG 2.2 AA.
- Toetsenbord: focus is zichtbaar via `:focus-visible` met een offset van 3 px, geen
  focusring op de pointer, geen dubbele ringen.
- FAQ: `details` en `summary` openen met Enter, gecontroleerd in de browser.
- Responsief: 390 px, 1440 px en donkere modus zijn met screenshots gecontroleerd.
- Content rail: op alle vijf pagina's op 130 px van de rand, gemeten in de browser.
- Beweging: de ring staat stil bij prefers-reduced-motion, gecontroleerd in de browser.
- Kopie: geen em dashes, geen emoji en geen elementen zonder toegankelijke naam, op
  alle vijf pagina's gecontroleerd met `npm run verify:ui`.
- Code: `npm run typecheck` (strict met `noUncheckedIndexedAccess`) en
  `npm run lint` (Biome) zijn groen.

## Open punten voor de klant

- Contactgegevens in `lib/site.ts` zijn voorbeeldgegevens en moeten worden vervangen.
- De voorbeeldprojecten op `/werk` zijn fictief en gemarkeerd als voorbeeld.
- Er is nog geen fotomateriaal, dus er wordt nu zonder foto's gewerkt.
- Het contactformulier opent nu het e-mailprogramma van de bezoeker. Een backend voor
  directe ontvangst in een mailbox kan later worden toegevoegd.
