import { BookInterface } from '../../constants/interface/bookSlice'
import {initialRequestsStateInterface} from '../../slices/requests/requestsSlice';

export enum getBookActions {
  SAVE_BOOK = 'SAVE_BOOK',
  SAVE_BORROWED_BOOKS = 'SAVE_BORROWED_BOOKS',
  GET_BOOK = 'GET_BOOK',
  ERROR = 'ERROR'
}

export enum FbDataActions {
  GET_DATA = 'GET_DATA',
  SAVE_DATA = 'SAVE_DATA',
  EMPTY_DATA = 'EMPTY_DATA',
  UPDATE_REQUESTS = 'UPDATE_REQUESTS'
}
export enum usersActions {
  CHECK_ADMIN_PRIV = 'CHECK_ADMIN_PRIV',
  GET_USERS = 'GET_USERS',
  CHANGE_STATUS = 'CHANGE_STATUS',
  GET_BORROWED = 'GET_BORROWED',
  BORROW_RETURN = 'BORROW_RETURN'
}

export interface borrowReturnInterface {
  type: usersActions.BORROW_RETURN
  payload: { id: string
    status: boolean
    uid: string
  }
}
export interface getFirebaseDataInterface {
  type: FbDataActions.GET_DATA
}
export interface emptyFirebaseDataInterface {
  type: FbDataActions.EMPTY_DATA
}
export interface getBorrowedInterface {
  type: usersActions.GET_BORROWED
  payload: string
}
export interface getUsersDataInterface {
  type: usersActions.GET_USERS
}
export interface updateDataBaseInterface {
  type: FbDataActions.UPDATE_REQUESTS,
  payload: initialRequestsStateInterface
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
