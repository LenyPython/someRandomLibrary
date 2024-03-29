import { BookInterface } from '../constants/interface/bookSlice'
import { snackbarActionPayload } from '../slices/components/components'
import {initialRequestsStateInterface} from '../slices/requests/requestsSlice'
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
  emptyFirebaseDataInterface,
  updateDataBaseInterface,
  borrowReturnInterface,
  appStateActions
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

export const sendError = (payload: snackbarActionPayload): errorInterface => {
  return { type: appStateActions.ERROR,
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
export const updateDataBase = (state: initialRequestsStateInterface): updateDataBaseInterface => {
  return { type: FbDataActions.UPDATE_REQUESTS,
    payload: state
  }
}
export const borrowReturn = (id: string, uid: string, status: boolean):
  borrowReturnInterface => {
  return { type: usersActions.BORROW_RETURN,
    payload: { id, uid, status }
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

