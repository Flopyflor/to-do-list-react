import React, {useContext} from 'react';
import styles from './NewTaskModal.css';
import PropTypes from 'prop-types';
import { NewTaskContext } from '../../Contexts/NewTaskContext';
import useNewTaskForm from '../../hooks/useNewTaskForm';

//Portal que muestra, en este caso, el formulario para agregar una nueva tarea.

const NewTaskModal = ({ children }) => {
    const { isModalVisible } = useContext(NewTaskContext);
    const { closeModal } = useNewTaskForm();

    return (
        <>
            {isModalVisible && (
                <div id={styles.portalBackground}> 
                    <div id={styles.portalContent}>
                        <button id={styles.portalBtnClose} onClick={closeModal}>X</button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

NewTaskModal.propTypes = {
    children: PropTypes.node.isRequired
};

export default NewTaskModal;
