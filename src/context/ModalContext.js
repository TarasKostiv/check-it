import React, {useContext, useState} from "react";
const ModalContext = React.createContext()
export const useModalContext = () => useContext(ModalContext)

export const ModalContextProvide = ({children}) => {
    const [isOpenCreateListModal, setIsOpenCreateListModal] = useState(true)

    const toggleModalCreateListModal = () => setIsOpenCreateListModal(prev => !prev)

    return(
        <ModalContext.Provider value={{
            isOpenCreateListModal,
            toggleModalCreateListModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}