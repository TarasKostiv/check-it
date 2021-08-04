import React from 'react';
import {VscStarEmpty, VscTrash, VscStarFull} from "react-icons/all";

const randomNum = Math.random()

function TodoTask({title, id, isCompleted, isFavorite, onDelete, onUpdate}) {

    const handleChangeComplete = (value) => onUpdate(id, {isCompleted: value.target.checked})


    const handleChangeFavorite = (value) => onUpdate(id, {isFavorite: value.target.checked})


    return (
        <li key={id} className={isCompleted ? "todo-task todo-task_completed" : "todo-task"} >
            <div className="todo-task__left-side left-side">
                <input type="checkbox" name="complete-checkbox" id={id} className="todo-task__complete-checkbox simple-checkbox" checked={isCompleted} onChange={handleChangeComplete}/>
                <label htmlFor={id} ></label>
                <h3 className="todo-task__task-name">{title}</h3>
            </div>
            <div className="todo-task__right-side right-side">
                <input type="checkbox" name="important-checkbox" id={id + randomNum} className="todo-task__important-checkbox important-checkbox" onChange={handleChangeFavorite}/>
                <label htmlFor={id + randomNum}>
                    {isFavorite ? <VscStarFull /> :  <VscStarEmpty/>}
                </label>
                <button className="todo-task__delete-btn" onClick={() => onDelete(id)}><VscTrash/></button>
            </div>
        </li>
    );
}

export default TodoTask;