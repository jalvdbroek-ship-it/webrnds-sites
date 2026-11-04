import type { Metadata } from "next";
import { ButtonLink, Section, SectionHead } from "@/components/ui";
import { cases } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werk",
  description: "Voorbeeldprojecten van WEBRNDS: websites en content voor lokale bedrijven.",
};

export default function WerkPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="rail py-14 md:py-20">
          <h1 className="display max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)]">
            Drie bedrijven, drie redenen om te beginnen
          </h1>
          <p className="lead mt-6">
            Op deze pagina staan voorbeeldprojecten. Ze laten zien hoe we werken en hoe de
            website en de content elkaar opvolgen. Zodra er echte projecten zijn, staan die
            hier.
          </p>
        </div>
      </section>

      <Section>
        <SectionHead title="Voorbeeldprojecten" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.name} className="card flex flex-col">
              <p className="utility text-signaal">Voorbeeldproject</p>
              <h2 className="title mt-2 text-[1.375rem]">{item.name}</h2>
              <p className="mt-1 text-[0.9375rem] text-ink-muted">{item.sector}</p>

              <h3 className="mt-6 text-[0.9375rem] font-semibold">De situatie</h3>
              <p className="mt-1.5 text-[0.9375rem] text-ink-muted">{item.problem}</p>

              <h3 className="mt-5 text-[0.9375rem] font-semibold">Wat we deden</h3>
              <ul className="mt-1.5 flex flex-col gap-1.5">
                {item.approach.map((line) => (
                  <li key={line} className="flex gap-3 text-[0.9375rem]">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-signaal"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-5 text-[0.9375rem] font-semibold">Wat het opleverde</h3>
              <p className="mt-1.5 text-[0.9375rem] text-ink-muted">{item.result}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-prose text-[0.8125rem] text-ink-muted">
          De namen en bedrijven hierboven zijn voorbeelden. Ze geven de werkwijze van WEBRNDS
          weer en zijn geen klantverhalen.
        </p>
      </Section>

      <section className="border-t border-line bg-zuurstof">
        <div className="rail flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div className="max-w-xl">
            <h2 className="title text-[clamp(1.75rem,3vw,2.375rem)]">
              Jouw project kan hier staan
            </h2>
            <p className="mt-3 text-[1rem] text-on-accent">
              In dertig minuten weet je wat er nodig is en wat het kost.
            </p>
          </div>
          <ButtonLink href="/contact" variant="ink">
            Plan een kennismaking
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
