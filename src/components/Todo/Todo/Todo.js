import React from 'react'
import TodoMenu from "../TodoMenu"
import TodoList from "../TodoList"
import TodoForm from "../TodoForm"

function Todo(props) {
    return (
        <div className="todo">
            <p>Todo component</p>
            <TodoMenu />
            <TodoList />
            <TodoForm />
        </div>
    )
}

export default Todo