import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav id="nav-bar">
      <Link
        to="about-me-section"
        activeClass="active"
        smooth={true}
        duration={1000}>
        About
      </Link>
      <Link
        to="projects-section"
        activeClass="active"
        smooth={true}
        duration={1000}>
        Projects
      </Link>
      <Link
        to="tech-section"
        activeClass="active"
        smooth={true}
        duration={1000}>
        Technologies
      </Link>
      <Link
        to="contact-section"
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
