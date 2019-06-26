import React from "react"
import { Form, TextArea } from 'semantic-ui-react'
import { Link as RouterLink } from 'react-router-dom'
import { Grow, Link, Container } from "@material-ui/core"
// import logo from './backgroundUKRLP.png';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { display } from "@material-ui/system";
// import { makeStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import logo from './head_menu.png';
import App from '../App';
import * as emailjs from 'emailjs-com'

export const URL: string = "/bonz"

export const PageLink = (props: any) => <Link component={RouterLink} to={URL} {...props} />

export interface MainAppPageProps {
    message: string
}

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(0deg, #73C2FB 20%, #1034A6 50%)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
      main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
      footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: 'white',
      },
      textareafield: {        
        minHeight: '250',
        minWidth: '250',
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: 'white',
      },
  }));

  function MadeWithLove() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Built with love by the '}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI
        </Link>
        {' team.'}
      </Typography>
    );
  }

  function handleSubmit() {
    console.log('click')
    var templateParams = {
        from_name: 'danka',
        to_name: 'danielka',
        subject:'oursubject',
        message_html:'message'
    }
      emailjs.send('mailgun', 'template_RGafnIkF', templateParams, 'user_w9GAf3tp8aE7ephxoCIu4');
  }

  const TextAreaComplain = () => (
    <Form>
      <TextArea placeholder='Tell us more' className="textareafield" />
      <button onClick={handleSubmit}>
            Submit
          </button>
    </Form>
  )

  const HeadPicture = (props: any) => {
    return (
      <div>
        <img width="100%" src={logo} alt="Logo"/>
        </div>
    )
  }

const MainAppPage = (props: MainAppPageProps) => {
const classes = useStyles();
return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
        <img width="100%" src={logo} alt="Logo"/>
        </div>
      <Container component="head" maxWidth="sm">
        <HeadPicture></HeadPicture>
      </Container>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Anlas Melden
        </Typography>     
          <TextAreaComplain></TextAreaComplain>          
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      {/* <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <MadeWithLove />
        </Container>
      </footer> */}
    </div>
  );

}

export default MainAppPage

