import React from 'react';
import './DeleteTaskButton.css';
import PropTypes from 'prop-types';

const DeleteTaskButton = ( { task, deleteTask } ) => {
    const handleClick = () => {
        deleteTask(task);
    };

    return (
        <div>
            <a href="#" className="btn" onClick={handleClick}>Borrar</a>
        </div>
    );
};

DeleteTaskButton.propTypes = {
    deleteTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
};

export default DeleteTaskButton;
