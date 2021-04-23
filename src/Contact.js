import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'aliceBlue',

    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(1),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // boxShadow:
    //   '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Paper
      elevation={3}
      className={classes.root}
      xs={12}
      s={6}
      id="contact-section">
      <Link
        color="inherit"
        alt="Email Link"
        target="_blank"
        href="mailto:heather.noto@gmail.com">
        <EmailIcon />
      </Link>
      <Link
        color="inherit"
        alt="LinkedIn Link"
        target="_blank"
        href="https://www.linkedin.com/in/heather-berardo-noto ">
        <LinkedInIcon />
      </Link>

      <Typography gutterBottom variant="h5" component="h2" align="center">
        Let's connect!
      </Typography>
      <Link
        color="inherit"
        alt="GitHub Link"
        target="_blank"
        href="https://github.com/heathernoto">
        <GitHubIcon />
      </Link>
      <Link
        color="inherit"
        alt="Medium blog Link"
        target="_blank"
        href="https://heather-noto.medium.com/am-i-too-old-for-a-coding-bootcamp-aa24a84b8465">
        <MenuBookIcon />
      </Link>
    </Paper>
  );
}
