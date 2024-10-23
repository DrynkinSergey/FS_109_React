import s from './Profile.module.css';
const Profile = ({ user }) => {
  const { image, firstName, lastName, age, email } = user;
  // const { image, firstName, lastName, age, email } = item;
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.image} src={image} />
        <h2 className={s.name}>
          {firstName} {lastName}
        </h2>
        <p>Email: {email}</p>
        <p className={s.age}>Age: {age}</p>
      </div>
    </div>
  );
};
export default Profile;
