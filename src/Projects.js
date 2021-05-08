import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Container from '@material-ui/core/Container';
import Project from './Project';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: 'aliceBlue',
    padding: '2rem',
    justifyContent: 'center',
    direction: 'column',
  },

  cardGrid: {
    padding: '1rem',
    margin: '1rem',
    justify: 'space-between',
  },
  heading: {
    paddingTop: '1rem',
    fontSize: '2rem',
    textAlign: 'center',
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper} id="projects-section">
      <h1 className={classes.heading}>Some of My Projects...</h1>
      {/* cards  container */}
      <Grid item className={classes.cardGrid}>
        {/* each project card */}
        <Project />
      </Grid>
    </Grid>
  );
}
