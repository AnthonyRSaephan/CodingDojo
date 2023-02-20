import React, {useState} from 'react'

const Display = (props) => {
    const {pokemonList, loading} = props

    const listStyle = () => {
        return {
            listStyleType : "none"
        }
    }

    const testArray = ["a", "b", "c"]

    return (
        <div>
            <ul>
                {/* {console.log(pokemonList ? pokemonList[0] : '')} */}
                {
                    pokemonList ? 
                    pokemonList.map((item, index) => {
                        return <li key={index} style={listStyle()}>{item.name}</li>
                    })
                    // pokemonList.map((pokemon, index) => {
                    //     return "hello"
                    // })
                    :
                    <li style={listStyle()}>{loading ? "Loading..." : "Fetch a pokemon"}</li>
                }
            </ul>
        </div>
    )
}

export default Display