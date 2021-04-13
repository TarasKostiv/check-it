import React, {useState, useContext} from "react"
import {VscCalendar, VscCheck, VscInbox, VscStarEmpty} from "react-icons/all";
const ListsContext = React.createContext()
export const useListsContext = () => {return useContext(ListsContext)}

const randomNum = () => Math.floor(Math.random() * 10000)

export const ListsContextProvider = ({children}) => {
    const linker = (string) => "/" + string.replace(/\s/g, '-').toLowerCase()

    const [existedLists, setExistedLists] = useState([
        {id: (Math.floor(Math.random() * 10000)), name: 'Inbox', icon: <VscInbox /> },
        {id: (Math.floor(Math.random() * 10000)), name: 'Today', icon: <VscCalendar />},
        {id: (Math.floor(Math.random() * 10000)), name: 'Important', icon: <VscStarEmpty />},
        {id: (Math.floor(Math.random() * 10000)), name: 'Completed', icon: <VscCheck />},
    ])

    const [createdLists, setCreatedLists] = useState([
        {id: randomNum(), name: 'My summer plan'},
        {id: randomNum(), name: 'Work'},
        {id: randomNum(), name: 'University'},
        {id: randomNum(), name: 'Dreams'},
    ])

    const addList = (listName) => {
        setCreatedLists(prev => [...prev,{
            id: randomNum(),
            name: listName
        }
        ])
    }

    return (
        <ListsContext.Provider value={{linker, createdLists, existedLists, addList}}>
            {children}
        </ListsContext.Provider>
    )
}
