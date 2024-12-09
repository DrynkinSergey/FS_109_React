import { Field, Form, Formik } from 'formik';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../../redux/tasks/operations';

export const AddForm = () => {
  const initialValues = { text: '' };
  const dispatch = useDispatch();
  const onSubmit = values => {
    const newTodo = {
      id: nanoid(),
      text: values.text,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='text' placeholder='Enter new todo' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
