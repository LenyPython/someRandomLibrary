import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../slices/books/booksSlice'
import addFormStateReducer from '../slices/addBookForm/addBookForm'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    addFormState: addFormStateReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
