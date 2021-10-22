import React, {useState} from 'react';
import {VscChromeClose} from "react-icons/all";
import TodoCreateSteps from "../TodoCreateSteps";

function TodoSidebar({todo, onClose, onAddStep}) {
    const [dataTime, setDataTime] = useState(getDate())
    const [title, setTitle] = useState()

    function getDate(){
        const date = new Date(todo.dataTime[0].seconds * 1000);
        return date.getFullYear() +"-"+"0"+date.getMonth() +"-"+ date.getDate() +"T"+date.getHours()+ ":"+date.getMinutes()
    }

    console.log(dataTime)
    return (
        <div className={"main-sidebar todo-sidebar"}>
            <div className="todo-sidebar__upper-menu">
                <h3 className="todo-sidebar__title">Todo info</h3>
                <p className="todo-sidebar__text todo-sidebar__todo-title">({todo.title})</p>
                <button className="todo-btn todo-sidebar__close-btn" onClick={onClose}><VscChromeClose/></button>
            </div>
            <div className="todo-sidebar__details">
                <h3 className="todo-sidebar__sm-title">Details</h3>
                <div className="todo-sidebar__details-block">
                    <label htmlFor="title-changer">Todo name:</label>
                    <input className="todo-sidebar__input" id="title-changer" name="dateTime-changer" type="text" value={todo.title} placeholder="Todo name" onChange={() => {}}/>
                </div>
                <div className="todo-sidebar__details-block">
                    <label htmlFor="dateTime-changer">Planned time:</label>
                    <input className="todo-sidebar__input" id="dateTime-changer" name="dateTime-changer" type="datetime-local" value={dataTime} placeholder="Planned time" onChange={() => {}}/>
                </div>
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