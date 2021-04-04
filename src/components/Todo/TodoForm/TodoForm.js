import React from "react";

function TodoForm(props) {
    return (
        <div className="todo-form">
            <form className="todo-form__form">
                <div className="todo-form__left-side left-side">
                    <input type="text" name="task-text-input" id="todo-task-text-input input-text input" className="todo-form__task-text-input"/>
                </div>
                <div className="todo-form__right-side right-side">
                    {/*<p>calendar</p>*/}
                    {/*<p>repeat</p>*/}
                    {/*<p>notification</p>*/}
                    <input type="file" name="file-input" id="todo-file-input" className="todo-form__file-input"/>
                    <button className="todo-form__add-task-btn">Add</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;