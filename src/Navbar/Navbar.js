import { Link } from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navigation">
      <Link
        to="about-me__nav"
        activeClass="active"
        smooth={true}
        duration={1000}>
        About
      </Link>
      <Link
        to="projects__nav"
        activeClass="active"
        smooth={true}
        duration={1000}>
        Projects
      </Link>
      <Link to="tech__nav" activeClass="active" smooth={true} duration={1000}>
        Technologies
      </Link>
      <Link
        to="contact__nav"
        activeClass="active"
        smooth={true}
        duration={1000}>
        Contact
      </Link>
      <Link to="to-top" activeClass="active" smooth={true} duration={1000}>
        Back To Top
      </Link>
    </nav>
  );
}
