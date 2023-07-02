import React from 'react'
//create a new component task, rename this one to tasks
//
import { Task } from "./Task"

export const Tasks = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.map((abc) => (
        
        <Task abc ={deleteTask} item = {abc} key ={abc.id}/>

      ))

      }
   
    </>
  )
}


