import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.tasks.items;
export const selectFilter = state => state.tasks.filter;
export const selectIsError = state => state.tasks.isError;
export const selectIsLoading = state => state.tasks.isLoading;

export const selectVisibilityFilter = state => state.tasks.visibilityFilter;

export const selectFilteredTasksMemo = createSelector([selectTodos, selectVisibilityFilter], (todos, visibilityFilter) => {
  console.log('SELECT FILTERED TASKS');

  switch (visibilityFilter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
});

export const selectFilteredTasks = state => {
  console.log('SELECT FILTERED TASKS');
  const todos = selectTodos(state);
  // const todos = state.tasks.items;
  const visibilityFilter = selectVisibilityFilter(state);

  switch (visibilityFilter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export const selectUncompletedTodos = state => {
  console.log('UNCOMPLETED LOGIC');
  const todos = selectTodos(state);
  return todos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0);
};

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
  console.log('UNCOMPLETED LOGIC');
  return todos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0);
});
