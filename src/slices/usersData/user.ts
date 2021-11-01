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
    updateUserStatus: (state, action: PayloadAction<{id: string, admin:boolean}>) => {
      const { id, admin } = action.payload
      state.users.forEach(user => {
        if(user.id === id) user.admin = admin
      } )
    },
    removeUsers: (state) =>{
      state.users = []
    }
  }
})

export const { setUsers, updateUserStatus } = users.actions

export const getUsersData = (state: RootState) => state.usersData.users

export default users.reducer
