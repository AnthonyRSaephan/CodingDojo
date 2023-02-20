import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {useNavigate, Routes, Route} from "react-router-dom"
import Id from './Components/Id';
import ColoredText from "./Components/ColoredText"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path='/:word/:textColor/:backgroundColor' element={<ColoredText />}/>
				<Route path="/:id" element={<Id />}/>
			</Routes>
		</div>
	);
}

export default App;
