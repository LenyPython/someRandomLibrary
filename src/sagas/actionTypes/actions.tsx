import { BookInterface } from '../../constants/interface/bookSlice'

export enum getBookActions {
  SAVE_BOOK = 'SAVE_BOOK',
  GET_BOOK = 'GET_BOOK',
  ERROR = 'ERROR'
}

export enum FbDataActions {
  GET_DATA = 'GET_DATA',
  SAVE_DATA = 'SAVE_DATA',
  EMPTY_DATA = 'EMPTY_DATA',
}
export enum usersActions {
  CHECK_ADMIN_PRIV = 'CHECK_ADMIN_PRIV',
  GET_USERS = 'GET_USERS',
  CHANGE_STATUS = 'CHANGE_STATUS'
}

export interface getFirebaseDataInterface {
  type: FbDataActions.GET_DATA
}
export interface emptyFirebaseDataInterface {
  type: FbDataActions.EMPTY_DATA
}
export interface getUsersDataInterface {
  type: usersActions.GET_USERS
}
export interface updateUserPrivlidgeInterface {
  type: usersActions.CHANGE_STATUS
  payload: {
    id: string
    admin: boolean
  }
}
export interface checkAdminPrivInterface {
  type: usersActions.CHECK_ADMIN_PRIV
  payload: string
}
export interface saveFbDataInterface {
  type: FbDataActions.SAVE_DATA
  payload: BookInterface
}

export interface saveBookInterface {
  type: getBookActions.SAVE_BOOK
  payload: BookInterface
}
export interface getBookInterface {
  type: getBookActions.GET_BOOK
  payload: string
}
export interface errorInterface {
  type: getBookActions.ERROR
  payload: string | null
}
