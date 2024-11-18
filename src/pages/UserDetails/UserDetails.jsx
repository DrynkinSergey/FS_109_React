import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUserById(userId);
      setUser(data);
    };
    getData();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <div>
        <nav>
          <Link to='info'>Show info</Link>
          <Link to='posts'>Show posts</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};
export default UserDetails;
