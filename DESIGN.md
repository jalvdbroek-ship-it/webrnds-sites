# WeBrnds — ontwerpnotitie

Onderwerp en publiek: WeBrnds in Rozenburg. Publiek: ondernemers in het
Nederlandse MKB die een website, webapp of automatisering nodig hebben en nu
vastlopen in gereedschappen die niet bij hun proces passen. De enige taak van de
site: de bezoeker laten verstaan dat WeBrnds dit zelf bouwt, en hem een vraag
laten stellen.

## Signatuurmotief: de Blobz

Twaalf figuren in eigen stijl, met gezichten en een eigen kleur per figuur. Ze
staan in de hero, één per dienst, één per stap van het pad, één per project en
twee in de footer. Ze zijn het speelse, maar ze dragen geen tekst: het zijn
personages, geen illustratie van je dienst.

De figuren zijn geleverd als PNG met een witte achtergrond. Ze zijn
bijgesneden op de figuur en de achtergrond is transparant gemaakt; daarna
verklein tot webp (520px breed, 15 kB per stuk).

De donkerblauwe #14365c is precies de kleur van de gezichten van de figuren.
Die is het anker van het hele palet: alle tekst, alle randen en alle
schaduwen gebruiken hem. Daardoor lijken de figuren thuis, in plaats van op
de site te zijn gelegd.

## Type

Fredoka (SIL OFL 1.1) voor de koppen: rond, plomp en vriendelijk, precies de
toon die de figuren hebben. Nunito (SIL OFL 1.1) voor de bodytekst: zacht,
goed leesbaar en niet schreeuwerig. Beide worden lokaal gezet.

## Kleur (gemeten met tools/contrast.mjs, alle paren halen WCAG 2.2 AA)

De kleuren van de figuren zelf vormen het palet. Elk kleurvlak is een
accent; de donkerblauwe tekst staat erop, want die haalt overal 4,5:1 of
meer.

```
--ink       #14365c   anker: tekst, randen, schaduw       12,27:1 op wit
--ink-2     #456185   secundaire tekst                     6,36:1 op wit
--paper     #ffffff   wit
--paper-2   #f7f9fc   afwisselende sectiegrond

--blauw     #38b8f8   --geel     #f8b828   --groen    #48d888
--cyaan     #28d8e8   --oranje   #f89838   --koraal   #f88868
--rood      #f87888   --roze     #e878b8   --lila     #c888f8
--violet    #5646cf   (wit erop: 6,62:1)
```

Elk vlak heeft een tint (10 à 15% van de kleur op wit) voor de achtergrond
van de kaart en een donkere rand voor de 3D-ribbel onder de knoppen.

## Vorm en materiaal

Alles heeft een dikke donkerblauwe rand van 2,5px en een hoekradius van
1,4 tot 2,75rem: het site is opgebouwd als stickers en magneten. Knoppen
hebben een harde schaduw van 5px onder de rand en zakken 5px in de knop als je
klikt. Kaarten kantelen een beetje bij hover, maar springen niet omhoog: de
speelse beweging zit in de figuren, niet in de dozen. Drie schaduwstanden
(vlak, kaart, zwevend) en verder geen zachte schaduwen, geen glas, geen
verloopjes.

## De markering in de kop

Het gele vlak achter "meebeweegt" is geen rechthoek maar een markeerstreek.
Fredoka heeft een inhoudshoogte van 1,21em, terwijl de letters zelf 0,91em
zijn: kaphoogte 0,69em plus een staart van 0,22em. Een vlak over de hele
inhoudshoogte laat dus 0,28em dode ruimte boven de letters staan, en oogt
als een gele plaat in plaats van een markering.

De oplossing is een verloop dat vanaf de onderkant van de inhoudshoogte
0,94em omhoog loopt: precies van de basislijn tot net boven de kaphoogte.
De staart van de g valt er netjes in.

## Beweging

Zeven bewegingen, elk met een eigen taal en een eigen reden. Ze eten elkaar
niet op omdat ze elk een andere CSS-eigenschap gebruiken: transform voor de
veer, translate voor de dobber, scale voor de squash.

Het tempo is bewust langzaam: alles duurt ongeveer twee keer zo lang als
gewoonlijk en de amplitude is klein. Een figuur die te snel veert of te
snel squasht wordt niet meer gevoeld als een figuur, maar als een flits.

1. **De veer** (transform, 1200ms): elke figuur veert tevoorschijn als hij
   in beeld komt, met 180ms verschil per figuur in dezelfde rij. De
   overshoot is klein (6% in plaats van 14%), zodat het een veer blijft en
   geen sprong. Zonder JavaScript staan ze meteen er, de pagina is nooit
   leeg.
2. **De dobber** (translate, 8 tot 11,5s): de figuren zweven in een zachte
   slag van 9px, elke met een eigen fase. De beweging is bewust nauwelijks
   zichtbaar: je merkt haar pas als je er naar kijkt.
