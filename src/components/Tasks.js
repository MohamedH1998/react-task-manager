import React, {useState} from 'react'
import Task from './Task'



const Tasks = ({tasks, deleteTask, toggleReminder}) => {

    const tasksList = tasks.map((task, i) => {
        return (
                <Task key={i} task={task} toggleReminder={toggleReminder} deleteTask={deleteTask} onClick={(e) => console.log(e.target.key)}/>
        )
    })

    return (
        <div>
            {tasksList}
        </div>
    )
}

export default Tasks