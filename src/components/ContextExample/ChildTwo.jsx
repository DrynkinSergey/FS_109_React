import ChildThree from './ChildThree';
import s from './Example.module.css';
const ChildTwo = () => {
  return (
    <div className={s.two}>
      <h2>Child Two</h2>
      <ChildThree />
    </div>
  );
};
export default ChildTwo;
