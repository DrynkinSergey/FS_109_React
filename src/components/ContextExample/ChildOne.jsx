import ChildTwo from './ChildTwo';
import s from './Example.module.css';
const ChildOne = () => {
  return (
    <div className={s.one}>
      <h2>Child One</h2>
      <ChildTwo />
    </div>
  );
};
export default ChildOne;
