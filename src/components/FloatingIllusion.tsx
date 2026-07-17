import { useState } from 'react';

export default function FloatingIllusion() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-8 overflow-hidden">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">🌀 Featured Illusion</h2>
        <p className="text-slate-300">Interactive motion illusion - Move your mouse around the circle</p>
      </div>

      <div
        className="relative h-64 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600/50 flex items-center justify-center cursor-crosshair overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePos({ x: 0, y: 0 });
        }}
      >
        {/* Spiraling circles that respond to mouse */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
          {Array.from({ length: 8 }).map((_, ringIndex) => {
            const radius = 40 + ringIndex * 15;
            const segments = 12;

            return (
              <g key={ringIndex}>
                {Array.from({ length: segments }).map((_, segIndex) => {
                  const angle = (segIndex / segments) * Math.PI * 2;
                  const baseX = 250 + Math.cos(angle) * radius;
                  const baseY = 150 + Math.sin(angle) * radius;

                  // Calculate distance and angle from mouse
                  let distX = baseX - (250 + mousePos.x * 0.2);
                  let distY = baseY - (150 + mousePos.y * 0.2);
                  const dist = Math.sqrt(distX * distX + distY * distY);

                  // Move based on distance
                  const offsetX = isHovered ? Math.cos(angle) * Math.max(0, 40 - dist) * 0.1 : 0;
                  const offsetY = isHovered ? Math.sin(angle) * Math.max(0, 40 - dist) * 0.1 : 0;

                  const x = baseX + offsetX;
                  const y = baseY + offsetY;

                  return (
                    <circle
                      key={segIndex}
                      cx={x}
                      cy={y}
                      r="4"
                      fill={segIndex % 2 === 0 ? '#ec4899' : '#a78bfa'}
                      opacity={0.6 + 0.4 * Math.sin(angle)}
                    />
                  );
                })}
              </g>
            );
          })}

          {/* Center point */}
          <circle cx="250" cy="150" r="6" fill="#fff" opacity="0.8" />
        </svg>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-4 left-4 text-xs text-slate-300 bg-slate-900/80 px-3 py-2 rounded-lg backdrop-blur-sm">
            Motion detection in action! 👀
          </div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-slate-800/50 rounded-lg p-3">
          <div className="text-xl mb-1">👁️</div>
          <p className="text-xs text-slate-400">Visual</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3">
          <div className="text-xl mb-1">🧠</div>
          <p className="text-xs text-slate-400">Cognitive</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3">
          <div className="text-xl mb-1">⚡</div>
          <p className="text-xs text-slate-400">Interactive</p>
        </div>
      </div>
    </div>
  );
}
