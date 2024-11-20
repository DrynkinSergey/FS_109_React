import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
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
      {/* <Link>Go back</Link> */}
      <button onClick={() => navigate(-1)}>Go back</button>
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
