import { BookInterface } from '../constants/interface/bookSlice'
import { 
  FbDataActions,
  getBookActions,
  saveBookInterface,
  getBookInterface,
  errorInterface,
  getFirebaseDataInterface,
  checkAdminPrivInterface,
  emptyFirebaseDataInterface
} from './actionTypes/actions'

export const saveBook = (payload: BookInterface): saveBookInterface => {
  return { type:  getBookActions.SAVE_BOOK,
          payload
        }
}
export const getBook = (payload: string): getBookInterface => {
  return { type: getBookActions.GET_BOOK,
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
export const emptyFirebaseData = (): emptyFirebaseDataInterface => {
  return { type: FbDataActions.EMPTY_DATA }
}
export const checkAdminPriv = (payload: string): checkAdminPrivInterface => {
  return { type: FbDataActions.CHECK_ADMIN_PRIV,
          payload
  }
}

