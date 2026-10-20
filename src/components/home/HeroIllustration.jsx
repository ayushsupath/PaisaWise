export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-0 rounded-[2rem] bg-forest/5 ring-1 ring-forest/10" />
      <div className="absolute inset-4 rounded-[1.5rem] bg-gradient-to-br from-lime/40 via-cream to-sage/30" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#142B27" strokeOpacity="0.06" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />
        <circle cx="320" cy="80" r="28" fill="#D7F5A4" opacity="0.9" />
        <circle cx="70" cy="310" r="18" fill="#A8B9A7" opacity="0.8" />
        <rect x="240" y="260" width="90" height="90" rx="20" fill="#142B27" opacity="0.08" />
        <path
          d="M80 280 L120 220 L160 250 L210 170 L260 210 L310 140"
          fill="none"
          stroke="#142B27"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.35"
        />
        <text x="200" y="215" textAnchor="middle" fontSize="96" fontWeight="800" fill="#142B27" opacity="0.92">
          ₹
        </text>
        <g transform="translate(105 95)">
          <rect width="72" height="44" rx="10" fill="#142B27" opacity="0.12" />
          <rect x="10" y="12" width="52" height="6" rx="3" fill="#142B27" opacity="0.25" />
          <rect x="10" y="26" width="36" height="6" rx="3" fill="#142B27" opacity="0.18" />
        </g>
        <g transform="translate(255 95) rotate(8)">
          <circle cx="24" cy="24" r="24" fill="#D7F5A4" stroke="#142B27" strokeOpacity="0.15" />
          <text x="24" y="31" textAnchor="middle" fontSize="18" fontWeight="700" fill="#142B27">
            ₹
          </text>
        </g>
      </svg>
    </div>
  )
}
