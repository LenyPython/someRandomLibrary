import { takeEvery, put, call, Effect, StrictEffect } from 'redux-saga/effects'
import { doc, getDoc, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore'
import { usersActions } from './actionTypes/actions'
import {
	saveMyBorrowed,
	addMyBorrowed,
	removeMyBorrowed
} from '../slices/borrowedBooks/borrowedBooks'
import db from '../firebase/firebase-config'

export function* getBorrowedWatcher() {
	console.log('borrowReturnWatcher')
	yield takeEvery(usersActions.GET_BORROWED, getBorrowedWorker)
	yield takeEvery(usersActions.BORROW_RETURN, borrowBookWorker)
}

function* getBorrowedWorker(action: Effect):
	Generator<StrictEffect, void, {books: string[]}>{
	console.log('getBorrowedBooksWorker')
	const borrowedBooks = yield call(getBorrowed, action.payload)
	yield put(saveMyBorrowed(borrowedBooks.books))
}

function* borrowBookWorker(action: Effect) {
	console.log('BorrowWorker')
	const { id, uid, status } = action.payload
	yield call(updateAvailable, id, status)
	yield call(updateMyBorrowed, uid, id, status)
	if(status) yield put(removeMyBorrowed(id))
	else yield put(addMyBorrowed(id))
}

const updateAvailable = async (id: string, status: boolean) => {
	const toUpdate = doc(db, 'BookEntry', id)
	try {
		await updateDoc(toUpdate, { available: status })
	} catch(e) {
		console.log(e)
	}

}
const updateMyBorrowed = async (uid: string, id: string, status: boolean) => {
	const toUpdate = doc(db, 'borrowed', uid)
	try {
		if(status){
		await updateDoc(toUpdate, {
			books: arrayRemove(id) 
		})
		} else {
		await updateDoc(toUpdate, {
			books: arrayUnion(id)
		})
		}
	} catch(e) {
		console.log(e)
	}

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
