import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm';
import { Route, Routes, useNavigate } from "react-router-dom"
import ProductList from './components/ProductList';
import Details from './views/Details';
import EditProduct from './views/EditProduct';
import axios from "axios"

function App() {

	const navigate = useNavigate()

	const handleDelete = (id) => {
		axios.delete(`http://localhost:8000/api/delete/${id}`)
			.then(response => {
				navigate("/")
			}).catch(error => {
				console.log(error)
			})
	}

	return (
		<div className="App">


			<Routes>
				<Route path="/" element={<><ProductForm /><ProductList handleDelete={handleDelete} /></>} />
				<Route path="/:id" element={<Details handleDelete={handleDelete}/>} />
				<Route path="/:id/edit" element={<EditProduct />} />
			</Routes>
		</div>
	)
}

export default App;
