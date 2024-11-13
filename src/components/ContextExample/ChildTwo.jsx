import ChildThree from './ChildThree';
import s from './Example.module.css';
const ChildTwo = ({ auto }) => {
  return (
    <div className={s.two}>
      <h2>Child Two</h2>
      <ChildThree auto={auto} />
    </div>
  );
};
export default ChildTwo;
