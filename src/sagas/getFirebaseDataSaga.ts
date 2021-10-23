import db from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { takeEvery, call, put, StrictEffect } from 'redux-saga/effects'
import { setState } from '../slices/books/booksSlice'
import { FbDataActions } from './actionTypes/actions'
import { BookInterface } from '../constants/interface/bookSlice'


export function* getFirebaseDataWatcher(){
	console.log('FirebaseDataWatcher')
	yield takeEvery(FbDataActions.GET_DATA, getFbDataWorker)
	yield takeEvery(FbDataActions.EMPTY_DATA, emptyFbDataWorker)
}

function* getFbDataWorker(): Generator<StrictEffect, void, BookInterface[]>{
	console.log('getFirebaseDataWorker')
	const response: BookInterface[] = yield call(getBookEntries)
	yield put(setState(response))
}

function* emptyFbDataWorker(): Generator<StrictEffect, void, []>{
	console.log('emptyFirebaseDataWorker')
	yield put(setState([]))
}

const getBookEntries = async (): Promise<BookInterface[]> =>  {
	let bookEntries: BookInterface[] = []
	try{
		const response = await getDocs(collection(db,'BookEntry'))
		bookEntries = response.docs.map( doc => {
			const { authors, title, cover, ISBN, available } = doc.data()
			return { authors, title, cover, ISBN, available }
		})
	} catch(e) {
		console.log(e)
	}
	return bookEntries
}



