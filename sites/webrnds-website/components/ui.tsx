import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "ink";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "btn btn-primary"
      : variant === "secondary"
        ? "btn btn-secondary"
        : variant === "accent"
          ? "btn btn-accent"
          : "btn btn-ink";
  return (
    <Link href={href} className={`${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function SectionHead({
  title,
  lead,
  className = "",
}: {
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="title text-[clamp(1.75rem,3vw,2.375rem)]">{title}</h2>
      {lead ? <p className="lead mt-4">{lead}</p> : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-line ${className}`}>
      <div className="rail py-14 md:py-20">{children}</div>
    </section>
  );
}
