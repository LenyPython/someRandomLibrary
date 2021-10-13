import { all, fork } from 'redux-saga/effects'
import { getBookSaga } from './sagas'



export default function* rootSaga() {
	console.log('rootSaga')
	yield all([fork(getBookSaga)])
}
