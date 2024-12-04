import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { deleteTodo, fetchTodos, addTodo, editTodo, toggleTodo } from './operations';

const initialState = {
  items: [{ id: 123, todo: 'Вивчити React!', completed: true }],
  filter: '',
  visibilityFilter: 'all',
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
    changeVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
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
      .addCase(toggleTodo.fulfilled, (state, { payload }) => {
        const item = state.items.find(item => item.id === payload.id);
        item.completed = !item.completed;
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

export const { changeFilter, changeVisibilityFilter } = slice.actions;
export const todoReducer = slice.reducer;
