import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"

const Details = (props) => {
    const [product, setProduct] = useState()
    const {handleDelete} = props

    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`)
            .then(response => {
                setProduct(response.data)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            {

            product && <>
                <p>{product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
            </>
            }
        </div>
    )
}

export default Details