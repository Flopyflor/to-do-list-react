import React from 'react'
import './board.css';
import { PortalProvider } from '../../Contexts/PortalContext';

import Card from '../card/card';
import NewTaskButtton from '../newTaskButton/newTaskButtton';

const Board = ({ brand }) => {
  return (
    
    <PortalProvider>
    <div className="board">
      <div className="header">
        <h2>{ brand }</h2>
        <div>
          <NewTaskButtton/>
        </div>
      </div>
      
      <div className="board-items">
        
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
        
      </div>
      
    </div>
    </PortalProvider>
  )
}

export default Board