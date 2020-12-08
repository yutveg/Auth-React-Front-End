import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <div className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/bye">Bye</Link>
    </div>
  );
};

export default Nav;
