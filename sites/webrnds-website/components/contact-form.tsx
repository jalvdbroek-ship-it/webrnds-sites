"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const onderwerpen = [
  "Een nieuwe website",
  "Content voor social media",
  "Website en content samen",
  "Bijhouden van een bestaande site",
  "Ik weet het nog niet",
];

/**
 * Het formulier verstuurt geen gegevens naar een server. Bij verzenden
 * opent het e-mailprogramma van de bezoeker met de ingevulde tekst, zodat
 * niets verloren gaat en er geen lege belofte in de interface staat.
 */
export function ContactForm() {
  const [hint, setHint] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const naam = String(data.get("naam") ?? "").trim();
    const bedrijf = String(data.get("bedrijf") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const onderwerp = String(data.get("onderwerp") ?? "").trim();
    const bericht = String(data.get("bericht") ?? "").trim();

    if (!naam || !email || !bericht) {
      setHint("Vul naam, e-mailadres en bericht in.");
      return;
    }

    const body = [
      `Naam: ${naam}`,
      bedrijf ? `Bedrijf: ${bedrijf}` : "",
      `E-mail: ${email}`,
      telefoon ? `Telefoon: ${telefoon}` : "",
      `Onderwerp: ${onderwerp}`,
      "",
      bericht,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Kennismaking: ${onderwerp || "nieuwe aanvraag"}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setHint(
      "Je e-mailprogramma gaat open met je bericht. Verstuur het daar om de aanvraag af te ronden.",
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-[0.9375rem] font-medium">
          Naam
          <input className="field" type="text" name="naam" autoComplete="name" required />
        </label>
        <label className="grid gap-1.5 text-[0.9375rem] font-medium">
          Bedrijf
          <input className="field" type="text" name="bedrijf" autoComplete="organization" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-[0.9375rem] font-medium">
          E-mailadres
          <input className="field" type="email" name="email" autoComplete="email" required />
        </label>
        <label className="grid gap-1.5 text-[0.9375rem] font-medium">
          Telefoon
          <input className="field" type="tel" name="telefoon" autoComplete="tel" />
        </label>
      </div>

      <label className="grid gap-1.5 text-[0.9375rem] font-medium">
        Waar wil je mee beginnen?
        <select className="field" name="onderwerp" defaultValue={onderwerpen[0]}>
          {onderwerpen.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1.5 text-[0.9375rem] font-medium">
        Bericht
        <textarea
          className="field"
          name="bericht"
          rows={5}
          placeholder="Wat speelt er nu, en wat zou je willen hebben?"
          required
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary">
          Verstuur je aanvraag
        </button>
        <p className="text-[0.8125rem] text-ink-muted" role="status">
          {hint ?? "We reageren binnen één werkdag."}
        </p>
      </div>
    </form>
  );
}
