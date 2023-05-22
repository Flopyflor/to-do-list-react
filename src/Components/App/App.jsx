import React, { useState, useEffect } from 'react';
import './App.css';
import TaskBoard from '../TaskBoard/TaskBoard';

const tasksFromDb = [
    {
        'id': '2987643782873428734872yt87',
        'title': 'Una tarea a realizar',
        'description': 'Con mucho esfuerzo',
        'category': 'AMARILLO',
        'endDate': '2011-10-05T14:48:00.000Z',
        'isCompleted':  false
    },
    {
        'id': '3456346523465erfdgege',
        'title': 'Otra tarea a realizar',
        'description': 'Con poquito esfuerzo',
        'category': 'VERDE',
        'endDate': '2011-10-05T14:48:00.000Z',
        'isCompleted':  true
    }
];

const App = () => {
    const [tasks, setTasks] = useState(tasksFromDb);

    const changeTaskStatus = ( task, isCompleted ) => {
        const newTasks = [ ...tasks ];

        const taskToChange = newTasks.find(item => item.id === task.id);
        taskToChange.isCompleted = isCompleted;

        setTasks(newTasks);
    };

    const deleteTask = ( task ) => {
        const newTasks = tasks.toSpliced(tasks.indexOf(task), 1);

        setTasks(newTasks);
    };

    return (
        <TaskBoard
            tasks={tasks}
            changeTaskStatus={changeTaskStatus}
            deleteTask={deleteTask}
        />
    );
};

export default App;
