export default function ImpossibleTriangle() {
  return (
    <div className="w-48 h-48 flex items-center justify-center">
      <svg className="w-40 h-40" viewBox="0 0 200 200">
        {/* Penrose Triangle */}
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Bottom left edge */}
          <line x1="50" y1="150" x2="80" y2="110" stroke="#ec4899" strokeWidth="4" />
          <line x1="80" y1="110" x2="70" y2="100" stroke="#9b59b6" strokeWidth="4" />
          <line x1="70" y1="100" x2="50" y2="150" stroke="#6b21a8" strokeWidth="3" opacity="0.6" />

          {/* Right edge */}
          <line x1="80" y1="110" x2="150" y2="150" stroke="#a78bfa" strokeWidth="4" />
          <line x1="150" y1="150" x2="130" y2="160" stroke="#8b5cf6" strokeWidth="4" />
          <line x1="130" y1="160" x2="70" y2="140" stroke="#6b21a8" strokeWidth="3" opacity="0.6" />

          {/* Top edge */}
          <line x1="130" y1="160" x2="100" y2="60" stroke="#fbbf24" strokeWidth="4" />
          <line x1="100" y1="60" x2="80" y2="70" stroke="#f59e0b" strokeWidth="4" />
          <line x1="80" y1="70" x2="80" y2="110" stroke="#6b21a8" strokeWidth="3" opacity="0.6" />

          {/* Inner highlight edges */}
          <line x1="100" y1="60" x2="130" y2="90" stroke="#fbbf24" strokeWidth="2" opacity="0.3" />
          <line x1="130" y1="90" x2="120" y2="130" stroke="#a78bfa" strokeWidth="2" opacity="0.3" />
          <line x1="120" y1="130" x2="80" y2="70" stroke="#fbbf24" strokeWidth="2" opacity="0.3" />
        </g>

        {/* Center point */}
        <circle cx="100" cy="100" r="3" fill="#fff" opacity="0.5" />
      </svg>
    </div>
  );
}
