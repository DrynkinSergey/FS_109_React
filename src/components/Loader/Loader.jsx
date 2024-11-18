import { Comment } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Comment
        visible={true}
        height='180'
        width='180'
        ariaLabel='comment-loading'
        wrapperStyle={{}}
        wrapperClass='comment-wrapper'
        color='#fff'
        backgroundColor='#180df0'
      />
    </div>
  );
};
export default Loader;
