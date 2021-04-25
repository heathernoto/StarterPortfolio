// import Navbar from './Navbar';
import Landing from './Landing';
import AboutMe from './AboutMe';
import Projects from './Projects';
import TechStack from './TechStack';
import Contact from './Contact';
//import HeroLanding from './HeroLanding';

function App() {
  return (
    <div className="entire-box">
      {/* <HeroLanding /> */}
      {/* <Navbar /> */}
      <Landing />
      <AboutMe />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
