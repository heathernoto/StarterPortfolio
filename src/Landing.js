import coverPhoto from '../src/images/nycSm.JPEG';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  landingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#192bc2',
  },

  NYC: {
    width: '70%',
    height: 'auto',
    alignSelf: 'center',
    padding: '1rem',
    margin: '2rem',
    backgroundColor: 'whitesmoke',
    border: '1px solid black',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },

  textWrapper: {
    backgroundColor: '#192bc2',
    color: 'whiteSmoke',
    textAlign: 'center',
    padding: '1rem',
    margin: '2rem',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: '3.5rem',
    color: 'whiteSmoke',
    textShadow: '3px 3px black',
  },
  position: {
    fontSize: '2rem',
    textShadow: '3px 3px black',
  },
  icon: {
    color: 'white',
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <Grid container className={classes.landingWrapper} id="to-top">
      <Grid item xs={12} sm={6}>
        <img alt="Heather" src={coverPhoto} className={classes.NYC} />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Grid className={classes.textWrapper} elevation={3}>
          {' '}
          <h1 className={classes.name}>
            Heather
            <br /> Berardo Noto
          </h1>
          <h2 className={classes.position}>Full Stack Software Engineer</h2>
          <Grid item className={classes.links}>
            {/* email */}
            <Link
              className={classes.icon}
              aria-label="Email Link"
              fontSize="large"
              rel="noopener"
              target="_blank"
              href="mailto:heather.noto@gmail.com">
              <EmailIcon className={classes.icon} />
            </Link>
            {/* linkedIn */}

            <Link
              aria-label="LinkedIn"
              rel="noopener"
              fontSize="large"
              target="_blank"
              href="https://www.linkedin.com/in/heather-berardo-noto ">
              <LinkedInIcon className={classes.icon} />
            </Link>
            {/* github */}

            <Link
              className={classes.icon}
              aria-label="GitHub"
              fontSize="large"
              rel="noopener"
              target="_blank"
              href="https://github.com/heathernoto">
              <GitHubIcon className={classes.icon} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
