export default function BreathingCircle() {
  return (
    <div className="w-48 h-48 flex items-center justify-center">
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.4); }
        }
        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .breath-circle {
          animation: breathe 3s ease-in-out infinite;
        }
        .breath-ring {
          animation: pulse-opacity 3s ease-in-out infinite;
        }
      `}</style>
      
      <div className="relative w-36 h-36">
        {/* Surrounding circles */}
        <div className="absolute inset-0 rounded-full border-2 border-purple-400/30" />
        <div className="absolute inset-4 rounded-full border-2 border-pink-400/30" />
        <div className="absolute inset-8 rounded-full border-2 border-blue-400/30" />

        {/* Central breathing circle */}
        <div className="breath-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-500/50" />

        {/* Breathing ring */}
        <div className="breath-ring absolute inset-6 rounded-full border-2 border-purple-300/50" />
      </div>
    </div>
  );
}
