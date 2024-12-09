import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header className={s.header}>
      <h3>Redux Toolkit</h3>
      {isLoggedIn && <div>{user.email}</div>}
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/tasks'>Tasks</NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
          </>
        )}
        {isLoggedIn && <button onClick={() => dispatch(logout())}>Logout</button>}
      </ul>
    </header>
  );
};
export default Header;
