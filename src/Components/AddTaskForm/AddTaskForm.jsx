import React, {useContext} from 'react';
import './AddTaskForm.css';
import useAddTaskForm from './useAddTaskForm';
import { PortalContext } from '../../Contexts/PortalContext';

// Consts ---------
import {DIFFICULTY} from '../../constants/Categorias';

const validateMyTaskForm = (form) =>{
    return Boolean(form.title && form.deadline);
};

const AddTaskForm = () => {

    //TODO: que pase en las props una función para agregar la tarea a la vista

    const {closePortal} = useContext(PortalContext);

    const {
        handleChange, 
        handleSubmit: handleSubmitBackend,
        form,
        readyToSend
    } = useAddTaskForm({isValidForm: validateMyTaskForm, extraOnSubmit: closePortal});

    const {title, description, deadline, difficulty} = form;    
    const NAMES = {
        TITLE: 'title',
        DESCRIPTION: 'description',
        DEADLINE: 'deadline',
        DIFFICULTY: 'difficulty'
    };

    const handleSubmit = (e) => {
        handleSubmitBackend(e);
        //TODO: usar la función que agrega la tarea a la vista
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
                            id='EndDate' name={NAMES.DEADLINE} onChange={handleChange} value={deadline} required/>
                    </div>
                </div>
                
                <div className='group'>
                    <label htmlFor="Difficulty">Difficulty </label>
                    <div className="field">
                        <select name={NAMES.DIFFICULTY} onChange={handleChange} defaultValue={DIFFICULTY.verde} value={difficulty} className="input-field">
                            <option value={DIFFICULTY.rojo}>🟥</option>
                            <option value={DIFFICULTY.amarillo}>🟨</option>
                            <option value={DIFFICULTY.verde}>🟩</option>
                        </select>
                    </div>
                </div>
                    
                <div className="btn">
                    <button className="button2" disabled={!readyToSend}>Add</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddTaskForm;
