import React, { useState, useEffect, useContext } from 'react';
import { TasksContext } from '../../Contexts/TasksContext';
import TaskCard from '../TaskCard/TaskCard';
import useTasks from '../../hooks/useTasks';

const TasksList = () => {
    const { tasks } = useContext(TasksContext);
    const { getTasks } = useTasks();
    const [tasksList, setTasksList] = useState(tasks);

    useEffect(() => {
        getTasks();
    }, []);

    useEffect(() => {
        setTasksList(tasks);
    }, [tasks]);

    return (
        <div className="board-items">
            {tasks.length ? tasksList.map(task => (
                <TaskCard
                    key={task._id}
                    task={task}
                />
            )) : 'No hay tareas en la lista.'}
        </div>
    );
};

export default TasksList;
