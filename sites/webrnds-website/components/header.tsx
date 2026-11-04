"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RoundMark } from "@/components/logo";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Sluit het mobiele menu zodra het pad verandert, ook bij de terugknop.
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="rail flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-ink"
          aria-label="WEBRNDS, naar de homepage"
        >
          <RoundMark size={26} />
          <span className="text-[1.0625rem] font-semibold tracking-[-0.035em]">WEBRNDS</span>
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.9375rem] font-medium transition-colors duration-[120ms] ${
                  active ? "text-signaal" : "text-ink hover:text-signaal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn btn-primary hidden md:inline-flex">
          Plan een kennismaking
        </Link>

        <button
          type="button"
          className="btn btn-secondary md:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          {open ? "Sluiten" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobiel-menu"
          aria-label="Hoofdmenu"
          className="border-t border-line bg-paper md:hidden"
        >
          <ul className="rail flex flex-col gap-1 py-3">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-control px-3 py-2.5 text-[0.9375rem] font-medium ${
                      active ? "text-signaal" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link href="/contact" className="btn btn-primary w-full">
                Plan een kennismaking
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
