import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aboutMe: {
    padding: '.75rem 1.5rem 1.5rem 1.5rem',
    margin: '4rem',
    fontSize: '0.75rem',
    textAlign: 'center',
    fontWeight: 700,
    backgroundColor: 'aliceBlue',
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <section id="about-me-section">
      <Paper elevation={3} square="true" className={classes.aboutMe}>
        <p className="title">About Me</p>
        <p>
          Originally in early childhood education, I left the workforce to raise
          my children and care for my parents. Though not "working", I was never
          idle. A lifelong learner, I always want to know how things work,
          tinker with the parts, and fix what's broken. Though I had no formal
          educational or professional experience in coding or web development,
          it always interested me. I loved how the internet could connect
          people. In the days of dial up and long before Facebook and blogs, I
          designed my first website to keep in touch with far flung family and
          friends.
        </p>
        <p>
          Recently, I turned my curiosity and industrious ways to coding and
          taught myself JavaScript. During the pandemic, I applied to and was
          accepted into the Grace Hopper Program at Fullstack Academy. An
          immersive 17 week course focused on the NERD stack, I ate, slept, and
          dreamt code - and I LOVED it. Becoming a full stack software engineer
          is my pandemic positive!
        </p>
        <p>
          I am currently seeking a position as a software engineer and have a
          lot to offer. My success in a bootcamp environment demonstrates my
          ability to learn quickly and has given me a sturdy foundation and the
          tools to continue learning on the job. I am a strong communicator, a
          positive and supportive teammate, easy going, and quick to laugh. With
          a varied background and lots of life experience, I am flexible and
          keep things in perspective. AND my early childhood education
          background means I know what to do when everyone is crying!{' '}
        </p>
      </Paper>
    </section>
  );
}
