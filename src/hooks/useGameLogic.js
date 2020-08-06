import {useState, useEffect, useRef} from 'react'

function useGameLogic(gameLength) {

    const [ text, setText ] = useState("");
    const [ wordCount, setWordCount ] = useState(0);
    const [ timeRemaining, setTimeRemaining ] = useState(gameLength);
    const [ isPlaying, setIsPlaying ] = useState(false) 

    const textBoxRef = useRef(null)



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
        textBoxRef.current.focus()
        setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
        }, 1000)
    } else if(timeRemaining === 0) {
        endGame()
        }
    }, [timeRemaining, isPlaying])


    const startGame = () => {
        setIsPlaying(true)
        setTimeRemaining(gameLength)
        setText("")
    }
    
    
    const endGame = () => {
        setIsPlaying(false)
        calculateWordCount(text)
    }


    return {
        text,
        wordCount,
        timeRemaining,
        isPlaying,
        textBoxRef,
        handleChange,
        startGame
    }
}

export default useGameLogic