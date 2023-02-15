import React from 'react'
import style from '../css/style.module.css'

const Display = (props) => {
    const allColors = props.colors

    const createStyle = ({color, size}) => {
        return {
            backgroundColor: color,
            width: size + "px",
            height: size + "px",
            margin: "15px"
        }
    }

    return (
        <div className={style.flex}>
            {
                allColors.map((data, index) => <div key={index} style={createStyle(data)}></div>)
            }
        </div>
    )
}

export default Display

