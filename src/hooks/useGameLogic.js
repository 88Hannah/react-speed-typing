import {useState, useEffect, useRef} from 'react';

function useGameLogic(gameLength, resultsLength = 3) {

    const [ text, setText ] = useState("");
    const [ wordCount, setWordCount ] = useState(0);
    const [ timeRemaining, setTimeRemaining ] = useState(gameLength);
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ results, setResults ] = useState([]);

    const textBoxRef = useRef(null);


    const handleChange = event => {
        const { value } = event.target;
        setText(value);
    };


    const calculateResults = text => {
        const textArray = text.split(" ");
        const wordsOnly = textArray.filter(item => item !== "");
        const newScore = wordsOnly.length;
        setWordCount(newScore);
        setResults(prevResults => {
            const newResults = [...prevResults, newScore].sort((a, b) => b - a);
            return newResults.slice(0, resultsLength);
        });
    };


    useEffect(() => {
    if(timeRemaining > 0 && isPlaying) {
        textBoxRef.current.focus();
        setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1);
        }, 1000)
    } else if(timeRemaining === 0 && isPlaying) {
        endGame();
        }
    }, [timeRemaining, isPlaying]);


    const startGame = () => {
        setIsPlaying(true);
        setTimeRemaining(gameLength);
        setText("");
        setWordCount(0);
    };
    
    
    const endGame = () => {
        setIsPlaying(false);
        calculateResults(text);
    };


    return {
        text,
        wordCount,
        timeRemaining,
        isPlaying,
        results,
        textBoxRef,
        handleChange,
        startGame
    };
};

export default useGameLogic;