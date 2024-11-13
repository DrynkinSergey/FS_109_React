import { useContext, useState } from 'react';
import { authContext } from '../../context/AuthProvider';

const Form = () => {
  const { login } = useContext(authContext);
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    login(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setValue(e.target.value)} type='text' />
        <button>Login</button>
      </form>
    </div>
  );
};
export default Form;
