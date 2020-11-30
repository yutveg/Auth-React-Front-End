import React from 'react';
import { useByeQuery } from '../../generated/graphql';

const Bye: React.FC = () => {
  const { data, loading, error } = useByeQuery();

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>err</div>;
  }
  if (!data) {
    return <div>no data</div>;
  }

  return <div></div>;
};

export default Bye;
