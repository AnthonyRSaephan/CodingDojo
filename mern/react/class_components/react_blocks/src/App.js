import React from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import Navigation from './Components/Navigation.jsx';
import Main from './Components/Main.jsx';
import SubContents from './Components/SubContents.jsx';
import Advertisement from './Components/Advertisement.jsx';


function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;

