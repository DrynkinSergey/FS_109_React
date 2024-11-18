import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsersById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsersById(userId);
      setUser(data);
    };
    getData();
  }, [userId]);

  return (
    <div>
      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
    </div>
  );
};
export default UserDetails;
