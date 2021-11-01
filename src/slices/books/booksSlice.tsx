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
    },
    addBook: (state, action: PayloadAction<BookInterface>) => {
      state.list.push(action.payload)
    },
    removeBooks: (state, action:PayloadAction<Set<string>>) =>{
      const BooksToDelete = action.payload
      state.list = state.list.filter( book => !BooksToDelete.has(book.id) ) 
    },
    changeBookStatus: (status, action: PayloadAction<{id:string, available:boolean}>) => {
      const { id, available } = action.payload
      status.list.forEach( book => {
        if(book.id === id) book.available = available
      })
    }


    } 
  }
)


export const { setState, addBook, removeBooks, changeBookStatus } = booksSlice.actions

export const selectBooks = (state: RootState) => state.books.list

export default booksSlice.reducer
