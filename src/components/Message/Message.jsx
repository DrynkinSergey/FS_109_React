const Message = ({ author = 'Default author', text }) => {
  return (
    <div>
      <h4>{text}</h4>
      <span>{author}</span>
    </div>
  );
};
export default Message;
