import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'
import { 
  BookInterface,
  StateInterface
} from '../../constants/interface/bookSlice'



const initialState: StateInterface = {
  list: []
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<BookInterface[]>) => {
      state.list = action.payload
    }
    } 
  }
)


export const { setState } = booksSlice.actions

export const selectBooks = (state: RootState) => state.books.list

export default booksSlice.reducer
