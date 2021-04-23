import coverPhoto from '../src/images/tubcropped1.JPG';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // landingWrapper: {
  //   display: 'flex',
  //   flexFlow: 'rowWrap',
  // },
  bathtub: {
    width: '80%',
  },
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <Container className={classes.landingWrapper}>
      <img alt="Beltway Bathtub" src={coverPhoto} className={classes.bathtub} />
      {/* <div id="text-wrapper">hello</div> */}
    </Container>
  );
}
