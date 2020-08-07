import React from 'react';
import useGameLogic from '../hooks/useGameLogic';
import Results from './Results';

function Game() {
    const {
    text,
    wordCount,
    timeRemaining,
    isPlaying,
    results,
    textBoxRef,
    handleChange,
    startGame
    } = useGameLogic(15, 3) 
    //First parameter is game time
    //Second parameter is number of results displayed

    return (
        <>
            <textarea
            ref={textBoxRef}
            value={text}
            onChange={handleChange}  
            disabled={!isPlaying}
            />

            <h4 className="time-remaining">Time remaining: {timeRemaining} seconds</h4>

            <button 
            disabled={isPlaying} 
            onClick={startGame}
            >
            Start
            </button>

            {(results[0] || results[0] === 0) ? <Results wordCount={wordCount} results={results} isPlaying={isPlaying}/> : null} 
        </>
    );
}

export default Game;