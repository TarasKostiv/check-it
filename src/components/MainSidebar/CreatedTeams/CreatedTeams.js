import React, {useState} from 'react'
import ListElem from "../ListElem"
import ListOfTeams from "../ListOfTeams"
import CreateTeamButton from "../CreateTeamButton"
import {useListsContext} from "../../../context/ListsContext";

function CreatedTeams(props) {
    const {createdLists, linker} = useListsContext()

    const renderTeams = (group) => {
        return group.map(team => {
            return <ListElem name={team.name} id={team.id} to={linker(team.name)}/>
        })
    }

    return (
        <div className="created-team team-block">
            <ListOfTeams name={'Created teams'} >
                {renderTeams(createdLists)}
                <CreateTeamButton />
            </ListOfTeams>
        </div>
    )
}

export default CreatedTeams