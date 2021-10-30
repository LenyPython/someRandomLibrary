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
    },
		addMyBorrowed: (state, action: PayloadAction<string>) =>{
			state.list.push(action.payload)
		},
		removeMyBorrowed: (state, action: PayloadAction<string>) =>{
			state.list = state.list.filter(item => item !== action.payload )
		}
}
})


export const { saveMyBorrowed, removeMyBorrowed, addMyBorrowed } = borrowedList.actions

export const selectBorrowedBooks = (state: RootState) => state.borrowedBooks.list

export default borrowedList.reducer
