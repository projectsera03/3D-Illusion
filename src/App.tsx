import { useState } from 'react';
import IllusionCard from './components/IllusionCard';
import HeaderSection from './components/HeaderSection';
import FloatingIllusion from './components/FloatingIllusion';
import ColorBlindTest from './components/ColorBlindTest';

export default function App() {
  const [selectedIllusion, setSelectedIllusion] = useState<number | null>(null);

  const illusions = [
    {
      id: 1,
      title: "Spinning Circles",
      category: "Motion",
      description: "Stare at the center dot. The circles appear to rotate, but they're actually static!",
      component: "SpinningCircles",
      explanation: "This illusion is caused by the 'barber pole illusion' - our brains interpret the intersecting lines as movement. The motion is perceived in one direction due to contrast changes."
    },
    {
      id: 2,
      title: "The Necker Cube",
      category: "Depth Perception",
      description: "Watch as this cube seems to flip between two different orientations. Your brain can't decide which face is in front!",
      component: "NeckerCube",
      explanation: "This is a classic ambiguous figure. Your brain creates two possible 3D interpretations of the 2D image, and alternates between them based on which interpretation seems more natural."
    },
    {
      id: 3,
      title: "Rotating Snakes",
      category: "Motion",
      description: "The snakes appear to be moving in a circle, but try to focus on one - it stops moving!",
      component: "RotatingSnakes",
      explanation: "This motion illusion occurs due to the eye's saccades (quick movements) combined with the color contrasts. Each saccade creates the illusion of movement."
    },
    {
      id: 4,
      title: "Breathing Circle",
      category: "Motion & Size",
      description: "Watch how the central circle appears to breathe and expand/contract, though it remains the same size.",
      component: "BreathingCircle",
      explanation: "The surrounding visual context creates a size illusion through contrast. Our perception of size is relative to surrounding elements."
    },
    {
      id: 5,
      title: "The Impossible Triangle",
      category: "Impossible Objects",
      description: "An object that seems possible from certain angles but violates the laws of 3D geometry.",
      component: "ImpossibleTriangle",
      explanation: "Also known as the Penrose Triangle, this object tricks our brain by combining perspective cues that are impossible in 3D space."
    },
    {
      id: 6,
      title: "Kanizsa Triangle",
      category: "Contour & Shape",
      description: "Do you see a white triangle in the center? Your brain creates contours that aren't actually there!",
      component: "KaniszaTriangle",
      explanation: "We perceive shapes that aren't explicitly drawn through a process called illusory contours or subjective contours, where the brain fills in missing information."
    },
    {
      id: 7,
      title: "Color Afterimage",
      category: "Color Perception",
      description: "Stare at the cross in the center for 30 seconds, then look at the white area. You'll see the opposite color!",
      component: "ColorAfterimage",
      explanation: "This is caused by the adaptation of photoreceptor cells in your retina. When the cells stop being stimulated by a color, the opposite color appears as an afterimage."
    },
    {
      id: 8,
      title: "Phantom Words",
      category: "Auditory/Perceptual",
      description: "The same word repeated. Your brain perceives it changing, even when it's identical!",
      component: "PhantomWords",
      explanation: "The 'Shepard tone' creates an auditory illusion of continuously rising or falling pitch. The brain perceives change even in repetition."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <HeaderSection />
        
        {/* Featured Floating Illusion */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <FloatingIllusion />
        </div>

        {/* Illusions Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Classic Illusions</h2>
            <p className="text-slate-300 text-lg">Explore mind-bending visual phenomena</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {illusions.map((illusion) => (
              <IllusionCard
                key={illusion.id}
                illusion={illusion}
                isSelected={selectedIllusion === illusion.id}
                onSelect={() => setSelectedIllusion(selectedIllusion === illusion.id ? null : illusion.id)}
              />
            ))}
          </div>
        </div>

        {/* Color Blind Test Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <ColorBlindTest />
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8 text-center text-slate-400">
            <p>🧠 Optical illusions showcase - Explore the limits of human perception</p>
            <p className="text-sm mt-2">All illusions are non-harmful and designed for educational purposes.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
