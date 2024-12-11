import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import clsx from 'clsx';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header className={s.header}>
      <h3>Redux Toolkit</h3>
      {isLoggedIn && <div>{user.email}</div>}
      <ul>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to='/tasks'>
          Tasks
        </NavLink>
        <NavLink className={buildLinkClass} to='/login'>
          Login
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={buildLinkClass} to='/login'>
              Login
            </NavLink>
            <NavLink className={buildLinkClass} to='/register'>
              Register
            </NavLink>
          </>
        )}
        {isLoggedIn && <button onClick={() => dispatch(logout())}>Logout</button>}
      </ul>
    </header>
  );
};
export default Header;
