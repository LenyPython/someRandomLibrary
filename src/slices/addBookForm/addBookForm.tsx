import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'

interface  addFormInterface {
  author: string
  title: string
  img: string
}

export enum FormInputEnum {
  author = 'author',
  title = 'title',
  img = 'img'
}

const initialState: addFormInterface = {
  author: '',
  title: '',
  img: ''
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
    } 
  }
}
)


export const { changeAuthor, changeTitle, changeImg } = addFormState.actions

export const selectAddForm = (state: RootState) => state.addFormState

export default addFormState.reducer
