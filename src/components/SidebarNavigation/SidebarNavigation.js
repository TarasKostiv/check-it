import React from 'react';
import Todo from "../Todo/Todo";
import {useListsContext} from "../../context/ListsContext";
import {Route, Switch, } from "react-router-dom";
// import {
//     TransitionGroup,
//     CSSTransition
// } from "react-transition-group";

function SidebarNavigation({}) {
    const {createdLists, existedLists, linker} = useListsContext()
    const todosListRender = (list) => {
        return list.map(todo => {
            return (
                    <Route key={todo.id} path={linker(todo.name)}>
                        <Todo key={todo.id} listName={todo.name}/>
                    </Route>
            )
        })
        console.log(createdLists.name)
    }

    return (
        <>
            <Switch>
                    <Route path={linker('inbox')}>
                        <Todo listName={'Inbox'}/>
                    </Route>
                    <Route path={linker('today')}>
                        <Todo listName={'Today'}/>
                    </Route>
                    {todosListRender(createdLists)}
                    {todosListRender(existedLists)}
            </Switch>
        </>
    );
}

export default SidebarNavigation;