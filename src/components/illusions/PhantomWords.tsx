import { useState } from 'react';

export default function PhantomWords() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playTone = () => {
    // Create a simple visual representation of the illusion
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <div className="w-48 h-48 flex items-center justify-center">
      <style>{`
        @keyframes wave {
          0%, 100% { height: 20px; }
          50% { height: 50px; }
        }
        .wave-bar {
          animation: wave 0.5s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={playTone}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            isPlaying
              ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/50'
              : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
          }`}
        >
          {isPlaying ? '🔊 Playing' : '▶️ Play Tone'}
        </button>

        {isPlaying && (
          <div className="flex items-end gap-1 h-12">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="wave-bar w-2 rounded-full bg-gradient-to-t from-purple-400 to-pink-400"
                style={{
                  animationDelay: `${i * 0.06}s`,
                }}
              />
            ))}
          </div>
        )}

        {!isPlaying && (
          <div className="text-center text-slate-400 text-sm">
            <p>Click to hear the</p>
            <p>Shepard Tone illusion</p>
          </div>
        )}
      </div>
    </div>
  );
}
