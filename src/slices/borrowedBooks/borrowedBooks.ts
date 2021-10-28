import type { RootState } from '../../appStore/store'
import { 
	createSlice,
	PayloadAction
} from '@reduxjs/toolkit'

const initialState: {list: string[]} = {
	list: []
}

export const borrowedList = createSlice({
	name: 'borrowedBooks',
	initialState,
	reducers: {
    saveMyBorrowed: (state, action: PayloadAction<string[]>) => {
			state.list = action.payload
    }
	}
})


export const { saveMyBorrowed } = borrowedList.actions

export const selectBorrowedBooks = (state: RootState) => state.borrowedBooks.list

export default borrowedList.reducer
