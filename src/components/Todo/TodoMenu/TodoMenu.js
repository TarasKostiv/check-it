import React from 'react';

function TodoMenu(props) {
    return (
        <menu className="todo-menu">
            <div className="todo-menu__left-side">
                <span className="todo-menu__team-icon">♥</span>
                <h2 className="todo-menu__team-name">{props.teamName ? props.teamName : 'Team name'}</h2>
            </div>
            <div className="todo-menu__right-side">
                <select name="tasks-filter" id="tasks-filter" className="todo-menu__tasks-filter">
                    <option value="1" className="todo-menu__tasks-filter-option">1</option>
                </select>
                <select name="todo-functionality" id="todo-functionality" className="todo-menu__functionality">
                    <option value="1" className="todo-menu__functionality-option">1</option>
                </select>
            </div>
        </menu>
    );
}

export default TodoMenu;