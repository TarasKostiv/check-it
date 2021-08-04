import React from "react";
import Navigation from "../components/Navigation/Navigation"
import MainSidebar from "../components/MainSidebar/MainSidebar"
import Todo from "../components/Todo/Todo/Todo"
import {Route, Switch} from "react-router-dom";

import {useApi} from "../hooks/api";

function App() {
    const {data: {lists}} = useApi()

  return (
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
  )
}

export default App
