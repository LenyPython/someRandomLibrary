import { takeEvery, Effect, put } from 'redux-saga/effects'
import {sendMessage} from '../slices/components/components'
import {appStateActions} from './actionTypes/actions'



function* errorWatcher(){
	console.log('errorWatcher')
	yield takeEvery(appStateActions.ERROR, errorWorker)
}

function* errorWorker(action: Effect) {
	console.log('errorWorker')
	yield put(sendMessage(action.payload))
}


export default errorWatcher 
