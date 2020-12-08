import React from 'react';
import { useMeQuery } from '../generated/graphql';
import Nav from './Nav';
import './Header.css';

const Header: React.FC = () => {
  const { data } = useMeQuery({ fetchPolicy: 'network-only' });

  if (data && data.me) {
    return (
      <div className="header">
        <h1>{data.me.email}</h1>
        <Nav />
      </div>
    );
  }

  return (
    <div className="header">
      <h1>Guest</h1>
      <Nav />
    </div>
  );
};

export default Header;
