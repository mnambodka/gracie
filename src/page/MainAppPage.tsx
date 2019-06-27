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
import TextField from '@material-ui/core/TextField';
import { Checkbox } from 'semantic-ui-react'
import { FaExclamationCircle } from 'react-icons/fa'
import MediaQuery from 'react-responsive';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { Dropdown } from 'semantic-ui-react'


export const URL: string = "/bonz"

export const PageLink = (props: any) => <Link component={RouterLink} to={URL} {...props} />

export interface MainAppPageProps {
  message: string
}

var message: string = ""
var title: string = ""
var atLocation: string = ""
var place: string = ""
var picture: File[]
var sendAFeedback = false

const comboOptions = [
  { key: 1, text: 'Feuerwehr Andernach', value: 1 },
  { key: 2, text: 'Gutenberg Gymnasium Mainz', value: 2 },
  { key: 3, text: 'KITA Sonnengruss', value: 3 },
]

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

function handleSubmit() {
  var templateParams = {
    from_name: 'danka',
    to_name: place + ' (' + atLocation + ')',
    message_html: message,
    title_html: title,
    subject: atLocation
  }
  emailjs.send('mailgun', 'template_RGafnIkF', templateParams, 'user_w9GAf3tp8aE7ephxoCIu4');
  if (sendAFeedback){
    console.log('sned me an emali')
  }
}

function handleOnChange($event) {
  message = $event.target.value;
}

function handleOnTitleChange($event) {
  title = $event.target.value;
}

function handleOnLocationChange($event) {
  console.log($event.target.value);
  atLocation = $event.target.value;
}

function handleOnPlaceChange($event) {
  console.log($event.target.innerText);
  place = $event.target.innerText;
}

const TitleField = () => (
  <form className={"title"} noValidate autoComplete="off">
    <TextField className={"title"}
      id="filled-full-width"
      label="Title"
      fullWidth
      variant="filled"
      onChange={(event) => handleOnTitleChange(event)}
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
      onChange={(event) => handleOnLocationChange(event)}
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

const DropdownExampleUncontrolled = () => (
  <Dropdown className="comboBox" selection options={comboOptions} placeholder='My Location' onChange={(event) => handleOnPlaceChange(event)}/>
)

const DesktopLayout = () => (
  
  <div>
    {/* <Typography variant="h4" component="h5" gutterBottom>
      Anlass melden
    </Typography> */}

    <DropdownExampleUncontrolled />
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
  <Dropdown className="MPcomboBox" selection options={options} placeholder='My Location' onChange={(event) => handleOnPlaceChange(event)}/>
)

const TitleFieldMobile = () => (
  <form className={"MPtitle"} noValidate autoComplete="off">
    <TextField className={"MPtitle"}
      id="filled-full-width"
      label="Title"
      fullWidth
      variant="filled"
      onChange={(event) => handleOnTitleChange(event)}
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
      onChange={(event) => handleOnLocationChange(event)}
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

