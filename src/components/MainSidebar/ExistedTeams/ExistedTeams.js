import React, {useState} from 'react'
import ListOfTeams from "../ListOfTeams"
import ListElem from "../ListElem"

function ExistedTeams(props) {
    const [existedTeams, setExistedTeams] = useState([
        {id: (Math.floor(Math.random() * 10000)), name: 'Daily'},
        {id: (Math.floor(Math.random() * 10000)), name: 'Important'},
        {id: (Math.floor(Math.random() * 10000)), name: 'Weekly'},
        {id: (Math.floor(Math.random() * 10000)), name: 'Monthly'},
    ])

    const renderTeams = (group) => {
        return group.map(team => {
            return <ListElem name={team.name} />
        })
    }

    return (
        <div className="existed-teams">
            <ListOfTeams name={'Existed teams'} >
                {renderTeams(existedTeams)}
            </ListOfTeams>
        </div>
    )
}

export default ExistedTeams