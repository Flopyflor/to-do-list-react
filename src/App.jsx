import React from 'react';
import './App.css'
import Board from './Components/board/board';
import AddTaskForm from './Components/taskForm/addTaskForm';



function App() {


  return (
    <>
    <div>
        <Board brand={"Lista de Tareas"}/>
        <AddTaskForm/>
    </div>
    </>
  )
}

export default App
