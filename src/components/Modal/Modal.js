import React, {useState} from 'react';

function Modal({children, nameClass, title, actionName, actionFunc}) {
    const {isOpenCreateListModal, toggleModalCreateListModal} = useModalContext()

    return (
        <div className={isOpenCreateListModal ? ("modal " + nameClass) : ("modal modal_hidden " + nameClass)}>
            <div className={"modal__content " + nameClass}>
                <div className="modal__bar-upper">
                    <h2 className="modal__header">{title}</h2>
                </div>
                <div className="modal__main">
                    {children}
                </div>
                <div className="modal__bar-footer">
                    <button className="modal__btn-cancel button" onClick={toggleModalCreateListModal}>Cancel</button>
                    <button className="modal__btn-action button" onClick={actionFunc}>{actionName}</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;