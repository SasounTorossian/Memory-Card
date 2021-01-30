import React from 'react'
import Card from "./Card"

export default function Board({cards, handleClick}) {
    return (
        <div>
            {cards.map((card) => (
                <div key={card.id}>
                    <Card   
                        id={card.id}
                        text={card.text}
                        clicked={card.clicked}
                        handleClick={() => handleClick(card.id)}    
                    />
                </div>
            ))}
        </div>
    )
}
