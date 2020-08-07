import React from 'react'

function Result({position, result}) {

    return (
        <p className="results__item">Position {position}: {result}</p>
    )

}

export default Result