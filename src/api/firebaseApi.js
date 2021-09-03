import { db, auth } from '../firebase/firebase';

/* Auth */
export function logInUser(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function signOutUser() {
    return auth.signOut();
}

export function registerUser(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

export function initAuth(onAuth) {
    auth.onAuthStateChanged(onAuth);
}


/* DB */
export function getLists(userId) {
    return db.collection('lists')
        .where('userId', '==', userId)
        .get()
        .then(mapSnapshot);
}

export function createList(data) {
    return db.collection('lists').add({
        icon: '',
        sort: '',
        todos: 0,
        ...data,
    })
        .then(docRef => docRef.get())
        .then(mapDoc);
}

export function updateList(listId, data) {
    return db.collection('lists').doc(listId).update(data)
        .then(() => ({
            id: listId,
            ...data
        }));
}

export function deleteList(listId) {
    return db.collection('lists').doc(listId).delete()
        .then(() => listId);
}

export function getTodos(userId = '') {
    return db.collection('todos')
        // .where('listId', '==', '')
        .where('userId', '==', userId)
        .get()
        .then(mapSnapshot);
}

export function getListTodos(listId, userId) {
    return db.collection('todos')
        .where('listId', '==', listId)
        .get()
        .then(mapSnapshot);
}


export function createTodo(data) {
    return db.collection('todos').add({
        steps: [],
        notes: '',
        isCompleted: false,
        isFavorite: false,
        ...data,
    })
        .then(docRef => docRef.get())
        .then(mapDoc);
}

export function updateTodo(todoId, data) {
    return db.collection('todos').doc(todoId).update(data)
        .then(() => ({
            id: todoId,
            ...data
        }));
}

export function deleteTodo(todoId) {
    return db.collection('todos').doc(todoId).delete()
        .then(() => todoId);
}

function mapSnapshot(snapshot) {
    return snapshot.docs.map(mapDoc);
}

function mapDoc(doc){
    return{
        id: doc.id,
        ...doc.data()
    }
}