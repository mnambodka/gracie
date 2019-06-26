import React from "react"
import { Form, TextArea } from 'semantic-ui-react'
import { Link as RouterLink } from 'react-router-dom'
import { Grow, Link, Container } from "@material-ui/core"
import logo from './backgroundUKRLP.png';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { display } from "@material-ui/system";
// import { makeStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';


export const URL: string = "/bonz"

export const PageLink = (props: any) => <Link component={RouterLink} to={URL} {...props} />

export interface MainAppPageProps {
    message: string
}

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(0deg, #FE6B8B 30%, #FF8E53 90%)',
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

  const TextAreaComplain = () => (
    <Form>
      <TextArea placeholder='Tell us more' className="textareafield" />
    </Form>
  )

const MainAppPage = (props: MainAppPageProps) => {
const classes = useStyles();
return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
     
          <TextAreaComplain></TextAreaComplain>
 
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <MadeWithLove />
        </Container>
      </footer>
    </div>
  );

}




export default MainAppPage

