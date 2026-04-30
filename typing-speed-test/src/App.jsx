import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PassageDisplay from "./components/PassageDisplay";
import TypingInput from "./components/TypingInput";

export default function App() {
  const [time, setTime] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [difficulty, setDifficulty] = useState("medium");
  const [mode, setMode] = useState("time");
  const [typedText, setTypedText] = useState("");
  const [currentPassage, setCurrentPassage] = useState(
    "Sample text to type...",
  );
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
  if (mode === "Passage" && userInput.length === currentPassage.length && currentPassage.length > 0) {
    setIsFinished(true);
    // You can calculate final WPM here
  }
}, [userInput, currentPassage, mode]);


  const startTimer = () => {
    // Only start timer if mode is "Time"
    if(mode !== "time") return;

    setIsTestRunning(true);
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsTestRunning(false);
          setIsTestFinished(true); // Disable typing when time is up
          return 0;
        }
        return prev -1;
      });
    }, 1000);
  };
  return (
    <div className="bg-black">
      <Navbar
        wpm={wpm}
        difficulty={difficulty}
        accuracy={accuracy}
        time={time}
        setDifficulty={setDifficulty}
        mode={mode}
        setMode={setMode}
      />
      <PassageDisplay
        difficulty={difficulty}
        userInput={userInput}
        currentPassage={currentPassage}
        setCurrentPassage={setCurrentPassage}
      />
      {/* Hidden input to capture typing */}
      <input
        autoFocus
        className="opacity-0 absolute"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <TypingInput 
      userInput={userInput}
      setUserInput={setUserInput}
      isTestRunning={isTestRunning}
      startTimer={startTimer}
      isTestFinished={isTestFinished}
      mode={mode}
      />
    </div>
  );
}
