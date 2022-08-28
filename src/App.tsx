import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Skills from './components/skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
