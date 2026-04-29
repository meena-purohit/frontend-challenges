import { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [time, setTime] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [difficulty, setDifficulty] = useState('medium');
  const [mode, setMode] = useState("timed");
  const [typedText, setTypedText] = useState('');
  const [currentPassage, setCurrentPassage] = useState('Sample text to type...');
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
  return (
    <div>
      
      <Navbar wpm={wpm} difficulty={difficulty} accuracy={accuracy} time={time} setDifficulty={setDifficulty} mode={mode} setMode={setMode}/>
    </div>
  )
}