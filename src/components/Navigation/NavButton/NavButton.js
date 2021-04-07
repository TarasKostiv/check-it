import React from 'react';

function NavButton({icon, func}) {
    return (
        <div className="button nav-button">
            <button className="nav-button__button">{icon}</button>
        </div>
    );
}

export default NavButton;