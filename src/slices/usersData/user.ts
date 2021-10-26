import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userInterface } from '../user/user'
import type { RootState } from '../../appStore/store'


interface initialStateInterface {
  users: userInterface[]
}
const initialState: initialStateInterface = {
  users: []
}

const users = createSlice({
  name: 'Users',
  initialState,
  reducers:{
    setUsers: (state, action: PayloadAction<userInterface[]>) =>{
      state.users = action.payload
    },
    removeUsers: (state) =>{
      state.users = []
    }
  }
})

export const { setUsers } = users.actions

export const getUsersData = (state: RootState) => state.usersData.users

export default users.reducer
