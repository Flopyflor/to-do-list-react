import React, { useState, useEffect, useContext } from 'react';
import './NewTaskForm.css';
import useNewTaskForm from '../../hooks/useNewTaskForm';
import useTasks from '../../hooks/useTasks';
import { NewTaskContext } from '../../Contexts/NewTaskContext'; 
import { DIFFICULTY } from '../../constants/Categorias';

const NAMES = {
    TITLE: 'title',
    DESCRIPTION: 'description',
    ENDDATE: 'endDate',
    CATEGORY: 'category'
};

const AddTaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [endDate, setEndDate] = useState('');
    const [category, setCategory] = useState('');

    const { 
        task,
        setTask,
        isReadyToSend,
        setIsReadyToSend
    } = useContext(NewTaskContext);

    const {
        updateTasks
    } = useTasks();

    const {
        clearTask,
        sendToDatabase,
        validateTask
    } = useNewTaskForm();

    useEffect(() => {
        const { title, description, endDate, category } = task;

        console.log(task);

        setTitle(title);
        setDescription(description);
        setEndDate(endDate);
        setCategory(category);
    }, [task]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        const changedTask = {
            ...task,
            [name]: value
        };

        setTask(changedTask);

        setIsReadyToSend(
            validateTask(changedTask)
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if( !isReadyToSend ) {
            return;
        }

        const changedTask = {
            ...task
        };

        const response = await sendToDatabase(changedTask);
        const savedTask = response.data;
        console.log(savedTask);
        updateTasks(savedTask);
        clearTask();
    };

    return (
        <div>
            <form className="task-form" onSubmit={handleSubmit}>
                <p id="heading">New Task</p>
                <div className="field">
                    
                    <input type="text" required onChange={handleChange} className="input-field" placeholder="Task" autoComplete="off" name={NAMES.TITLE} value={title}/>
                </div>
                <div className="field">
                    <input type="text" onChange={handleChange} className="input-field"  placeholder="Description" autoComplete="off" name={NAMES.DESCRIPTION} value={description}/>
                </div>

                <div className='group'>
                    <label htmlFor="EndDate" className='label'>End Date</label>
                    <div className="field">
                        <input type="date" min={new Date().toISOString().slice(0, 10)}  className="input-field" placeholder="End date" 
                            name={NAMES.ENDDATE} onChange={handleChange} value={endDate} required/>
                    </div>
                </div>
                
                <div className='group'>
                    <label htmlFor="Difficulty">Difficulty </label>
                    <div className="field">
                        <select name={NAMES.CATEGORY} onChange={handleChange} value={category} className="input-field">
                            <option value={DIFFICULTY.red}>🟥</option>
                            <option value={DIFFICULTY.yellow}>🟨</option>
                            <option value={DIFFICULTY.green}>🟩</option>
                        </select>
                    </div>
                </div>
                    
                <div className="btn">
                    <button className="button2" disabled={!isReadyToSend}>Add</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddTaskForm;
