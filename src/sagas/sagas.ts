import { all, call, put, takeEvery, takeLatest, Effect, StrictEffect } from 'redux-saga/effects'
import { addToFound } from '../slices/foundEntries/foundEntries'
import {
	saveBook
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
	: Generator<StrictEffect, void, never>{
	console.log('getBookWorkerTriggered')
	try {
	const data: OpenLibResponse = yield call(fetchBook, action.payload)
	if(Object.keys(data).length === 0) throw new Error('No data recieved')
	const key = `ISBN:${action.payload}`
	const { by_statement: author, title, cover:{ large: image } } = data[key]

	 yield put(saveBook({
									author,
									title,
									ISBN: action.payload,
									available: true,
									image
								})
					 ) 
	} catch (e) {
		console.log(e)
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

