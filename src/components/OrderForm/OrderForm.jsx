import { Field, Form, Formik } from 'formik';

const OrderForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
  };
  const initialValues = {
    username: '',
    tel: '',
    email: '',
  };

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <label>
            <span>Ім'я</span>
            <Field type='text' placeholder="Введіть ім'я:" name='username' />
          </label>
          <label>
            <span>Телефон</span>
            <Field type='text' placeholder='Введіть Телефон:' name='tel' />
          </label>
          <label>
            <span>Емейл</span>
            <Field type='text' placeholder='Введіть Емейл:' name='email' />
          </label>
          <button type='submit'>Замовити</button>
        </Form>
      </Formik>
    </div>
  );
};
export default OrderForm;
