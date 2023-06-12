import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const TasksContext = createContext();
const { Provider } = TasksContext;

const TasksContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const value = {
        tasks,
        setTasks
    };

    return (
        <Provider value={value}>
            {children}
        </Provider>
    );
};

TasksContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export {
    TasksContext,
    TasksContextProvider
};
