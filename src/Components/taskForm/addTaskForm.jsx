import React from 'react'
import {useAddTaskForm} from './useAddTaskForm'
import './addTaskForm.css';

// Consts ---------
import {CATEGORIAS} from '../../global/Categorias';

const AddTaskForm = () => {

    const {
        handleChange, 
        handleSubmit,
        form
    } = useAddTaskForm()

    const {title, description, deadline, difficulty} = form;
    const NAMES = {
        TITLE: 'title',
        DESCRIPTION: 'description',
        DEADLINE: 'deadline',
        DIFFICULTY: 'difficulty'
    }

  return (
    <div>
        <form className="task-form" onSubmit={handleSubmit}>
            <p id="heading">New Task</p>
            <div className="field">
                
                <input type="text" required onChange={handleChange} className="input-field" placeholder="Task" autocomplete="off" name={NAMES.TITLE} value={title}/>
            </div>
            <div className="field">
                <input type="text" onChange={handleChange} className="input-field"  placeholder="Description" autocomplete="off" name={NAMES.DESCRIPTION} value={description}/>
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
                    <select name={NAMES.DIFFICULTY} onChange={handleChange} defaultValue={CATEGORIAS.verde} value={difficulty} className="input-field">
                        <option value={CATEGORIAS.rojo}>🟥</option>
                        <option value={CATEGORIAS.amarillo}>🟨</option>
                        <option value={CATEGORIAS.verde}>🟩</option>
                    </select>
                </div>
            </div>
                
            <div className="btn">
                <button className="button2">Add</button>
            </div>
            
        </form>
    </div>
  )
}

export default AddTaskForm