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
	const response = yield call(getBookEntries)
	// yield put(setState(response))
}

function* emptyFbDataWorker(): Generator<StrictEffect, void, []>{
	console.log('emptyFirebaseDataWorker')
	yield put(setState([]))
}

const getBookEntries = async () =>  {
		const response = await getDocs(collection(db,'BookEntry'))
		console.log(response)
}



