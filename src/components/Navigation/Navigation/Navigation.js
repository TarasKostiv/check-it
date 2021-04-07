import React from 'react';
import InputSearch from "../InputSearch";
import NavButton from "../NavButton/";
import { VscBell, VscAccount, VscMenu} from "react-icons/all";

function Navigation(props) {
    return (
        <nav className="navigation">
            <div className="navigation__left-side left-side">
                <NavButton  icon={<VscMenu />}/>
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