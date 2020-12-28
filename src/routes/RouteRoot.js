// @flow

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Error404 from '../pages/error/Error404';
import Dashboard from '../pages/Dashboard';
import { TopMenu } from '../components/TopMenu';

const RouteRoot = (props) => {
  return (
    <BrowserRouter {...props}>
      <TopMenu/>
      <Switch>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/'>
          <Redirect to='/dashboard' />
        </Route>
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default RouteRoot;
