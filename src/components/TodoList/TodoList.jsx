import { useDispatch, useSelector } from 'react-redux';
import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { fetchTodos } from '../../redux/tasks/operations';
import { useEffect } from 'react';

import Filter from './Filter';
import { selectIsLoading, selectUncompletedTodosMemo } from '../../redux/tasks/selectors';
export const TodoList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const uncompletedTodos = useSelector(selectUncompletedTodosMemo);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <Filter />
      <h3>Uncompleted Tasks: {uncompletedTodos}</h3>
      {isLoading && <h2>Loading...</h2>}
      <List />
    </div>
  );
};
