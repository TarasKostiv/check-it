import React from 'react'
import ExistedTeams from "../ExistedTeams"
import CreatedTeams from "../CreatedTeams"
import {BrowserRouter as Router} from "react-router-dom";

function MainSidebar(props) {
    return (
        <div className="main-sidebar">
            <Router>
                <ExistedTeams />
                <CreatedTeams />
            </Router>
        </div>
    )
}

export default MainSidebar