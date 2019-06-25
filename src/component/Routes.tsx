import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */

import Formular from '../page/BaseFormular';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default () => {
  return (
    <div>
        <Route path="/baseFormular" component={Formular} />
    </div>);
};