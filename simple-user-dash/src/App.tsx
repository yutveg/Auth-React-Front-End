import React from 'react';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App: React.FC = () => {
  return (
    <div className="App">
      <Register />
    </div>
  );
};

export default App;
