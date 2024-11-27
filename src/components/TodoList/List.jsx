import Item from './Item';
import s from './TodoList.module.css';

export const List = () => {
  return (
    <ul className={s.list}>
      {[].map(item => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};
