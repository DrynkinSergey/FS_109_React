import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { todoReducer } from './todoSlice';

const persistConfig = {
  key: 'counterPersistor',
  version: 1,
  storage,
};
const persistConfigTodos = {
  key: 'todos',
  version: 1,
  storage,
  // whitelist: ['items', '', '', '',],
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, counterReducer);
const persistedReducerTodos = persistReducer(persistConfigTodos, todoReducer);

export const store = configureStore({
  reducer: {
    counter: persistedReducer,
    todos: persistedReducerTodos,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
