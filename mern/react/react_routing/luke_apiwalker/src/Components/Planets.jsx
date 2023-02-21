import React, {useEffect, useState, useContext} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import { errorMessageContext } from '../App'

const Planets = () => {
    const {id} = useParams()
    const [data, setData] = useState()
    const [errorMessage, setErrorMessage] = useContext(errorMessageContext)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`).then((response) => {
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
                <h6>Climate: {data.climate}</h6>
                <h6>Terrain: {data.terrain}</h6>
                <h6>Surface Water: {data.surface_water == "1" ? "true" : "false"}</h6>
                
                <h6>Population: {data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
                </>
            }
        </div>
    )
}

export default Planets