export function FurryCharacters({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="fur" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Orange square defender */}
      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="70" height="70" rx="14" fill="#f97316" filter="url(#fur)" />
        <circle cx="22" cy="28" r="5" fill="#2D3436" />
        <circle cx="48" cy="28" r="5" fill="#2D3436" />
        <path d="M28 44 Q35 50 42 44" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" fill="none" />
        <line x1="55" y1="35" x2="75" y2="20" stroke="#92400e" strokeWidth="4" strokeLinecap="round" />
        <polygon points="75,20 70,8 82,14" fill="#92400e" />
        <rect x="-8" y="30" width="18" height="28" rx="3" fill="#fdba74" />
        <path d="M-8 36 L-2 44 L-8 52" stroke="#c2410c" strokeWidth="2" fill="none" />
        <line x1="15" y1="70" x2="12" y2="90" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
        <line x1="55" y1="70" x2="58" y2="90" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Green circle analyst */}
      <g transform="translate(110, 75)">
        <circle cx="35" cy="35" r="38" fill="#84cc16" filter="url(#fur)" />
        <circle cx="22" cy="28" r="5" fill="#2D3436" />
        <circle cx="48" cy="28" r="5" fill="#2D3436" />
        <path d="M28 44 Q35 50 42 44" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="58" cy="22" r="14" fill="none" stroke="#3f6212" strokeWidth="3" />
        <line x1="58" y1="8" x2="58" y2="16" stroke="#3f6212" strokeWidth="3" strokeLinecap="round" />
        <line x1="58" y1="28" x2="58" y2="36" stroke="#3f6212" strokeWidth="3" strokeLinecap="round" />
        <line x1="44" y1="22" x2="52" y2="22" stroke="#3f6212" strokeWidth="3" strokeLinecap="round" />
        <line x1="64" y1="22" x2="72" y2="22" stroke="#3f6212" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="73" x2="16" y2="92" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="73" x2="54" y2="92" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Blue circle hero */}
      <g transform="translate(195, 45)">
        <circle cx="45" cy="45" r="48" fill="#38bdf8" filter="url(#fur)" />
        <path d="M15 15 L75 15 L45 45 Z" fill="#dc2626" />
        <circle cx="32" cy="38" r="5" fill="#2D3436" />
        <circle cx="58" cy="38" r="5" fill="#2D3436" />
        <path d="M38 55 Q45 62 52 55" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" fill="none" />
        <line x1="25" y1="93" x2="20" y2="115" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
        <line x1="65" y1="93" x2="70" y2="115" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Yellow circle support */}
      <g transform="translate(290, 70)">
        <circle cx="35" cy="35" r="38" fill="#facc15" filter="url(#fur)" />
        <rect x="12" y="15" width="46" height="14" rx="6" fill="#854d0e" />
        <rect x="18" y="18" width="16" height="9" rx="3" fill="#fde047" />
        <rect x="36" y="18" width="16" height="9" rx="3" fill="#fde047" />
        <circle cx="22" cy="35" r="4" fill="#2D3436" />
        <circle cx="48" cy="35" r="4" fill="#2D3436" />
        <path d="M30 50 Q35 54 40 50" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" fill="none" />
        <line x1="18" y1="73" x2="14" y2="92" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
        <line x1="52" y1="73" x2="56" y2="92" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Pink triangle methodologist */}
      <g transform="translate(380, 55)">
        <path d="M40 5 L75 75 L5 75 Z" fill="#f472b6" filter="url(#fur)" />
        <rect x="20" y="45" width="12" height="6" rx="2" fill="#2D3436" opacity="0.8" />
        <rect x="48" y="45" width="12" height="6" rx="2" fill="#2D3436" opacity="0.8" />
        <path d="M30 58 Q40 64 50 58" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" fill="none" />
        <rect x="25" y="78" width="30" height="22" rx="3" fill="#fff" />
        <line x1="30" y1="85" x2="50" y2="85" stroke="#be185d" strokeWidth="2" />
        <line x1="30" y1="91" x2="45" y2="91" stroke="#be185d" strokeWidth="2" />
        <line x1="22" y1="75" x2="18" y2="95" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
        <line x1="58" y1="75" x2="62" y2="95" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
