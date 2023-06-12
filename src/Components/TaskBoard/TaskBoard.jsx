import React from 'react';
import './TaskBoard.css';

import { NewTaskContextProvider } from '../../Contexts/NewTaskContext';
import NewTaskModal from '../NewTaskModal/NewTaskModal';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

import NewTaskButton from '../NewTaskButton/NewTaskButton';
import TasksList from '../TasksList/TasksList';
import { TasksContextProvider } from '../../Contexts/TasksContext';

const TaskBoard = () => {
    return (
        <TasksContextProvider>
            <div className="board">
                <div className="header">
                    <h2>Lista de Tareas</h2>
                    <div>
                        <NewTaskContextProvider>
                            <NewTaskButton />
                            <NewTaskModal>
                                <NewTaskForm />
                            </NewTaskModal>
                        </NewTaskContextProvider>
                    </div>
                </div>
        
                <TasksList />
            </div>
        </TasksContextProvider>
    );
};

export default TaskBoard;
