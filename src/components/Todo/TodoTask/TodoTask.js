import React from 'react';
import {VscStarEmpty, VscTrash, VscStarFull, VscInfo} from "react-icons/all";

const randomNum = Math.random()

function TodoTask({todo, onDelete, onUpdate, onSelect, selectedTodo}) {
    const handleChangeComplete = (value) => onUpdate(todo.id, {isCompleted: value.target.checked})
    const handleChangeFavorite = (value) => onUpdate(todo.id, {isFavorite: value.target.checked})

    return (
        <li key={todo.id} className={todo.isCompleted ? "todo-task todo-task_completed" : "todo-task"} >
            <div className="todo-task__left-side left-side">
                <input type="checkbox" name="complete-checkbox" id={todo.id} className="todo-task__complete-checkbox simple-checkbox" checked={todo.isCompleted} onChange={handleChangeComplete}/>
                <label htmlFor={todo.id} ></label>
                <h3 className="todo-task__task-name">{todo.title}</h3>
            </div>
            <div className="todo-task__right-side right-side">
                <button className="todo-btn" onClick={() => onSelect(todo)}><VscInfo/></button>
                <input type="checkbox" name="important-checkbox" id={todo.id + randomNum} className="todo-task__important-checkbox important-checkbox" onChange={handleChangeFavorite}/>
                <label htmlFor={todo.id + randomNum}>
                    {todo.isFavorite ? <VscStarFull /> : <VscStarEmpty/>}
                </label>
                <button className="todo-task__delete-btn" onClick={() => onDelete(todo.id)}><VscTrash/></button>
            </div>
        </li>
    );
}

export default TodoTask;