import React from 'react';

function NavButton({icon, onClick, nameClass = ""}) {
    return (
        <>
            <button onClick={onClick} className={"nav-button " + nameClass}>{icon}</button>
        </>
    );
}

export default NavButton;