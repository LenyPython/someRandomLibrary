import { BookInterface } from '../constants/interface/bookSlice'
import { 
  getBookActions,
  saveBookInterface,
  errorInterface
} from './actionTypes/actions'

export const saveBook = (payload: BookInterface): saveBookInterface => {
  return { type:  getBookActions.SAVE_BOOK,
          payload
        }
}

export const sendError = (payload: string | null): errorInterface => {
  return { type: getBookActions.ERROR,
          payload
  }
}

