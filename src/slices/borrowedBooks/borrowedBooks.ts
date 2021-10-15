import type { RootState } from '../../appStore/store'
import { 
	createSlice,
	PayloadAction
} from '@reduxjs/toolkit'
import { 
  StateInterface,
  BookInterface
} from '../../constants/interface/bookSlice'


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
      if(state.list[action.payload] === undefined) return
      delete state.list[action.payload]
      state.length--
    }
	}
})


export const { borrowBook, returnBook } = borrowedList.actions

export const selectBorrowedBooks = (state: RootState) => state.borrowedBooks.list

export default borrowedList.reducer
