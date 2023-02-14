import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import {useState} from 'react'

function App() {
  const [colors, updateColors] = useState([])

  const onUpdateColors = (color, size) => {
    updateColors([...colors, {color, size}])
  }

  return (
    <div>
      <Form createNewBox ={onUpdateColors}/>
      <Display colors={colors}/>
    </div>
  );
}

export default App;
