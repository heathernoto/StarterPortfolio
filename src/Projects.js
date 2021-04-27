import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Project from './Project';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '.75rem 1.5rem 1.5rem 1.5rem',
    margin: '4rem',
    backgroundColor: 'aliceBlue',
  },
  projects: {
    display: 'flex',
    justifyContent: 'center',
  },

  cardGrid: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Paper
      elevation={3}
      square
      className={classes.wrapper}
      id="projects-section">
      <h1>
        <center>Some of My Projects...</center>
      </h1>
      {/* cards  container */}
      <Container className={classes.cardGrid} xs={12} sm={6} md={4}>
        {/* each project card */}
        <Project />
      </Container>
    </Paper>
  );
}
