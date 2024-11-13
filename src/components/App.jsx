import { useContext } from 'react';
import { Counter } from './Counter/Counter';
import Header from './Header/Header';
import { authContext } from '../context/AuthProvider';
import Form from './Form/Form';

const App = () => {
  const { username } = useContext(authContext);

  if (!username) {
    return <Form />;
  }
  return (
    <div>
      <Header />
      <Counter />
    </div>
  );
};
export default App;
