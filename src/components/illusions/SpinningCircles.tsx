export default function SpinningCircles() {
  return (
    <div className="w-48 h-48 flex items-center justify-center">
      <div className="relative w-40 h-40">
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full z-10" />

        {/* Rotating circle with segments */}
        <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: '3s' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full"
              style={{
                transform: `rotate(${(i * 45)}deg)`,
              }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-purple-400 to-purple-300 opacity-70" />
            </div>
          ))}
        </div>

        {/* Static counterpoint segments */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x1 = 100 + Math.cos(angle) * 80;
            const y1 = 100 + Math.sin(angle) * 80;
            const nextAngle = ((i + 1) / 12) * Math.PI * 2;
            const x2 = 100 + Math.cos(nextAngle) * 80;
            const y2 = 100 + Math.sin(nextAngle) * 80;

            return (
              <path
                key={i}
                d={`M ${x1} ${y1} L ${x2} ${y2}`}
                stroke={i % 2 === 0 ? '#ec4899' : '#a78bfa'}
                strokeWidth="2"
                opacity="0.6"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
