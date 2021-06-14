import Landing from './Landing/Landing';
import AboutMe from './AboutMe/AboutMe';
import AllProjects from './AllProjects/AllProjects';
import TechStack from './TechStack/TechStack';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="entire-box">
      <Navbar />
      <Landing />
      <AboutMe />
      <AllProjects />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
