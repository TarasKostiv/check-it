import React, {useState} from 'react';
// import Modal from "../../Modal";
import { VscAdd} from "react-icons/all";

function CreateTeamButton(props) {
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <li className="list-elem create-team-button">
                <div className="list-elem__left-side">
                    <VscAdd />
                    &nbsp;
                    <h3 className="list-elem__name">Create list</h3>
                </div>
            </li>
            {/*<Modal title={'Add list'} actionName={'Add'}>*/}
            {/*    <input value={inputValue} maxLength={25} placeholder={"List name"} type="text" className="modal__text-input text-input"/>*/}
            {/*</Modal>*/}
        </>
    );
}

export default CreateTeamButton;