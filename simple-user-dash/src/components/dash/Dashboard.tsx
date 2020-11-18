import React from 'react';
import { Link } from 'react-router-dom';
import { useUsersQuery } from '../../generated/graphql';

const Dashboard: React.FC = () => {
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' });

  if (!data) {
    return <div>loading..</div>;
  }

  return (
    <div>
      <h1>need to login or register?</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <ul>
        {data.users.map((user) => (
          <div key={user.id}>{user.email}</div>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
