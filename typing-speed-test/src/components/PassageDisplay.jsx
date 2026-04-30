import { useEffect, useState } from "react";
import typingData from "./data.json";

export default function PassageDisplay({
  difficulty,
  userInput,
  currentPassage,
  setCurrentPassage,
}) {
  useEffect(() => {
    const key = difficulty.toLowerCase();
    const passages = typingData[key];
    if (passages && passages.length > 0) {
      const randomPassage =
        passages[Math.floor(Math.random() * passages.length)];
      setCurrentPassage(randomPassage.text);
    }
  }, [difficulty]);
  return (
    <div className="bg-[#1c1c1e] text-white p-8 rounded-xl shadow-2xl max-w-4xl mx-auto mt-12 font-mono text-2xl leading-relaxed tracking-wide select-none">
      <div className="relative">
        <div className="flex flex-wrap break-word leading-relaxed tracking-widest">
          {currentPassage.split("").map((char, index) => {
            let color = "text-[#646669]"; // Default: Un-typed (Gray)
            let underline = "";
            let bgColor = "";

            // Check characters that have already been typed
            if (index < userInput.length) {
              if (userInput[index] === char) {
                
               
                 color = "text-green-500";
              } else {
                // WRONG: Red and Underline
                color = "text-red-500";
                underline = "underline decoration-red-500";

                // Optional: highlight the space if wrong
                if (char === " ") bgColor = "bg-red-500/30";
              }
            }

            // CURSOR: Current character to be typed
            if (index === userInput.length) {
              underline = "border-l-2 border-yellow-500 animate-pulse";
            }

            return (
              <span
                key={index}
                className={`${color} ${underline} ${bgColor} whitespace-pre-wrap transition-colors duration-100`}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
