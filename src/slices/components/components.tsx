import type { RootState } from '../../appStore/store'
import { 
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'

export enum ThemeType {
  dark,
  light
}

interface componentsInterface {
  theme: ThemeType
  isLoading: boolean
}
const initialState: componentsInterface = {
  theme: ThemeType.light,
  isLoading: false
}

const componentsSlice  = createSlice({
  name: 'componenstState',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction) => {
      if(state.theme === ThemeType.light) state.theme = ThemeType.dark
      else state.theme = ThemeType.light
    },
  changeIsLoading: (state, action: PayloadAction) => {
    state.isLoading = !state.isLoading
  }
  }
}
)

export const { changeTheme, changeIsLoading } = componentsSlice.actions

export const selectTheme = (state: RootState) => state.componentsState.theme
export const selectIsLoading = (state: RootState) => state.componentsState.isLoading

export default componentsSlice.reducer