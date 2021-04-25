import coverPhoto from '../src/tubcropped1.JPG';
//import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  landingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

    // backgroundImage: `url('${process.env.PUBLIC_URL} + /src/tubcropped1.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  bathtub: {
    width: '100%',
    // zIndex: -1,
    alignSelf: 'flexEnd',
  },
  text: {
    // zIndex: 1,
    alignSelf: 'flexStart',
    backgroundColor: 'aliceBlue',
  },
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <Grid container className={classes.landingWrapper}>
      <Grid item xs={12}>
        <img
          alt="Beltway Bathtub"
          src={coverPhoto}
          className={classes.bathtub}
        />
      </Grid>

      <Grid item>
        <Paper className={classes.text} square="true">
          Still in the wrong place dammit
        </Paper>
      </Grid>
    </Grid>
  );
}
