import React from "react";

import { useState } from "react";

export const AddTask = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  function getText(e){
    console.log(e);
    setText(e);
    console.log('value of useState'+ {text})
  }

  function getDate(e){
    console.log(e)

  }

  return (
    <div>
      <div className="form-control">
        <label>Task</label>
        <input type='text'
          placeholder="Add Task"  onChange={(e)=>getText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type='text'
          placeholder="Add Date & Time" onChange={(e)=>getDate(e.text.value)}  />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} />
      </div>
      <input type='submit' value='Save Task' className="btn btn-block" />


    </div>
  )
}







