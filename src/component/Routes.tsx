import React from 'react';
import MyPageRouter from '../component/MyRouter'
import logo from './hackaton1.png';
import FeedbackForm from '../component/FeedbackForm'
import PropTypes from 'prop-types';
import Formular from '../page/WelcomePage';
import App from '../App';
import { Redirect, BrowserRouter, Route, withRouter } from 'react-router-dom'
 
import MainAppPage from '../page/MainAppPage';

const MainPage = (props: any) => {
  return (<main>
  <div>
  <MyPageRouter/>
  <img width="100%" src={logo} alt="Logo"/>
  <FeedbackForm env={App.propTypes}/>
  </div>
  </main>)
 }
  
 /**
  * All routes go here.
  * Don't forget to import the components above after adding new route.
  */
 export default () => {
  return (
  <div>
  <Route path="/" exact component={MainPage} />
  <Route path="/bonz" component={MainAppPage} />
  </div>);
 };