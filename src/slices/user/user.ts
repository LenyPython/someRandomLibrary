import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../appStore/store'


interface initialStateInterface {
  id: string | null,
  email: string | null
  admin?: boolean
}
const initialState: initialStateInterface = {
  id: null,
  email: null
}

const user = createSlice({
  name: 'currentUser',
  initialState,
  reducers:{
    onUserChange: (state, action: PayloadAction<initialStateInterface>) =>{
      const { id, email } = action.payload
      state.id = id
      state.email = email
      state.admin = false
    },
    setAdminPrivlidge: state => {
      state.admin = true
    }
  }
})

export const { onUserChange, setAdminPrivlidge } = user.actions

export const getUser = (state: RootState) => state.currentUser

export default user.reducer
