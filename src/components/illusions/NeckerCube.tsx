export default function NeckerCube() {
  return (
    <div className="w-48 h-48 flex items-center justify-center">
      <svg className="w-40 h-40" viewBox="0 0 200 200">
        {/* Front face */}
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Back edges (lighter) */}
          <line x1="50" y1="50" x2="100" y2="20" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
          <line x1="100" y1="20" x2="150" y2="50" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
          <line x1="50" y1="50" x2="100" y2="80" stroke="#6366f1" strokeWidth="2" opacity="0.4" />

          {/* Front edges (solid) */}
          <line x1="50" y1="50" x2="50" y2="150" stroke="#ec4899" strokeWidth="3" />
          <line x1="50" y1="150" x2="150" y2="150" stroke="#ec4899" strokeWidth="3" />
          <line x1="150" y1="150" x2="150" y2="50" stroke="#ec4899" strokeWidth="3" />
          <line x1="150" y1="50" x2="50" y2="50" stroke="#ec4899" strokeWidth="3" />

          {/* Top edges */}
          <line x1="100" y1="20" x2="150" y2="50" stroke="#a78bfa" strokeWidth="2" />
          <line x1="100" y1="80" x2="150" y2="50" stroke="#a78bfa" strokeWidth="2" opacity="0.6" />
          <line x1="100" y1="20" x2="100" y2="80" stroke="#a78bfa" strokeWidth="2" opacity="0.6" />

          {/* Bottom right edge */}
          <line x1="150" y1="150" x2="100" y2="180" stroke="#fbbf24" strokeWidth="2" opacity="0.7" />
          <line x1="100" y1="180" x2="50" y2="150" stroke="#fbbf24" strokeWidth="2" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
