import { all, fork } from 'redux-saga/effects'
import { getBooksSaga } from './sagas'



export default function* rootSaga() {
	yield all([fork(getBooksSaga)])
}
