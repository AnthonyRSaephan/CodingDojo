import React, { useState, useEffect } from 'react'
import axois from "axios"
import { useNavigate, useParams } from "react-router-dom"


const EditProduct = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const {handleDelete} = props

    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        axois.get(`http://localhost:8000/api/${id}`)
            .then(product => {
                const data = product.data
                setTitle(data.title)
                setPrice(data.price)
                setDescription(data.description)
            })
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        axois.put(`http://localhost:8000/api/product/update/${id}`, { title, price, description })
            .then(response => {
                navigate("/")
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >Title</label>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
            <label >Price</label>
            <input type="Number" onChange={e => setPrice(e.target.value)} value={price} />
            <label >Description</label>
            <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
            <button type='submit'>Update</button>
        </form>
    )
}

export default EditProduct


