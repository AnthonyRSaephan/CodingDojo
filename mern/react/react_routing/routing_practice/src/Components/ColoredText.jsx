import React from 'react'
import {useParams} from "react-router-dom"

const ColoredText = () => {
    const {word, textColor, backgroundColor} = useParams()

    const style = () => {
        return {
            color: textColor,
            backgroundColor: backgroundColor
        }
    }

    return (
        <div>
            <h1 style={style()}>The word is: {word}</h1>
        </div>
    )
}

export default ColoredText