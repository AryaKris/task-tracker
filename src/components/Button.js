import React from 'react'

export const Button = ({ click, text, color }) => {

  return (
    <div>
      <button className='btn' onClick={click} style={{ backgroundColor: color }} >{text}</button>
    </div>
  )
}


