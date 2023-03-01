import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const ProductList = (props) => {
    const [allProducts, setAllProducts] = useState()
    const navigate = useNavigate()

    const {handleDelete} = props

    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(response => {
                setAllProducts(response.data)
            }).catch(error => {
                console.log(error)
            })
    }, [allProducts])

    return (
        <div>
            <h1>All Products:</h1>
            <ul>
                {
                    allProducts && allProducts.map((product, index) => {
                        return <li key={index}>
                            <Link to={`/${product._id}`} key={index}>{product.title}</Link>
                            <button onClick={() => navigate(`/${product._id}/edit`)}>Edit</button>
                            <button onClick={() => handleDelete(product._id)}>Delete</button>
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default ProductList