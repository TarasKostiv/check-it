import React from 'react';
import Todo from "../Todo/Todo";
import {Route, Switch, Redirect} from "react-router-dom";
// import {
//     TransitionGroup,
//     CSSTransition
// } from "react-transition-group";

function SidebarNavigation({}) {

    const todosListRender = (list) => {
        return list.map(todo => {
            return (
                    <Route key={todo.id} path={'/'}>
                        <Todo key={todo.id} listName={todo.name} list={todo.list}/>
                    </Route>
            )
        })
    }

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/today" />
            </Route>
        </Switch>
    );
}

export default SidebarNavigation;