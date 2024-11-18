import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul className='users'>
        {users.map(user => (
          <li key={user.id}>
            <p>
              {user.firstName} &nbsp;
              {user.lastName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
