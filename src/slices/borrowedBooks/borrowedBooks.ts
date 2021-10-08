import type { RootState } from '../../appStore/store'
import { 
	createSlice,
	PayloadAction
} from '@reduxjs/toolkit'
import { 
  StateInterface,
  BookInterface
} from '../books/booksSlice'


const initialState: StateInterface = {
	list: {},
	length: 0
}

export const borrowedList = createSlice({
	name: 'borrowedBooks',
	initialState,
	reducers: {
    borrowBook: (state, action: PayloadAction<{id: number, book: BookInterface}>) => {
      let { id, book } = action.payload
      state.list[id] = book
      state.length++
    },
    returnBook: (state, action: PayloadAction<number>) => {
      state.list[action.payload] = state.list[state.length - 1]
      delete state.list[state.length - 1]
      state.length--
    }
	}
})


export const { borrowBook, returnBook } = borrowedList.actions

export const selectBorrowedBooks = (state: RootState) => state.borrowedBooks.list

export default borrowedList.reducer
