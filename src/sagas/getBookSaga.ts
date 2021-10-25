import {
	all,
	call,
	put,
	takeEvery,
	takeLatest,
	Effect,
	StrictEffect,
	PutEffect
} from 'redux-saga/effects'
import { addToFound } from '../slices/foundEntries/foundEntries'
import {
	saveBook,
	sendError
} from './actions'
import { getBookActions } from './actionTypes/actions'

interface OpenLibResponse {
	[key: string] : DataInterface
}
interface DataInterface {
	by_statement: string
	title: string
	cover: {
		small: string
		medium: string
		large: string
	}
}


export function* getBookSaga(){
	console.log('getBookSaga')
	yield all([getBookWatcher()])
}
function* getBookWatcher(){
	console.log('getBookWatcherTriggered')
	yield takeLatest(getBookActions.GET_BOOK, getBookWorker)
	yield takeEvery(getBookActions.SAVE_BOOK, saveBookWorker)
}

function* getBookWorker(action: Effect)
	: Generator<StrictEffect, PutEffect, OpenLibResponse>{
	console.log('getBookWorkerTriggered')
	try {
	const data: OpenLibResponse = yield call(fetchBook, action.payload)
	if(Object.keys(data).length === 0) return put(sendError('No data recieved, probably wrong ISBN'))
	const key = `ISBN:${action.payload}`
	const { by_statement: author, title, cover:{ large: cover } } = data[key]
	return put(saveBook({
									authors: [author],
									title,
									ISBN: action.payload,
									available: true,
									cover
								})
					 ) 
	} catch (error) {
		console.log(error)
		return put(sendError('Something went wrong...'))
	}
}

function* saveBookWorker(action: Effect) {
	yield put(addToFound(action.payload))
}

const fetchBook = async (ISBN: string): Promise<any> => {
	const URL = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + ISBN +
		'&format=json&jscmd=data'
		const data = await fetch(URL)
		const JSONobj = await data.json()
	return await JSONobj
}

