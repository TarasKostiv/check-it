import React, {useState} from 'react';
import InputSearch from "../InputSearch";
import NavButton from "../NavButton/";
import { VscAccount, VscMenu} from "react-icons/all";
import AccBar from "../AccBar/";
import useStore from "../../../hooks/hookStore";

function Navigation() {
    const [acc, setAcc] = useState()
    const {state, actions} = useStore()

    const handleChangeSidebarStatus = () => {
        actions.changeSidebar()

    }

    const handleAcc = () => setAcc(prev => !prev)
    return (
        <nav className="navigation">
            <div className="navigation__left-side left-side">
                <NavButton nameClass="navigation__left-side__menu-btn" onClick={handleChangeSidebarStatus} icon={<VscMenu />}/>
                {/*<InputSearch />*/}
            </div>
            <div className="navigation__right-side right-side">
                <NavButton onClick={handleAcc} icon={<VscAccount />}/>
                {acc ? <AccBar/> : <></>}
            </div>
        </nav>
    );
};

export default Navigation;