import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import resume from './Heather Berardo Noto 5:3:21.pdf';

export default function Contact() {
  return (
    <>
      <div className="contact-wrapper" id="contact-section">
        <a
          className="contact-icons"
          aria-label="Email Link"
          rel="noreferrer"
          target="_blank"
          href="mailto:heather.noto@gmail.com">
          <EmailIcon fontSize="large" />
        </a>
        <a
          className="contact-icons"
          aria-label="LinkedIn Link"
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/heather-berardo-noto ">
          <LinkedInIcon fontSize="large" />
        </a>
        <h1>
          <center>
            {' '}
            <a
              href={resume}
              aria-label="resume"
              target="blank"
              rel="noopener"
              className="contact-icons">
              <h3>Resume</h3>
            </a>
          </center>
        </h1>
        <a
          className="contact-icons"
          aria-label="GitHub Link"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/heathernoto">
          <GitHubIcon fontSize="large" />
        </a>
        <a
          className="contact-icons"
          aria-label="Medium blog Link"
          rel="noreferrer"
          target="_blank"
          href="https://heather-noto.medium.com/am-i-too-old-for-a-coding-bootcamp-aa24a84b8465">
          <MenuBookIcon fontSize="large" />
        </a>
      </div>
    </>
  );
}
