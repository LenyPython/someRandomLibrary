import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'
import { BOOKS } from './bookData'

//Type for the slice state
export interface BookInterface {
  id: number,
  author: string,
  title: string,
  available: boolean
}

interface StateInterface {
  books: BookInterface[]
}

const initialState:  StateInterface = {
  books: BOOKS
}


export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookInterface>) => {
      state.books.push(action.payload)
    },
    removeBook: (state, action: PayloadAction<BookInterface>) => {
      state.books = state.books.filter(item => item.id != action.payload.id)
    },
    borrowReturn: (state, action: PayloadAction<BookInterface>) => {
      state.books = state.books.map( item => {
        return item.id == action.payload.id ?
          { ...item,
            available: !item.available} :
              item
      })
    } 
  }
})


export const { addBook, removeBook, borrowReturn } = booksSlice.actions

export const selectBooks = (state: RootState) => state.books

export default booksSlice.reducer
