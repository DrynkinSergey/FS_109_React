import { Field, Form, Formik } from 'formik';
import s from './OrderForm.module.css';
const OrderForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
    console.log(options);
  };

  const initialValues = {
    username: '',
    tel: '',
    email: '',
    petType: '',
    agree: false,
    gender: 'male',
    desire: '',
  };

  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Ім'я</span>
            <Field className={s.input} placeholder="Введіть ім'я:" name='username' />
          </label>
          <label className={s.label}>
            <span>Телефон</span>
            <Field className={s.input} placeholder='Введіть Телефон:' name='tel' />
          </label>
          <label className={s.label}>
            <span>Емейл</span>
            <Field className={s.input} placeholder='Введіть Емейл:' name='email' />
          </label>

          <label className={s.label}>
            <span>Побажання</span>
            <Field as='textarea' className={s.input} placeholder='Введіть побажання:' name='desire' />
          </label>
          <label className={s.label}>
            <span>Тип улюбленця</span>
            <Field as='select' className={s.input} name='petType'>
              <option disabled value=''>
                Оберіть з варіантів
              </option>
              <option value='cat'>Кошеня</option>
              <option value='dog'>Цуценя</option>
              <option value='bird'>Птиця</option>
            </Field>
          </label>

          <div>
            <label>
              <Field type='radio' value='male' className={s.input} name='gender' />
              <span>Xлопчик</span>
            </label>
            <label>
              <Field type='radio' value='female' className={s.input} name='gender' />
              <span>Дічинка</span>
            </label>
          </div>
          <label>
            <Field type='checkbox' className={s.input} name='agree' />
            <span>Я приймаю всі правила платформи</span>
          </label>
          <button type='submit'>Обрати послугу</button>
        </Form>
      </Formik>
    </div>
  );
};
export default OrderForm;
