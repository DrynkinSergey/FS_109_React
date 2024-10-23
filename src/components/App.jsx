import Button from './Button/Button';
import Header from './Header/Header';
import List from './List/List';
import Message from './Message/Message';
import Modal from './Modal/Modal';
import '../index.css';
const App = () => {
  const isOnline = false;
  const isLoading = false;
  const age = 44;
  // console.log(`Hello world, my age is ${age}`);
  console.log(`Hello world, my age is ${age}`);

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
      {age > 18 ? <h2 className='title'>Ти диви який вимахав!</h2> : <h2>Йди їж кашу</h2>}
      <List title='My films' data={filmsData} />
      <List title='Goods' data={goodsData} />
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptatem veritatis! Minus fugit sit itaque, cumque exercitationem sequi.
        Dolorum maxime rem possimus sapiente harum exercitationem delectus voluptate consectetur aut nam.
      </section>

      <Modal title='Children how it works'>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non id eaque assumenda cum ex asperiores ipsum ullam, in magni, numquam, deserunt
          eum quas inventore exercitationem animi consectetur. Eos, amet quod.
        </h2>
        <button>CLICK</button>
      </Modal>

      <Modal title='Login'>
        <input />
        <input />
        <button>CLICK</button>
      </Modal>

      <Modal title='Messages box'>
        <Message classn text='Куплю праску!' author='Олена' />
        <Message text='Продам телевізор' author='Макс' />
        <Message text='Куплю шапку' author='Ігор' />
      </Modal>

      <Button>Click</Button>
      <Button>🔥 Click</Button>
    </div>
  );
};

export default App;
