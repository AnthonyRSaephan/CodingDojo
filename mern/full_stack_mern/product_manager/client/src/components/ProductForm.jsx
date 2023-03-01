import React, {useState} from 'react'
import axois from "axios"

const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        axois.post("http://localhost:8000/api/create", {title, price, description})
            .then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >Title</label>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
            <label >Price</label>
            <input type="Number" onChange={e => setPrice(e.target.value)} value={price} />
            <label >Description</label>
            <input type="text" onChange={e => setDescription(e.target.value)} value={description}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ProductForm