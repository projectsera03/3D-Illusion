export default function RotatingSnakes() {
  return (
    <div className="w-48 h-48 flex items-center justify-center">
      <div className="relative w-40 h-40">
        {Array.from({ length: 4 }).map((_, ringIndex) => (
          <div
            key={ringIndex}
            className="absolute inset-0 rounded-full animate-spin"
            style={{
              animationDuration: `${6 + ringIndex * 2}s`,
              animationDirection: ringIndex % 2 === 0 ? 'normal' : 'reverse',
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => {
              const radius = 20 + ringIndex * 10;
              const angle = (i / 8) * Math.PI * 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: i % 2 === 0 ? '#ec4899' : '#a78bfa',
                    opacity: 0.7,
                  }}
                />
              );
            })}
          </div>
        ))}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full z-10" />
      </div>
    </div>
  );
}
