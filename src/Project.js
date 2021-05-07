import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    margin: '2rem',
    justifyContent: 'center',

    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    margin: '.80rem',
  },
  cardContent: {
    fontSize: '1rem',
    backgroundColor: '#484848',
    color: 'white',
    padding: '1rem',
  },
  links: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    color: '#192bc2',
  },
}));

export default function Project() {
  const classes = useStyles();

  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={project.image}
                title={project.title}
              />
              <CardContent className={classes.cardContent} align="center">
                <h3>{project.title}</h3>
                {project.longDescription}
                <br />
                Tools: {project.tools}
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
          </div>
        );
      })}
    </>
  );
}

// import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import { makeStyles } from '@material-ui/core/styles';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import LinkIcon from '@material-ui/icons/Link';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import Link from '@material-ui/core/Link';
// import projects from './projectData';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     margin: '2rem',
//     justifyContent: 'center',

//     boxShadow:
//       '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     fontSize: '1rem',
//     backgroundColor: '#192bc2',
//     color: 'white',
//     padding: '1rem',
//   },
//   links: {
//     backgroundColor: 'black',
//     justifyContent: 'space-evenly',
//     color: 'whiteSmoke',
//   },
// }));

// export default function Project() {
//   const classes = useStyles();

//   return (
//     <>
//       {projects.map((project) => {
//         return (
//           <div key={project.id}>
//             <Card className={classes.card}>
//               <CardMedia
//                 className={classes.cardMedia}
//                 image={project.image}
//                 title={project.title}
//               />
//               <CardContent className={classes.cardContent} align="center">
//                 <h3>{project.title}</h3>
//                 {project.shortDescription}
//               </CardContent>
//               <CardActions className={classes.links}>
//                 {/* YouTube demo */}
//                 {project.youTube && (
//                   <Link
//                     aria-label="Link to YouTube"
//                     target="_blank"
//                     href={project.youTube}
//                     color="inherit">
//                     <YouTubeIcon size="small" />
//                   </Link>
//                 )}
//                 {/* link if deployed */}
//                 {project.link && (
//                   <Link
//                     aria-label="Link to deployed project"
//                     target="_blank"
//                     href={project.link}
//                     color="inherit">
//                     <LinkIcon size="small" />
//                   </Link>
//                 )}
//                 {/* GitHub repo */}
//                 <Link
//                   aria-label="Link to Github repo"
//                   target="_blank"
//                   href={project.gitHub}
//                   color="inherit">
//                   <GitHubIcon size="small" />
//                 </Link>
//               </CardActions>
//             </Card>
//           </div>
//         );
//       })}
//     </>
//   );
// }
