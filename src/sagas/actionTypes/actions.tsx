import { BookInterface } from '../../constants/interface/bookSlice'

export enum getBookActions {
  SAVE_BOOK = 'SAVE_BOOK',
  GET_BOOK = 'GET_BOOK'
}

export interface saveBookInterface {
  type: getBookActions.SAVE_BOOK
  payload: BookInterface
}
