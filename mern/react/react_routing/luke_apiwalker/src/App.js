import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import {Routes, Route} from "react-router-dom"
import People from './Components/People';
import Planets from './Components/Planets';
import Starships from './Components/Starships';

function App() {
	return (
		<div className="App">
			<SearchBar />

			<Routes>
				<Route path='/people/:id' element={<People />} />
				<Route path='/planets/:id' element={<Planets />} />
				<Route path='/starships/:id' element={<Starships />} />
			</Routes>
		</div>
	);
}

export default App;
