# Opdracht: WeBrnds

## Het bedrijf

- Naam: WeBrnds
- Plaats: Rozenburg, Zuid-Holland
- Branche: maatwerksoftware voor het MKB (websites, webapps, workflow-automatisering, API-koppelingen, AI-integraties, beeldmerk en huisstijl)
- Eigen domein: ja, webrnds.com (bestaande live site; deze versie is een preview)

## Referentiesite

- Link: https://webrnds-preview.webrnds.com/demo (de preview waarvan de klant de
  motion en de Blobz wil houden, maar de opbouw te rommelig vond)
- Wat je ervan overneemt: de argumentatievolgorde (wat → hoe werken we → werk →
  prijzen → contact), de onderwerpen (diensten, werkwijze, projecten, prijzen,
  contact) en de speelse Blobz-personages uit @blobz/avatar-core (MIT).
- Wat je niet overneemt: de vorm, de kleuren, de typografie, de teksten en de
  stapeling van losse secties. De preview miste samenhang: vijf verschillende
  kaart- en kopstijlen onder elkaar, zonder vaste ritmiek.

## Afspraken

- Toon: de motion en de speelse Blobz uit de preview, het nieuwe WeBrnds-logo
  (groen-blauw, twee tinten), en de informatie die WeBrnds over zichzelf
  vertelt: maatwerksoftware voor het MKB, één engineer, tien klanten tegelijk,
  vaste prijs vooraf, antwoord binnen één werkdag, code van de klant.
- Doe niet: niets publiceren. Deze ronde levert alleen de site plus een lokale
  host, zodat de klant zelf kan kijken.
- Taal: Nederlands.
- Deadline: nu.

## Tweede ronde: speels in plaats van zakelijk

De eerste versie was volgens de klant "te zakelijk en te groen". Deze ronde
maakt de site speels, met Duolingo (https://www.duolingo.com/) als
verwijzing voor de aanpak, maar in een eigen stijl.

| Eis uit de tweede ronde | Herkenning | Waargemaakt waar | Afloop |
| --- | --- | --- | --- |
| Minder zakelijk, meer speels | dikke randen, inspringende knoppen, vrolijke kleuren, plompe lettertypes | `assets/css/site.css` (blokken 2 en 4) | waargemaakt |
| Niet te groen | het palet komt uit de figuren: blauw, geel, cyaan, oranje, lila, roze, koraal; ankerkleur is het donkerblauw van de gezichten | `--ink` en de kleuren in `assets/css/site.css` | waargemaakt |
| Duolingo als voorbeeld, eigen manier | het leerpad voor de werkwijze, de plompe knoppen met ribbel, de figuren als karakters | `#werkwijze`, `.btn`, `.path` | waargemaakt |
| De nieuwe blobs gebruiken | twaalf figuren, transparant gemaakt en als webp opgeslagen | `assets/img/blobs/` | waargemaakt |
| Een afsluitende CTA | een eigen vlak met twee figuren voor de footer | `.closing` in `index.html` | waargemaakt |
| Beweging zoals bij Duolingo | figuren die in beeld veergekomen, squas op hover, een leerpad dat oploopt, een mascotte die op de prijs reageert, confetti na een aanvraag, drijvende figuren op de achtergrond | `assets/css/site.css` (blok 15) en `assets/js/site.js` | waargemaakt |

## Feiten uit het onderzoek

| Gegeven | Bron |
| --- | --- |
| KvK 42127859 | voetnoot van de preview (webrnds-preview.webrnds.com/demo) en de live site |
| Plaats Rozenburg, Zuid-Holland | voetnoot van de preview en de live site |
| E-mail schreuderdarren@gmail.com | contactblok van de preview |
| Diensten: websites & webapps, workflow-automatisering, API-koppelingen, AI-integraties, logo's & visuele identiteiten | navigatie van de live site (webrnds.com) en de preview |
| Prijzen: website vanaf €2.500, webapp vanaf €5.000, platform vanaf €10.000, koppeling vanaf €2.000, complete workflow vanaf €5.000, onderhoud €175 per maand | prijsblok van de preview (`demo/logica.mjs`) |
| Projecten: Lil's haarsalon (Rozenburg), Wesley's Ambacht (Stellendam), Gevel Helden (Zuid-Holland) | projectsectie van de preview en webrnds.com |
| Werkwijze: vraag → gesprek van 30 minuten → vaste prijs → bouwen per stap met previews | "Zo werken we" van de preview |
| Blobz-personages | @blobz/avatar-core, MIT-licentie, via de preview |
| Lettertypen Bricolage Grotesque en Lato | /assets/fonts van webrnds.com, beide SIL OFL 1.1 |

## Bevestigd tegenover de opdracht

- De preview noemt zichzelf "Het Zwitserse zakmes voor maatwerksoftware — één
  engineer, tien klanten tegelijk". Deze belofte staat in de hero en in de
  sectie "Waarom WeBrnds" overgenomen, want zij bepaalt de volgorde van de
  argumentatie.
- De live site bevestigt de projecten en de dienstlijst; de teksten daar zijn
  niet overgenomen, alleen de onderwerpen.

## Openstaand

- Het e-mailadres `schreuderdarren@gmail.com` komt uit de preview en is niet
  tegen een externe bron gecontroleerd.
- Het telefoonnummer is nergens vermeld; daarom staat er in het contactblok
  alleen een aandachtsregel, geen verzonnen nummer.
- De projectbeelden zijn tijdelijke placeholders met de tekst van het project.
  Echte foto's of schermen van de projecten kunnen in `assets/img/` worden
  gelegd met dezelfde bestandsnamen.
- De onderscore in "Lil's haarsalon" is overgenomen uit de preview; de live
  site schrijft "Lil's haarsalon" zonder escape, dus controleer dit nog.

## Eisen en hun afloop

| Eis uit de opdracht | Herkenning | Waargemaakt waar | Afloop |
| --- | --- | --- | --- |
| De motion uit de preview behouden | burst van de Blobz, zwevende rij, scroll-reveal, parallax, hover-lift | `assets/css/site.css` (blok 16) en `assets/js/site.js` | waargemaakt |
| De speelse Blobz behouden | vijf personages in de hero, een per dienst, een per stap, een in de achtergrond | sprite in `index.html`, tokens in `assets/css/site.css` | waargemaakt |
| Een meer georganiseerde website | één sectieritme, vaste kaartvorm, vaste kopstructuur, vaste afstanden | alle secties in `index.html` | waargemaakt |
| WeBrnds-info verwerken | diensten, werkwijze, projecten, prijzen, werkwijze-belofte, KvK en plaats | hele site | waargemaakt |
| Het toegevoegde logo verwerken | het nieuwe woordmerk in header en footer | `assets/img/webrnds-logo.png` (uit het toegevoegde beeld, transparant gemaakt) | waargemaakt |
| Alleen de site en een lokale host | geen repository, geen livegang | `server.mjs` en `start-site.bat` | waargemaakt |
