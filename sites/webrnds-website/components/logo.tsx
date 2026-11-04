type MarkProps = {
  className?: string;
  size?: number;
};

/**
 * Het beeldmerk van WEBRNDS: een open ring met een punt in de opening.
 * De ring staat voor de rondgang, het punt voor het werk dat nu loopt.
 */
export function RoundMark({ className = "", size = 26 }: MarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M26 16A10 10 0 1 1 21 7.34"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="24.66" cy="11" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <RoundMark size={24} />
      <span className="text-[1.0625rem] font-semibold tracking-[-0.035em]">WEBRNDS</span>
    </span>
  );
}
