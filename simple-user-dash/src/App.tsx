import React, { useEffect, useState } from 'react';
import { setAccessToken } from './accessToken';
import Routes from './Routes';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include',
    })
      .then(async (res) => {
        const { accessToken } = await res.json();
        setAccessToken(accessToken);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
