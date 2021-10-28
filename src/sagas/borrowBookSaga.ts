import { takeEvery, put, call, Effect, StrictEffect } from 'redux-saga/effects'
import { doc, getDoc } from 'firebase/firestore'
import { usersActions } from './actionTypes/actions'
import { saveMyBorrowed } from './actions'
import db from '../firebase/firebase-config'
import {BookInterface} from '../constants/interface/bookSlice'

export function* getBorrowedWatcher() {
	console.log('borrowReturnWatcher')
	yield takeEvery(usersActions.GET_BORROWED, getBorrowedWorker)
}

function* getBorrowedWorker(action: Effect):
	Generator<StrictEffect, void, BookInterface[]>{
	console.log('borrowReturnorker')
	const borrowedBooks = yield call(getBorrowed, action.payload)
	yield put(saveMyBorrowed(borrowedBooks))
}

const getBorrowed = async (uid: string) => {
	try {
	const docRef = doc(db, "borrowed", uid)
	const booksArr = await getDoc(docRef)
	if(booksArr.exists()) return booksArr.data()
	else console.log('nosuchdoc')
	} catch (e) {
		console.log(e)
	}
	
}
