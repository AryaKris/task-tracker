import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { AddTask } from "./components/AddTask"
import { useEffect } from 'react';
import { useState } from 'react';



function App() {
  //usestate, 
  const [showAddTask, setshowAddTask] = useState(false);
  function toggleAddTask() {


    setshowAddTask(!showAddTask)
  }
  //adding new function addTask with one argument which will accept an object
  const addTask = async (task) => {
    const success = Validate(task)
    if (success) {

      const response = await fetch(
        'http://localhost:5000/tasks', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const result = await response.json()
      updateData([...data, result]);
    }

  }
  function Validate(task) {
    if (task.text === '') {
      alert("Please enter text here...");
      return false;
    }
    return true;
  }

  const [data, updateData] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const dataFromDbJson = await fetchTasks()
      updateData(dataFromDbJson);
    }
    getTasks();
  }, [])
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data
  }



  const deleteTaskfromAPI = async(id) => {
    
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE'
    })

   updateData(data.filter((task) => task.id!==id))
  }
  return (
    <div className="container">

      <Header toggleAdd={toggleAddTask} showAdd={showAddTask} />
      {/* {pass the 'addTask' function to the onAdd Props in the <AddTask /> component } */}
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks deleteTask={deleteTaskfromAPI} tasks={data} />

    </div>
  );
}

export default App;



//useeffect
//async await 
//api call
//server run