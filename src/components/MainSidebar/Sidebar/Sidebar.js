import React from 'react'
import TodosLists from "../TodosLists";
import useStore from "../../../hooks/hookStore";

function Sidebar({lists}) {
    const {state} = useStore()
    return (
        <div className={state.sidebar ? "main-sidebar" : "main-sidebar main-sidebar_hidden"}>
            <TodosLists lists={lists}/>
        </div>
    )
}

export default Sidebar