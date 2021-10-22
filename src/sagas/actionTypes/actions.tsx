import { BookInterface } from '../../constants/interface/bookSlice'

export enum getBookActions {
  SAVE_BOOK = 'SAVE_BOOK',
  GET_BOOK = 'GET_BOOK',
  ERROR = 'ERROR'
}

export interface saveBookInterface {
  type: getBookActions.SAVE_BOOK
  payload: BookInterface
}
export interface errorInterface {
  type: getBookActions.ERROR
  payload: string | null
}
