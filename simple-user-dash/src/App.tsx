import React from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dash/Dashboard';
import { gql, useQuery } from '@apollo/react-hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useHelloQuery } from './generated/graphql';

const App: React.FC = () => {
  const { data, loading } = useHelloQuery();

  if (loading || !data) {
    return <div>loading..</div>;
  }
  return (
    <div className="App">
      {data.hello}
      {/* <BrowserRouter>
        <Switch>
          <Route path={`/dashboard`} component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
