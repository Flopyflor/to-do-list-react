import React from 'react';
import './TaskBoard.css';

import TaskCard from '../TaskCard/TaskCard';
import NewTaskButton from '../NewTaskButton/NewTaskButton';

// TODO: aquí generar método addNewTask y pasarlo al componente NewTaskButton
// mediante props para poder actualizar la lista de este componente
// al crear una nueva tarea.

const TaskBoard = () => {
    return (
        <div className="board">
            <div className="header">
                <h2>Lista de Tareas</h2>
                <div>
                    <NewTaskButton />
                </div>
            </div>
      
            <div className="board-items">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    );
};

export default TaskBoard;
