import React from 'react'
import ExistedTeams from "../ExistedTeams"
import CreatedTeams from "../CreatedTeams"

function MainSidebar(props) {
    return (
        <div className="main-sidebar">
            <ExistedTeams />
            <CreatedTeams />
        </div>
    )
}

export default MainSidebar