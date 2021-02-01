import React from 'react'

// Component that displays the scoreboard above.
export default function ScoreBoard({score, highScore}) {
    return (
        <div>
            {score}
            <br></br>
            {highScore}
        </div>
    )
}
