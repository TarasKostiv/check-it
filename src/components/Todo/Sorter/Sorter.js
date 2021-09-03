import React from 'react';

function Sorter({onSorterChange}) {
    return (
        <div className="todo-sorter">
            <button className="todo-sorter__btn" onClick={() => onSorterChange('title')}>By A-Z</button>
            <button className="todo-sorter__btn" onClick={() => onSorterChange('favorite')}>By Important</button>
            <button className="todo-sorter__btn" onClick={() => onSorterChange('completed')}>By Completed</button>
            <button className="todo-sorter__btn" onClick={() => onSorterChange('date')}>By Date</button>
        </div>
    );
}

export default Sorter;