import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'




function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks ] = useState('')

  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  const deleteTask = (id) => {
    const newTaskList = tasks.filter((task) => task.id !== id)
    setTasks(newTaskList)
  }

  const toggleReminder = (toggledTask) => {
    const newTask = {...toggledTask, reminder: !toggledTask.reminder}
    const newTasks = tasks.map(task => task.id === toggledTask.id ? {...task, reminder: !toggledTask.reminder}: task )
    setTasks(newTasks)
    // const newTasks = tasks.filter(task => task.id === toggledTask.id ? {...task, reminder: !task.reminder} : task)
    // setTasks(tasks.map((task) => task.id === toggledTask.id ? {...task, reminder: !toggledTask.reminder} : task))


  }
  return (
    <div className="container">
    <Header title="Task Tracker" showAdd={showAddTask} onAdd={()=> setShowAddTask(!showAddTask)} />
    {showAddTask && <AddTask addTask={addTask} />}
    {tasks.length > 0 && <Tasks tasks={tasks} toggleReminder={toggleReminder} deleteTask={deleteTask}/>}
    </div>
  );
}

export default App;
