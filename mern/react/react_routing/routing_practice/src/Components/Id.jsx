import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import {useEffect} from "react"

const Id = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(isNaN(+id) == true){
            navigate(`/${id}/black/white`)
            
        }
    }, [])

    return (
        <div>
            <h1>The number is: {id}</h1>
        </div>
    )
}

export default Id