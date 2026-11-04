import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Section, SectionHead } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Plan een kennismaking met WEBRNDS. Vertel wat er speelt, wij zeggen wat wij zouden doen.",
};

const vervolg = [
  {
    step: "01",
    title: "Je stuurt je aanvraag",
    text: "Je vult het formulier in. Hoe uitgebreider je vraag, hoe gerichter ons antwoord.",
  },
  {
    step: "02",
    title: "We bellen binnen één werkdag",
    text: "Een gesprek van een half uur. We vragen door tot we weten wat je nodig hebt.",
  },
  {
    step: "03",
    title: "Je krijgt een voorstel",
    text: "Inclusief wat we zouden doen, in welke volgorde en wat het per maand kost.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="rail py-14 md:py-20">
          <h1 className="display max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)]">
            Begin met een gesprek van een half uur
          </h1>
          <p className="lead mt-6">
            Vertel wat er speelt: je hebt nog geen site, je site is verouderd of je content
            blijft liggen. Wij zeggen wat wij zouden doen en wat dat kost.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h2 className="title text-[1.5rem]">Stuur een bericht</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="lg:border-l lg:border-line lg:pl-10">
            <h2 className="title text-[1.5rem]">Rechtstreeks</h2>
            <ul className="mt-6 flex flex-col gap-4 text-[0.9375rem]">
              <li>
                <span className="utility block">E-mail</span>
                <a className="link" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </li>
              <li>
                <span className="utility block">Telefoon</span>
                <a className="link" href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <span className="utility block">Werkgebied</span>
                <span className="text-ink-muted">{site.contact.city}</span>
              </li>
            </ul>

            {site.contact.isPlaceholder ? (
              <p className="mt-6 border-l-2 border-zuurstof pl-4 text-[0.875rem] text-ink-muted">
                Dit zijn nog voorbeeldgegevens. Vervang ze door je echte e-mailadres,
                telefoonnummer en werkgebied voordat de site live gaat.
              </p>
            ) : null}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead title="Wat er daarna gebeurt" />
        <ol className="mt-10 grid gap-8 sm:grid-cols-3">
          {vervolg.map((item) => (
            <li key={item.step} className="border-t border-line-strong pt-5">
              <p className="utility text-signaal">{item.step}</p>
              <h3 className="title mt-2 text-[1.25rem]">{item.title}</h3>
              <p className="mt-2 text-[0.9375rem] text-ink-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
