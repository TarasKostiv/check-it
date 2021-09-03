import React, {useState} from 'react';
import {VscAdd, VscBell, VscCalendar} from "react-icons/all";
import DateTimePicker from 'react-datetime-picker';

function TodoCreateTask({onSubmit}) {
    const [isForm, setIsForm] = useState(false)
    const [time, setTime] = useState([new Date(), new Date()])
    const [remindTime, setRemindTime] = useState([new Date(), new Date()])
    const [isTime, setIsTime] = useState(false)
    const [isRemindTime, setIsRemindTime] = useState(false)
    const [title, setTitle] = useState('')

    const handleChange = () => setIsForm(true)

    const handleSubmit = (e) =>  {
        e.preventDefault()
        onSubmit({
            title,
            dataTime: time,
            remindTime
        })
        setTitle('')
        setIsForm(false)
    }

    if(isForm) return (
        <form onSubmit={event => event.preventDefault()}>
            <li className={"todo-task todo-create-task-form"} key={'addForm'}>
                <div className="todo-task__left-side left-side">
                    <input className="todo-create-task-form__input" type="text" placeholder="Write your task" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="todo-task__right-side right-side">
                    <button className="todo-btn todo-create-task-form__time-btn" onClick={() => {
                        setIsTime(prev => !prev)
                        setIsRemindTime(false)
                    }}>
                        <VscCalendar/>
                    </button>
                    <DateTimePicker
                        className={isTime ? "todo-timepicker todo-timepicker__time" : 'todo-timepicker__hidden'}
                        onChange={setTime}
                        value={time}
                    />

                    <button className="todo-btn todo-create-task-form__remind-btn" onClick={() => {
                        setIsRemindTime(prev => !prev)
                        setIsTime(prev => false)
                    }}>
                        <VscBell/>
                    </button>
                    <DateTimePicker
                        className={isRemindTime ? "todo-timepicker todo-timepicker__remind" : 'todo-timepicker__hidden'}
                        onChange={setRemindTime}
                        value={remindTime}
                    />

                    <button className="todo-btn todo-create-task-form__add-btn" onClick={handleSubmit}>Add</button>
                </div>
            </li>
        </form>
    )

    return (
        <li className={"todo-task todo-create-task"} onClick={handleChange}>
            <h3 className={"todo-create-task__button todo-task__task-name"} >
                <VscAdd/>
                &nbsp;
                Add task
            </h3>
        </li>
    )
}

export default TodoCreateTask;