import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../slices/books/booksSlice'
import addFormStateReducer from '../slices/addBookForm/addBookForm'
import borrowedBooksReducer from '../slices/borrowedBooks/borrowedBooks'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    borrowedBooks: borrowedBooksReducer,
    addFormState: addFormStateReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
