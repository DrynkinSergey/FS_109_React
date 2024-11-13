import { useContext } from 'react';
import { Counter } from './Counter/Counter';
import Header from './Header/Header';
import { authContext } from '../context/AuthProvider';
import Form from './Form/Form';
import Modal from './Modal/Modal';
import { useToggle } from '../hooks/useToggle';

const App = () => {
  const { isOpen, openModal, closeModal } = useToggle();

  const { username } = useContext(authContext);

  if (!username) {
    return <Form />;
  }
  return (
    <div>
      <Header />
      <Counter />
      <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem blanditiis optio sint impedit omnis itaque repudiandae nihil error
          cupiditate dolores id ratione modi aliquam, ut enim iusto. Architecto, veritatis iusto.
        </Modal>
      )}
    </div>
  );
};
export default App;
