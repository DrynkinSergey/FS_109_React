import { useDispatch } from 'react-redux';
import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { fetchTodos } from '../../redux/operations';
import { useEffect } from 'react';
export const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <List />
    </div>
  );
};
