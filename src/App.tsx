import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Skills from './components/skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
