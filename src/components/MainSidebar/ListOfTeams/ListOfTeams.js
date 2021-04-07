import React from 'react';

function ListOfTeams({ children}) {
    return (
        <div className="list-of-teams">
            <ul className="list-of-teams__list">
                {children}
            </ul>
        </div>
    );
}

export default ListOfTeams;