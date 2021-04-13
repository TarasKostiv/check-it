import React, {useState} from 'react'
import TodoMenu from "../TodoMenu"
import TodoList from "../TodoList"
import TodoTask from "../TodoTask"
import TodoCreateTask from "../TodoCreateTask"
import {useTasksContext} from "../../../context/TasksContext";

export default function Todo ({listName}){
    const {createdTasks} = useTasksContext()
    const renderTasks = (group) => {
        return group.map(team => {
            return <TodoTask name={team.name} id={team.id} isCompleted={team.isCompleted}/>
        })
    }
    return (
        <div className="todo">
            <TodoMenu teamName={listName} icon={null}/>
            <TodoList >
                {renderTasks(createdTasks)}
                <TodoCreateTask />
            </TodoList>
        </div>
    )
}