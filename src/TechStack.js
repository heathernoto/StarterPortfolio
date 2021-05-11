import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TitleIcon from '@material-ui/icons/Title';
import ExplicitIcon from '@material-ui/icons/Explicit';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Looks4Icon from '@material-ui/icons/Looks4';
import PolymerIcon from '@material-ui/icons/Polymer';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import HeadsetIcon from '@material-ui/icons/Headset';
import PhoneMissedIcon from '@material-ui/icons/PhoneMissed';
// import resume from './HeatherBerardoNoto5-3-21.pdf';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '2rem 4rem',
    fontSize: '0.75rem',
    textAlign: 'center',
    backgroundColor: '#192bc2',
    color: 'white',
  },
  tools: {
    padding: '2rem',
    fontSize: '1.5rem',
  },
  // resume: {
  //   color: 'white',
  //   fontSize: '2rem',
  // },
}));

export default function TechStack() {
  const classes = useStyles();

  return (
    <div className={classes.paper} id="tech-section">
      <TitleIcon aria-label="T" fontSize="large" />
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
      <TitleIcon aria-label="T" fontSize="large" className={classes.icons} />
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

      <div className={classes.tools}>
        JavaScript, React, Redux, HTML5, CSS3, Express, Sequelize, PostgreSQL,
        Node.js, Git/GitHub Puppeteer, Material-UI, Heroku, React Bootstrap,
        Expo Camera/Face Detector
        <br />
        <b>And I'm adding to my knowledge base every day!</b>
        <br />
        {/* <a
          href={resume}
          aria-label="resume"
          target="blank"
          rel="noopener"
          className={classes.resume}>
          Download my resume
        </a> */}
      </div>
    </div>
  );
}
