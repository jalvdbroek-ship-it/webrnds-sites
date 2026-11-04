import { cycle } from "@/lib/site";

/**
 * De rondgang van WEBRNDS. Het punt loopt één keer over de ring en blijft
 * daarna staan. Met prefers-reduced-motion blijft het beeld statisch.
 */
export function CycleRing() {
  const [bouwen, publiceren, meten, bijhouden] = cycle;

  return (
    <figure className="m-0">
      <div className="grid grid-cols-[auto_auto_auto] items-center justify-center gap-x-5 gap-y-4 md:gap-x-8">
        <p className="col-start-2 row-start-1 text-center text-[0.875rem] font-semibold">
          {bouwen.step}
        </p>
        <p className="col-start-1 row-start-2 text-right text-[0.875rem] font-semibold">
          {publiceren.step}
        </p>

        <div className="col-start-2 row-start-2 text-signaal">
          <svg
            viewBox="0 0 32 32"
            className="h-36 w-36 md:h-44 md:w-44"
            role="img"
            aria-label="De rondgang van WEBRNDS: bouwen, publiceren, meten en bijhouden."
          >
            <path
              className="ring-arc"
              d="M26 16A10 10 0 1 1 21 7.34"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <g className="ring-dot">
              <circle cx="24.66" cy="11" r="2.2" fill="currentColor" />
            </g>
          </svg>
        </div>

        <p className="col-start-3 row-start-2 text-left text-[0.875rem] font-semibold">
          {meten.step}
        </p>
        <p className="col-start-2 row-start-3 text-center text-[0.875rem] font-semibold">
          {bijhouden.step}
        </p>
      </div>
      <figcaption className="mt-6 text-center text-[0.8125rem] text-ink-muted">
        Dezelfde vier stappen, elke round opnieuw.
      </figcaption>
    </figure>
  );
}
