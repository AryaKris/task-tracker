import React from 'react'

import { FaTimes } from 'react-icons/fa'

export const Task = ({item, abc}) => {
  return (
    <div className={`task ${item.reminder ? "reminder":''}`}>
      <h3>{item.text} <FaTimes onClick = {()=> abc(item.id)} style={ { color: 'red', cursor: 'pointer' }} /></h3> 
      
     
      <p>{item.day}</p>
      
    </div>
  )
}

