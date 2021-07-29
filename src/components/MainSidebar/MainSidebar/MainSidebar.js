import React from 'react'
import TodosLists from "../TodosLists"

function MainSidebar({lists}) {
    return (
        // <div className={isSidebarOpen ? "main-sidebar" : "main-sidebar main-sidebar_hidden"}>
        <div className={"main-sidebar"}>
                <TodosLists lists={lists}/>
        </div>
    )
}

export default MainSidebar