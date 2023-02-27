import React from 'react';
import TitleIcon from '@material-ui/icons/Title';
import ExplicitIcon from '@material-ui/icons/Explicit';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Looks4Icon from '@material-ui/icons/Looks4';
import PolymerIcon from '@material-ui/icons/Polymer';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import HeadsetIcon from '@material-ui/icons/Headset';
import PhoneMissedIcon from '@material-ui/icons/PhoneMissed';
import './TechStack.css';

export default function TechStack() {
  return (
    <div className='tech-wrapper' id='tech__nav'>
      <TitleIcon aria-label='T' fontSize='large' />
      <ExplicitIcon aria-label='E' fontSize='large' />
      <CopyrightIcon aria-label='C' fontSize='large' />
      <Looks4Icon
        aria-label='H'
        fontSize='large'
        style={{ transform: 'rotate(-180deg)' }}
      />
      <br />
      <PolymerIcon
        aria-label='S'
        fontSize='large'
        style={{ transform: 'rotate(-90deg)' }}
      />
      <TitleIcon aria-label='T' fontSize='large' className='tech-stack' />
      <TextRotationNoneIcon aria-label='A' fontSize='large' />
      <HeadsetIcon
        aria-label='C'
        fontSize='large'
        style={{ transform: 'rotate(-90deg)' }}
      />
      <PhoneMissedIcon
        aria-label='K'
        fontSize='large'
        style={{ transform: 'rotate(90deg)' }}
      />

      <div className='tech-tools'>
        <b>Proficient:</b> JavaScript, Typescript, React, HTML5, CSS3, Cypress
        Testing, Jest, Jenkins, Node.js, Git/GitHub,Express, Sequelize,
        PostgreSQL, webpack, Puppeteer, Material-UI, Redux, React Native Expo
        Camera/Face Detector
        <br />
        <b>Familiar:</b> webpack, Babel, React Bootstrap, OAuth, Socket.IO
        <hr />
        I'm adding to my knowledge base every day!
        <br />
        Currently, I'm working on AWS Associate Developer Certification.
      </div>
    </div>
  );
}
