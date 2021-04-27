import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import projects from './projectData';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    square: 'true',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    color: 'whiteSmoke',
    backgroundColor: '#383d4f',
  },
  links: {
    backgroundColor: 'whiteSmoke',
    justifyContent: 'space-evenly',
  },
}));

export default function Project() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {projects.map((project) => {
        return (
          <Grid key={project.id} item xs={12} sm={6} md={4}>
            <Card className={classes.card} square="true">
              <CardMedia
                className={classes.cardMedia}
                image={project.image}
                title={project.title}
              />
              <CardContent className={classes.cardContent} align="center">
                <h3>{project.title}</h3>
                {project.description}
              </CardContent>
              <CardActions className={classes.links}>
                {/* YouTube demo */}
                {project.youTube && (
                  <Link
                    aria-label="Link to YouTube"
                    target="_blank"
                    href={project.youTube}
                    color="inherit">
                    <YouTubeIcon size="small" />
                  </Link>
                )}
                {/* link if deployed */}
                {project.link && (
                  <Link
                    aria-label="Link to deployed project"
                    target="_blank"
                    href={project.link}
                    color="inherit">
                    <LinkIcon size="small" />
                  </Link>
                )}
                {/* GitHub repo */}
                <Link
                  aria-label="Link to Github repo"
                  target="_blank"
                  href={project.gitHub}
                  color="inherit">
                  <GitHubIcon size="small" />
                </Link>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
