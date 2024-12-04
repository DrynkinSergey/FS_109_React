import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { changeVisibilityFilter } from '../../redux/todoSlice';
const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.filter}>
      <button onClick={() => dispatch(changeVisibilityFilter('all'))}>All</button>
      <button onClick={() => dispatch(changeVisibilityFilter('active'))}>Active</button>
      <button onClick={() => dispatch(changeVisibilityFilter('completed'))}>Completed</button>
    </div>
  );
};
export default Filter;
