import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import booksReducer from '../slices/books/booksSlice'
import addFormStateReducer from '../slices/addBookForm/addBookForm'
import borrowedBooksReducer from '../slices/borrowedBooks/borrowedBooks'
import componentsReducer from '../slices/components/components'
import foundBooksReducer from '../slices/foundEntries/foundEntries'
import currentUserReducer from '../slices/user/user'
import requestsReducer from '../slices/requests/requestsSlice'
import usersDataReducer from '../slices/usersData/user'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    found: foundBooksReducer,
    books: booksReducer,
    borrowedBooks: borrowedBooksReducer,
    addFormState: addFormStateReducer,
    componentsState: componentsReducer,
    currentUser: currentUserReducer,
    requests: requestsReducer,
    usersData: usersDataReducer
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
