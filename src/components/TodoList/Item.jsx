import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { editTodo, removeTodo, toggleTodo } from '../../redux/todoSlice';
const Item = ({ completed, todo, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <input type='checkbox' checked={completed} onChange={() => dispatch(toggleTodo(id))} />
      <p>{todo}</p>
      <div>
        <button onClick={() => dispatch(editTodo({ id, todo: prompt('Enter new value: ') ?? todo }))}>Edit</button>
        <button onClick={() => dispatch(removeTodo(id))}>Delete</button>
      </div>
    </li>
  );
};
export default Item;
