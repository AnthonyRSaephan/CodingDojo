import React, {useEffect, useState, useContext} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import { errorMessageContext } from '../App'

const People = () => {
    const {id} = useParams()
    const [data, setData] = useState()
    const [errorMessage, setErrorMessage] = useContext(errorMessageContext)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`).then((response) => {
            setData(response.data)
            setErrorMessage()
        }).catch((error) => {
            setErrorMessage("These aren't the droids you're looking for")
            setData()
        })
    }, [id])

    return (
        <div>
            {
                data && <>
                <h1>{data.name}</h1>
                <h6>Height: {data.height}</h6>
                <h6>Mass: {data.mass}</h6>
                <h6>Hair Color: {data.hair_color}</h6>
                <h6>Skin Color: {data.skin_color}</h6>
                </>
            }
        </div>
    )
}

export default People