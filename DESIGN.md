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

## Beweging

Zeven bewegingen, elk met een eigen taal en een eigen reden. Ze eten elkaar
niet op omdat ze elk een andere CSS-eigenschap gebruiken: transform voor de
veer, translate voor de dobber, scale voor de squash.

1. **De veer** (transform, 700ms): elke figuur veert tevoorschijn als hij in
   beeld komt, met 110ms verschil per figuur in dezelfde rij. Zonder
   JavaScript staan ze meteen er, de pagina is nooit leeg.
2. **De dobber** (translate, 4,2 tot 7s): de figuren zweven traag op en neer,
   elke met een eigen fase.
3. **De squash** (scale, 520ms): als je met de muis bij een kaart komt,
   ploft de figuur even in de breedte en wordt hij weer lang. Alleen met een
   echte aanwijzer, want op een touch scherm blijft hij anders plofken.
4. **De drifter** (transform, 16 tot 22s): twee figuren per grote sectie
   drijven op de achtergrond, half doorzichtig. Sfeer, geen inhoud.
5. **Het oplopende pad** (transform, 500ms): de lijn van het leerpad kleurt
   op tot de stap die je leest. Het pad is een leerpad en je ziet hoe ver
   je bent.
6. **De reactie** (transform, 620ms): de mascotte naast de prijsindicatie
   veert telkens als het totaal verandert. En de mascotte naast de knop in
   de hero reageert als je die benadert.
7. **De viering** (transform, 1s): bij een verstuurde aanvraag dwarrelen
   achttien stukjes confetti uit de resultaatkaart.

Daarnaast: knoppen duiken in als je klikt en wiebelen even bij hover, het
label boven een kop komt met een tik, en blokken komen in beeld bij het
scrollen (600ms, 60ms per sibling).

Onder `prefers-reduced-motion: reduce` staan alle bewegingen stil: de figuren
staan direct in hun eindstand, de scroll-reveal toont de inhoud meteen en de
confetti blijft weg.

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
