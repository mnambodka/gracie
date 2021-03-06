import React from 'react';
import MyPageRouter from '../component/MyRouter'
import logo from './hackaton.png';
import FeedbackForm from '../component/FeedbackForm'
import PropTypes from 'prop-types';
import MainAppPage from '../page/MainAppPage';
import App from '../App';
import { Redirect, BrowserRouter, Route, withRouter } from 'react-router-dom'
 

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