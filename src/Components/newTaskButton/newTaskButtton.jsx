import React, { useContext } from 'react';
import './newTaskButton.css';
import {PortalContext} from '../../Contexts/PortalContext';

const NewTaskButtton = () => {
    const { showPortal } = useContext(PortalContext);

    return (
        <>
            <div>
                <button onClick={showPortal}> <span className="text">New task</span>
                    <span className="blob"></span>
                    <span className="blob"></span>
                    <span className="blob"></span>
                    <span className="blob"></span>
                </button>
            </div>
        </>
    );
};

export default NewTaskButtton;
