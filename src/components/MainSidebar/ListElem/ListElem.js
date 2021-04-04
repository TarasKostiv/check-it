import React from 'react';

function ListElem({icon = null, name = 'undefined', taskCount = null}) {
    return (
        <li className="list-elem">
            <div className="list-elem__left-side left-side">
                <i className="">{icon}</i>
                <h3 className="list-elem__name">{name}</h3>
            </div>
            <div className="list-elem__right-side right-side">
                <p className="list-elem__task-count">{taskCount}</p>
            </div>
        </li>
    );
}

export default ListElem;