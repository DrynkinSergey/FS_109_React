// import './Message.css';
import s from './Message.module.css';
import { FcApproval } from 'react-icons/fc';

const Message = ({ author = 'Default author', text }) => {
  return (
    <div>
      <h4 className={s.title}>
        {text} <FcApproval className={s.icon} />
      </h4>
      <span>{author}</span>
    </div>
  );
};
export default Message;
