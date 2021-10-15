
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'
import { 
  BookInterface,
} from '../../constants/interface/bookSlice'


const initialState: BookInterface[]  = []

export const foundSlice = createSlice({
  name: 'foundEntries',
  initialState,
  reducers: {
    addToFound: (state, action: PayloadAction<BookInterface>) => {
			state.push(action.payload)
			if(state.length > 5) state.shift()
    } 
  }
}
)


export const { addToFound } = foundSlice.actions

export const foundBooksSelector = (state: RootState) => state.found

export default foundSlice.reducer
