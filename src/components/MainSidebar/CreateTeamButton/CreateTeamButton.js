import React from 'react';
import { VscAdd} from "react-icons/all";

function CreateTeamButton(props) {
    return (
        // <div className="create-team-button">
        //     <button className="create-team-button__btn">
        //         <MdControlPoint />
        //         Create team
        //     </button>
        // </div>
        <li className="list-elem create-team-button">
            <div className="list-elem__left-side">
                <VscAdd />
                &nbsp;
                <h3 className="list-elem__name">Create list</h3>
            </div>
        </li>
    );
}

export default CreateTeamButton;