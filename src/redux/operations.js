import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://674df387635bad45618d4fe4.mockapi.io';

export const fetchTodos = createAsyncThunk('todos/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/todos');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id, thunkAPI) => {
  try {
    await axios.delete(`/todos/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
