import { BookInterface } from '../constants/interface/bookSlice'
import { 
  getBookActions,
  saveBookInterface
} from './actionTypes/actions'

export const saveBook = (payload: BookInterface): saveBookInterface => {
  return { type:  getBookActions.SAVE_BOOK,
          payload
        }
}

