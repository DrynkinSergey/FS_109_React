import { useContext } from 'react';
import s from './Example.module.css';
import { myContext } from '../App';
const ChildThree = ({ auto }) => {
  const { model, owner } = useContext(myContext);
  return (
    <div className={s.three}>
      <h2>Child Three</h2>
      <h3>My car is: {auto}</h3>
      <h3>Model: {model}</h3>
      <h3>owner: {owner}</h3>
    </div>
  );
};
export default ChildThree;
