import React from 'react';

function TodoTask({name = 'Task name' , id}) {
    return (
        <li className="todo-task" key={id}>
            <div className="todo-task__left-side left-side">
                <input type="checkbox" name="complete-checkbox" id="task-complete-checkbox" className="todo-task__complete-checkbox"/>
                <h3 className="todo-task__task-name">{name}</h3>
            </div>
            <div className="todo-task__right-side right-side">
                <input type="checkbox" name="important-checkbox" id="task-important-checkbox" className="todo-task__important-checkbox"/>
                <button className="todo-task__delete-btn">Delete</button>
            </div>
        </li>
    );
}

export default TodoTask;