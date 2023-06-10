import React from 'react'

import { FaTimes } from 'react-icons/fa'

export const Task = ({item, onDelete}) => {
  return (
    <div className={`task ${item.reminder ? "reminder":''}`}>
      <h3>{item.text} <FaTimes onClick={()=> onDelete(item.id)} style={{ color: 'red', cursor: 'pointer' }} /></h3> 
      
     
      <p>{item.day}</p>
      
    </div>
  )
}

