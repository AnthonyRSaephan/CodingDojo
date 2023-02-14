import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.length == 0) return
        props.addTask(text)
        setText("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={e => setText(e.target.value)} type='text' />
            <button type='submit'>Add</button>
        </form>
    )
}

export default Form