import { Download } from "lucide-react";
import type { Metadata } from "next";
import { RoundMark } from "@/components/logo";
import { Section, SectionHead } from "@/components/ui";
import { contrastRatio, oklchToHex } from "@/lib/color";
import { toneRules, wordAvoid } from "@/lib/site";
import {
  contrastPairs,
  darkTokens,
  lightTokens,
  motionDurations,
  tokenMeta,
  typeScale,
} from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Huisstijl",
  description:
    "De huisstijl van WEBRNDS: kleuren, typografie, beeldmerk, toon en regels voor social media.",
};

const gedachten = [
  {
    title: "Doelgroep",
    text: "Ondernemers in de regio die hun vak kennen en hun handen al vol hebben. Ze willen eruitzijn, niet leren designen.",
  },
  {
    title: "Belofte",
    text: "Je website staat er, je content komt er, en je website blijft kloppen. Zonder dat jij het hoeft te regelen.",
  },
  {
    title: "Toon",
    text: "Vakmanschap en gewone taal. We zeggen wat we doen, wanneer we het doen en wat het kost.",
  },
  {
    title: "Grenzen",
    text: "Geen beloftes over bereik of resultaat, geen jargon en geen woorden als totaaloplossing of digitaal ecosysteem.",
  },
];

const socialRegels = [
  {
    title: "Formaten",
    text: "Vierkant voor het bericht, staand voor verhalen en korte video's. Altijd 4:5 voor tekst, want die neemt meer oppervlakte in.",
  },
  {
    title: "Merkteken",
    text: "Het beeldmerk staat in de rechterbovenhoek, met de ruimte van zijn eigen diameter eromheen.",
  },
  {
    title: "Tekst op beeld",
    text: "Maximaal zeven woorden, in Signaal op papier of inkt op Zuurstof. Nooit een rand om de tekst.",
  },
  {
    title: "Wat er op een post staat",
    text: "Eén ding: een aanbieding, een tip, een resultaat of een moment uit het werk. Geen collage van vier onderwerpen.",
  },
];

