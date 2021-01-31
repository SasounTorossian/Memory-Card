import React, { useState } from 'react'

export default function Card({id, text, clicked, handleClick}) {
    return (
        <div onClick={handleClick}>
            {text}
        </div>
    )
}
