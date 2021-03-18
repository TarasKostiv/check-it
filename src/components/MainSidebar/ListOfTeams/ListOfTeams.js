import React from 'react';

function ListOfTeams({name, children}) {
    return (
        <div className="list-of-teams">
            <h2 className="list-of-teams__team-name">{name}</h2>
            <ul className="list-of-teams__list">
                {children}
            </ul>
        </div>
    );
}

export default ListOfTeams;