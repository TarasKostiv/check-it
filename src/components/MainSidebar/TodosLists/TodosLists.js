import React from 'react'
import ListElem from "../ListElem"
import CreateTeamButton from "../CreateTeamButton";
import {VscCalendar, VscCheck, VscInbox, VscStarEmpty} from "react-icons/all";

function TodosLists({lists}) {
    const mainLists = [
        {id: 0, title: 'Inbox', icon: <VscInbox />, to: "/inbox"},
        {id: 1, title: 'Today', icon: <VscCalendar />, to: "/today"},
        {id: 2, title: 'Important', icon: <VscStarEmpty />, to: "/important"},
        {id: 3, title: 'Completed', icon: <VscCheck />, to: "/completed"},
    ]

    return (
        <div className="todos-lists team-block">
            <div className="list-of-teams">
                <ul className="list-of-teams__list">
                    {mainLists.map(item => <ListElem title={item.title} icon={item.icon} id={item.id} to={item.to}/>)}
                    <hr/>
                    {lists.map(item => <ListElem title={item.title} id={item.id} to={item.id}/>)}
                    <CreateTeamButton />
                </ul>
            </div>
        </div>
    )
}

export default TodosLists