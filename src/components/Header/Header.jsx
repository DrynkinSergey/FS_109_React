import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <h3>Redux Toolkit</h3>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/tasks'>Tasks</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
      </ul>
    </header>
  );
};
export default Header;
