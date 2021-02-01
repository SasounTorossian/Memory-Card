import React from 'react'

// Component that renders individual cards
export default function Card({id, text, clicked, handleClick}) {
    return (
        <div onClick={handleClick}>
            {text}
        </div>
    )
}
