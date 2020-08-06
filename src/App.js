import React from 'react';
import useGameLogic from './hooks/useGameLogic'

function App() {
  const {
    text,
    wordCount,
    timeRemaining,
    isPlaying,
    textBoxRef,
    handleChange,
    startGame
  } = useGameLogic(11)

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        ref={textBoxRef}
        placeholder="Start typing here ..."
        value={text}
        onChange={handleChange}  
        disabled={!isPlaying}
      />
      <h4>Time remaining: {timeRemaining} seconds</h4>
      <button 
        disabled={isPlaying} 
        onClick={startGame}
      >
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
