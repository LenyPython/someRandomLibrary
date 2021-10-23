import db from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { takeLatest, call, put, StrictEffect } from 'redux-saga/effects'
import { setState } from '../slices/books/booksSlice'
import { FbDataActions } from './actionTypes/actions'
import { BookInterface } from '../constants/interface/bookSlice'


export function* getFirebaseDataWatcher(){
	console.log('FirebaseDataWatcher')
	yield takeLatest(FbDataActions.GET_DATA, getFbDataWorker)
}

function* getFbDataWorker(): Generator<StrictEffect, void, BookInterface[]>{
	console.log('FirebaseDataWorker')
	const response = yield call(getBookEntries)
	yield put(setState(response))
}


const getBookEntries = async () =>  {
		const response = await getDocs(collection(db,'BookEntry'))
		console.log(response)
}



