// import './Message.css';
import s from './Message.module.css';
const Message = ({ author = 'Default author', text }) => {
  return (
    <div>
      <h4 className={s.title}>{text}</h4>
      <span>{author}</span>
    </div>
  );
};
export default Message;
