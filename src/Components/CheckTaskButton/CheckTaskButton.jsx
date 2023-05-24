import React, { useState } from 'react';
import './CheckTaskButton.css';
import PropTypes from 'prop-types';

const CheckTaskButton = ( { task, changeTaskStatus } ) => {
    const [ isCompleted, setIsCompleted ] = useState(task.isCompleted);

    const handleChecked = () => {
        const newCheckState = !isCompleted;

        setIsCompleted(newCheckState);
        changeTaskStatus(task, newCheckState);
    };

    return (
        <div>
            <label className="container">
                <input type="checkbox" onChange={handleChecked} checked={isCompleted}/>
                <div className="checkmark"></div>
            </label>
        </div>
    );
};

CheckTaskButton.propTypes = {
    changeTaskStatus: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
};

export default CheckTaskButton;
