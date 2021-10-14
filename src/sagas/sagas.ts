import { all, call, put, takeEvery, takeLatest, Effect, StrictEffect } from 'redux-saga/effects'
import { addBook } from '../slices/books/booksSlice'

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
	yield takeLatest('GET_BOOK', getBookWorker)
	yield takeEvery('SAVE_BOOK', saveBookWorker)
}

function* getBookWorker(action: Effect)
	: Generator<StrictEffect, void, never>{
	console.log('getBookWorkerTriggered')
	try {
	const data: OpenLibResponse = yield call(getBook, action.payload)
	if(Object.keys(data).length === 0) throw new Error('No data recieved')
	const key = `ISBN:${action.payload}`
	const { by_statement: author, title, cover:{ large: image } } = data[key]

	yield put({type: 'SAVE_BOOK', payload: {
		author,
		title,
		available: true,
		image
	}})

	} catch (e) {
		console.log(e)
	}

}

function* saveBookWorker(action: Effect) {
	yield put(addBook(action.payload))

}

const getBook = async (ISBN: string): Promise<any> => {
	const URL = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + ISBN +
		'&format=json&jscmd=data'
		const data = await fetch(URL)
		const JSONobj = await data.json()
	return await JSONobj
}

