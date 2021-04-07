import React from 'react';
import {MdControlPoint} from "react-icons/all";

function CreateTeamButton(props) {
    return (
        <div className="create-team-button">
            <button className="create-team-button__btn">
                <MdControlPoint />
                Create team
            </button>
        </div>
    );
}

export default CreateTeamButton;