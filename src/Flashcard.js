import React, { useState } from 'react'

function Flashcard( { flashcard } ) {
    const [flip, setFlip] = useState(false)

    return (
        <div onClick={()=> setFlip(!flip)}>
            {flashcard.question}
        </div> 
    )
}


export default Flashcard;