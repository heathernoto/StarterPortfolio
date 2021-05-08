import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import family from './images/family.png';
import coding from './images/working.png';
import business from './images/happy.png';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '2rem',
    background: 'linear-gradient(#ECF4FC, #BCDBF9)',
    justify: 'center',
    alignContent: 'center',
  },
  heading: {
    paddingTop: '1rem',
    fontSize: '2rem',
  },

  paragraphWrapper: {
    justify: 'center',
    alignContent: 'center',
  },
  paragraphs: {
    padding: '1.5rem',
    margin: '1rem',
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: '1rem',
  },
  clipArt: {
    justify: 'center',
    alignContent: 'centers',
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrapper} id="about-me-section">
      <h1>About Me</h1>
      <Grid container spacing={6} className={classes.paragraphWrapper}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paragraphs}>
            Originally in early childhood education, I left the workforce to
            raise my children and care for my parents. Curious by nature, I used
            any spare time to continue learning. I always want to know how
            things work, tinker with the parts, and fix what's broken. Though I
            had no formal experience in coding or web development, it always
            interested me. I loved how the internet could connect people. In the
            days of dial up and long before Facebook and blogs, I designed my
            first website to keep in touch with far flung family and friends.
          </Paper>{' '}
        </Grid>

        <Grid item xs={12} sm={6}>
          <img
            alt="family"
            height="300rem"
            width="auto"
            src={family}
            className={classes.clipArt}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} className={classes.paragraphWrapper}>
        <Grid item xs={12} sm={6}>
          <img
            alt="coding"
            width="300rem"
            height="auto"
            src={coding}
            className={classes.clipArt}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paragraphs}>
            Recently, I returned to coding and taught myself JavaScript. During
            the pandemic, I applied to and was accepted into the Grace Hopper
            Program at Fullstack Academy. An immersive 17 week course focused on
            the NERD stack, I ate, slept, and dreamt code - and I LOVED it.
            Becoming a full stack software engineer is my pandemic positive!
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.paragraphWrapper}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paragraphs}>
            My bootcamp experience has given me a sturdy foundation and I am
            excited for this new chapter in my life. I am looking forward to
            joining a team and continuing to learn. I am a positive and
            supportive teammate, a strong communicator, and quick to laugh. With
            a varied background and lots of life experience, I am flexible and
            keep things in perspective. AND my early childhood education
            background means I know what to do when everyone is crying!
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            alt="jumping"
            width="250rem"
            height="auto"
            src={business}
            className={classes.clipArt}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
