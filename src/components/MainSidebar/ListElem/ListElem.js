import React from 'react';
import {Link} from 'react-router-dom';

function ListElem({icon = '♣', name = 'undefined', taskCount = null, to="/"}) {
    return (
        <li className="list-elem">
            <Link to={to}>
                <div className="list-elem__left-side left-side">
                    {icon} &nbsp; <h3 className="list-elem__name">{name}</h3>
                </div>
                <div className="list-elem__right-side right-side">
                    <p className="list-elem__task-count">{taskCount}</p>
                </div>
            </Link>
        </li>
    );
}

export default ListElem;