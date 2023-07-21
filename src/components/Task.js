import React from 'react'

import { FaTimes } from 'react-icons/fa'

export const Task = ({item, delete1, toggleUpdate}) => {
  return (
    <div className={`task ${item.reminder ? "reminder":''}`} onDoubleClick={()=> toggleUpdate (item.id)}>
      <h3>{item.text} <FaTimes onClick = {()=> delete1(item.id)} style={ { color: 'red', cursor: 'pointer' }} /></h3> 
      
     
      <p>{item.day}</p>
      
    </div>
  )
}

