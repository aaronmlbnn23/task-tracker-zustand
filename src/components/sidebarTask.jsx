import React from 'react'
import { useTaskStore } from '../store/TaskStore'
import  TaskItems from './taskItem'

function sidebarTask() {
    const tasks = useTaskStore((state) => state.tasks)
    return (
     <div>
      <TaskItems></TaskItems>
    </div>
  )
}

export default sidebarTask