import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Project from './Project';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '.75rem 1.5rem 1.5rem 1.5rem',
    margin: '3rem',
    backgroundColor: 'aliceBlue',
  },
  projects: {
    display: 'flex',
    justifyContent: 'center',
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.wrapper} id="projects-section">
        <div className={classes.projects}>
          <Container maxWidth="sm">
            <Typography align="center">
              <h1>Some of My Projects...</h1>
            </Typography>
          </Container>
        </div>

        {/* cards  container */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* each project card */}
          <Project />
        </Container>
      </Paper>
    </React.Fragment>
  );
}
