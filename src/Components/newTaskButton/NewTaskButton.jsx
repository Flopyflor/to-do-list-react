import React from 'react';
import './NewTaskButton.css';
import useNewTaskForm from '../../hooks/useNewTaskForm';

const NewTaskButton = () => {
    const { showModal } = useNewTaskForm();

    return (
        <div>
            <button onClick={showModal}> <span className="text">New task</span>
                <span className="blob"></span>
                <span className="blob"></span>
                <span className="blob"></span>
                <span className="blob"></span>
            </button>
        </div>
    );
};

export default NewTaskButton;
