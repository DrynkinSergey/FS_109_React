import { useState } from 'react';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import Modal from './Modal/Modal';
import { TodoList } from './TodoList/TodoList';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minus quia a laborum, sed voluptatibus adipisci ratione obcaecati ullam
          eaque, ipsum voluptates qui deserunt vero laboriosam aperiam? Atque, quo fuga!
        </Modal>
      )}
      <Counter />
      {/* <ColorPicker /> */}
      {/* <TodoList /> */}
    </div>
  );
};
export default App;
