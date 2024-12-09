import { Field, Form, Formik } from 'formik';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../../redux/tasks/operations';

export const AddForm = () => {
  const initialValues = { todo: '' };
  const dispatch = useDispatch();
  const onSubmit = values => {
    const newTodo = {
      id: nanoid(),
      todo: values.todo,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='todo' placeholder='Enter new todo' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
