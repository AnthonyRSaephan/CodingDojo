import React, { useState } from 'react'
import style from '../css/style.module.css'

const Form = (props) => {
    const [color, setColor] = useState("")
    const [size, setSize] = useState(0)

    const submitForm = (e) => {
        e.preventDefault()
        props.createNewBox(color, size)
        setColor("")
        setSize(0)
    }

    return (
        <form className={style.flex} onSubmit={submitForm}>
            <div>
                <p>Color</p>
                <input value={color} onChange={e => setColor(e.target.value)} type="text" />
            </div>
            <div>
                <p>Height/Width</p>
                <input value={size} onChange={e => setSize(e.target.value)} type="number" />
            </div>
            <button type='submit'>Add</button>
        </form>
    )
}

export default Form