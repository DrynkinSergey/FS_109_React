import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './operations';

const initialState = {
  items: [{ id: 123, todo: 'Вивчити React!', completed: true }],
  filter: '',
  isLoading: false,
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    removeTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    editTodo: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      item.todo = action.payload.todo;
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
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

// selectors
export const selectTodos = state => state.todos.items;
export const selectFilter = state => state.todos.filter;

export const { removeTodo, addTodo, changeFilter, toggleTodo, editTodo } = slice.actions;
export const todoReducer = slice.reducer;
