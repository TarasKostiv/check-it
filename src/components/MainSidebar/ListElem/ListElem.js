import React from 'react';
import {Link} from 'react-router-dom';
import {VscChecklist} from "react-icons/all";

function ListElem({name = 'undefined', icon = <VscChecklist/>, id, to="/", taskCount = null}) {
    return (
        <li key={id} className="list-elem">
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