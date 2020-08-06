import React, {useState, useEffect} from 'react';

function App() {

  const GAME_LENGTH = 5

  const [ text, setText ] = useState("");
  const [ wordCount, setWordCount ] = useState(0);
  const [ timeRemaining, setTimeRemaining ] = useState(GAME_LENGTH);
  const [ isPlaying, setIsPlaying ] = useState(false)

  const handleChange = event => {
    const { value } = event.target
    setText(value)
  }

  const calculateWordCount = text => {
    const textArray = text.split(" ")
    const wordsOnly = textArray.filter(item => item !== "")
    setWordCount(wordsOnly.length)
  }

  useEffect(() => {
    if(timeRemaining > 0 && isPlaying) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else if(timeRemaining === 0) {
        endGame()
      }
  }, [timeRemaining, isPlaying])

  const startGame = () => {
    setIsPlaying(true)
    setTimeRemaining(GAME_LENGTH)
    setText("")
  }
  
  
  const endGame = () => {
    setIsPlaying(false)
    calculateWordCount(text)
  }

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
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
