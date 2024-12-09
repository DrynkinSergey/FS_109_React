import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../auth/operations';

export const fetchTodos = createAsyncThunk('todos/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await goitApi.get('/tasks');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id, thunkAPI) => {
  try {
    await goitApi.delete(`/tasks/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodo = createAsyncThunk('todos/addTodo', async (body, thunkAPI) => {
  try {
    const response = await goitApi.post(`/tasks`, body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editTodo = createAsyncThunk('todos/editTodo', async (body, thunkAPI) => {
  try {
    const response = await goitApi.patch(`/tasks/${body.id}`, body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (body, thunkAPI) => {
  try {
    const response = await goitApi.patch(`/tasks/${body.id}`, body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
