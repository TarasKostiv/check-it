import {VscCalendar, VscCheck, VscInbox, VscStarEmpty} from "react-icons/all";
import React from "react";

export default {
    user: null,
    sidebar: true,
    lists: [],
    mainLists: [
        {id: 0, title: 'Inbox', icon: <VscInbox />, to: '/'},
        {id: 1, title: 'Planned', icon: <VscCalendar />, to: '/planned'},
        {id: 2, title: 'Important', icon: <VscStarEmpty />, to: '/important'},
        {id: 3, title: 'Completed', icon: <VscCheck />, to: '/completed'},
    ],
    todos: [],
};