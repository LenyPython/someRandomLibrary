import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'

interface  addFormInterface {
  author?: string
  title?: string
  img?: string
}

const initialState: addFormInterface = {
}
export const addFormState = createSlice({
  name: 'addForm',
  initialState,
  reducers: {
    changeForm: (state, action: PayloadAction<addFormInterface>): void => {
      state = {
        ...state,
        ...action.payload
      }
    }    
  } 
  }
)


export const { changeForm } = addFormState.actions

export const selectAddForm = (state: RootState) => state.addFormState

export default addFormState.reducer
