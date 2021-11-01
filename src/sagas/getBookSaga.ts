import {
	all,
	call,
	put,
	takeEvery,
	takeLatest,
	Effect,
	StrictEffect
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
	: Generator<StrictEffect, void, OpenLibResponse>{
	console.log('getBookWorkerTriggered')
	try {
			const data: OpenLibResponse = yield call(fetchBook, action.payload)
			if(Object.keys(data).length === 0) {
				yield put(sendError({
					alert:'warning',
					message: 'Recived empty response, probably wrong ISBN'
				}))
			} else {
			const key = `ISBN:${action.payload}`
			const { by_statement: author, title, cover } = data[key]
			let coverImg = ''
			if(cover?.large) coverImg = cover.large
			else if(cover?.medium) coverImg = cover.large
			else if(cover?.small) coverImg = cover.large
			yield put(saveBook({
											id: '',
											authors: [author],
											title,
											ISBN: action.payload,
											available: true,
											cover: coverImg
										})
								 ) 
	}
	} catch (error) {
		console.log(error)
		yield put(sendError({
			alert: 'error',
			message: 'Something went wrong with reciving book data from OpenLib'
		}))
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

