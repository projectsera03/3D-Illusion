export default function HeaderSection() {
  return (
    <div className="relative pt-16 pb-12 text-center">
      <div className="space-y-4">
        <div className="inline-block">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
              <span className="text-2xl">👁️</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              Optical Illusions
            </h1>
          </div>
        </div>
        
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Experience mind-bending visual phenomena that challenge your perception
        </p>
        
        <div className="flex justify-center gap-4 pt-4">
          <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/50 text-purple-200 text-sm">
            ✨ Interactive
          </div>
          <div className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/50 text-pink-200 text-sm">
            🧬 Scientific
          </div>
          <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-200 text-sm">
            🎨 Visual
          </div>
        </div>
      </div>
    </div>
  );
}
