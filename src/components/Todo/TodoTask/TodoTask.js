import React from 'react';
import {VscTrash} from "react-icons/all";

function TodoTask({name = 'Task name' , id}) {
    return (
        <li className="todo-task" key={id}>
            <div className="todo-task__left-side left-side">
                <input type="checkbox" name="complete-checkbox" id={id*Math.PI} className="todo-task__complete-checkbox simple-checkbox"/>
                <label htmlFor={id*Math.PI}></label>
                <h3 className="todo-task__task-name">{name}</h3>
            </div>
            <div className="todo-task__right-side right-side">
                <input type="checkbox" name="important-checkbox" id={id/Math.PI} className="todo-task__important-checkbox"/>
                <label htmlFor={id/Math.PI}></label>
                <button className="todo-task__delete-btn"><VscTrash/></button>
            </div>
        </li>
    );
}

export default TodoTask;