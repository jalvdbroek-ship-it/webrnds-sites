# WEBRNDS website

De website van WEBRNDS, inclusief de huisstijlpagina die als levend merkhandboek
dient. De merkrichting staat in `DESIGN.md`, de tokens in `lib/tokens.ts`.

## Starten

```bash
npm install
npm run dev
```

De site draait dan op http://localhost:3000.

## Scripts

| Script              | Wat het doet                                                         |
| ------------------- | -------------------------------------------------------------------- |
| `npm run dev`       | Ontwikkelserver                                                      |
| `npm run build`     | Productiebuild                                                       |
| `npm run start`     | Draait de productiebuild                                             |
| `npm run typecheck` | TypeScript met `strict` en `noUncheckedIndexedAccess`                |
| `npm run lint`      | Biome, format en lint in één keer                                    |
| `npm run format`    | Biome format met `--write`                                           |
| `npm run contrast`  | Meet het contrast van elk kleurpaar in licht en donker               |
| `npm run verify:ui` | Browsercontrole op focus, FAQ, reduced motion, emoji en content rail |

`npm run contrast` en `npm run verify:ui` horen groen te zijn voordat je live gaat.
De eerste draait op de broncode, de tweede heeft de server nodig op poort 3000.

## Structuur

```
app/            pagina's: home, diensten, werk, huisstijl, contact
components/     header, footer, contactformulier, het beeldmerk, de rondgang
lib/tokens.ts   kleuren, typografie en beweging als bron van waarheid
lib/site.ts     alle teksten van de site
lib/color.ts    OKLCH naar sRGB en WCAG-contrast
public/brand/   het beeldmerk en de kleuren als downloadbare bestanden
scripts/        contrastmeting en browsercontrole
```

## Nog te doen voor livegang

1. Vervang de voorbeeldgegevens in `lib/site.ts` (e-mail, telefoon, werkgebied).
2. Vervang de voorbeeldprojecten op `/werk` door echte klantcases.
3. Zet `NEXT_PUBLIC_SITE_URL` op het echte domein zodat de metadaten kloppen.
4. Voeg een formulierbackend toe als je aanvragen naar een mailbox wilt ontvangen
   in plaats van naar het e-mailprogramma van de bezoeker.
