import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
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
    const { name, value } = e.target;
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

        <button type='submit'>Register</button>
      </form>
    </div>
  );
};
export default Form;
