export default function KaniszaTriangle() {
  return (
    <div className="w-48 h-48 flex items-center justify-center bg-slate-900">
      <svg className="w-40 h-40" viewBox="0 0 200 200">
        {/* Three circles with missing segments (Pac-man shapes) */}
        
        {/* Top circle */}
        <circle cx="100" cy="60" r="30" fill="none" stroke="#ec4899" strokeWidth="8" opacity="0.8" 
          pathLength="100" strokeDasharray="75 100" strokeDashoffset="25" />

        {/* Bottom left circle */}
        <circle cx="50" cy="130" r="30" fill="none" stroke="#a78bfa" strokeWidth="8" opacity="0.8"
          style={{
            transform: 'rotate(120deg)',
            transformOrigin: '50px 130px'
          }} 
          pathLength="100" strokeDasharray="75 100" strokeDashoffset="25" />

        {/* Bottom right circle */}
        <circle cx="150" cy="130" r="30" fill="none" stroke="#fbbf24" strokeWidth="8" opacity="0.8"
          style={{
            transform: 'rotate(-120deg)',
            transformOrigin: '150px 130px'
          }} 
          pathLength="100" strokeDasharray="75 100" strokeDashoffset="25" />

        {/* The invisible triangle edges are suggested by the arrangement */}
        {/* Optional: subtle guides */}
        <line x1="100" y1="90" x2="50" y2="130" stroke="#fff" strokeWidth="0.5" opacity="0.1" strokeDasharray="2,2" />
        <line x1="100" y1="90" x2="150" y2="130" stroke="#fff" strokeWidth="0.5" opacity="0.1" strokeDasharray="2,2" />
        <line x1="50" y1="130" x2="150" y2="130" stroke="#fff" strokeWidth="0.5" opacity="0.1" strokeDasharray="2,2" />
      </svg>
    </div>
  );
}
