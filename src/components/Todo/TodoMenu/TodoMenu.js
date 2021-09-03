import React, {useState} from 'react';
import {VscFilter} from "react-icons/all";
import Sorter from "../Sorter/Sorter";

function TodoMenu({todoName, icon, onSortChange}  ) {
    const [sorter, setSorter] = useState(false);
    const handleChangeSorter = () => setSorter(prev => !prev);

    return (
        <menu className="todo-menu">
            <div className="todo-menu__left-side left-side">
                {icon}
                <h2 className="todo-menu__team-name">{todoName}</h2>
            </div>
            <div className="todo-menu__right-side right-side">
                <button className="todo-btn" onClick={handleChangeSorter}><VscFilter /></button>
                {sorter ? <Sorter onSorterChange={onSortChange}/> : <></>}

            </div>
        </menu>
    );
};

export default TodoMenu;