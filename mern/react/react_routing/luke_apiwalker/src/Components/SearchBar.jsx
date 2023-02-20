import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react"

const SearchBar = () => {
    const [category, setCategory] = useState("people")
    const [id, setId] = useState()

    const handleSubmit = () => {

    }

    return (
        <div>
            <form className='d-flex justify-content-center my-5'>
                <pre>Search for: </pre>
                <select name="searchFor">
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                </select>

                <pre>   ID: </pre>
                <input onChange={e => setId(e.target.value)} type="number" />
                <button>Search</button>

            </form>
        </div>
    )
}

export default SearchBar