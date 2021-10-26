import db from '../firebase-config'
import { collection, getDoc, doc, getDocs } from 'firebase/firestore'
import { takeEvery, call, put, StrictEffect, Effect } from 'redux-saga/effects'
import { setAdminPrivlidge } from '../slices/user/user'
import { setState } from '../slices/books/booksSlice'
import { FbDataActions } from './actionTypes/actions'
import { BookInterface } from '../constants/interface/bookSlice'
import {getUsersData} from './actions'
import {setUsers} from '../slices/usersData/user'


export function* getFirebaseDataWatcher(){
	console.log('FirebaseDataWatcher')
	yield takeEvery(FbDataActions.GET_DATA, getFbDataWorker)
	yield takeEvery(FbDataActions.GET_USERS, getUsersDataWorker)
	yield takeEvery(FbDataActions.EMPTY_DATA, emptyFbDataWorker)
	yield takeEvery(FbDataActions.CHECK_ADMIN_PRIV, checkAdminWorker)
}

function* checkAdminWorker (action: Effect):
	Generator<StrictEffect, void, boolean>{
	const uid = action.payload
	const adminPriv = yield call(checkAdminPriv, uid)
	if(adminPriv) {
	yield put(setAdminPrivlidge())
	yield put(getUsersData())
	}

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

function* getUsersDataWorker(): Generator<StrictEffect, void, []>{
	const USERS = yield call(getUsersFromDb)
	yield put(setUsers(USERS))
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

const getUsersFromDb = async () => {
	try{
	const docsSnap = await getDocs(collection(db,'users'))
	const data = docsSnap.docs.map( doc => {
		return {
			id: doc.id, ...doc.data()
		}
	})
	return data

	} catch(e) {
		console.log(e)
	}
}

const checkAdminPriv = async (uid: string) => {
	try {
	const docSnap = await getDoc(doc(db,'users', uid))
	if(docSnap.exists()) return docSnap.data().admin
	} catch(e) {
		//maybe some wrning sign
		console.log(e)
	}
	return false
}

