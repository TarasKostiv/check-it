import React from 'react';
import {VscTrash} from "react-icons/all";

function TodoSteps({todo, onDelete, onUpdate, onSelect}) {
    const handleChangeComplete = (value) => onUpdate(todo.id, {isCompleted: value.target.checked})

    return (
        <li key={todo.id} className={todo.isCompleted ? "todo-task todo-task_completed" : "todo-task"} >
            <div className="todo-task__left-side left-side">
                <input type="checkbox" name="complete-checkbox" id={todo.id} className="todo-task__complete-checkbox simple-checkbox" checked={todo.isCompleted} onChange={handleChangeComplete}/>
                <label htmlFor={todo.id} ></label>
                <h3 className="todo-task__task-name">{todo.title}</h3>
            </div>
            <div className="todo-task__right-side right-side">
                <button className="todo-task__delete-btn" onClick={() => onDelete(todo.id)}><VscTrash/></button>
            </div>
        </li>
    );
}

export default TodoSteps;