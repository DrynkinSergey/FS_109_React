import { useContext } from 'react';
import s from './Header.module.css';
import { authContext } from '../../context/AuthProvider';
const Header = () => {
  const { username, logout } = useContext(authContext);
  return (
    <header className={s.header}>
      <h3>Hooks</h3>
      <p>Welcome {username}</p>
      <button onClick={logout}>Logout</button>
    </header>
  );
};
export default Header;
