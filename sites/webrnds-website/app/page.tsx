import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { CycleRing } from "@/components/cycle";
import { ButtonLink, Section, SectionHead } from "@/components/ui";
import { audiences, deliverables, faqs, stappen, tracks } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="rail grid items-center gap-12 py-14 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:py-24">
          <div>
            <h1 className="display text-[clamp(2.25rem,4.6vw,3.5rem)]">
              Wij bouwen je website en blijven je content bijhouden.
            </h1>
            <p className="lead mt-6">
              WEBRNDS is een studio voor lokale bedrijven. Je krijgt een site die snel werkt,
              content in een vaste cadans en iemand die alles bijhoudt zodat jij het niet hoeft
              te doen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Plan een kennismaking</ButtonLink>
              <ButtonLink href="/diensten" variant="secondary">
                Bekijk de diensten
              </ButtonLink>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[21rem]">
            <CycleRing />
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          title="Twee lijnen, één team"
          lead="Wij bouwen de website en maken de content. Dat betekent één aanspreekpunt en één stijl."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          {tracks.map((track) => (
            <div key={track.title} className="border-t border-line-strong pt-5">
              <h3 className="title text-[1.5rem]">{track.title}</h3>
              <p className="mt-3 max-w-prose text-[1rem] text-ink-muted">{track.intro}</p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {track.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem]">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-signaal"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          title="Hoe een round werkt"
          lead="Dezelfde vier stappen, elke round opnieuw. Je weet waar je aan toe bent."
        />
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stappen.map((stap) => (
            <li key={stap.number} className="border-t border-line-strong pt-5">
              <p className="utility text-signaal">{stap.number}</p>
              <h3 className="title mt-2 text-[1.25rem]">{stap.title}</h3>
              <p className="mt-2 text-[0.9375rem] text-ink-muted">{stap.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHead
          title="Voor wie we dit doen"
          lead="Onze klanten hebben één ding gemeen: ze zijn goed in wat ze doen en hebben geen tijd voor de website."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="data-table min-w-[34rem]">
            <caption className="sr-only">
              Type bedrijf en wat er bij dat soort bedrijf vaak speelt
            </caption>
            <thead>
              <tr>
                <th scope="col">Type bedrijf</th>
                <th scope="col">Wat er vaak speelt</th>
              </tr>
            </thead>
            <tbody>
              {audiences.map((audience) => (
                <tr key={audience.type}>
                  <th
                    scope="row"
                    className="border-b border-line py-3.5 pr-8 text-left font-semibold"
                  >
                    {audience.type}
                  </th>
                  <td className="text-ink-muted">{audience.need}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHead title="Wat je krijgt" />
        <div className="mt-10 overflow-x-auto">
          <table className="data-table min-w-[38rem]">
            <caption className="sr-only">Onderdelen, wat je krijgt en hoe vaak</caption>
            <thead>
              <tr>
                <th scope="col">Onderdeel</th>
                <th scope="col">Wat je krijgt</th>
                <th scope="col">Hoe vaak</th>
              </tr>
            </thead>
            <tbody>
              {deliverables.map((item) => (
                <tr key={item.onderdeel}>
                  <th
                    scope="row"
                    className="border-b border-line py-3.5 pr-8 text-left font-semibold"
                  >
                    {item.onderdeel}
                  </th>
                  <td>{item.wat}</td>
                  <td className="whitespace-nowrap text-ink-muted">{item.frequentie}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-[0.9375rem]">
          <Link href="/diensten" className="link">
            Lees wat er precies in zit
          </Link>
        </p>
      </Section>

      <Section>
        <SectionHead title="Vragen die we vaak krijgen" />
        <div className="mt-8 max-w-3xl border-t border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-line">
              <summary className="summary">
                <span>{faq.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-ink-muted transition-transform duration-[180ms] group-open:rotate-180"
                />
              </summary>
              <p className="max-w-prose pb-6 text-[0.9375rem] text-ink-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="border-t border-line bg-zuurstof">
        <div className="rail flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div className="max-w-xl">
            <h2 className="title text-[clamp(1.75rem,3vw,2.375rem)]">
              Begin met een kennismaking van dertig minuten
            </h2>
            <p className="mt-3 text-[1rem] text-on-accent">
              Je vertelt wat er speelt. Wij zeggen wat wij zouden doen en wat dat kost.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="ink">
              Plan een kennismaking
            </ButtonLink>
            <ButtonLink href="/diensten" variant="secondary" className="border-ink text-ink">
              Bekijk de diensten
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
