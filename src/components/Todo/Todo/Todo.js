import React, {useContext, useEffect, useState} from 'react'
import TodoMenu from "../TodoMenu"
import TodoList from "../TodoList"
import TodoTask from "../TodoTask"
import TodoCreateTask from "../TodoCreateTask"
import BarLoader from "react-spinners/BarLoader"

import {useApi} from '../../../hooks/api'

export default function Todo ({match}){
    const {data: {lists, todos} ,actions} = useApi()

    useEffect(()=> {
        actions.getListTodos(match.params.listId)
    },[actions, match.params.listId])

    const handleSubmit = (title) => {
        actions.createTodo({
            title,
            listId: list.id
        })
    }

    const handleDelete = (todoId) => actions.deleteTodo(todoId)

    const handleUpdate = (todoId, data) => actions.updateTodo(todoId, data)


    const list = lists.find(list => list.id === match.params.listId)

    if (!list || !todos) return <>
        <BarLoader color={'#db4c3f'} loading={true} width={'100%'} height={3} speedMultiplier={0.5}/>
    </>

    return (
        <div className="todo">
            <TodoMenu todoName={list.title} icon={null}/>
            <TodoList >
                {todos.map(item =>
                    <TodoTask
                        title={item.title}
                        id={item.id}
                        isCompleted={item.isCompleted}
                        isFavorite={item.isFavorite}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}/>
                )}
                <TodoCreateTask onSubmit={handleSubmit}/>
            </TodoList>
        </div>
    )
}