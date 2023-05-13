import React, { useContext } from "react";
import './newTaskButton.css';
import { Portal } from '../Portal/Portal';
import AddTaskForm from '../taskForm/addTaskForm'
import {PortalContext} from '../../Contexts/PortalContext';


const NewTaskButtton = () => {
  const { showPortal } = useContext(PortalContext);

  return (
    <>
    <div>
        <button onClick={showPortal}> <span className="text">New task</span>
            <span className="blob"></span>
            <span className="blob"></span>
            <span classNames="blob"></span>
            <span className="blob"></span>
        </button>
    </div>

    <Portal>
      <AddTaskForm ></AddTaskForm>
    </Portal>
    </>
  )
}

export default NewTaskButtton