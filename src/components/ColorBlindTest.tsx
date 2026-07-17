import { useState } from 'react';

export default function ColorBlindTest() {
  const [selectedTest, setSelectedTest] = useState<number | null>(null);

  const colorTests = [
    {
      id: 1,
      title: "Ishihara Plate 1",
      description: "A classic color blindness test plate",
      dots: Array.from({ length: 200 }).map(() => ({
        color: Math.random() > 0.7 ? '#ff6b6b' : '#4ecdc4',
        opacity: Math.random() * 0.8 + 0.3,
      })),
      answer: "Can you see a number?",
    },
    {
      id: 2,
      title: "Color Matching",
      description: "Test your ability to match colors",
      dots: Array.from({ length: 200 }).map(() => ({
        color: Math.random() > 0.5 ? '#f39c12' : '#f9ca24',
        opacity: Math.random() * 0.8 + 0.3,
      })),
      answer: "Similar shades are harder to distinguish",
    },
    {
      id: 3,
      title: "Hue Saturation",
      description: "Evaluate color saturation perception",
      dots: Array.from({ length: 200 }).map(() => ({
        color: Math.random() > 0.5 ? '#9b59b6' : '#8e44ad',
        opacity: Math.random() * 0.8 + 0.3,
      })),
      answer: "Notice the subtle purple variations",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">🎨 Color Perception Tests</h2>
        <p className="text-slate-300">These are visual representations inspired by color blindness test patterns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {colorTests.map((test) => (
          <div
            key={test.id}
            onClick={() => setSelectedTest(selectedTest === test.id ? null : test.id)}
            className={`rounded-lg border-2 transition-all cursor-pointer ${
              selectedTest === test.id
                ? 'border-pink-500 bg-slate-700/60 shadow-lg shadow-pink-500/30'
                : 'border-slate-600/50 bg-slate-800/50 hover:border-slate-500'
            }`}
          >
            {/* Dot pattern display */}
            <div className="h-48 bg-slate-900 p-4 rounded-t-md flex flex-wrap items-center justify-center gap-1 overflow-hidden">
              {test.dots.map((dot, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: dot.color,
                    opacity: dot.opacity,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-white">{test.title}</h3>
              <p className="text-sm text-slate-300">{test.description}</p>

              {selectedTest === test.id && (
                <div className="bg-purple-500/20 border border-purple-400/50 rounded-lg p-3 text-purple-200 text-sm animate-in fade-in">
                  <p className="font-semibold mb-1">Result:</p>
                  <p>{test.answer}</p>
                </div>
              )}

              <button className="w-full py-2 px-3 rounded-lg bg-purple-500/30 hover:bg-purple-500/50 text-purple-200 text-sm font-semibold transition-colors">
                {selectedTest === test.id ? '✓ Viewing' : 'View Test'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info section */}
      <div className="mt-8 bg-blue-500/10 border border-blue-400/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <span className="text-xl">ℹ️</span> About Color Blindness
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Color blindness affects how people perceive certain colors. The most common types are red-green and blue-yellow color blindness.
          These tests are visual representations inspired by Ishihara plates used to diagnose color vision deficiency. If you suspect
          you may have color blindness, consult with an eye care professional for proper testing.
        </p>
      </div>
    </div>
  );
}
