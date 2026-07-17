import { useState } from 'react';

export default function ColorAfterimage() {
  const [staring, setStaring] = useState(false);

  return (
    <div className="w-48 h-48 flex items-center justify-center">
      <style>{`
        @keyframes pulse-color {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .pulse-color {
          animation: pulse-color 2s ease-in-out infinite;
        }
      `}</style>

      <div className="relative w-32 h-32 cursor-pointer" onClick={() => setStaring(!staring)}>
        {staring ? (
          // Show white area for afterimage effect
          <div className="w-full h-full rounded-lg bg-white flex flex-col items-center justify-center gap-4 pulse-color">
            <div className="text-2xl">👁️</div>
            <p className="text-xs text-slate-400 text-center">See cyan color?</p>
          </div>
        ) : (
          // Show the color to stare at
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex flex-col items-center justify-center gap-4">
            <div className="w-2 h-2 bg-black rounded-full mx-auto mt-4" />
            <p className="text-xs text-white text-center px-2 pb-2">Stare at the dot for 30 sec</p>
          </div>
        )}
      </div>
    </div>
  );
}
