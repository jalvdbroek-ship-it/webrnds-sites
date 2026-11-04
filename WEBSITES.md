# Alle websites van WeBrnds

Eén overzicht van de websites die WeBrnds heeft gebouwd of in beheer heeft.
De code van de WeBrnds-sites zelf staat in deze repository; de klantsites
staan per project in hun eigen repository, zodat klantinformatie gescheiden
blijft.

## De websites van WeBrnds zelf

| Site | Wat het is | Code | Live |
| --- | --- | --- | --- |
| WeBrnds | De site van het bureau: diensten, werkwijze, werk, prijzen en contact | `sites/webrnds` | [webrnds.com](https://webrnds.com) |
| WeBrnds (vorige versie) | De Next.js-site met de huisstijlpagina als levend merkhandboek | `sites/webrnds-website` | [jalvdbroek-ship-it.github.io/webrnds-website](https://jalvdbroek-ship-it.github.io/webrnds-website/) |

## De websites voor klanten

Deze staan in eigen repositories, bij het account `0xtsotsi`. De privérepos
bevatten klantcommerciële informatie en zijn daarom niet openbaar.

| Klant | Plaats | Wat het is | Status |
| --- | --- | --- | --- |
| [Electrotechnisch Bedrijf Beijer](https://github.com/0xtsotsi/beijer-elektro) | Rozenburg | Website met diensten, projecten en offerteaanvraag | Live, publiek |
| [Lil's haarsalon](https://github.com/0xtsotsi/lils-haarsalon-site) | Rozenburg | Website, beeldmerk en huisstijl rond het stoplicht-thema | Live, publiek |
| [Restaurant La Caleta](https://github.com/0xtsotsi/la-caleta) | Rozenburg | Nieuwe website, Astro met Tailwind | Live, publiek |
| [Hotel Rozenburg & Brasserie Noortje](https://github.com/0xtsotsi/hotel-rozenburg) | Rozenburg | Statische site zonder build-stap | Live, publiek |
| [De Gouden Kurk](https://github.com/0xtsotsi/de-gouden-kurk-site-1) | Rozenburg | Webshoppreview voor de drankenhandel | Live, publiek |
| [Cafetaria De Zon](https://github.com/0xtsotsi/cafetaria-de-zon) | Zwartewaal | Website voor de snackbar | Live, publiek |
| [Body Action XL](https://github.com/0xtsotsi/body-action-xl) | Rozenburg | Website voor de sportschool met groepslessen | Live, publiek |
| Gevel Helden | Zuid-Holland | Website, merkfilm en social assets | Privé: klantcommerciële inhoud (`0xtsotsi/GevelHelden`) |
| Wesley's Ambacht | Stellendam | Privéconcept met drie stijlrichtingen en een keuzepagina | Privé: concept, geen live site (`0xtsotsi/WesleysAmbacht`) |

## Waarom het gescheiden blijft

Elke klantsite heeft eigen rechten, eigen gegevens en soms eigen
contractafspraken. Eén repository per klant maakt het voor iedereen
eenvoudiger om te zien wat bij wie hoort, en voorkomt dat klantgegevens
openbaar worden.

De WeBrnds-sites zonder klantinhoud staan in deze repository, zodat de
huisstijl, de tokens en de beweging op één plek te vinden zijn.

## Structuur van deze repository

```
sites/webrnds/            de huidige WeBrnds-site (statisch, geen build-stap)
sites/webrnds-website/    de vorige WeBrnds-site (Next.js)
WEBSITES.md               dit overzicht
```
