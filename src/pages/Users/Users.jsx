import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import { Link } from 'react-router-dom';

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
            {/* https://localhost/users/7 */}
            <Link to={user.id.toString()}>
              <p>
                {user.firstName} &nbsp;
                {user.lastName}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
