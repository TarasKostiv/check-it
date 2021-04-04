import React from 'react';

function ProfileButton(props) {
    return (
        <div className="navigation__profile-content">
            <button className="navigation__profile-btn">
                <i className="fas fa-user-circle"></i>
            </button>
            <div className="navigation__profile-list navigation__profile-list_hidden">

            </div>
        </div>
    );
}

export default ProfileButton;