import coverPhoto from '../src/images/tubcropped.JPG';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  landingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bathtub: {
    width: '90%',
    zIndex: -1,
    position: 'static',
  },

  textWrapper: {
    marginTop: '2rem',
    padding: '.1rem',
    zIndex: 1,
    border: '5px double #331a00',
    marginBottom: '15rem',
    position: 'absolute',
    backgroundColor: '#fcd9e1',
  },
  textBox: {
    padding: '.5rem',
    backgroundColor: 'aliceBlue',
    color: '#383d4f',
    border: '5px double #331a00',
    textShadow:
      '-1px -1px 0 #fcd9e1, 1px -1px 0 #fcd9e1, -1px 1px 0 #fcd9e1, 1px 1px 0 #fcd9e1',
  },
  name: {
    fontSize: '2rem',
    color: '#383d4f',
  },
  position: {
    fontSize: '1.7rem',
    color: '#383d4f',
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <Grid container className={classes.landingWrapper}>
      <img alt="Beltway Bathtub" src={coverPhoto} className={classes.bathtub} />

      <Fade in direction="left" timeout={4000}>
        <Paper className={classes.textWrapper} elevation={3} square>
          <Paper
            id="banner-backer"
            className={classes.textBox}
            elevation={3}
            square>
            <center>
              {' '}
              <h1 className={classes.name}>Heather Berardo Noto</h1>
              <h2 className={classes.position}>Full Stack Software Engineer</h2>
              {/* email */}
              <Link
                aria-label="Email Link"
                color="inherit"
                fontSize="large"
                rel="noopener"
                target="_blank"
                href="mailto:heather.noto@gmail.com">
                <EmailIcon />
              </Link>
              {/* linkedIn */}
              {'     '}
              <Link
                aria-label="LinkedIn"
                color="inherit"
                rel="noopener"
                fontSize="large"
                target="_blank"
                href="https://www.linkedin.com/in/heather-berardo-noto ">
                <LinkedInIcon />
              </Link>
              {/* github */}
              {'     '}
              <Link
                aria-label="GitHub"
                color="inherit"
                fontSize="large"
                rel="noopener"
                target="_blank"
                href="https://github.com/heathernoto">
                <GitHubIcon />
              </Link>
            </center>
          </Paper>
        </Paper>
      </Fade>
    </Grid>
  );
}
