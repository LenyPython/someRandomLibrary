import { all, call, takeLatest, Effect, CallEffect } from 'redux-saga/effects'

export function* getBookSaga(){
	console.log('getBookSaga')
	yield all([getBookWatcher()])
}
function* getBookWatcher(){
	console.log('getBookWatcherTriggered')
	yield takeLatest('GET_BOOK', getBookWorker)
}

function* getBookWorker(action: Effect): Generator<CallEffect<true>, void, unknown>{
	console.log('getBookWorkerTriggered')
	let data = yield call(getBook, action.payload)
	console.log(data)
}

const getBook = async (ISBN: string): Promise<any> => {
	const URL = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + ISBN +
		'&format=json&jscmd=data'
	let response = await fetch(URL)
	response = await response.json()
	return response
}
