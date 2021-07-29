import React, {useEffect, useState} from "react";
import Navigation from "../components/Navigation/Navigation"
import MainSidebar from "../components/MainSidebar/MainSidebar"
import Todo from "../components/Todo/Todo/Todo"
import DBContext from "../context/dbContext";
import {Route, Switch} from "react-router-dom";
import {get} from "../api/firebaseApi";

function App() {
    const [lists, setLists] = useState([])

    useEffect(() => {
        get('lists')().then(setLists)
    },[])
  return (
      <DBContext.Provider value={{lists, get}}>
          <div className="app">
              <header className="upper-container">
                  <Navigation />
              </header>
              <main className="main-container">
                  <MainSidebar lists={lists}/>
                  <Switch>
                      <Route path={'/:listId'} component={Todo}/>
                  </Switch>
              </main>
          </div>
      </DBContext.Provider>
  )
}

export default App
