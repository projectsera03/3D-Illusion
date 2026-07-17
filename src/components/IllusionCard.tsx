import { useState } from 'react';
import SpinningCircles from './illusions/SpinningCircles';
import NeckerCube from './illusions/NeckerCube';
import RotatingSnakes from './illusions/RotatingSnakes';
import BreathingCircle from './illusions/BreathingCircle';
import ImpossibleTriangle from './illusions/ImpossibleTriangle';
import KaniszaTriangle from './illusions/KaniszaTriangle';
import ColorAfterimage from './illusions/ColorAfterimage';
import PhantomWords from './illusions/PhantomWords';

interface IllusionCardProps {
  illusion: {
    id: number;
    title: string;
    category: string;
    description: string;
    component: string;
    explanation: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

const illustionComponents: Record<string, () => React.ReactNode> = {
  SpinningCircles,
  NeckerCube,
  RotatingSnakes,
  BreathingCircle,
  ImpossibleTriangle,
  KaniszaTriangle,
  ColorAfterimage,
  PhantomWords,
};

export default function IllusionCard({ illusion, isSelected, onSelect }: IllusionCardProps) {
  const [showExplanation, setShowExplanation] = useState(false);
  const IllusionComponent = illustionComponents[illusion.component];

  const categoryColors: Record<string, string> = {
    'Motion': 'bg-blue-500/20 text-blue-300 border-blue-400/50',
    'Depth Perception': 'bg-purple-500/20 text-purple-300 border-purple-400/50',
    'Motion & Size': 'bg-pink-500/20 text-pink-300 border-pink-400/50',
    'Impossible Objects': 'bg-red-500/20 text-red-300 border-red-400/50',
    'Contour & Shape': 'bg-green-500/20 text-green-300 border-green-400/50',
    'Color Perception': 'bg-yellow-500/20 text-yellow-300 border-yellow-400/50',
    'Auditory/Perceptual': 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
  };

  return (
    <div
      onClick={onSelect}
      className={`rounded-lg border transition-all duration-300 cursor-pointer overflow-hidden
        ${isSelected
          ? 'border-white/50 bg-slate-700/80 shadow-2xl shadow-purple-500/50 scale-105'
          : 'border-slate-600/50 bg-slate-800/50 hover:border-slate-500/80 hover:bg-slate-700/70'
      }`}
    >
      {/* Illusion Preview */}
      <div className="h-48 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border-b border-slate-600/50 overflow-hidden">
        {IllusionComponent && <IllusionComponent />}
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-white">{illusion.title}</h3>
            <span className={`px-2 py-1 rounded text-xs font-semibold border ${categoryColors[illusion.category]}`}>
              {illusion.category}
            </span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{illusion.description}</p>
        </div>

        {/* Expandable Explanation */}
        {isSelected && (
          <div className="pt-4 border-t border-slate-600/50 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowExplanation(!showExplanation);
              }}
              className="w-full px-4 py-2 rounded-lg bg-purple-500/30 hover:bg-purple-500/50 text-purple-200 text-sm font-semibold transition-colors"
            >
              {showExplanation ? '🔽 Hide Explanation' : '📚 Show Explanation'}
            </button>

            {showExplanation && (
              <div className="bg-slate-900/50 rounded-lg p-4 text-slate-300 text-sm leading-relaxed animate-in fade-in duration-200">
                <p className="text-purple-300 font-semibold mb-2">Why does this happen?</p>
                <p>{illusion.explanation}</p>
              </div>
            )}
          </div>
        )}

        {/* Click hint */}
        <div className="pt-2 text-center">
          <p className="text-xs text-slate-400">{isSelected ? '↑ Click to minimize' : '↑ Click to expand'}</p>
        </div>
      </div>
    </div>
  );
}
