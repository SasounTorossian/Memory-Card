import React from 'react'
import Card from "./Card"

// Component that renders array of cards correctly for user to select
export default function CardHolder({deck, handleClick}) {
    return (
        <div>
            {console.log(deck)}
            {deck.map((card) => (
                <Card   
                    key={card.id}
                    id={card.id}
                    text={card.text}
                    clicked={card.clicked}
                    handleClick={() => handleClick(card)}    
                />
            ))}
        </div>
    )
}
