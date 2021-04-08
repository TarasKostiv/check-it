import React from 'react'
import ExistedTeams from "../ExistedTeams"
import CreatedTeams from "../CreatedTeams"
import {BrowserRouter as Router} from "react-router-dom";
import {useAppContext} from "../../../context/AppContext";

function MainSidebar(props) {
    const {isSidebarOpen} = useAppContext()
    return (
        <div className={isSidebarOpen ? "main-sidebar" : "main-sidebar main-sidebar_hidden"}>
            <Router>
                <ExistedTeams />
                <CreatedTeams />
            </Router>
        </div>
    )
}

export default MainSidebar