import coverPhoto from '../src/images/tubcropped.JPG';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  landingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bathtub: {
    width: '88%',
    zIndex: -10,
    position: 'static',
  },

  textWrapper: {
    padding: '.5rem',
    zIndex: 10,
    border: '5px double #331a00',
    marginBottom: '15rem',
    position: 'absolute',
    backgroundColor: '#D6f3da',
  },
  textBox: {
    padding: '.5rem',
    backgroundColor: '#F2D3B1',
    color: '383d4f',
    border: '5px double #331a00',
    textShadow:
      '-1px -1px 0 #D6f3da, 1px -1px 0 #D6f3da, -1px 1px 0 #D6f3da, 1px 1px 0 #D6f3da',
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
      <img
        alt="Beltway Bathtub"
        xs={12}
        src={coverPhoto}
        className={classes.bathtub}
      />
      <Paper className={classes.textWrapper} elevation={3} square="true">
        <Paper className={classes.textBox} elevation={3}>
          <center>
            {' '}
            <h1 className={classes.name}>Heather Berardo Noto</h1>
            <h2 className={classes.position}>Full Stack Software Engineer</h2>
          </center>
        </Paper>
      </Paper>
    </Grid>
  );
}
