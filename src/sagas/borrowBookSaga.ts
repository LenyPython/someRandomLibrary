import { takeEvery, put, call, Effect, StrictEffect } from 'redux-saga/effects'
import { doc, getDoc, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore'
import { usersActions } from './actionTypes/actions'
import {
	saveMyBorrowed,
	addMyBorrowed,
	removeMyBorrowed
} from '../slices/borrowedBooks/borrowedBooks'
import { changeBookStatus } from '../slices/books/booksSlice'
import db from '../firebase/firebase-config'
import {sendError} from './actions'

export function* getBorrowedWatcher() {
	console.log('borrowReturnWatcher')
	yield takeEvery(usersActions.GET_BORROWED, getBorrowedWorker)
	yield takeEvery(usersActions.BORROW_RETURN, borrowBookWorker)
}

function* getBorrowedWorker(action: Effect):
	Generator<StrictEffect, void, {books: string[]}>{
	console.log('getBorrowedBooksWorker')
	try {
		const borrowedBooks = yield call(getBorrowed, action.payload)
		yield put(saveMyBorrowed(borrowedBooks.books))
	} catch(e) {
		yield put(sendError({
			alert: 'error',
			message: 'Something went wrong with reciving borrowed books data'
			}))
	}
}

function* borrowBookWorker(action: Effect) {
	console.log('BorrowWorker')
	const { id, uid, status } = action.payload
	try {
	yield call(updateAvailable, id, status)
	yield call(updateMyBorrowed, uid, id, status)
	yield put(changeBookStatus({id, available: status}))
	if(status) {
		yield put(removeMyBorrowed(id))
		yield put(sendError({
			alert: 'info',
			message: 'Book returned'
		}))
	}
	else {
		yield put(addMyBorrowed(id))
		yield put(sendError({
			alert: 'info',
			message: 'Book borrowed'
		}))
	}
	} catch (e) {
		yield put(sendError({
			alert: 'error',
			message: 'Couldn\'t borrow/return book, error occured'
		}))
	}
}

const updateAvailable = async (id: string, status: boolean) => {
	const toUpdate = doc(db, 'BookEntry', id)
		await updateDoc(toUpdate, { available: status })

}
const updateMyBorrowed = async (uid: string, id: string, status: boolean) => {
	const toUpdate = doc(db, 'borrowed', uid)
	if(status){
		await updateDoc(toUpdate, {
		books: arrayRemove(id) 
		})
	} else {
		await updateDoc(toUpdate, {
		books: arrayUnion(id)
		})
	}
}

const getBorrowed = async (uid: string) => {
	const docRef = doc(db, "borrowed", uid)
	const booksArr = await getDoc(docRef)
	if(booksArr.exists()) return booksArr.data()
}
