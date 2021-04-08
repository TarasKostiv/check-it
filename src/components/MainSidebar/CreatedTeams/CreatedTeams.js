import React, {useState} from 'react'
import ListElem from "../ListElem"
import ListOfTeams from "../ListOfTeams"
import CreateTeamButton from "../CreateTeamButton"

function CreatedTeams(props) {
    const [createdTeams, setCreatedTeams] = useState([
        {id: (Math.floor(Math.random() * 10000)), name: 'My summer plan'},
        {id: (Math.floor(Math.random() * 10000)), name: 'Work'},
        {id: (Math.floor(Math.random() * 10000)), name: 'University'},
        {id: (Math.floor(Math.random() * 10000)), name: 'Dreams'},
    ])

    const renderTeams = (group) => {
        return group.map(team => {
            return <ListElem name={team.name} id={team.id} to={team.name.replace(/\s/g, '-').toLowerCase()}/>
        })
    }

    return (
        <div className="created-team team-block">
            <ListOfTeams name={'Created teams'} >
                {renderTeams(createdTeams)}
                <CreateTeamButton />
            </ListOfTeams>

        </div>
    )
}

export default CreatedTeams