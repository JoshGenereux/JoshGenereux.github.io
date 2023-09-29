import './App.scss';
import Josh from './components/josh/Josh';
import Landing from './components/landing/Landing';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Josh />
      <Projects />
    </>
  );
}

export default App;
