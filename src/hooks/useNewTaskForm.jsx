import { useContext } from 'react';
import {sanitize} from '../utils/sanitize.js';
import { NewTaskContext } from '../Contexts/NewTaskContext.jsx';
import { DIFFICULTY } from '../constants/Categorias';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const useNewTaskForm = () => {
    const {
        setTask,
        setIsModalVisible
    } = useContext(NewTaskContext);

    const sendToDatabase = async (newTask) => {
        for (const property in newTask) {
            console.log(property, typeof newTask[property]);
            if (typeof newTask[property] === 'string') {
                newTask[property] = sanitize(newTask[property]);
            }
        }

        return await axios.post(`${baseUrl}/tasks`, newTask);
    };
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        clearTask();
        setIsModalVisible(false);
    };

    const clearTask = () => {
        setTask({
            'title': '',
            'description': '',
            'category': DIFFICULTY.green,
            'endDate': ''
        });
    };

    const validateTask = (task) =>{
        return Boolean(task.title && task.endDate);
    };

    return {
        clearTask,
        showModal,
        closeModal,
        sendToDatabase,
        validateTask
    };
};

export default useNewTaskForm;
