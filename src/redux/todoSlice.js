import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { deleteTodo, fetchTodos, addTodo, editTodo } from './operations';

const initialState = {
  items: [{ id: 123, todo: 'Вивчити React!', completed: true }],
  filter: '',
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleTodo: (state, action) => {
      // state.items = state.items.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item));

      const item = state.items.find(item => item.id === action.payload);
      if (item !== -1) {
        item.completed = !item.completed;
      }

      // const itemIndex = state.items.findIndex(item => item.id == action.payload);
      // state.items[itemIndex].completed = !state.items[itemIndex].completed;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.items = payload;
      })

      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(editTodo.fulfilled, (state, { payload }) => {
        const item = state.items.find(item => item.id === payload.id);
        item.todo = payload.todo;
      })

      .addMatcher(isAnyOf(addTodo.pending, editTodo.pending, deleteTodo.pending, fetchTodos.pending), state => {
        state.isError = false;
        state.isLoading = true;
      })

      .addMatcher(isAnyOf(addTodo.rejected, editTodo.rejected, deleteTodo.rejected, fetchTodos.rejected), state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addMatcher(isAnyOf(addTodo.fulfilled, editTodo.fulfilled, deleteTodo.fulfilled, fetchTodos.fulfilled), state => {
        state.isLoading = false;
      });
  },
});

// selectors
export const selectTodos = state => state.todos.items;
export const selectFilter = state => state.todos.filter;
export const selectIsError = state => state.todos.isError;
export const selectIsLoading = state => state.todos.isLoading;

export const { changeFilter, toggleTodo } = slice.actions;
export const todoReducer = slice.reducer;
