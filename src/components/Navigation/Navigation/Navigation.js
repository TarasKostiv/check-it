import React from 'react';
import InputSearch from "../InputSearch";
import NotificationButton from "../NotificationButton";
import ProfileButton from "../ProfileButton";

function Navigation(props) {
    return (
        <nav className="navigation">
            <div className="navigation__left-side left-side">
                <InputSearch />
            </div>
            <div className="navigation__right-side right-side">
                <NotificationButton />
                <ProfileButton />
            </div>
        </nav>
    );
}

export default Navigation;