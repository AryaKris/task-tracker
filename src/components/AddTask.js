import React from "react";

import { useState } from "react";

//Add new props called "onAdd" 
export const AddTask = ({onAdd}) => {
  //add three useState variable 
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  //function onSubmit to handle the form submit
  const onSubmit= (e)=>{
e.preventdefault();
onAdd({text,day,reminder})

  }
  

  return (
    //Add value attribute ,onChange event on all three inputs (text,day,reminder)
    <div>
      <form className="add-form" onSubmit={onSubmit}> 
        <div className="form-control">
          <label>Task</label>
          <input type='text'
            placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input type='text' value={day}
            placeholder="Add Date & Time" onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type='submit' value='Save Task' className="btn btn-block" />
      </form>


    </div>
  )
}







