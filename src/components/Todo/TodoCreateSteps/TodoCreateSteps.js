import React, {useState} from "react";

export default function TodoCreateSteps({onAddStep, todo}){
    const [inputValue, setInputValue] = useState()

    function handleAddStep(){
        onAddStep(todo.id, {steps: todo.steps.concat({title: inputValue, id: todo.id + Math.random()})})
        setInputValue('')
    }

    return(
        <div className="todo-sidebar__form">
            <div className="left-side">
                <input className="todo-create-task-form__input" type="text" placeholder="Write your step" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            <div className="right-side">
                <button className="todo-btn todo-create-task-form__add-btn" onClick={() => {handleAddStep()}}>Add</button>
            </div>
        </div>
    )
}