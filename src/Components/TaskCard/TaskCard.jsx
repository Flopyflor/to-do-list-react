import React from 'react';
import './TaskCard.css';
import CheckTaskButton from '../CheckTaskButton/CheckTaskButton';
import DeleteTaskButton from '../DeleteTaskButton/DeleteTaskButton';
import PropTypes from 'prop-types';
import useTasks from '../../hooks/useTasks';

const TaskCard = ( { task } ) => {
    const { deleteTask, changeTaskStatus } = useTasks();

    return (
        <div>
            <div className="card">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="card-inner">
                    <div className="task">
                        <h3>{task.title}</h3>
                    </div>
                    <div className="delete-button">
                        <DeleteTaskButton
                            task={task}
                            deleteTask={deleteTask}
                        />
                    </div>
                    <div className="check">
                        <CheckTaskButton
                            task={task}
                            changeTaskStatus={changeTaskStatus}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

TaskCard.propTypes = {
    task: PropTypes.object.isRequired
};

export default TaskCard;
