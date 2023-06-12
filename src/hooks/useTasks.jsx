import { useContext } from 'react';
import { TasksContext } from '../Contexts/TasksContext';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const useTasks = () => {
    const { tasks, setTasks } = useContext(TasksContext);

    const changeTaskStatus = async ( task, isCompleted ) => {
        const newStatus = { isCompleted };
        await axios.patch(`${baseUrl}/tasks/${task._id}`, newStatus);

        getTasks();
    };

    const deleteTask = async ( task ) => {
        await axios.delete(`${baseUrl}/tasks/${task._id}`);
        const newTasks = tasks.toSpliced(tasks.indexOf(task), 1);

        setTasks(newTasks);
    };

    const updateTasks = ( task ) => {
        const newTasks = [
            ...tasks,
            task
        ];

        setTasks(newTasks);
    };

    const getTasks = async () => {
        const tasks = await axios.get(`${baseUrl}/tasks`);
        setTasks(tasks.data);
    };

    return {
        changeTaskStatus,
        deleteTask,
        updateTasks,
        getTasks
    };
};

export default useTasks;
