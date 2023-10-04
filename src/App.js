import './App.scss';
import Contact from './components/contact/Contact';
import Josh from './components/josh/Josh';
import Landing from './components/landing/Landing';
import NavBar from './components/navbar/NavBar';
import Project from './components/projects/Project';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Josh />
      <Project />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
