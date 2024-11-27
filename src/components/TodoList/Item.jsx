import s from './TodoList.module.css';
const Item = ({ completed, todo }) => {
  return (
    <li className={s.item}>
      <input type='checkbox' checked={completed} onChange={() => {}} />
      <p>{todo}</p>
      <button>Delete</button>
    </li>
  );
};
export default Item;
