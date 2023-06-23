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
//adding new function addTask with one argument which will accept an object
function addTask(task){
  console.log(task);
}


  const [data, setTasks] = useState( [] )

  const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id!==id))
  }
  return (
    <div className="container">

      <Header toggleAdd = {toggleAddTask} showAdd = {showAddTask}/>
      {/* {pass the 'addTask' function to the onAdd Props in the <AddTask /> component } */}
      {showAddTask&& <AddTask onAdd = {addTask}/>}
      <Tasks onDelete ={deleteTask} tasks={data}/>
     
    </div>
  );
}

export default App;



