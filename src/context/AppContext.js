import React, {useContext, useState} from "react"
import {TasksContextProvider} from "./TasksContext";
import {ListsContextProvider} from "./ListsContext";
import {ModalContextProvide} from "./ModalContext";

const AppContext = React.createContext()

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppContextProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const sidebarToggle = () => setIsSidebarOpen(prev => !prev)

    return(
        <AppContext.Provider value={{isSidebarOpen, sidebarToggle}}>
            <ModalContextProvide>
                <TasksContextProvider>
                    <ListsContextProvider>
                        {children}
                    </ListsContextProvider>
                </TasksContextProvider>
            </ModalContextProvide>
        </AppContext.Provider>
    )
}