import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dash/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
