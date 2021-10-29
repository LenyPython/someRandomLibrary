
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'
import {BookInterface} from '../../constants/interface/bookSlice'


export interface initialRequestsStateInterface {
  toAdd: BookInterface[]
  toDelete: BookInterface[]
  length: number
}
const initialState: initialRequestsStateInterface = {
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
      sessionStorage.setItem('toAdd', JSON.stringify(state.toAdd));
    },
    addToDelete: (state, action: PayloadAction<BookInterface>) =>{
      state.toDelete.push(action.payload)
      state.length++
      sessionStorage.setItem('toDelete', JSON.stringify(state.toDelete));
    },
    removeToAdd: (state, action: PayloadAction<string>) =>{
      state.toAdd = state.toAdd.filter(item => item.id !== action.payload)
      state.length--
      sessionStorage.setItem('toAdd', JSON.stringify(state.toAdd));
    },
    removeToDelete: (state, action: PayloadAction<string>) =>{
      state.toDelete = state.toDelete.filter(item => item.id !== action.payload)
      state.length--
      sessionStorage.setItem('toDelete', JSON.stringify(state.toDelete));
    },
      emptyRequests: state => {
        state.toAdd = []
        sessionStorage.setItem('toAdd', JSON.stringify(state.toAdd));
        state.toDelete = []
        sessionStorage.setItem('toDelete', JSON.stringify(state.toDelete));
        state.length = 0
      }
  }
})

export const {
  addToAdd,
  addToDelete,
  removeToAdd,
  removeToDelete, 
  emptyRequests
} = requests.actions

export const getRequests = (state: RootState) => state.requests
export const reqLength = (state: RootState) => state.requests.length

export default requests.reducer
