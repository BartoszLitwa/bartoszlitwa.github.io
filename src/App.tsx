import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
    </div>
  );
}

export default App;
