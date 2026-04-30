import { useEffect, useRef } from "react"

export default function TypingInput({
    userInput,
    setUserInput,
    isTestRunning,
    startTimer,
    isTestFinished,
    mode
}) {
    const inputRef = useRef(null);

    // Focus input on load and when clicking anywhere on the screen
    useEffect(() => {
        inputRef.current.focus();
        const handleGlobalClick = () => inputRef.current.focus();
        window.addEventListener('click', handleGlobalClick);
        return () => window.removeEventListener('click', handleGlobalClick);
    }, []);

    const handleChange = (e) => {
        // if time is up, don't allow typing
        if(isTestFinished && mode === "time") return;

        const value = e.target.value;

    // Start timer on the very first character
        if (!isTestRunning && value.length === 1)
         {
            startTimer();
        }   
        setUserInput(value); 
};
    return(
         <div className="absolute inset-0  z-[-1] opacity-0">
      <textarea
        ref={inputRef}
        value={userInput}
        onChange={handleChange}
        autoFocus
        autoComplete="off"
        autoCapitalize="off"
        spellCheck="false"
        className="cursor-default"
        disabled={isTestFinished && mode === "time"}
      />
    </div>
    );
}