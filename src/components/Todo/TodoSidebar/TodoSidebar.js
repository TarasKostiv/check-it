import React from 'react';
import {VscChromeClose} from "react-icons/all";
import TodoCreateSteps from "../TodoCreateSteps";

function TodoSidebar({todo, onClose, onAddStep}) {
    return (
        <div className={"main-sidebar todo-sidebar"}>
            <div className="todo-sidebar__upper-menu">
                <h3 className="todo-sidebar__title">Todo info</h3>
                <p className="todo-sidebar__text todo-sidebar__todo-title">({todo.title})</p>
                <button className="todo-btn todo-sidebar__close-btn" onClick={onClose}><VscChromeClose/></button>
            </div>
            <div className="todo-sidebar__details">
                <h3 className="todo-sidebar__sm-title">Details</h3>
                <label htmlFor="title-changer">Todo name:</label>
                <input id="title-changer" name="dateTime-changer" type="text" value={todo.title} placeholder="Todo name" onChange={() => {}}/>

                <label htmlFor="dateTime-changer">Planned time:</label>
                <input id="dateTime-changer" name="dateTime-changer" type="text" value={todo.dataTime} placeholder="Planned date" onChange={() => {}}/>

                <label htmlFor="remindTime-changer">Remind time: </label>
                <input id="remindTime-changer" name="remindTime-changer" type="text" value={todo.remindTime} placeholder="Remind date" onChange={() => {}}/>

            </div>
            {/*<div className="todo-sidebar__steps">*/}
            {/*    <h3 className="todo-sidebar__sm-title">Steps</h3>*/}
            {/*    <TodoCreateSteps onAddStep={onAddStep} todo={todo}/>*/}
            {/*    {todo.steps.map(step => <li key={step.id}>{step.title}</li>)}*/}
            {/*</div>*/}
        </div>
    );
}

export default TodoSidebar;