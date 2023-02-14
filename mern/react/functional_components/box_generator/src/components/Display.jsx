import React from 'react'
import style from '../css/style.module.css'

const Display = (props) => {
    const allColors = props.colors

    return (
        <div className={style.flex}>
            {
                allColors.map((data, index) => {
                    const size = data.size + "px"
                    const color = data.color
                    return <div key={index} style={{backgroundColor:color, width: size, height: size, margin: "15px"}}></div>
                })
            }
        </div>
    )
}

export default Display