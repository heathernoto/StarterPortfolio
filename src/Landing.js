import coverPhoto from '../src/images/nycSm.JPEG';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Landing() {
  return (
    <div className="landing-page-wrapper " id="to-top">
      <img alt="Heather" src={coverPhoto} className="NYC" />

      <div className="landing-text-wrapper">
        {' '}
        <h1 className="landing-name">
          Heather
          <br /> Berardo Noto
        </h1>
        <h2 className="landing-position">Full Stack Software Engineer</h2>
        <div className="landing-links-box">
          {/* email */}
          <a
            className="landing-links"
            aria-label="Email"
            rel="noreferrer"
            target="_blank"
            href="mailto:heather.noto@gmail.com">
            <EmailIcon />
          </a>
          {/* LinkedIn */}

          <a
            className="landing-links"
            aria-label="LinkedIn"
            rel="noreferrer"
            target="_blank"
            href="https://www.aedin.com/in/heather-berardo-noto ">
            <LinkedInIcon />
          </a>
          {/* github */}

          <a
            className="landing-links"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/heathernoto">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
