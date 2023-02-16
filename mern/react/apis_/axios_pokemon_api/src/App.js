import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Display from './Components/Display';
import {useState} from "react"
import axois from "axios"

function App() {
	const [pokemonList, setPokemonList] = useState()
	const [buttonPressed, setButtonPressed] = useState(false)
	const [loading, setLoading] = useState(false)
	let pokemonCount = 807

	// console.log(pokemonList.length)

	const getPokemons = async() => {
		if(buttonPressed == false){
			setButtonPressed(true)
			setLoading(true)
			const newPokemonList = []
			for(let i = 1; i <= pokemonCount; i++){
				await axois.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) => {
					newPokemonList.push(response.data.name)
				}).catch(error => console.log(error))
			}
			// console.log(newPokemonList)
			setPokemonList(newPokemonList)
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
