import React from 'react';
import './addTaskForm.css';

const AddTaskForm = () => {

    const handleChange = (e) => {
        let { name, value } = e.target;
    }

    const CATEGORIAS = {
        rojo: "rojo",
        amarillo: "amarillo",
        verde: "verde"
    }


  return (
    <div>
        <div className="card">
            <div className="card2">
                <form className="task-form">
                    <p id="heading">New Task</p>
                    <div className="field">
                       
                        <input type="text" className="input-field" placeholder="Task" autocomplete="off"/>
                    </div>
                    <div className="field">
                        <label htmlFor="EndDate" className='label'>End Date</label>
                        <input type="date" className="input-field" placeholder="End date" id='EndDate'/>
                        
                    </div>
                    <div className="difficulty">
                    <label htmlFor="Difficulty">Difficulty </label>
                        <select name="Difficulty" onChange={handleChange} defaultValue={CATEGORIAS.verde}>
                            <option value={CATEGORIAS.rojo}>🟥</option>
                            <option value={CATEGORIAS.amarillo}>🟨</option>
                            <option value={CATEGORIAS.verde}>🟩</option>
                        </select>
                    </div>
                    <div className="btn">
                        
                        <button className="button2">Add</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddTaskForm