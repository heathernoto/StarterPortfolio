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
import Popup from 'reactjs-popup';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '.75rem 1.5rem 1.5rem 1.5rem',
    margin: '4rem',
    fontSize: '0.75rem',
    textAlign: 'center',
    fontWeight: 700,
    backgroundColor: 'aliceBlue',
  },
}));

export default function TechStack() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} square elevation={3} id="tech-section">
      <Typography gutterBottom variant="h4" component="h2">
        {/* <center> */} <TitleIcon aria-label="T" fontSize="large" />
        <ExplicitIcon aria-label="E" fontSize="large" />
        <CopyrightIcon aria-label="C" fontSize="large" />
        <Looks4Icon
          aria-label="H"
          fontSize="large"
          style={{ transform: 'rotate(-180deg)' }}
        />
        <br />
        <PolymerIcon
          aria-label="S"
          fontSize="large"
          style={{ transform: 'rotate(-90deg)' }}
        />
        <TitleIcon aria-label="T" fontSize="large" />
        <TextRotationNoneIcon aria-label="A" fontSize="large" />
        <HeadsetIcon
          aria-label="C"
          fontSize="large"
          style={{ transform: 'rotate(-90deg)' }}
        />
        <PhoneMissedIcon
          aria-label="K"
          fontSize="large"
          style={{ transform: 'rotate(90deg)' }}
        />
        {/* </center> */}
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
      <Popup
        trigger={
          <button aria-label="What I am learning now">
            {' '}
            <SchoolIcon />
          </button>
        }
        position="bottom ">
        <div>
          This week, I am learning more about GraphQL and attending Azure
          Storage Day.
        </div>
      </Popup>
    </Paper>
  );
}
