import React from 'react'
//create a new component task, rename this one to tasks
//
import { Task } from "./Task"

export const Tasks = ({ tasks, deleteTask, onToggle }) => {
  return (
    <>
      {tasks.map((data) => (
        
        <Task delete1 ={deleteTask} item = {data} key ={data.id} toggleUpdate={onToggle}/>

      ))

      }
   
    </>
  )
}


