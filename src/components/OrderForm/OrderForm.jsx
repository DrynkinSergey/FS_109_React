import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './OrderForm.module.css';
import * as Yup from 'yup';

const OrderForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const orderSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Поле не може бути менше ніж 3 символи')
      .max(20, 'Поле не може бути більше ніж 20 символи')
      .required("Це поле обов'язкове"),
    email: Yup.string().matches(re, 'Не є емейлом!').required("Поле обов'язкове"),
    tel: Yup.string().min(9).required("Поле обов'язкове"),
    desire: Yup.string().min(3).max(120),
    petType: Yup.string().oneOf(['cat', 'dog']),
  });

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
      <Formik validationSchema={orderSchema} onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Ім'я</span>
            <Field className={s.input} placeholder="Введіть ім'я:" name='username' />
            <ErrorMessage name='username' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>Телефон</span>
            <Field className={s.input} placeholder='Введіть Телефон:' name='tel' />
            <ErrorMessage name='tel' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>Емейл</span>
            <Field className={s.input} placeholder='Введіть Емейл:' name='email' />
            <ErrorMessage name='email' component='span' className={s.error} />
          </label>

          <label className={s.label}>
            <span>Побажання</span>
            <Field as='textarea' className={s.input} placeholder='Введіть побажання:' name='desire' />
            <ErrorMessage name='desire' component='span' className={s.error} />
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
            <ErrorMessage name='petType' component='span' className={s.error} />
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
