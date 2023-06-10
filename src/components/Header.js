import React from 'react'
import {Button} from "./Button"

export const Header = ({toggleAdd, showAdd}) => {
  return (
    <div>
          <header className='header'>
              <h1>Task Tacker</h1>
              <Button click = {toggleAdd} text = {showAdd ? 'close' : 'Add'} color = {showAdd ? 'Red' : 'Green'}/>
             
          </header>
    </div>
  )
}


