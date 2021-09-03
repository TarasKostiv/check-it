import React, {useState} from 'react'
import ListElem from "../ListElem"
import CreateTeamButton from "../CreateTeamButton";
import {VscCalendar, VscCheck, VscInbox, VscStarEmpty, VscTrash} from "react-icons/all";
import {actions} from "../../../store";
import useStore from "../../../hooks/hookStore";

function TodosLists({lists, match}) {
    const {state, actions} = useStore()
    const [isFormOpen, setFormOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const mainLists = state.mainLists

    const handleOnListBtnClick = () => {
        setFormOpen(true)
        console.log(match)
    }
    function handleAddList(){
        actions.createList({
            title: inputValue,
            userId: state.user.uid
        }).then(() => {
            setFormOpen(false)
            setInputValue('')
        })
    }

    const handleDeleteList = listId => {
        actions.deleteList(listId)
    }

    return (
        <div className="todos-lists team-block">
            <div className="list-of-teams">
                <ul className="list-of-teams__list">
                    {mainLists.map(item => <ListElem title={item.title} icon={item.icon} id={item.id} to={item.to} />)}
                    <hr/>
                    {lists.map(item =>
                    {
                        console.log(item)
                        return (
                            <ListElem title={item.title} id={item.id} to={item.id} >
                                <button className="list-elem__delete-btn main-sidebar__btn"
                                        onClick={() => handleDeleteList(item.id)}><VscTrash/></button>
                            </ListElem>
                        )
                    } )}
                    {isFormOpen ?
                        <div className="list-of-teams__form">
                            <input
                                value={inputValue}
                                maxLength={25}
                                placeholder={"List name"}
                                type="text"
                                onChange={(e) => setInputValue(e.target.value)}
                                className="list-of-teams__input"
                            />
                            <button className="list-of-teams__add-btn todo-btn" onClick={handleAddList}>Add</button>
                        </div>
                        :
                        <CreateTeamButton onClick={handleOnListBtnClick}/>
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodosLists