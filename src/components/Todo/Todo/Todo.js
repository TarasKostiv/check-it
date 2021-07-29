import React, {useContext, useEffect, useState} from 'react'
import TodoMenu from "../TodoMenu"
import TodoList from "../TodoList"
import TodoTask from "../TodoTask"
import TodoCreateTask from "../TodoCreateTask"
import DBContext from "../../../context/dbContext"
import BarLoader from "react-spinners/BarLoader"

export default function Todo ({match}){
    const [todos, setTodos] = useState([])
    const db = useContext(DBContext)

    useEffect(()=>{
        db.get('todos')(collection =>
            collection.where('listId', '==', match.params.listId)
        )
            .then(setTodos)
    },[db, match.params.listId])

    const list = db.lists.find(list => list.id === match.params.listId)
    if (!list || !todos) return <>
        <BarLoader color={'#db4c3f'} loading={true} width={'100%'} height={3} speedMultiplier={0.5}/>
    </>

    return (
        <div className="todo">
            <TodoMenu todoName={list.title} icon={null}/>
            <TodoList >
                {todos.map(item => <TodoTask title={item.title} id={item.id} isCompleted={item.isCompleted}/>)}
                <TodoCreateTask />
            </TodoList>
        </div>
    )
}