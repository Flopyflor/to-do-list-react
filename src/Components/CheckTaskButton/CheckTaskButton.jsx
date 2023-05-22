import React from 'react';
import './CheckTaskButton.css';

const CheckTaskButton = () => {
    const handleChecked = ( event ) => {
        const { checked } = event.target;
        console.info(`La tarea se realizó con éxito. Valor: ${checked}`);
    };

    return (
        <div>
            <label className="container">
                <input type="checkbox" onChange={handleChecked} />
                <div className="checkmark"></div>
            </label>
        </div>
    );
};

export default CheckTaskButton;
