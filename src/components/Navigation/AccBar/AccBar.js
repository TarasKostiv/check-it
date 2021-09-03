import React from 'react';
import useStore from "../../../hooks/hookStore";

function AccBar({}) {
    const { state, actions } = useStore();

    return (
        <div className="accbar">
            <h3 className="accbar__title">User info</h3>
            <p className="accbar__txt">Email: {state.user.email}</p>
            <p className="accbar__txt">Username: {state.user.displayName}</p>
            <hr/>
            <button className="accbar__btn accbar__signout" onClick={() => actions.signOutUser()}>Sign out</button>
        </div>
    );
}

export default AccBar;