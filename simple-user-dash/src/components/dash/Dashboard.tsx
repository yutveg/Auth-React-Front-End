import React from 'react';
import { useUsersQuery } from '../../generated/graphql';

const Dashboard: React.FC = () => {
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' });

  if (!data) {
    return <div>loading..</div>;
  }

  return (
    <div>
      <ul>
        {data.users.map((user) => (
          <div key={user.id}>{user.email}</div>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
