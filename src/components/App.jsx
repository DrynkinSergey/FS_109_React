import Header from './Header/Header';
import List from './List/List';
import Message from './Message/Message';

const App = () => {
  const isOnline = false;
  const isLoading = false;
  const age = 44;
  const filmsData = [
    {
      id: '1',
      title: 'Terminator',
    },

    {
      id: '2',
      title: 'Spiderman',
    },
    {
      id: '3',
      title: 'Batman',
    },
  ];
  const goodsData = [
    {
      id: '1',
      title: 'Морква',
    },

    {
      id: '2',
      title: 'Капуста',
    },
    {
      id: '5',
      title: 'Банку огірків',
    },
    {
      id: '3',
      title: 'Iphone',
    },
  ];
  return (
    <div>
      <Header />
      {isOnline && <h1>Welcome back!</h1>}
      {isLoading && <h2>Loading...</h2>}
      {age > 18 ? <h2>Ти диви який вимахав!</h2> : <h2>Йди їж кашу</h2>}
      <List title='My films' data={filmsData} />
      <List title='Goods' data={goodsData} />
      <Message text='Куплю праску!' author='Олена' />
      <Message text='Продам телевізор' author='Макс' />
      <Message text='Куплю шапку' author='Ігор' />
    </div>
  );
};

export default App;
