import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './tasks/todoSlice';

export const store = configureStore({
  reducer: {
    tasks: todoReducer,
  },
});
