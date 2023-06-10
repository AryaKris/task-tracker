import React from 'react'
//create a new component task, rename this one to tasks
//
import { Task } from "./Task"

export const Tasks = ({ tasks,onDelete }) => {
  return (
    <>
      {tasks.map((abc) => (
        
        <Task item = {abc} key ={abc.id} onDelete = {onDelete} />

      ))

      }
   
    </>
  )
}


