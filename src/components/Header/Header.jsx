import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <h3>Routing</h3>
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to='/about'>
          About
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
