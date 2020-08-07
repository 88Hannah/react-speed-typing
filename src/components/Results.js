import React from 'react';
import Result from './Result'

function Results({wordCount, results}) {
    console.log(wordCount)
    return (
        <div className="results">

            <h2 className="wordcount">Word count: {wordCount}</h2>

            <h3>Top Results</h3>

            {results.map((score, index) => (<Result key={index} position={index + 1} result={score}/>))}

        </div>
    );
}

export default React.memo(Results);