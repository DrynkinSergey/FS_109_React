import { useState } from 'react';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  age: '',
  country: '',
  about: '',
  agree: false,
  gender: 'female',
};
const Form = ({ register }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = e => {
    e.preventDefault();
    register(formData);
    setFormData(INITIAL_STATE);
  };

  // DRY
  // ❌
  // const handleChangeUsernameField = e => {
  //   setFormData(prev => ({ ...prev, username: e.target.value }));
  // };
  // const handleChangeEmailField = e => {
  //   setFormData(prev => ({ ...prev, email: e.target.value }));
  // };
  // const handleChangePasswordField = e => {
  //   setFormData(prev => ({ ...prev, password: e.target.value }));
  // };

  const handleChangeInput = e => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      return setFormData({ ...formData, [name]: !formData[name] });
    }

    if (value === 'Angular') {
      setFormData({
        ...formData,
        [name]: 'REACT',
      });
      return alert('ANGULAR IS NOT AVAILABLE!!!!');
    }

    // Код піде сюди тільки якщо не чекбокс
    console.log('If not checkbox');

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input value={formData.username} onChange={handleChangeInput} type='text' placeholder='name' name='username' />
        </label>

        <label>
          <span>Email:</span>
          <input value={formData.email} onChange={handleChangeInput} type='text' placeholder='email' name='email' />
        </label>

        <label>
          <span>Password:</span>
          <input value={formData.password} onChange={handleChangeInput} type='password' placeholder='password' name='password' />
        </label>

        <label>
          <span>Age:</span>
          <input value={formData.age} onChange={handleChangeInput} type='number' placeholder='Age' name='age' />
        </label>
        <label>
          <span>About me:</span>
          <textarea value={formData.about} onChange={handleChangeInput} placeholder='Age' name='about' />
        </label>

        <label>
          <span>Country:</span>
          <select value={formData.country} onChange={handleChangeInput} name='country'>
            <option value='Ukraine'>Ukraine</option>
            <option value='USA'>USA</option>
            <option value='Canada'>Canada</option>
            <option value='Zimbabve'>Zimbabve</option>
          </select>
        </label>
        <div>
          <label>
            <input type='radio' onChange={handleChangeInput} value='male' checked={formData.gender === 'male'} name='gender' /> Male
          </label>
          <label>
            <input type='radio' onChange={handleChangeInput} value='female' checked={formData.gender === 'female'} name='gender' /> Female
          </label>
        </div>

        <label>
          <input type='checkbox' checked={formData.agree} name='agree' onChange={handleChangeInput} /> I agree with rules! Continue!
        </label>

        <button type='submit'>Register</button>
      </form>
    </div>
  );
};
export default Form;
