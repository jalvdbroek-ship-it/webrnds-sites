import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Section, SectionHead } from "@/components/ui";
import { faqs, serviceMatrix, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Website bouwen, content maken en bijhouden. Drie diensten van WEBRNDS voor lokale bedrijven.",
};

export default function DienstenPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="rail py-14 md:py-20">
          <h1 className="display max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)]">
            Drie diensten die elkaar opvolgen
          </h1>
          <p className="lead mt-6">
            Je kunt ze los bestellen, maar ze werken het best als een keten: een website die
            live staat, content die eruit voortkomt en iemand die alles bijhoudt.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <Section key={service.id}>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <p className="utility text-signaal">Dienst {index + 1} van 3</p>
              <h2 className="title mt-2 text-[clamp(1.75rem,3vw,2.375rem)]">{service.title}</h2>
              <p className="mt-4 max-w-prose text-[1rem] text-ink-muted">{service.intro}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-line-strong pt-5">
                <h3 className="text-[1.0625rem] font-semibold">Wat erbij hoort</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {service.includes.map((item) => (
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

              <div className="border-t border-line-strong pt-5">
                <h3 className="text-[1.0625rem] font-semibold">Wat we van je nodig hebben</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {service.needs.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem]">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-zuurstof"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <SectionHead title="In één oogopslag" />
        <div className="mt-10 overflow-x-auto">
          <table className="data-table min-w-[36rem]">
            <caption className="sr-only">Diensten, wat je krijgt en wanneer</caption>
            <thead>
              <tr>
                {serviceMatrix.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {serviceMatrix.rows.map((row) => (
                <tr key={row.onderdeel}>
                  <th
                    scope="row"
                    className="border-b border-line py-3.5 pr-8 text-left font-semibold"
                  >
                    {row.onderdeel}
                  </th>
                  <td>{row.wat}</td>
                  <td className="whitespace-nowrap text-ink-muted">{row.wanneer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
              Weet je niet welke dienst je nodig hebt?
            </h2>
            <p className="mt-3 text-[1rem] text-on-accent">
              Vertel wat er speelt in je bedrijf. Wij zetten het samen in een voorstel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="ink">
              Plan een kennismaking
            </ButtonLink>
            <Link href="/werk" className="btn btn-secondary border-ink text-ink">
              Bekijk het werk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
