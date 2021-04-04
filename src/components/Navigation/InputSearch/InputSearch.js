import React from 'react';

function InputSearch(props) {
    return (
        <form className="navigation__form-search form-search form">
            <input placeholder="" type="text" name="search-input" id="navigation-search-input" className="navigation__input-search input-search input"/>
        </form>
    );
}

export default InputSearch;