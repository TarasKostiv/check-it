import React from 'react'
import ExistedTeams from "../ExistedTeams"
import CreatedTeams from "../CreatedTeams"
import {useAppContext} from "../../../context/AppContext";

function MainSidebar(props) {
    const {isSidebarOpen} = useAppContext()
    return (
        <div className={isSidebarOpen ? "main-sidebar" : "main-sidebar main-sidebar_hidden"}>
                <ExistedTeams />
                <CreatedTeams />
        </div>
    )
}

export default MainSidebar