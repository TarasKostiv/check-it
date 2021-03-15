import React from 'react'
import TodoTask from "../TodoTask"

function TodoList(props) {
    return (
        <div className="todo-list">
            <ul className="todo-list__tasks-list">
                <TodoTask />
            </ul>
        </div>
    )
}

export default TodoList