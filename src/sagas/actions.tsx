import { BookInterface } from '../constants/interface/bookSlice'
import { 
  FbDataActions,
  getBookActions,
  saveBookInterface,
  errorInterface,
  getFirebaseDataInterface
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

export const getFirebaseData = (): getFirebaseDataInterface => {
  return { type: FbDataActions.GET_DATA }
}

