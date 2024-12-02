import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
