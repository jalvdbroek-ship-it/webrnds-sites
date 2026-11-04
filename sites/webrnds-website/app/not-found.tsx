import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-b border-line">
      <div className="rail py-20 md:py-28">
        <p className="utility text-signaal">Foutmelding 404</p>
        <h1 className="display mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)]">
          Deze pagina bestaat niet meer
        </h1>
        <p className="lead mt-6">
          De link die je volgde klopt niet. Ga terug naar de homepage of bekijk de diensten.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Naar de homepage
          </Link>
          <Link href="/diensten" className="btn btn-secondary">
            Bekijk de diensten
          </Link>
        </div>
      </div>
    </section>
  );
}
