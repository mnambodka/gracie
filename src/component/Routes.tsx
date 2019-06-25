import React from 'react';
import { Route } from 'react-router';
import MyPageRouter from '../component/MyRouter'
import logo from './ukrlp_background.png';
import MainAppPage from '../page/MainAppPage';

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
        <Route path="/bonz" component={MainAppPage} />
    </div>);
};