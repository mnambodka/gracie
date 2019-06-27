import React, {Component} from "react"
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
import logo_mobile from './head_menu_phone.png';
import App from '../App';
import * as emailjs from 'emailjs-com';
import ImageUploader from 'react-images-upload';
import ComboExample from "../component/ComboComponent";
import TextField from '@material-ui/core/TextField';
import { Checkbox } from 'semantic-ui-react'
import { FaExclamationCircle } from 'react-icons/fa'
import MediaQuery from 'react-responsive';
import { Dropdown } from 'semantic-ui-react';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';


export const URL: string = "/bonz"

export const PageLink = (props: any) => <Link component={RouterLink} to={URL} {...props} />

export interface MainAppPageProps {
  message: string
}

var message: string = ""
var picture: File[]
var sendAFeedback = false

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(0deg, #73C2FB 20%, #1034A6 50%)',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(3),
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
  rightIcon: {
    marginLeft: theme.spacing(1),
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

function _arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

function handleSubmit() {
  var templateParams = {
    from_name: 'danka',
    to_name: 'danielka',
    subject: 'oursubject',
    message_html: message,
    image_html: picture
  }
  emailjs.send('mailgun', 'template_RGafnIkF', templateParams, 'user_w9GAf3tp8aE7ephxoCIu4');
  if (sendAFeedback){
    console.log('sned me an emali')
  }
}

function handleOnChange($event) {
  message = $event.target.value;
}
const TitleField = () => (
  <form className={"title"} noValidate autoComplete="off">
    <TextField className={"title"}
      id="filled-full-width"
      label="Title"
      fullWidth
      variant="filled"
    />
  </form>
)

var EmailField = () => (
  <form className={"title"} noValidate autoComplete="off">
    <TextField className={"title"}
      id="filled-full-width"
      label="Email address"
      fullWidth
      variant="filled"
      disabled={!sendAFeedback}
    />
  </form>
)

const LocationField = () => (
  <form className={"title"} noValidate autoComplete="off">
    <TextField className={"title"}
      id="filled-full-width"
      label="Location (1st floor, etc.)"
      fullWidth
      variant="filled"
    />
  </form>
)

function handleOnImageLoad($picture) {
  picture = $picture;
}

function handleOnCheckBoxChange($change) {
  if (sendAFeedback){
    sendAFeedback = false
  } else {
    sendAFeedback = true
  }
}

const TextAreaComplain = () => (
  <Form className="textareafield">
    <TextArea placeholder='Tell us more' className="textareafield" onChange={(event) => handleOnChange(event)} />
  </Form>
)

const ImageUpload = () => (

  <ImageUploader
    className='imageLoader'
    withIcon={true}
    buttonText='Choose images'
    onChange={(picture) => handleOnImageLoad(picture)}
    imgExtension={['.jpg', '.gif', '.png', '.gif']}
    maxFileSize={5242880}
    withPreview={true}
    singleImage={true}
  />
)


const HeadPicture = (props: any) => {
  return (
    <div>
      <img width="100%" src={logo} alt="Logo" />
    </div>
  )
}

const SendButtoMobile = (props: any) => {
  return (
    <div>
<Button className="submmitButton" variant="contained" color="primary" onClick={props.handleSubmit}>
Send
<Icon className="submmitButton">send</Icon>
</Button>
</div>
  )
}

const DesktopLayout = () => (
  
  <div>
    {/* <Typography variant="h4" component="h5" gutterBottom>
      Anlass melden
    </Typography> */}

    <ComboExample />
    <TitleField />
    <LocationField />
    <ImageUpload />
    <TextAreaComplain />
    {/* <SendButtoMobile/> */}
    {/* <button className="submmitButton" onClick={handleSubmit}>Submit</button> */}
  </div>
)

const options = [
  { key: 1, text: 'Feuerwehr Andernach', value: 1 },
  { key: 2, text: 'Gutenberg Gymnasium Mainz', value: 2 },
  { key: 3, text: 'KITA Sonnengruss', value: 3 },
]

const ComboMobile = () => (
  <Dropdown className="MPcomboBox" selection options={options} placeholder='My Location' />
)

const TitleFieldMobile = () => (
  <form className={"MPtitle"} noValidate autoComplete="off">
    <TextField className={"MPtitle"}
      id="filled-full-width"
      label="Title"
      fullWidth
      variant="filled"
    />
  </form>
)

const LocationFieldMobile = () => (
  <form className={"MPtitle"} noValidate autoComplete="off">
    <TextField className={"MPtitle"}
      id="filled-full-width"
      label="Location (1st floor, etc.)"
      fullWidth
      variant="filled"
    />
  </form>
)

const ImageUploadMobile = () => (

  <ImageUploader
    className='MPimageLoader'
    withIcon={true}
    buttonText='Choose images'
    onChange={(picture) => handleOnImageLoad(picture)}
    imgExtension={['.jpg', '.gif', '.png', '.gif']}
    maxFileSize={5242880}
    withPreview={true}
    singleImage={true}
  />
)

const TextAreaComplainMobile = () => (
  <Form className="MPtextareafield">
    <TextArea placeholder='Tell us more' className="MPtextareafield" onChange={(event) => handleOnChange(event)} />
  </Form>
)

const HeadPictureMobile = (props: any) => {
  return (
    <div>
      <img width="100%" src={logo_mobile} alt="Logo" />
    </div>
  )
}

const MobilLayout = () => (
  
  <div>
    <ComboMobile />
    <TitleFieldMobile />
    <LocationFieldMobile />
    <ImageUploadMobile />
    <TextAreaComplainMobile />
    
  </div>
)

const ExampleLayout = () => (
  <div>
    <MediaQuery query="(min-device-width: 1224px)">
      <DesktopLayout/>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <MobilLayout/>
    </MediaQuery>
  </div>
);

const MainAppPage = (props: MainAppPageProps) => {
  const classes = useStyles();

  var data = picture
  const Example = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} />

  return (
    <div className={classes.root}>
      <CssBaseline />

      <MediaQuery query="(min-device-width: 1224px)">
      <HeadPicture/>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
    <HeadPictureMobile/>
    </MediaQuery>

      <Container component="main" className={classes.main} maxWidth="md">
      <ExampleLayout/>
      
      <div>

      <Button className="submmitButton" variant="contained" color="primary" onClick={handleSubmit}>
        Send
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
    </div>
      {/* <button className="submmitButton" onClick={handleSubmit}>Submit</button> */}
      </Container>
    </div>
  );

}

export default MainAppPage

