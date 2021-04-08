import React from 'react';
import {VscAdd} from "react-icons/all";

function TodoCreateTask(props) {
    return (
        <li className={"todo-task todo-create-task"}>
            <h3 className={"todo-create-task__button todo-task__task-name"}>
                <VscAdd/>
                &nbsp;
                Add task
            </h3>
        </li>
    );
}

export default TodoCreateTask;