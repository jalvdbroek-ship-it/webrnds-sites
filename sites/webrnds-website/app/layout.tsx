import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { site } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Websites bouwen en content bijhouden`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} | Websites bouwen en content bijhouden`,
    description: site.tagline,
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={archivo.variable}>
      <body>
        <a
          href="#hoofdinhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-signaal focus:px-4 focus:py-2 focus:text-on-signal"
        >
          Naar de inhoud
        </a>
        <SiteHeader />
        <main id="hoofdinhoud">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
