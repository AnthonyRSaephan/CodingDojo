import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useContext} from "react"
import { useNavigate } from 'react-router-dom';
import { errorMessageContext } from '../App';

const SearchBar = () => {
    const navigate = useNavigate()

    const [category, setCategory] = useState("people")
    const [id, setId] = useState()
    const [errorMessage, setErrorMessage] = useContext(errorMessageContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='d-flex justify-content-center my-5'>
                <pre>Search for: </pre>
                <select onChange={e => setCategory(e.target.value)} name="searchFor">
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>

                <pre>   ID: </pre>
                <input onChange={e => setId(e.target.value)} type="number" />
                <button>Search</button>

            </form>
            {
                errorMessage && <>
                <p>{errorMessage}</p>
                <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="Obi-Wan Kenobi" />
                </>
            }
        </div>
    )
}

export default SearchBar