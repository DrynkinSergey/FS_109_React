import Header from './Header/Header';
import Message from './Message/Message';

const App = () => {
  return (
    <div>
      <Header />
      <Message text='Куплю праску!' author='Олена' />
      <Message text='Продам телевізор' author='Макс' />
      <Message text='Куплю шапку' author='Ігор' />
    </div>
  );
};

export default App;
