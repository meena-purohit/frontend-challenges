export default function Navbar({
  wpm,
  accuracy,
  time,
  difficulty,
  setDifficulty,
  mode,
  setMode,
}) {
  return (
    <nav className="bg-[#121213] text-[#646669] p-4 font-mono border-b border-gray-800">
      {/* Ek hi main container jo sabko line mein rakhega */}
      <div className="flex flex-row items-center justify-between w-full gap-4">
        {/* 1. Stats Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs opacity-60">WPM:</span>
            <span className="text-xl font-bold text-white">{wpm}</span>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-800 pl-6">
            <span className="text-xs opacity-60">Accuracy:</span>
            <span className="text-xl font-bold text-red-400">{accuracy}%</span>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-800 pl-6">
            <span className="text-xs opacity-60">Time:</span>
            <span className="text-xl font-bold text-yellow-200">{time}</span>
          </div>
        </div>

        {/* 2. Controls Section (Difficulty & Mode) */}
        <div className="flex items-center gap-6">
          {/* Difficulty */}
          <div className="flex items-center gap-2">
            <span className="text-xs opacity-60">Difficulty:</span>
            <div className="flex gap-1">
              {["easy", "medium", "hard"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setDifficulty(lvl)}
                  className={`px-2 py-1 text-xs rounded border transition-all ${
                    difficulty === lvl
                      ? "border-blue-400 text-blue-300"
                      : "border-transparent hover:text-white"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Mode */}
          <div className="flex items-center gap-2">
            <span className="text-xs opacity-60">Mode:</span>
            <div className="flex gap-1">
              {["time", "passage"].map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-2 py-1 text-xs rounded border transition-all ${
                    mode === m
                      ? "border-blue-400 text-blue-300"
                      : "border-transparent hover:text-white"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
