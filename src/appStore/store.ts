import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import booksReducer from '../slices/books/booksSlice'
import addFormStateReducer from '../slices/addBookForm/addBookForm'
import borrowedBooksReducer from '../slices/borrowedBooks/borrowedBooks'
import componentsReducer from '../slices/components/components'
import foundBooksReducer from '../slices/foundEntries/foundEntries'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    found: foundBooksReducer,
    books: booksReducer,
    borrowedBooks: borrowedBooksReducer,
    addFormState: addFormStateReducer,
    componentsState: componentsReducer
  },
  middleware: (getDefaultMiddleware) => 
     getDefaultMiddleware()
    .prepend(
      sagaMiddleware
    )
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
