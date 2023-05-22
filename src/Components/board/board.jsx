import React from 'react'
import './board.css';
import { PortalProvider } from '../../Contexts/PortalContext';
import { Portal } from '../Portal/Portal';
import AddTaskForm from '../taskForm/addTaskForm'

import Card from '../card/card';
import NewTaskButtton from '../newTaskButton/newTaskButtton';

const Board = ({ brand }) => {
  return (
    
    
    <div className="board">
      <div className="header">
        <h2>{ brand }</h2>
        <div>
          <PortalProvider>
            <NewTaskButtton/>
            
            <Portal>
              <AddTaskForm ></AddTaskForm>
            </Portal>
          </PortalProvider>
        </div>
      </div>
      
      <div className="board-items">
        
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
        
      </div>
      
    </div>
    
  )
}

export default Board