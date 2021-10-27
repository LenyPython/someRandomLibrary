import { takeEvery, call, Effect } from 'redux-saga/effects'
import { doc, updateDoc } from 'firebase/firestore'
import { usersActions } from './actionTypes/actions'
import db from '../firebase-config'

export function* updateUsersWatcher() {
	console.log('UserUpdateWatcher')
	yield takeEvery(usersActions.CHANGE_STATUS, updateUsersWorker)
}

function* updateUsersWorker(action: Effect) {
	console.log('UserUpdateWorker')
	const { id , admin } = action.payload
	yield call(updateUser, id, admin)
}

const updateUser = async (id: string, privlidge: boolean) => {
	const userToUpdateRef = doc(db, "users", id)
	await updateDoc(userToUpdateRef, { admin: privlidge })
	console.log(id, privlidge)
}
