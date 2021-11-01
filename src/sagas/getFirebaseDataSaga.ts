import db from '../firebase/firebase-config'
import { collection, getDoc, doc, getDocs } from 'firebase/firestore'
import { takeEvery, call, put, StrictEffect, Effect } from 'redux-saga/effects'
import { setAdminPrivlidge } from '../slices/user/user'
import { setState } from '../slices/books/booksSlice'
import { FbDataActions, usersActions } from './actionTypes/actions'
import { BookInterface } from '../constants/interface/bookSlice'
import {getUsersData, getBorrowed, sendError} from './actions'
import {setUsers} from '../slices/usersData/user'
import {addToDelete, addToAdd} from '../slices/requests/requestsSlice'


export function* getFirebaseDataWatcher(){
	console.log('FirebaseDataWatcher')
	yield takeEvery(FbDataActions.GET_DATA, getFbDataWorker)
	yield takeEvery(FbDataActions.EMPTY_DATA, emptyFbDataWorker)
	yield takeEvery(usersActions.GET_USERS, getUsersDataWorker)
	yield takeEvery(usersActions.CHECK_ADMIN_PRIV, checkAdminWorker)
}

function* checkAdminWorker (action: Effect):
	Generator<StrictEffect, void, boolean>{
	const uid = action.payload
	try {
		const adminPriv = yield call(checkAdminPriv, uid)
		if(adminPriv) {
		yield put(setAdminPrivlidge())
		yield put(getUsersData())
		const toAddRequests = sessionStorage.getItem('toAdd')
		const toDeleteRequests = sessionStorage.getItem('toDelete')
		if(toDeleteRequests){
			const array = JSON.parse(toDeleteRequests!)
			for(let i in array){
				yield put(addToDelete(array[i]))
			}
		}
		if(toAddRequests){
			const array = JSON.parse(toAddRequests!)
			for(let i in array){
				yield put(addToAdd(array[i]))
			}
		}

		} else {
			yield put(getBorrowed(uid))
		}
		yield put(sendError({
			alert: 'info',
			message: 'Succesfully loged in'
		}))
	} catch (e) {
		console.log(e)
		yield put(sendError({
			alert: 'error',
			message: 'Something went wrong during authentication'
		}))
	}

}
function* getFbDataWorker(): Generator<StrictEffect, void, BookInterface[]>{
	console.log('getFirebaseDataWorker')
	try {
		const response: BookInterface[] = yield call(getBookEntries)
		yield put(setState(response))
	} catch (e) {
		yield put(sendError({
			alert: 'error',
			message: 'Couldn\'t retrieve data from database'
		}))
	}
}

function* emptyFbDataWorker(): Generator<StrictEffect, void, []>{
	console.log('emptyFirebaseDataWorker')
	yield put(setState([]))
}

function* getUsersDataWorker(): Generator<StrictEffect, void, []>{
	try {
		const USERS = yield call(getUsersFromDb)
		yield put(setUsers(USERS))
	} catch (e) {
		yield put(sendError({
			alert: 'error',
			message: 'Couldn\'t retrive data from database'
		}))
	}
}

const getBookEntries = async (): Promise<BookInterface[]> =>  {
	const response = await getDocs(collection(db,'BookEntry'))
	let bookEntries = response.docs.map( doc => {
		const { authors, title, cover, ISBN, available } = doc.data()
		return { id: doc.id, authors, title, cover, ISBN, available }
	})
	return bookEntries
}

const getUsersFromDb = async () => {
	const docsSnap = await getDocs(collection(db,'users'))
	const data = docsSnap.docs.map( doc => {
		return {
			id: doc.id, ...doc.data()
		}
	})
	return data
}

const checkAdminPriv = async (uid: string) => {
	const docSnap = await getDoc(doc(db,'users', uid))
	if(docSnap.exists()) return docSnap.data().admin
	return false
}

