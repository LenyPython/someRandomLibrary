
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'
import {BookInterface} from '../../constants/interface/bookSlice'


interface initialStateInterface {
  toAdd: BookInterface[]
  toDelete: BookInterface[]
  length: number
}
const initialState: initialStateInterface = {
  toAdd: [],
  toDelete: [],
  length: 0
}

const requests = createSlice({
  name: 'currentRequests',
  initialState,
  reducers:{
    addToAdd: (state, action: PayloadAction<BookInterface>) =>{
      state.toAdd.push(action.payload)
      state.length++
    },
    addToDelete: (state, action: PayloadAction<BookInterface>) =>{
      state.toDelete.push(action.payload)
      state.length++
    },
    removeToAdd: (state, action: PayloadAction<string>) =>{
      state.toAdd = state.toAdd.filter(item => item.id !== action.payload)
      state.length--
    },
    removeToDelete: (state, action: PayloadAction<string>) =>{
      state.toDelete = state.toDelete.filter(item => item.id !== action.payload)
      state.length--
    }
  }
})

export const { addToAdd, addToDelete, removeToAdd, removeToDelete } = requests.actions

export const getRequests = (state: RootState) => state.requests
export const reqLength = (state: RootState) => state.requests.length

export default requests.reducer
