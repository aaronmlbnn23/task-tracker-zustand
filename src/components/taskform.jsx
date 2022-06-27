import React from 'react'
import {useState} from 'react'
import { useTaskStore } from '../store/TaskStore'

const taskform = ({onAdd}) => {
    //const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskReminder, setTaskReminder] = useState(false)
    const success = document.querySelector('.success')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskName == '' || taskDate == ''){
            alert('Please fill the fields.')
            return
        }
        
        onAdd({taskName, taskDate, taskReminder})
        //addTask( { title: taskName, date: taskDate, reminder: taskReminder})
        setTaskName('')
        setTaskDate('')
        setTaskReminder('')
        success.classList.add('show');
        setTimeout(() => {
          success.classList.remove('show');
        }, 2000)
        
       // setGlobalTasks([...globalTasks, [taskName, taskDate, taskReminder]])
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="taskName">Task</label>
        <input type="text" name='taskName'value={taskName} onChange={(e) => setTaskName(e.target.value)} id='taskName'/>
        </div>
        <div>
        <label htmlFor="taskDate">Date</label>
        <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} name='taskDate' id='taskDate'/>
        </div>
        
        <label htmlFor="taskReminder">Task Reminder<input type="checkbox"style={{marginLeft: '16px'}}  value={taskReminder ? 'true' : 'false'} checked={taskReminder} onChange={(e) => setTaskReminder(e.currentTarget.checked)} name='taskReminder' id='taskReminder'/></label>
        
        <button type='submit' className='addBtn'>Add Button</button>
        <p className='success'>Successfully Added!</p>
    </form>
  )
}

export default taskform