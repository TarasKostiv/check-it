import {useEffect, useState} from "react";
import * as api from '../api/firebaseApi'

export function useApi(){
    const [todos, setTodos] = useState([])
    const [lists, setLists] = useState([])

    useEffect(() => {
        api.getLists().then(setLists)
    },[])

    function getLists() {
        return api.getLists()
            .then(setLists)
    }

    function getListTodos(listId) {
        return api.getListTodos(listId)
            .then(setTodos)
    }

    function createTodo(data) {
        return api.createTodo(data)
            .then(todo => setTodos([...todos, todo]))
    }

    function deleteTodo(todoId) {
        return api.deleteTodo(todoId)
            .then(todoId => setTodos([...todos.filter(t => t.id !== todoId)]))
    }

    function updateTodo(todoId, data) {
        return api.updateTodo(todoId, data)
            .then(data => setTodos([...todos.map(t => t.id !== todoId ? ({...t, ...data}) : t)]))
    }

    function todoSet(data) {
        return setTodos(data)
    }

    return{
        data: {
            lists,
            todos
        },
        actions: {
            getLists,
            getListTodos,
            createTodo,
            deleteTodo,
            updateTodo,
            todoSet
        }
    }
}