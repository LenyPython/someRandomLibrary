import { takeEvery, Effect, call } from 'redux-saga/effects'
import { getBookActions } from './actionTypes/actions'



function* errorWatcher(){
	console.log('errorWatcher')
	yield takeEvery(getBookActions.ERROR, errorWorker)
}

function* errorWorker(action: Effect) {
	console.log('errorWorker')
	yield call(displayError, action.payload)
}

const displayError = (Msg: string): void => {
	const errorBox = document.querySelector('#error-msg')
	let p = document.createElement('p')
	p.innerText = Msg
	errorBox?.appendChild(p)
	setTimeout(()=>errorBox?.removeChild(p),
						 7000)
}

export { errorWatcher }
