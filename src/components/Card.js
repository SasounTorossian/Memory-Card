import React, { useState } from 'react'

export default function Card({id, text, clicked, handleClick}) {
    // const [clicked, setClicked] = useState(false)

    // const clickHandler = (e) => {
    //     if(clicked) {
    //         handleClick(0)
    //         // Update high score
    //         // reshuffle with new deck!
    //     }
    //     else {
    //         setClicked(true)
    //         handleClick(0)
    //         // udpate score
    //         // reshuffle sasme deck
    //     }
    // }


    return (
        <div onClick={handleClick}>
            {text}
        </div>
    )
}
