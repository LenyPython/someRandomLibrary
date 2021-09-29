import { configureStore } from '@reduxjs/toolkit';
import booksSlice from '../slices/books/booksSlice'

export const store = configureStore({
  reducer: {
    books: booksSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
