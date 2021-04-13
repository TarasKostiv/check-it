import React, {useContext, useState} from "react"

const TasksContext = React.createContext()

export const useTasksContext = () => {
    return useContext(TasksContext);
}

const randomNum = () => Math.floor(Math.random() * 10000)

export const TasksContextProvider = ({children}) => {
    const [createdTasks, setCreatedTasks] = useState([
        {id: 0, name: 'My summer plan', isCompleted: false, isImportant: true},
        {id: 1, name: 'Work', isCompleted: true, isImportant: false},
    ])

    const toggleComplete = (id) => {
        console.log(createdTasks)
        const index = createdTasks.map(task => task.id).indexOf(id)
        setCreatedTasks(    createdTasks[index].isCompleted = !createdTasks[index].isCompleted )
        console.log(createdTasks)
    }
    console.log(createdTasks)
    return(
        <TasksContext.Provider value={{createdTasks, toggleComplete}}>
            {children}
        </TasksContext.Provider>
    )
}
