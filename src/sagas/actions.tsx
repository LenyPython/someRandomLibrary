import { BookInterface } from '../constants/interface/bookSlice'
import { 
  usersActions,
  FbDataActions,
  getBookActions,
  saveBookInterface,
  getBookInterface,
  errorInterface,
  getFirebaseDataInterface,
  getUsersDataInterface,
  getBorrowedInterface,
  checkAdminPrivInterface,
  updateUserPrivlidgeInterface,
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
export const getUsersData = (): getUsersDataInterface => {
  return { type: usersActions.GET_USERS }
}
export const getBorrowed = (uid: string): getBorrowedInterface => {
  return { type: usersActions.GET_BORROWED,
    payload:  uid 
  }
}
export const updateUserPrivlidge = (id: string, admin: boolean): updateUserPrivlidgeInterface => {
  return { type: usersActions.CHANGE_STATUS,
    payload: { id, admin }
  }
}
export const checkAdminPriv = (payload: string): checkAdminPrivInterface => {
  return { type: usersActions.CHECK_ADMIN_PRIV,
          payload
  }
}

