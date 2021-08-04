import {db} from "../firebase/firebase";

export function getLists(){
    return db.collection('lists')
        .get()
        .then(snapshot => {
        const items = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return items;
    })
        .catch(error => {
            console.log("Error getting documents: ", error);
        });
}

export function getListTodos(listId){
    return db.collection('todos')
        .where('listId', '==', listId)
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            return items;
        })
        .catch(error => {
            console.log("Error getting documents: ", error);
        });
}

export function createTodo(data) {
    return db.collection("todos").add({
        ...data,
        isCompleted: false,
        isFavorite: false,
    }).then(docRef => docRef.get())
}

export function deleteTodo(todoId) {
    return db.collection("todos").doc(todoId.toString()).delete()
        .then(() => todoId)
}

export function updateTodo(todoId, data){
    return db.collection("todos").doc(todoId).update(data)
        .then(res => console.log(res))
}