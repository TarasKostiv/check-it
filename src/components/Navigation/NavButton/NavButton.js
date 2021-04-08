import React from 'react';

function NavButton({icon, func, nameClass = ""}) {
    return (
        <>
            <button onClick={func} className={"nav-button " + nameClass}>{icon}</button>
        </>
    );
}

export default NavButton;