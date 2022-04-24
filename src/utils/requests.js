import {
    collection,
    setDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore'
import db from './firebase.config'

const colRef = collection(db, 'todos')

export async function createTodo(todo) {
    await setDoc(doc(colRef), todo)
}

export async function editTodo(id, params = {}) {
    await updateDoc(doc(colRef, id), { ...params })
}

export async function removeTodo(id) {
    await deleteDoc(doc(colRef, id))
}
