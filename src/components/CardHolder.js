import React, { useState, useEffect } from 'react'
import Card from "./Card"

export default function CardHolder({cards, handleClick}) {

    return (
        <div>
            {console.log(cards)}
            {cards.map((card) => (
                <Card   
                    key={card.id}
                    id={card.id}
                    text={card.text}
                    clicked={card.clicked}
                    handleClick={() => handleClick(card.id)}    
                />
            ))}
        </div>
    )
}
