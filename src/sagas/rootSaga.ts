import { all, fork } from 'redux-saga/effects'
import { getBookSaga } from './getBookSaga'
import { errorWatcher } from './errorSaga'
import { getFirebaseDataWatcher } from './getFirebaseDataSaga'
import { updateUsersWatcher } from './updateUsers'
import {getBorrowedWatcher} from './borrowBookSaga'



export default function* rootSaga() {
	console.log('rootSaga')
	yield all([fork(getBookSaga),
						fork(errorWatcher),
						fork(updateUsersWatcher),
						fork(getFirebaseDataWatcher),
						fork(getBorrowedWatcher)])
}