export default function HuisstijlPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="rail py-14 md:py-20">
          <h1 className="display max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)]">Huisstijl</h1>
          <p className="lead mt-6">
            Dit is het levende handboek van WEBRNDS. Alles wat je hier ziet, staat ook in de
            website zelf. Gebruik het voor je eigen presentaties, documenten en berichten.
          </p>
        </div>
      </section>

      <Section>
        <SectionHead
          title="Het idee"
          lead="Signaal. Duidelijk zijn wat je doet, zonder het moeilijker te maken dan het is."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {gedachten.map((item) => (
            <div key={item.title} className="border-t border-line-strong pt-5">
              <h3 className="text-[1.0625rem] font-semibold">{item.title}</h3>
              <p className="mt-2 max-w-prose text-[0.9375rem] text-ink-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          title="Kleur"
          lead="Papier als basis, Signaal als werkende kleur en Zuurstof als accent. Alle waarden zijn OKLCH en gemeten op contrast."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tokenMeta.map((token) => {
            const light = lightTokens[token.key];
            const isTextRole = token.key === "onSignal" || token.key === "onAccent";
            const partner =
              token.key === "onSignal" ? lightTokens.signaal : lightTokens.zuurstof;
            return (
              <div key={token.key} className="card">
                <div
                  className="flex h-24 items-center justify-center rounded-surface border border-line"
                  style={
                    isTextRole
                      ? { backgroundColor: partner, color: light }
                      : { backgroundColor: light }
                  }
                >
                  <span className="text-[1.375rem] font-semibold tracking-[-0.02em]">
                    {isTextRole ? "Aa" : ""}
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="text-[1.0625rem] font-semibold">{token.name}</h3>
                  <code className="text-[0.75rem] text-ink-muted">{oklchToHex(light)}</code>
                </div>
                <p className="mt-1 text-[0.8125rem] text-ink-muted">{light}</p>
                <p className="mt-3 text-[0.875rem] font-medium">{token.role}</p>
                <p className="mt-1 text-[0.875rem] text-ink-muted">{token.usage}</p>
              </div>
            );
          })}
        </div>

        <h3 className="title mt-14 text-[1.375rem]">Contrast, gemeten</h3>
        <p className="mt-2 max-w-prose text-[0.9375rem] text-ink-muted">
          Elke kleurcombinatie hieronder is berekend uit de opgeloste sRGB-waarden. De norm is
          WCAG 2.2 AA: 4,5:1 voor tekst, 3:1 voor randen en besturingselementen.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="data-table min-w-[34rem]">
            <caption className="sr-only">Contrastverhoudingen per kleurcombinatie</caption>
            <thead>
              <tr>
                <th scope="col">Combinatie</th>
                <th scope="col">Modus</th>
                <th scope="col">Verhouding</th>
                <th scope="col">Norm</th>
              </tr>
            </thead>
            <tbody>
              {contrastPairs.map((pair) => {
                const tokens = pair.theme === "light" ? lightTokens : darkTokens;
                const ratio = contrastRatio(tokens[pair.fg], tokens[pair.bg]);
                const ok = ratio >= pair.min;
                return (
                  <tr key={`${pair.theme}-${pair.fg}-${pair.bg}`}>
                    <th
                      scope="row"
                      className="border-b border-line py-3.5 pr-8 text-left font-semibold"
                    >
                      {pair.label}
                    </th>
                    <td className="capitalize">
                      {pair.theme === "light" ? "licht" : "donker"}
                    </td>
                    <td className="tabular-nums">{ratio.toFixed(2)}:1</td>
                    <td className={ok ? "text-signaal" : "text-ink"}>
                      {ok ? `voldoet aan ${pair.min}:1` : `te laag, ${pair.min}:1 nodig`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[0.8125rem] text-ink-muted">
          De donkere modus gebruikt dezelfde rollen met eigen waarden. Signaal wordt daar
          lichter, zodat het op donker papier blijft lezen.
        </p>
      </Section>

      <Section>
        <SectionHead
          title="Typografie"
          lead="Eén familie: Archivo. De rolverdeling komt uit gewicht, breedte en afstand, niet uit een tweede lettertype."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card">
            <p className="display text-[2.5rem]">Je content bijgehouden</p>
            <p className="mt-4 text-[1rem] text-ink-muted">
              Voor titels gebruiken we Archivo op brede gewicht: 700, breedte 112 en een
              negatieve letterspacing van 3,5 procent.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table min-w-[26rem]">
              <caption className="sr-only">Typografische schaal</caption>
              <thead>
                <tr>
                  <th scope="col">Token</th>
                  <th scope="col">Grootte</th>
                  <th scope="col">Gebruik</th>
                </tr>
              </thead>
              <tbody>
                {typeScale.map((item) => (
                  <tr key={item.token}>
                    <th
                      scope="row"
                      className="border-b border-line py-3.5 pr-8 text-left font-semibold"
                    >
                      {item.token}
                    </th>
                    <td className="tabular-nums whitespace-nowrap">{item.size}</td>
                    <td className="text-ink-muted">{item.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="border-t border-line-strong pt-4">
            <p className="utility">Display</p>
            <p className="mt-2 text-[1.75rem] leading-tight font-semibold tracking-[-0.03em]">
              Breed en strak
            </p>
          </div>
          <div className="border-t border-line-strong pt-4">
            <p className="utility">Body</p>
            <p className="mt-2 text-[1.0625rem]">Gewone stem, 1,5 regelafstand</p>
          </div>
          <div className="border-t border-line-strong pt-4">
            <p className="utility">Utility</p>
            <p className="mt-2 text-[0.8125rem] font-semibold tracking-[0.03em] uppercase">
              Alleen voor labels
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          title="Beeldmerk"
          lead="Een open ring met een punt in de opening. De ring is de rondgang, het punt is het werk dat nu loopt."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card flex items-center justify-center py-12">
            <RoundMark size={132} className="text-signaal" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card">
              <p className="utility">Op papier</p>
              <div className="mt-4 flex items-center gap-4">
                <RoundMark size={40} className="text-ink" />
                <span className="text-[1.25rem] font-semibold tracking-[-0.035em]">
                  WEBRNDS
                </span>
              </div>
            </div>
            <div className="card bg-ink">
              <p className="utility on-ink">Inversed</p>
              <div className="mt-4 flex items-center gap-4">
                <RoundMark size={40} className="text-paper" />
                <span className="text-[1.25rem] font-semibold tracking-[-0.035em] text-paper">
                  WEBRNDS
                </span>
              </div>
            </div>
            <div className="card">
              <p className="utility">Klein</p>
              <div className="mt-4 flex items-center gap-4">
                <RoundMark size={20} className="text-ink" />
                <RoundMark size={16} className="text-ink" />
                <span className="text-[0.8125rem] text-ink-muted">20 en 16 pixels</span>
              </div>
            </div>
            <div className="card bg-signaal">
              <p className="utility text-on-signal">Op accent</p>
              <div className="mt-4 flex items-center gap-4">
                <RoundMark size={40} className="text-zuurstof" />
                <span className="text-[0.875rem] text-on-signal">
                  Het beeldmerk in Zuurstof, Signaal of inkt.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="border-t border-line-strong pt-4">
            <p className="utility">Ruimte</p>
            <p className="mt-2 text-[0.9375rem]">
              Vrije ruimte van een halve ringdiameter rond het beeldmerk.
            </p>
          </div>
          <div className="border-t border-line-strong pt-4">
            <p className="utility">Minimum</p>
            <p className="mt-2 text-[0.9375rem]">16 pixels hoog in een digitaal beeld.</p>
          </div>
          <div className="border-t border-line-strong pt-4">
            <p className="utility">Bijschrift</p>
            <p className="mt-2 text-[0.9375rem]">
              Altijd het woordmerk ernaast, nooit het merk los van de naam.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          title="Toon en taal"
          lead="Schrijf zoals je tegen een ondernemer praat die het druk heeft."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="data-table min-w-[40rem]">
            <caption className="sr-only">Toonregels met voorbeelden</caption>
            <thead>
              <tr>
                <th scope="col">Regel</th>
                <th scope="col">Zo schrijf je</th>
                <th scope="col">Zo niet</th>
              </tr>
            </thead>
            <tbody>
              {toneRules.map((rule) => (
                <tr key={rule.rule}>
                  <th
                    scope="row"
                    className="border-b border-line py-3.5 pr-8 text-left font-semibold"
                  >
                    {rule.rule}
                  </th>
                  <td className="max-w-xs">{rule.do_}</td>
                  <td className="max-w-xs text-ink-muted">{rule.dont}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-prose text-[0.9375rem] text-ink-muted">
          Woorden die we niet gebruiken: {wordAvoid.join(", ")}.
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              title="Iconen"
              lead="Eén familie: Lucide. Lijniconen van twee pixels op een raster van vierentwintig."
            />
            <ul className="mt-6 flex flex-col gap-3 text-[0.9375rem] text-ink-muted">
              <li>Iconen zijn één kleur: inkt, of wit op een donker vlak.</li>
              <li>Nooit een icon in een gekleurd vierkant of een cirkel eromheen.</li>
              <li>Een icoon zonder tekst krijgt altijd een toegankelijke naam.</li>
              <li>Iconen staan links van de tekst, met een afstand van een halve letter.</li>
            </ul>
          </div>
          <div>
            <SectionHead
              title="Beweging"
              lead="Beweging laat zien wat er verandert. Ze versiert nooit."
            />
            <div className="mt-6 overflow-x-auto">
              <table className="data-table min-w-[22rem]">
                <caption className="sr-only">Duur van beweging</caption>
                <thead>
                  <tr>
                    <th scope="col">Duur</th>
                    <th scope="col">Waarvoor</th>
                  </tr>
                </thead>
                <tbody>
                  {motionDurations.map((item) => (
                    <tr key={item.token}>
                      <th
                        scope="row"
                        className="border-b border-line py-3 pr-8 text-left font-semibold tabular-nums"
                      >
                        {item.value}
                      </th>
                      <td className="text-ink-muted">{item.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[0.9375rem] text-ink-muted">
              Eén moment per pagina: het punt loopt één keer over de ring. Met de voorkeur voor
              minder beweging blijft het beeld staan.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          title="Social media"
          lead="Dezelfde regels, maar met minder ruimte en meer nadruk."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {socialRegels.map((rule) => (
            <div key={rule.title} className="border-t border-line-strong pt-5">
              <h3 className="text-[1.0625rem] font-semibold">{rule.title}</h3>
              <p className="mt-2 max-w-prose text-[0.9375rem] text-ink-muted">{rule.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="card flex aspect-square flex-col justify-between bg-signaal text-on-signal">
            <RoundMark size={22} />
            <p className="text-[1.375rem] leading-tight font-semibold tracking-[-0.02em]">
              Zaterdag open van 10 tot 16 uur
            </p>
          </div>
          <div className="card flex aspect-square flex-col justify-between bg-zuurstof text-on-accent">
            <RoundMark size={22} />
            <p className="text-[1.375rem] leading-tight font-semibold tracking-[-0.02em]">
              Nieuwe kaart: vis van de Noordzee
            </p>
          </div>
          <div className="card flex aspect-square flex-col justify-between">
            <RoundMark size={22} className="text-signaal" />
            <p className="text-[1.375rem] leading-tight font-semibold tracking-[-0.02em]">
              Zo maak je je eigen kerstverlichting
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead title="Bestanden" lead="Klaar om te gebruiken in je eigen projecten." />
        <ul className="mt-8 flex flex-col gap-3">
          {[
            {
              href: "/brand/webrnds-mark.svg",
              label: "Beeldmerk als SVG",
              note: "Zwart, schaalbaar",
            },
            {
              href: "/brand/webrnds-mark-signaal.svg",
              label: "Beeldmerk in Signaal als SVG",
              note: "Voor gebruik op papier of in lichte vlakken",
            },
            {
              href: "/brand/webrnds-tokens.css",
              label: "Kleuren als CSS",
              note: "Alle tokens voor licht en donker",
            },
          ].map((bestand) => (
            <li key={bestand.href}>
              <a
                href={bestand.href}
                download
                className="card flex items-center justify-between gap-4 no-underline transition-colors duration-[120ms] hover:border-line-strong"
              >
                <span>
                  <span className="block font-semibold">{bestand.label}</span>
                  <span className="block text-[0.875rem] text-ink-muted">{bestand.note}</span>
                </span>
                <Download aria-hidden="true" className="size-5 shrink-0 text-signaal" />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
