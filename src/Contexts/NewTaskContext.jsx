import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { DIFFICULTY } from '../constants/Categorias';

const NewTaskContext = createContext();
const { Provider } = NewTaskContext;

const NewTaskContextProvider = ({ children }) => {
    const [task, setTask] = useState({
        'title': '',
        'description': '',
        'category': DIFFICULTY.green,
        'endDate': ''
    });
    const [isReadyToSend, setIsReadyToSend] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const value = {
        task, setTask,
        isReadyToSend, setIsReadyToSend,
        isModalVisible, setIsModalVisible
    };
  
    return (
        <Provider value={ value }>
            {children}
        </Provider>
    );
};

NewTaskContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export {
    NewTaskContext,
    NewTaskContextProvider
};
