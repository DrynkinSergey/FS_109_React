import { Link } from 'react-router-dom';
import s from './Header.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <h3>Routing</h3>
      <nav className={s.nav}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  );
};
export default Header;
