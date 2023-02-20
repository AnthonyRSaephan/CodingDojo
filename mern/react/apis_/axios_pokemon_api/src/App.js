import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Display from './Components/Display';
import {useState} from "react"
import axios from "axios"

function App() {
	const [pokemonList, setPokemonList] = useState()
	const [buttonPressed, setButtonPressed] = useState(false)
	const [loading, setLoading] = useState(false)
	let pokemonCount = 807

	// console.log(pokemonList.length)

	const getPokemons = () => {
		if(buttonPressed == false){
			setButtonPressed(true)
			setLoading(true)
			axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(response => {
				const newPokemonList = response.data.results
				setPokemonList(newPokemonList)
			})
			// console.log(newPokemonList)
			
		}
	}

	return (
		<div className="App my-5">
			<button onClick={getPokemons}>
				Fetch Pokemon
			</button>
			
			<Display pokemonList = {pokemonList} loading={loading} />
		</div>
	);
}

export default App;
