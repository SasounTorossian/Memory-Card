import React from 'react'

export default function ScoreBoard({score, highScore}) {

    return (
        <div>
            {score}
            <br></br>
            {highScore}
        </div>
    )
}
