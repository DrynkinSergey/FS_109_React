import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './tasks/todoSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    tasks: todoReducer,
    auth: authReducer,
  },
});
