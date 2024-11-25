import AddPost from './AddPost';
import s from './Posts.module.css';
const Posts = () => {
  return (
    <div className={s.wrapper}>
      <h2>Posts</h2>
      <AddPost />
      <ul className={s.list}>
        <li className={s.item}>Post 1 </li>
        <li className={s.item}>Post 2 </li>
        <li className={s.item}>Post 3 </li>
      </ul>
    </div>
  );
};
export default Posts;
