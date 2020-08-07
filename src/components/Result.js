import React from 'react';

function Result({position, result, newHigh}) {

    const wordText = (result === 1 ? "word" : "words");

    return (
        <p className={`results__item ${newHigh}`}>
            Position {position}: <span className="results__item__score">{result} {wordText}</span>
        </p>
    );

};

export default Result;