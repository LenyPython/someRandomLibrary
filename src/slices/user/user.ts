import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'


interface initialStateInterface {
  user: string | null
}
const initialState: initialStateInterface = {
  user: null
}

const user = createSlice({
  name: 'currentUser',
  initialState,
  reducers:{
    onUserChange: (state, action: PayloadAction<string | null>) =>{
      state.user = action.payload
    }
  }
})

export const { onUserChange } = user.actions

export const getUser = (state: RootState) => state.currentUser.user

export default user.reducer
