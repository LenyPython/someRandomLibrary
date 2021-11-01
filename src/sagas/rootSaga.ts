import { all, fork } from 'redux-saga/effects'
import { getBookSaga } from './getBookSaga'
import  errorWatcher  from './errorSaga'
import { getFirebaseDataWatcher } from './getFirebaseDataSaga'
import { updateDBWatcher } from './updateDb'
import {getBorrowedWatcher} from './borrowBookSaga'



export default function* rootSaga() {
	console.log('rootSaga')
	yield all([fork(getBookSaga),
						fork(errorWatcher),
						fork(updateDBWatcher),
						fork(getFirebaseDataWatcher),
						fork(getBorrowedWatcher)])
}
