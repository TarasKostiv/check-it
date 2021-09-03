import React from 'react';
import { VscAdd} from "react-icons/all";

function CreateTeamButton({onClick}) {
    return (
            <li className="list-elem create-team-button">
                <div className="list-elem__left-side" onClick={onClick}>
                    <VscAdd />
                    &nbsp;
                    <h3 className="list-elem__name">Create list</h3>
                </div>
            </li>
    );
}

export default CreateTeamButton;