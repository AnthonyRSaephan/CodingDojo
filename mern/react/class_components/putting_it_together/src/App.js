import React from 'react';
import logo from './logo.svg';
import './App.css';

function def(){
  alert("test")
}

function App() {
  return (
    <button onClick={def}>Click Me</button>
  );
}

export default App;


