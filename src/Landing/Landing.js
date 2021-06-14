import coverPhoto from '../images/nycSm.JPEG';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Landing.css';

export default function Landing() {
  return (
    <section className="landing " id="to-top">
      <div className="landing__img">
        <img alt="Heather" src={coverPhoto} className="NYC" />
      </div>
      <div className="landing__text">
        {' '}
        <h1 className="landing__name">
          Heather
          <br /> Berardo Noto
        </h1>
        <h2 className="landing__position">
          Full Stack
          <br />
          Software Engineer
        </h2>
        <div className="landing__links-box">
          <a
            className="landing__links"
            aria-label="LinkedIn"
            rel="noreferrer"
            target="_blank"
            href="https://www.aedin.com/in/heather-berardo-noto ">
            <LinkedInIcon />
          </a>

          <a
            className="landing__links"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/heathernoto">
            <GitHubIcon />
          </a>
          <a
            className="landing__links"
            aria-label="Email"
            rel="noreferrer"
            target="_blank"
            href="mailto:heather.noto@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
