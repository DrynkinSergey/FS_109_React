import { Field, Form, Formik } from 'formik';
import s from './Form.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  return (
    <div className={s.wrapper}>
      <h2>Register</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field name='name' placeholder='Enter name' />
          <Field name='email' placeholder='Enter email' />
          <Field name='password' type='password' placeholder='Enter pass' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;
