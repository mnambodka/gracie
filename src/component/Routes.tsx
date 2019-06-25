import React from 'react';
import { Route } from 'react-router';
import MyPageRouter from '../component/MyRouter'
import logo from './ukrlp_background.png';
/**
 * Import all page components here
 */

import Formular from '../page/WelcomePage';

const MainPage = (props: any) => {
  return (<main>
    <div>
      <MyPageRouter/>
      <img width="100%" src={logo} alt="Logo"/>
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
        <Route path="/baseFormular" component={Formular} />
    </div>);
};