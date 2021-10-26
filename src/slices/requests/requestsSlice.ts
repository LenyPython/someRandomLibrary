
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'
import {BookInterface} from '../../constants/interface/bookSlice'


interface initialStateInterface {
  toAdd: BookInterface[]
  toDelete: BookInterface[]
}
const initialState: initialStateInterface = {
  toAdd: [],
  toDelete: []
}

const requests = createSlice({
  name: 'currentRequests',
  initialState,
  reducers:{
    addToAdd: (state, action: PayloadAction<BookInterface>) =>{
      state.toAdd.push(action.payload)
    },
    addToDelete: (state, action: PayloadAction<BookInterface>) =>{
      state.toDelete.push(action.payload)
    },
    removeToAdd: (state, action: PayloadAction<number>) =>{
      state.toAdd.filter((item, id ) => id !== action.payload)
    },
    removeToDelete: (state, action: PayloadAction<number>) =>{
      state.toDelete.filter((item, id ) => id !== action.payload)
    }
  }
})

export const { addToAdd, addToDelete, removeToAdd, removeToDelete } = requests.actions

export const getRequests = (state: RootState) => state.requests

export default requests.reducer
