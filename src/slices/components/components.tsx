import type { RootState } from '../../appStore/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SnackbarOrigin } from '@mui/material/Snackbar';
import { AlertColor } from '@mui/material/Alert';


export enum ThemeType {
  dark,
  light
}

interface snackbarActionPayload {
  alert: AlertColor
  message: string
}
interface snackbarStatus extends SnackbarOrigin, snackbarActionPayload {
  open: boolean
}

interface componentsInterface {
  theme: ThemeType
  isLoading: boolean
  snackbar: snackbarStatus
}
const initialState: componentsInterface = {
  theme: ThemeType.light,
  isLoading: false,
  snackbar: {
    open: false,
    vertical: 'top',
    horizontal: 'center',
    alert: 'success',
    message: ''
  }
}

const componentsSlice  = createSlice({
  name: 'componenstState',
  initialState,
  reducers: {
    changeTheme: (state) => {
      if(state.theme === ThemeType.light) state.theme = ThemeType.dark
      else state.theme = ThemeType.light
    },
    changeIsLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    closeSnackbar: status => {
      status.snackbar.open = false 
    },
    sendMessage: (status, action: PayloadAction<snackbarActionPayload>) => {
      const { alert, message } = action.payload
      status.snackbar = {
        ...status.snackbar,
        open: true,
        alert,
        message
      }

    }
}
}
)

export const { closeSnackbar, changeTheme, changeIsLoading, sendMessage } = componentsSlice.actions

export const selectTheme = (state: RootState) => state.componentsState.theme
export const selectIsLoading = (state: RootState) => state.componentsState.isLoading
export const getSnackbarState = (state: RootState) => state.componentsState.snackbar

export default componentsSlice.reducer
