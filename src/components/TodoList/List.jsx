import { useSelector } from 'react-redux';
import Item from './Item';
import s from './TodoList.module.css';
import { selectFilteredTasksMemo } from '../../redux/tasks/selectors';

export const List = () => {
  const todos = useSelector(selectFilteredTasksMemo);

  return (
    <ul className={s.list}>
      {todos.map(item => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};
