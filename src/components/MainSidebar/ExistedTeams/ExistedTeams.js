import React, {useState} from 'react'
import ListOfTeams from "../ListOfTeams"
import ListElem from "../ListElem"
import {useListsContext} from "../../../context/ListsContext";

function ExistedTeams(props) {
    const {linker, existedLists} = useListsContext()

    const renderTeams = (group) => {
        return group.map(team => {
            return <ListElem name={team.name} id={team.id} icon={team.icon} to={linker(team.name)}/>
        })
    }

    return (
        <div className="existed-teams team-block">
            <ListOfTeams name={'Existed teams'} >
                {renderTeams(existedLists)}
            </ListOfTeams>
        </div>
    )
}

export default ExistedTeams