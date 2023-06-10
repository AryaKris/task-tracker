import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header"
import {Tasks} from "./components/Tasks"
import {AddTask} from "./components/AddTask"

import { useState } from 'react';



function App() {
//usestate, 
const [showAddTask, setshowAddTask] = useState(false);
function toggleAddTask(){
  

  setshowAddTask(!showAddTask)
}


  const [data, setTasks] = useState( [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2.30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1.30pm",
      "reminder": false
    },
    {
      "id": 3,
      "text": "Food Shopping",
      "day": "Feb 5th at 2.30pm",
      "reminder": false
    }
  ])

  const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id!==id))
  }
  return (
    <div className="container">

      <Header toggleAdd = {toggleAddTask} showAdd = {showAddTask}/>
      {showAddTask&& <AddTask/>}
      <Tasks onDelete ={deleteTask} tasks={data}/>
     
    </div>
  );
}

export default App;


// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return <h1>My favorite color is {color}!</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);
