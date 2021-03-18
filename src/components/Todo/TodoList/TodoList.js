import React from 'react'

function TodoList({children}) {
    return (
        <div className="todo-list">
            <ul className="todo-list__tasks-list">
                {children}
            </ul>
        </div>
    )
}

export default TodoList