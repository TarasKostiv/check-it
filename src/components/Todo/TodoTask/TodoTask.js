import React from 'react';
import {VscStarEmpty, VscTrash} from "react-icons/all";

function TodoTask({title = 'Task name' , id, isCompleted}) {
    return (
        <li className={isCompleted ? "todo-task todo-task_completed" : "todo-task"} key={id}>
            <div className="todo-task__left-side left-side">
                <input onClick={() => {}} checked={isCompleted ? true : false} type="checkbox" name="complete-checkbox" id={id*Math.PI} className="todo-task__complete-checkbox simple-checkbox"/>
                <label htmlFor={id*Math.PI}></label>
                <h3 className="todo-task__task-name">{title}</h3>
            </div>
            <div className="todo-task__right-side right-side">
                <input type="checkbox" name="important-checkbox" id={id/Math.PI} className="todo-task__important-checkbox important-checkbox"/>
                <label htmlFor={id/Math.PI}><VscStarEmpty/></label>
                <button className="todo-task__delete-btn"><VscTrash/></button>
            </div>
        </li>
    );
}

export default TodoTask;