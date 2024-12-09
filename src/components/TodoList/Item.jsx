import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { deleteTodo, editTodo, toggleTodo } from '../../redux/tasks/operations';
const Item = ({ completed, text, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <input type='checkbox' checked={completed} onChange={() => dispatch(toggleTodo({ id, text, completed: !completed }))} />
      <p>{text}</p>
      <div>
        <button onClick={() => dispatch(editTodo({ id, text: prompt('Enter new value: ') ?? text }))}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  );
};
export default Item;
