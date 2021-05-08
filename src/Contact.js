import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: 'lightGrey',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '2rem ',
  },
  icon: {
    color: 'black',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} id="contact-section">
      <Link
        className={classes.icon}
        aria-label="Email Link"
        rel="noopener"
        target="_blank"
        href="mailto:heather.noto@gmail.com">
        <EmailIcon fontSize="large" />
      </Link>
      <Link
        className={classes.icon}
        aria-label="LinkedIn Link"
        rel="noopener"
        target="_blank"
        href="https://www.linkedin.com/in/heather-berardo-noto ">
        <LinkedInIcon fontSize="large" />
      </Link>

      <h1>
        <center>Let's connect!</center>
      </h1>

      <Link
        className={classes.icon}
        aria-label="GitHub Link"
        rel="noopener"
        target="_blank"
        href="https://github.com/heathernoto">
        <GitHubIcon fontSize="large" />
      </Link>
      <Link
        className={classes.icon}
        aria-label="Medium blog Link"
        rel="noopener"
        target="_blank"
        href="https://heather-noto.medium.com/am-i-too-old-for-a-coding-bootcamp-aa24a84b8465">
        <MenuBookIcon fontSize="large" />
      </Link>
    </div>
  );
}
