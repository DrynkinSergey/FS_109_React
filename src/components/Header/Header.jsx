import s from './Header.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <h3>Hooks</h3>
      <p>Welcome user@example.com</p>
      <button>Logout</button>
    </header>
  );
};
export default Header;
