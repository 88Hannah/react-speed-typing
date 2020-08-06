import React from 'react';
import useGameLogic from './hooks/useGameLogic'

function App() {
  const {
    text,
    wordCount,
    timeRemaining,
    isPlaying,
    results,
    textBoxRef,
    handleChange,
    startGame
  } = useGameLogic(4)

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

      <h2>Word count: {wordCount}</h2>

      {results[0] ? 
        <>
        <h3>Top Results</h3>
        <p>First: {results[0]}</p> 
        </>
        : null}

      {results[1] ? <p>Second: {results[1]}</p> : null}
      {results[2] ? <p>Third: {results[2]}</p> : null}

    </div>
  );
}

export default App;