import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import { Routes, Route } from "react-router-dom"
import People from './Components/People';
import Planets from './Components/Planets';
import { useState, createContext } from "react"

export const errorMessageContext = createContext()

function App() {
	const [errorMessage, setErrorMessage] = useState()

	return (
		<errorMessageContext.Provider value={[errorMessage, setErrorMessage]}>
			<div className="App">
				<SearchBar />

				<Routes>
					<Route path='/people/:id' element={<People />} />
					<Route path='/planets/:id' element={<Planets />} />
				</Routes>
			</div>
		</errorMessageContext.Provider>
	);
}

export default App;
