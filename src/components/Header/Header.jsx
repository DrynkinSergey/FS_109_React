import { useContext } from 'react';
import s from './Header.module.css';
import { authContext } from '../../context/AuthProvider';
import Modal from '../Modal/Modal';
import { useToggle } from '../../hooks/useToggle';
const Header = () => {
  const { isOpen, openModal, closeModal } = useToggle();

  const { username, logout } = useContext(authContext);
  return (
    <header className={s.header}>
      <h3>Hooks</h3>
      <p>Welcome {username}</p>
      <button onClick={openModal}>Open</button>
      <button onClick={logout}>Logout</button>
      {isOpen && <Modal onClose={closeModal}>Lorem, ipsum.</Modal>}
    </header>
  );
};
export default Header;
