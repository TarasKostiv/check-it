import React, {useState} from 'react';
import Modal from "../../Modal";
import {useModalContext} from "../../../context/ModalContext";
import {useListsContext} from "../../../context/ListsContext";
import { VscAdd} from "react-icons/all";

function CreateTeamButton(props) {
    const [inputValue, setInputValue] = useState('')
    const {toggleModalCreateListModal} = useModalContext()
    const {addList} = useListsContext()

    const handleChange = (event) => setInputValue(event.target.value);

    const actionFunc = (listName) => {
        addList(listName)
        toggleModalCreateListModal()
        setInputValue('')
    }

    return (
        <>
            <li onClick={toggleModalCreateListModal} className="list-elem create-team-button">
                <div className="list-elem__left-side">
                    <VscAdd />
                    &nbsp;
                    <h3 className="list-elem__name">Create list</h3>
                </div>
            </li>
            <Modal title={'Add list'} actionName={'Add'} actionFunc={() => actionFunc(inputValue)}>
                <input onChange={handleChange} value={inputValue} maxLength={25} placeholder={"List name"} type="text" className="modal__text-input text-input"/>
            </Modal>
        </>
    );
}

export default CreateTeamButton;