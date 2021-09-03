import React, {useEffect, useState} from 'react'
import TodoMenu from "../TodoMenu"
import TodoList from "../TodoList"
import TodoTask from "../TodoTask"
import TodoCreateTask from "../TodoCreateTask"
import TodoSidebar from "../TodoSidebar"
import BarLoader from "react-spinners/BarLoader"

import useStore from '../../../hooks/hookStore'
import {getImportantTodos, getPlannedTodos} from "../../../api/firebaseApi";
import {getCompletedTodos} from "../../../store/actions";

export default function Todo ({match}){
    const { state, actions } = useStore();
    const [selectedTodo, setSelectedTodo] = useState(null);

    useEffect(() => {
        return state
    }, [state])



    function handleSubmit(data) {
        actions.createTodo({
            ...data,
            userId: state.user.uid,
            listId: list.id || ''
        });
    }

    function handleDelete(todoId) {
        actions.deleteTodo(todoId);
    }

    function handleUpdate(todoId, data) {
        actions.updateTodo(todoId, data);
    }

    function handleSelect(todo) {
        setSelectedTodo(todo);
    }

    function handleSortChange(sort) {
        actions.updateList(list.id, {sort})
    }

    const path = match.path
    const list = state.lists.find(list => list.id === match.params.listId) || state.mainLists.find(list => list.to === path) || match.path === '/';

    const getTodosByFilter = ({
        '/' : todos => todos,
        '/important' : todos => todos.filter(todo => todo.isFavorite),
        '/planned' : todos => todos.filter(todo => todo.dataTime),
        '/completed' : todos => todos.filter(todo => todo.isCompleted)
    })

    const getTodosByList = (listId, todos) => todos.filter(todo => todo.listId === listId)
    const todos = match.params.listId ? getTodosByList(match.params.listId, state.todos) : getTodosByFilter[path](state.todos)


    const sortFn = {
        title: (a, b) => a.title.localeCompare(b.title),
        date: (a, b) => new Date(a.seconds * 1000) - new Date(b.seconds * 1000),
        favorite: (a, b) => b.isFavorite - a.isFavorite,
        completed: (a, b) => b.isCompleted - a.isCompleted
    }
    console.log(list)
    const sortedTodos = list.sort ? todos.slice().sort(sortFn[list.sort]) : todos

    if (!list || !todos) return <>
        <BarLoader color={'#db4c3f'} loading={true} width={'100%'} height={3} speedMultiplier={0.5}/>
    </>

    return (
        <>
            <div className="todo">
                <TodoMenu todoName={list.title} icon={null} onSortChange={handleSortChange}/>

                <TodoList>
                    {sortedTodos.map(item =>
                        <TodoTask
                            todo={item}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                            onSelect={handleSelect}
                        />
                    )}
                    <TodoCreateTask onSubmit={handleSubmit}/>
                </TodoList>
            </div>
            {selectedTodo &&
            <TodoSidebar
                data={todos}
                todo={selectedTodo}
                onClose={() => setSelectedTodo(null)}
                onAddStep={handleUpdate}
            />}
        </>

    )
}