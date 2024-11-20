import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state ?? '/users');

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
      <Link to={goBackLink.current}>Go back</Link>
      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <div>
        <nav>
          <Link to='info'>Show info</Link>
          <Link to='posts'>Show posts</Link>
        </nav>
        <Suspense fallback={<h2>Loading second suspense</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default UserDetails;
