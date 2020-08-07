import React from 'react';
import Result from './Result';

function Results({wordCount, results, isPlaying}) {

    return (
        <div className="results">

            <h2 
                className="results__wordcount" 
                style={{visibility:isPlaying ? "hidden" : "initial"}}
            >
                Word count: {wordCount}
            </h2>

            <h3 className="results__top">
                <span role="img" aria-label="star">⭐</span> Top Results <span role="img" aria-label="star">⭐</span>
            </h3>

            {results.map((score, index) => (
                <Result 
                    key={index} 
                    position={index + 1} 
                    result={score} 
                    newHigh={wordCount === score ? "new-high" : null}
                />
            ))}

        </div>
    );
};

export default React.memo(Results);