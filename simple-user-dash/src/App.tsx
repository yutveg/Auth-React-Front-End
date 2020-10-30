import React, { useState } from 'react';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dash/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={`/dashboard`} component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
