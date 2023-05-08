import React from 'react';
import './TaskCard.css';
import CheckTaskButton from '../CheckTaskButton/CheckTaskButton';
import DeleteTaskButton from '../DeleteTaskButton/DeleteTaskButton';

const TaskCard = () => {
    return (
        <div>
            <div className="card">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="card-inner">
                    <div className="task">
                        <h3>Tarea</h3>
                    </div>
                    <div className="delete-button">
                        <DeleteTaskButton />
                    </div>
                    <div className="check">
                        <CheckTaskButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
