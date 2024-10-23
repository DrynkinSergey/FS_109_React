import './Message.css';
const Message = ({ author = 'Default author', text }) => {
  return (
    <div>
      <h4 className='title'>{text}</h4>
      <span>{author}</span>
    </div>
  );
};
export default Message;
