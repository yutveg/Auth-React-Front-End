import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bye from './components/auth/Bye';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dash/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={`/`} component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/bye" component={Bye} />
    </Switch>
  );
};

export default Routes;
