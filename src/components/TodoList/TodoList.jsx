import { useDispatch, useSelector } from 'react-redux';
import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { fetchTodos } from '../../redux/operations';
import { useEffect } from 'react';
import { selectIsLoading } from '../../redux/todoSlice';
export const TodoList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      {isLoading && <h2>Loading...</h2>}
      <List />
    </div>
  );
};
