import React, {useContext, useState} from "react"

const AppContext = React.createContext()

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppContextProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const sidebarToggle = () => setIsSidebarOpen(prev => !prev)

    return(
        <AppContext.Provider value={{
            isSidebarOpen: isSidebarOpen,
            sidebarToggle
        }}>
            {children}
        </AppContext.Provider>
    )
}