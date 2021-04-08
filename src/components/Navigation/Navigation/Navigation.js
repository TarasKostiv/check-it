import React from 'react';
import InputSearch from "../InputSearch";
import NavButton from "../NavButton/";
import { VscBell, VscAccount, VscMenu} from "react-icons/all";
import {useAppContext} from "../../../context/AppContext";

function Navigation(props) {
    const {sidebarToggle} = useAppContext();
    return (
        <nav className="navigation">
            <div className="navigation__left-side left-side">
                <NavButton func={sidebarToggle} nameClass="navigation__left-side__menu-btn" icon={<VscMenu />}/>
                <InputSearch />
            </div>
            <div className="navigation__right-side right-side">
                <NavButton icon={<VscBell />} />
                <NavButton  icon={<VscAccount />}/>
            </div>
        </nav>
    );
}

export default Navigation;