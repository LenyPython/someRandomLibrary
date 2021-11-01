import { takeEvery, put, call, Effect } from 'redux-saga/effects'
import { doc, collection, updateDoc, addDoc, deleteDoc } from 'firebase/firestore'
import { emptyRequests } from '../slices/requests/requestsSlice'
import { 
	usersActions,
	FbDataActions
} from './actionTypes/actions'
import db from '../firebase/firebase-config'
import { requiredData } from '../constants/interface/bookSlice'
import {sendError} from './actions'

export function* updateDBWatcher() {
	console.log('UserUpdateWatcher')
	yield takeEvery(usersActions.CHANGE_STATUS, updateUsersWorker)
	yield takeEvery(FbDataActions.UPDATE_REQUESTS, updateDBWorker)
}

function* updateDBWorker(action: Effect){
	console.log('updateDBWorker')
	const { toAdd, toDelete } = action.payload
	try {
	for(let i in toAdd){
		const { ISBN, authors, title, cover } = toAdd[i]
		console.log(toAdd[i])
		yield call(addDocToDb, { ISBN, authors, title, cover })
	}
	for(let i in toDelete){
		const { id } = toDelete[i]
		yield call(deleteDocFormDb, id)
	}
	yield put(emptyRequests())
	yield put(sendError({
		alert: 'success',
		message: 'Updates were successfull'
	}))
	} catch(e) {
		console.log(e)
		yield put(sendError({
			alert: 'error',
			message: 'Error occured during fullfilling requests'
		}))
	}
}
function* updateUsersWorker(action: Effect) {
	console.log('UserUpdateWorker')
	const { id , admin } = action.payload
	try{
		yield call(updateUser, id, admin)
		yield put(sendError({
			alert: 'success',
			message: 'Changed successfully'
		}))
	} catch (e) {
		console.log(e)
		yield put(sendError({
			alert: 'error',
			message: 'Something went wrong with status changes'
		}))
	}
}

const updateUser = async (id: string, privlidge: boolean) => {
	const userToUpdateRef = doc(db, "users", id)
	await updateDoc(userToUpdateRef, { admin: privlidge })
}

const deleteDocFormDb = async (id: string) => {
	await deleteDoc(doc(db, "BookEntry", id));
}

const addDocToDb = async (data: requiredData) => {
	await addDoc(collection(db, 'BookEntry'), {
		...data,
		available: true
	})
}
