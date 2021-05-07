import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import family from './images/dinner.png';
import coding from './images/working.png';
import business from './images/business.png';
//import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '2rem',
    background: 'linear-gradient(#ECF4FC, #BCDBF9)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    paddingTop: '1rem',
    fontSize: '2rem',
  },

  paragraphWrapper: {
    display: 'flex',
    flexFlow: 'row-wrap',
    justifyContent: 'center',
  },
  paragraphs: {
    padding: '2rem',
    margin: '2.75rem',
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: 'rem',
    width: '60%',
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper} id="about-me-section">
      <h1 className={classes.heading}>About Me</h1>
      <div className={classes.paragraphWrapper}>
        <Paper className={classes.paragraphs}>
          Originally in early childhood education, I left the workforce to raise
          my children and care for my parents. A lifelong learner, I always want
          to know how things work, tinker with the parts, and fix what's broken.
          Though I had no formal experience in coding or web development, it
          always interested me. I loved how the internet could connect people.
          In the days of dial up and long before Facebook and blogs, I designed
          my first website to keep in touch with far flung family and friends.
        </Paper>{' '}
        <img alt="family" height="250rem" src={family} />
      </div>

      <div className={classes.paragraphWrapper}>
        <img alt="coding" width="250rem" src={coding} />
        <Paper className={classes.paragraphs}>
          Recently, I turned my curiosity and industrious ways to coding and
          taught myself JavaScript. During the pandemic, I applied to and was
          accepted into the Grace Hopper Program at Fullstack Academy. An
          immersive 17 week course focused on the NERD stack, I ate, slept, and
          dreamt code - and I LOVED it. Becoming a full stack software engineer
          is my pandemic positive!
        </Paper>
      </div>
      <div className={classes.paragraphWrapper}>
        <Paper className={classes.paragraphs}>
          My bootcamp experience has given me a sturdy foundation and I am
          excited for this new chapter in my life. I am looking forward to
          joining a team and continuing to learn. I am a positive and supportive
          teammate, a strong communicator, and quick to laugh. With a varied
          background and lots of life experience, I am flexible and keep things
          in perspective. AND my early childhood education background means I
          know what to do when everyone is crying!
        </Paper>
        <img alt="jumping" width="200rem" src={business} />
      </div>
    </div>
  );
}
