import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getData();
  }, []);

  const filteredData = users.filter(user => user.firstName.toLowerCase().includes(query.toLowerCase()));

  const handleSetQuery = newValue => {
    setQuery(newValue);
  };
  return (
    <div>
      <h1>Users</h1>
      <SearchBar handleSetQuery={handleSetQuery} />
      <ul className='users'>
        {filteredData.map(user => (
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
