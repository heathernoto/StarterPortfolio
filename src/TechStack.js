import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TitleIcon from '@material-ui/icons/Title';
import ExplicitIcon from '@material-ui/icons/Explicit';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Looks4Icon from '@material-ui/icons/Looks4';
import PolymerIcon from '@material-ui/icons/Polymer';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import HeadsetIcon from '@material-ui/icons/Headset';
import PhoneMissedIcon from '@material-ui/icons/PhoneMissed';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '.75rem 1.5rem 1.5rem 1.5rem',
    margin: '3rem',
    fontSize: '0.75rem',
    textAlign: 'center',
    fontWeight: 700,
    backgroundColor: 'aliceBlue',
  },
}));

export default function TechStack() {
  const classes = useStyles();

  return (
    <Paper
      className={classes.paper}
      square="true"
      elevation={3}
      id="tech-section">
      <Typography gutterBottom variant="h4" component="h2">
        <center>
          {' '}
          <TitleIcon />
          <ExplicitIcon />
          <CopyrightIcon />
          <Looks4Icon style={{ transform: 'rotate(-180deg)' }} />
          {'   '}
          <PolymerIcon style={{ transform: 'rotate(-90deg)' }} />
          <TitleIcon />
          <TextRotationNoneIcon />
          <HeadsetIcon style={{ transform: 'rotate(-90deg)' }} />
          <PhoneMissedIcon style={{ transform: 'rotate(90deg)' }} />
        </center>
      </Typography>
      <Typography gutterBottom variant="body1" component="h2">
        <strong>Proficient:</strong> JavaScript, React, Redux, HTML5, CSS3,
        Express, Sequelize, PostgreSQL, Node.js, Git/GitHub, Puppeteer
      </Typography>
      <Typography gutterBottom variant="body1" component="h2">
        <strong>Knowledgeable:</strong> Material-UI, Heroku, React Bootstrap,
        Expo Camera/Face Detector
      </Typography>
      <Typography gutterBottom variant="body1" component="h2">
        <strong>Familiar:</strong> webpack, Babel, Cloudant/PouchDB, TDD(Mocha,
        Chai, Jasmine), Passport(OAuth), Socket.io
        <br />
        <strong>
          <center>And I'm adding to my knowledge base every day!</center>
        </strong>
      </Typography>
    </Paper>
  );
}
