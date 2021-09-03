import React, {useEffect} from "react";
import Navigation from "../components/Navigation/Navigation"
import Sidebar from "../components/MainSidebar/Sidebar"
import Todo from "../components/Todo/Todo/Todo"
import AuthPage from "../components/AuthPage";
import {Route, Switch} from "react-router-dom"

import useStore from "../hooks/hookStore";


function App() {
    const { state, actions } = useStore();

    useEffect(() => {
        actions.initAuth();
    }, []);

    useEffect(() => {
        if(state.user){
            actions.getLists(state.user.uid);
            actions.getTodos(state.user.uid)
        }
    }, [state.user, actions]);

    if(!state.user) return (
        <Switch>
            <Route component={AuthPage}/>
        </Switch>
        )
    else return (
          <div className="app">
              <header className="upper-container">
                  <Navigation />
              </header>
              <main className="main-container">
                  <Sidebar lists={state.lists} />
                  <Switch>
                      <Route exact path={'/'} component={Todo}/>
                      <Route exact path={'/planned'} component={Todo}/>
                      <Route exact path={'/important'} component={Todo}/>
                      <Route exact path={'/completed'} component={Todo}/>
                      <Route path={'/:listId/:todoId?'} component={Todo}/>
                  </Switch>
              </main>
          </div>
  )
}

export default App
