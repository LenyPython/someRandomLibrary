import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'
import { 
  BookInterface,
  StateInterface
} from '../../constants/interface/bookSlice'



const initialState: StateInterface = {
  list: [],
  length: 0
}


export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<BookInterface[]>) => {
      state.list = action.payload
      state.length = action.payload.length
    },
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


export const { setState, addBook, removeBook, borrowReturn } = booksSlice.actions

export const selectBooks = (state: RootState) => state.books.list

export default booksSlice.reducer
