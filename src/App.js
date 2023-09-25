
import './App.scss';
import Home from './containers/home/Home';
import Info from './containers/info/Info';
import TechStack from './components/techstack/TechStack';
import Projects from './containers/projects/Projects';
import Resume from './containers/resume/Resume';

function App() {
  return (
    <>
     <Home/>
     <Info/>
     <TechStack/>
     <Projects/>
     <Resume/>
    </>
  );
}

export default App;
