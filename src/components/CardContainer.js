import React from 'react'

// Component that renders individual cards
export default function CardContainer({id, text, clicked, handleClick}) {
    return (
        <div onClick={handleClick}>
            {text}
        </div>
    )
}
