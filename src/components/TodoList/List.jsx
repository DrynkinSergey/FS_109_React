import s from './TodoList.module.css';

export const List = () => {
  return (
    <ul className={s.list}>
      {[].map(item => (
        <li className={s.item} key={item.id}>
          <input type='checkbox' checked={item.completed} onChange={() => {}} />
          <p>{item.todo}</p>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};
