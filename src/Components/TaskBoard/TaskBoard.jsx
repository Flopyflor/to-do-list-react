import React from 'react';
import PropTypes from 'prop-types';
import './TaskBoard.css';

import TaskCard from '../TaskCard/TaskCard';
import NewTaskButton from '../NewTaskButton/NewTaskButton';

// TODO: aquí generar método addNewTask y pasarlo al componente NewTaskButton
// mediante props para poder actualizar la lista de este componente
// al crear una nueva tarea.

const TaskBoard = ( { tasks, changeTaskStatus, deleteTask } ) => {
    return (
        <div className="board">
            <div className="header">
                <h2>Lista de Tareas</h2>
                <div>
                    <NewTaskButton />
                </div>
            </div>
      
            <div className="board-items">
                {tasks.length ? tasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        changeTaskStatus={changeTaskStatus}
                        deleteTask={deleteTask}
                    />
                )) : 'No hay tareas en la lista.'}
            </div>
        </div>
    );
};

TaskBoard.propTypes = {
    changeTaskStatus: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
};

export default TaskBoard;