3. **De squash** (scale, 600ms): als je met de muis bij een kaart komt,
   ploft de figuur 7% in de breedte en 5% in de hoogte. Een overgang, geen
   animatie, zodat de veer en de dobber doorgaan. Alleen met een echte
   aanwijzer, want op een touch scherm blijft hij anders plofken.
4. **De drifter** (transform, 28 tot 40s): twee figuren per grote sectie
   drijven op de achtergrond, met 22% ondoorzichtig. Sfeer, geen inhoud.
5. **Het oplopende pad** (transform, 900ms): de lijn van het leerpad kleurt
   op tot de stap die je leest. Het pad is een leerpad en je ziet hoe ver
   je bent.
6. **De reactie** (transform, 950ms): de mascotte naast de prijsindicatie
   veert telkens als het totaal verandert. En de mascotte naast de knop in
   de hero reageert als je die benadert.
7. **De viering** (transform, 1800ms): bij een verstuurde aanvraag dwarrelen
   achttien stukjes confetti uit de resultaatkaart.

De figuren in de hero volgen je aanwijzer: elke figuur heeft een eigen
diepte (de grote beweegt bijna niet, de kleine het meest) en het JavaScript
dempt de beweging per frame, zodat ze meeglijden in plaats van te schokken.
Het gaat om een verschil van twaalf pixels op het hoogste, dus het is een
hint en geen spelletje.

Daarnaast: knoppen duiken in als je klikt en wiebelen even bij hover, het
label boven een kop komt met een tik, en blokken komen in beeld bij het
scrollen (900ms, 90ms per sibling).

Acht: **de sticker-reactie**. Bij hover kantelt het plaatje in een
dienstkaart of een waaromkaart negen graden en wordt het 9% groter, alsof
je een sticker lostrekt.

## Navigatie op een lange pagina

De pagina is ruim tienduizend pixels hoog. Drie dingen helpen daarbij:

- **Een eigen scroll** die altijd 700ms duurt, ongeacht hoe ver je moet.
  De standaard gladde scroll deed er ruim twee seconden over. De gladde
  scroll uit de CSS gaat er tijdelijk uit, want die zou elke stap van deze
  scroll nog eens gladde-scrollen.
- **Een voortgangsbalk** bovenin, die meeloopt met de scroll.
- **De menu-items markeren de sectie** waar je bent, via een
  IntersectionObserver die de sectie aanwijst die het meest van het scherm
  vult.

De focus gaat mee naar de aangeklikte sectie, zodat het toetsenbord daar
verder gaat. Onder `prefers-reduced-motion: reduce` is de scroll direct.

Onder `prefers-reduced-motion: reduce` staan alle bewegingen stil: de figuren
staan direct in hun eindstand, de scroll-reveal toont de inhoud meteen en de
confetti blijft weg.

## De compositie van de figuren

De vier figuren in de hero vormen één cluster, met dezelfde verhoudingen als
het referentiebeeld: één grote blauwe hart in het midden, een gele ster
linksboven, een roze vierkant rechtsonder en een kleine cyan bloem
rechtsachteraan.

Het blok heeft een vaste verhouding van 4 : 3 en alle maten en posities zijn
percentages van dat blok. Daardoor schaalt de compositie mee met de
schermbreedte en blijft hij overal hetzelfde beeld, in plaats van te
verschillen per breakpoint. Het is ook precies het beeld dat het merk
 gebruikt, dus de site en het logo zeggen hetzelfde.

De laagorde is bewust: de cyan bloem ligt het verst, dan de hart, dan de
ster, en het roze vierkant ligt boven alles. Zo vallen de gezichten niet
over elkaar.

De draaiing van de figuren staat in de `rotate`-eigenschap en niet in
`transform`. De veer-animatie gebruikt `transform`, en die zou de
draaiing anders overschrijven: de figuur zou tijdens de veer rechtop
staan en pas na afloop kantelen.

## Uitlijning

Eén contentrail van 1180px met gutters van 20 tot 40px. Links uitgelijnd in
alle secties, behalve de FAQ-kop, die gecentreerd is.

De diensten staan in twee kolommen breed en drie compact: het ritme is 2 + 3,
niet vijf gelijke blokken. De kaarten groeien niet mee met de langste, dus de
lijsten beginnen allemaal op dezelfde hoogte.

## De afsluitende CTA

Vlak voor de footer: een geel vlak met de uitnodiging en twee figuren die
dobberen. Het is de laatste plek waar iemand nog kan besluiten, dus hij staat
apart, met een eigen rand aan beide kanten.

## Wat hier bewust niet staat

- Geen nieuwsbriefblok, geen sterren, geen cijfers, geen chatwidget, geen
  cookiebanner. Er is geen beoordeelingsplatform om op te vertrouwen en de
  aanvraag mag niet wegduken.
- Geen foto's van mensen: de rechten zijn niet vrijgegeven. De figuren doen
  het werk.
- Geen glazen panelen of verlopende kaarten: het palet is vlak en hard, zoals
  het logo.

## Waar de preview als houvast is gebruikt

De argumentatievolgorde en de onderwerpen: wat we doen, hoe we werken, het
werk, de prijzen, de vragen, contact. De teksten zijn zelf geschreven.
