import Link from "next/link";
import { Wordmark } from "@/components/logo";
import { navigation, services, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="rail py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-flex text-ink"
              aria-label="WEBRNDS, naar de homepage"
            >
              <Wordmark />
            </Link>
            <p className="mt-4 max-w-xs text-[0.9375rem] text-ink-muted">{site.tagline}</p>
            <p className="mt-4 text-[0.9375rem]">
              <a className="link" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </p>
          </div>

          <nav aria-label="Voettekst">
            <h2 className="utility">Pagina&apos;s</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link text-[0.9375rem]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Diensten in de voettekst">
            <h2 className="utility">Diensten</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href="/diensten" className="link text-[0.9375rem]">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[0.8125rem] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} WEBRNDS</p>
          <p>Gebouwd met Next.js, volgens onze eigen huisstijl.</p>
        </div>
      </div>
    </footer>
  );
}
