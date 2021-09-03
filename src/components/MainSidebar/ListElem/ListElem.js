import React from 'react';
import {Link} from 'react-router-dom';
import {VscChecklist} from "react-icons/all";

function ListElem({title, icon = <VscChecklist/>, id, to="/", taskCount = null, children}) {
    return (
        <li key={id} className="list-elem">
            <Link to={to}>
                <div className="list-elem__left-side left-side">
                    {icon} &nbsp; <h3 className="list-elem__name">{title}</h3>
                </div>
                <div className="list-elem__right-side right-side">
                    <p className="list-elem__task-count">{taskCount}</p>
                    {children}
                </div>
            </Link>
        </li>
    );
}

export default ListElem;