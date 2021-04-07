import React, {useState} from 'react'
import ListOfTeams from "../ListOfTeams"
import ListElem from "../ListElem"
import {FcApproval, FcCalendar, FcRating, FcViewDetails} from "react-icons/all";

function ExistedTeams(props) {
    const [existedTeams, setExistedTeams] = useState([
        {id: (Math.floor(Math.random() * 10000)), name: 'Inbox', icon: <FcViewDetails /> },
        {id: (Math.floor(Math.random() * 10000)), name: 'Today', icon: <FcCalendar />},
        {id: (Math.floor(Math.random() * 10000)), name: 'Important', icon: <FcRating />},
        {id: (Math.floor(Math.random() * 10000)), name: 'Completed', icon: <FcApproval />},
    ])

    const renderTeams = (group) => {
        return group.map(team => {
            return <ListElem name={team.name} id={team.id} icon={team.icon} to={team.name.replace(/\s/g, '-').toLowerCase()}/>
        })
    }

    return (
        <div className="existed-teams team-block">
            <ListOfTeams name={'Existed teams'} >
                {renderTeams(existedTeams)}
            </ListOfTeams>
        </div>
    )
}

export default ExistedTeams