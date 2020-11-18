import React from 'react';
import { useHelloQuery } from './generated/graphql';
import Routes from './Routes';

const App: React.FC = () => {
  const { data, loading } = useHelloQuery();

  if (loading || !data) {
    return <div>loading..</div>;
  }
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
