import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'

interface  addFormInterface {
  author: string
  title: string
  img: string
  ISBN: string
}

export enum FormInputEnum {
  author = 'author',
  title = 'title',
  img = 'img',
  ISBN = 'ISBN'
}

const initialState: addFormInterface = {
  author: '',
  title: '',
  img: '',
  ISBN: ''
}
export const addFormState = createSlice({
  name: 'addNewPositionForm',
  initialState,
  reducers: {
    changeAuthor: (state, action: PayloadAction<string>): void => {
      state.author = action.payload
    },
    changeTitle: (state, action: PayloadAction<string>): void => {
      state.title = action.payload
    },
    changeImg: (state, action: PayloadAction<string>):void => {
      state.img = action.payload
    },
    changeISBN: (state, action: PayloadAction<string>):void => {
      state.ISBN = action.payload
    } 
  }
}
)


export const { changeISBN, changeAuthor, changeTitle, changeImg } = addFormState.actions

export const selectAddForm = (state: RootState) => state.addFormState

export default addFormState.reducer
