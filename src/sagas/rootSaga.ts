import { all, fork } from 'redux-saga/effects'
import { getBookSaga } from './getBookSaga'
import { errorWatcher } from './errorSaga'
import { getFirebaseDataWatcher } from './getFirebaseDataSaga'



export default function* rootSaga() {
	console.log('rootSaga')
	yield all([fork(getBookSaga),
						fork(errorWatcher),
						fork(getFirebaseDataWatcher)])
}
