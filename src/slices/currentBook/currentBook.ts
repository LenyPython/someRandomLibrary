
import { BookInterface } from '../../constants/interface/bookSlice'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'


interface stateInterface {
  book: {
  authors: string
  title: string
  cover: string
  ISBN: string
  open: boolean
  }
}

const initialState: stateInterface = {
  book: {
    authors: '',
    title: '',
    cover: '',
    ISBN: '',
    open: false
  }
}

export const currentRead = createSlice({
  name: 'currentReadBook',
  initialState,
  reducers: {
    setCurrentRead: (state, action: PayloadAction<BookInterface>) => {
      const { authors, title, cover, ISBN } = action.payload
      state.book = {
        authors: authors.join(', '),
        title,
        cover,
        ISBN,
        open: true
      }
    },
    closeWindow: state => {
      state.book.open = false
    }
  }
}
)


export const { setCurrentRead, closeWindow } = currentRead.actions

export const getCurrentRead = (state: RootState) => state.currentRead.book

export default currentRead.reducer
