How to add createAsyncThunk to proj

- Створити файл `operations.js`
- В цьому файлі ми маємо створити операцію, яку поверне вбудована функція `createAsyncThunk`

```
export const fetchTodos = createAsyncThunk('todos/fetchAll', async () => {
  try {
    const response = await axios.get('/todos');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});
```

- Ми маємо викликати її в компонентах через діспатч

```
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
```

- В слайсі створюємо екстра редьюсери, які будуть перехоплювати асинхронні та сторонні екшени

```
 extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
      });
  }
```

- Ми можемо створювати скільки завгодно кейсів через chaining
- Перехоплюється пейлоад, який був у thunk, і записується в наш локальний стейт (redux)

- Для опрацювання помилок використовується спеціальний об'єкт `thunkAPI`.

```

export const fetchTodos = createAsyncThunk('todos/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/todos1');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
```
