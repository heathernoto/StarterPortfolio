import Landing from './Landing';
import AboutMe from './AboutMe';
import Projects from './Projects';
import TechStack from './TechStack';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <div className="entire-box">
      <Navbar />
      <Landing />
      <AboutMe />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
