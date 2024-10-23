import clsx from 'clsx';
import s from './Header.module.css';
const Header = () => {
  return (
    <header className='header'>
      <div>Logo</div>
      <p className={s.title}>Hello</p>
      {/* <p className={`${s.title} ${s.second_class}`}>World</p> */}
      <p className={clsx(s.title, s.second_class, 'active', 'hello', 'world')}>World</p>
      <nav className={s.wrapper}>
        <ul className='nav'>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
