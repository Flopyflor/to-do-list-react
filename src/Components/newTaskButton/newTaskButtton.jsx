import React, {useState} from 'react'
import './newTaskButton.css';
import { Portal } from '../Portal/Portal';
import AddTaskForm from '../AddTaskForm/AddTaskForm'


const NewTaskButtton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  }

  const closePortal = () => {
    setShowForm(false);
  }


  return (
    <>
    <div>
        <button onClick={handleClick}> <span className="text">New task</span>
            <span className="blob"></span>
            <span className="blob"></span>
            <span classNames="blob"></span>
            <span className="blob"></span>
        </button>
    </div>

    {showForm && (
      <Portal getClosed={closePortal}>
        <AddTaskForm alEnviar={closePortal}></AddTaskForm>
      </Portal>
      )}
    </>
  )
}

export default NewTaskButtton