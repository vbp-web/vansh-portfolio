const stroke = { stroke: 'currentColor', fill: 'none', vectorEffect: 'non-scaling-stroke' as const }

function Travebie() {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g {...stroke} strokeWidth="1" opacity=".5">
        {[...Array(9)].map((_, i) => (
          <ellipse key={i} cx="400" cy="250" rx={60 + i * 42} ry={30 + i * 26} transform="rotate(-18 400 250)" />
        ))}
        <path d="M0 250H800M400 0V500" opacity=".5" />
      </g>
      <path d="M120 360C240 120 420 420 680 140" {...stroke} strokeWidth="2" strokeDasharray="2 8" />
      <circle cx="120" cy="360" r="7" fill="currentColor" />
      <circle cx="680" cy="140" r="22" {...stroke} strokeWidth="1.5" />
      <circle cx="680" cy="140" r="5" fill="currentColor" />
      <text x="700" y="180" fontSize="11" fontFamily="DM Mono" fill="currentColor" opacity=".7">DEST. 041</text>
    </svg>
  )
}
function ParArc() {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g {...stroke} strokeWidth="1">
        {[...Array(12)].map((_, i) => (
          <path key={i} d={`M${80 + i * 14} 440 A${260 - i * 14} ${260 - i * 14} 0 0 1 ${720 - i * 14} 440`} opacity={0.2 + i * 0.07} />
        ))}
      </g>
      <path d="M80 440H720" {...stroke} strokeWidth="2" />
      <rect x="380" y="60" width="40" height="40" fill="currentColor" />
    </svg>
  )
}
function Sportivo() {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g {...stroke} strokeWidth="1.5">
        <rect x="100" y="70" width="600" height="360" opacity=".6" />
        <path d="M400 70V430" opacity=".6" />
        <circle cx="400" cy="250" r="70" opacity=".6" />
        <rect x="100" y="170" width="80" height="160" opacity=".6" />
        <rect x="620" y="170" width="80" height="160" opacity=".6" />
      </g>
      <path d="M180 360C260 300 330 330 400 250S560 190 640 130" {...stroke} strokeWidth="2.5" />
      <circle cx="640" cy="130" r="9" fill="currentColor" />
      <circle cx="400" cy="250" r="4" fill="currentColor" />
    </svg>
  )
}
function Avirafit() {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g fill="currentColor">
        {[...Array(28)].map((_, i) => {
          const h = 40 + Math.abs(Math.sin(i * 0.5) * 260) + (i % 3) * 20
          return <rect key={i} x={60 + i * 25} y={440 - h} width="14" height={h} opacity={0.25 + (h / 340) * 0.75} />
        })}
      </g>
      <path d="M40 440H760" {...stroke} strokeWidth="1" />
      <circle cx="600" cy="130" r="56" {...stroke} strokeWidth="1.5" />
      <path d="M600 130 600 74A56 56 0 0 1 648 158Z" fill="currentColor" />
    </svg>
  )
}
function Oneverce() {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g {...stroke} strokeWidth="1.5">
        <circle cx="400" cy="250" r="170" opacity=".4" />
        <circle cx="400" cy="250" r="110" opacity=".7" />
        <circle cx="400" cy="250" r="50" />
        <path d="M150 250H650M400 0V500" opacity=".3" />
      </g>
      <circle cx="400" cy="250" r="14" fill="currentColor" />
      <text x="400" y="456" textAnchor="middle" fontSize="13" fontFamily="DM Mono" letterSpacing="6" fill="currentColor" opacity=".7">ONEVERCE</text>
    </svg>
  )
}

export const previews = { Travebie, ParArc, Sportivo, Avirafit, Oneverce }
