import React from 'react';
import { useMeQuery } from '../generated/graphql';

const Header: React.FC = () => {
  const { data } = useMeQuery({ fetchPolicy: 'network-only' });

  if (data && data.me) {
    return <h1>{data.me.email}</h1>;
  }

  return <div>Guest</div>;
};

export default Header;
