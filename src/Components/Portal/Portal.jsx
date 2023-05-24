import React, {useContext} from 'react';
import styles from './portal.module.css';
import PropTypes from 'prop-types';
import {PortalContext} from '../../Contexts/PortalContext';

//Portal que muestra, en este caso, el formulario para agregar una nueva tarea.

const Portal = ({children}) => {

    const {isPortalVisible, closePortal} = useContext(PortalContext);

    return (
        <> {isPortalVisible && (
            <div id={styles.portalBackground}> 
                <div id={styles.portalContent}>
                    <button id={styles.portalBtnClose} onClick={closePortal}>X</button>
                    {children}
                </div>
            </div>
        )}
        </>
    );
};

Portal.propTypes = {
    children: PropTypes.array.isRequired
};

export default Portal;
