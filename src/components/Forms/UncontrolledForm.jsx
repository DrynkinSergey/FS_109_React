const UncontrolledForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Submit is done! 🔥');
    // console.log(e.currentTarget);
    const form = e.currentTarget;
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log({ username, email, password });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input type='text' placeholder='name' name='username' />
        </label>

        <label>
          <span>Email:</span>
          <input type='text' placeholder='email' name='email' />
        </label>

        <label>
          <span>Password:</span>
          <input type='password' placeholder='password' name='password' />
        </label>

        <button type='submit'>Register</button>
      </form>
    </div>
  );
};
export default UncontrolledForm;
