import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'
import { BOOKS } from './bookData'

//Type for the slice state
export interface BookInterface {
  author: string,
  title: string,
  available: boolean
  image?: string
}

export interface Entry {
 [id: number]: BookInterface 
}

export interface StateInterface {
  list: Entry
  length: number
}

const initialState:  StateInterface = {
  list: BOOKS,
  length: Object.keys(BOOKS).length
}


export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookInterface>) => {
      state.list[state.length] = action.payload
      state.length++
    },
    removeBook: (state, action: PayloadAction<number>) => {
      delete state.list[action.payload]
    },
    borrowReturn: (state, action: PayloadAction<number>) => {
      state.list[action.payload].available = !state.list[action.payload].available
      }
    } 
  }
)


export const { addBook, removeBook, borrowReturn } = booksSlice.actions

export const selectBooks = (state: RootState) => state.books.list

export default booksSlice.reducer
