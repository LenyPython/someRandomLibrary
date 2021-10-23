import { BookInterface } from '../../constants/interface/bookSlice'

export enum getBookActions {
  SAVE_BOOK = 'SAVE_BOOK',
  GET_BOOK = 'GET_BOOK',
  ERROR = 'ERROR'
}

export enum FbDataActions {
  GET_DATA = 'GET_DATA',
  SAVE_DATA = 'SAVE_DATA',
  EMPTY_DATA = 'EMPTY_DATA'
}

export interface getFirebaseDataInterface {
  type: FbDataActions.GET_DATA
}
export interface emptyFirebaseDataInterface {
  type: FbDataActions.EMPTY_DATA
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
