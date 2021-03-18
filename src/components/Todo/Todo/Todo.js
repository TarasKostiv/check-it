import React, {useState} from 'react'
import TodoMenu from "../TodoMenu"
import TodoList from "../TodoList"
import TodoForm from "../TodoForm"
import TodoTask from "../TodoTask"

function Todo(props) {
    const [tasks, setTasks] = useState([
        {id: (Math.floor(Math.random() * 10000)), name: 'My summer plan'},
        {id: (Math.floor(Math.random() * 10000)), name: 'Work'},
        {id: (Math.floor(Math.random() * 10000)), name: 'University'},
        {id: (Math.floor(Math.random() * 10000)), name: 'Dreams'},
    ])

    const renderTasks = (group) => {
        return group.map(team => {
            return <TodoTask name={team.name} id={team.id}/>
        })
    }
    return (
        <div className="todo">
            <TodoMenu teamName={'lol'} icon={null}/>
            <TodoList >
                {renderTasks(tasks)}
            </TodoList>
            <TodoForm />
        </div>
    )
}

export default Todo