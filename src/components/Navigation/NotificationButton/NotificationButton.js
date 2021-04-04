import React from 'react';

function NotificationButton(props) {
    return (
        <div className="navigation__notification-content">
            <button className="navigation__notification-button">
                <i className="fas fa-bell"></i>
            </button>
            <div className="navigation__notification-list navigation__notification-list_hidden">

            </div>
        </div>
    );
}

export default NotificationButton;