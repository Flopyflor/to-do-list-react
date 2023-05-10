import React from 'react'
import styles from './portal.module.css'

//Portal que muestra, en este caso, el formulario para agregar una nueva tarea.

export const Portal = ({getClosed, children}) => {

    const closePortal = () => {
      getClosed();
    }

    return (
        <>
            <div id={styles.portalBackground}> 
                <div id={styles.portalContent}>
                    <button id={styles.portalBtnClose} onClick={closePortal}>X</button>
                    {children}
                </div>
            </div>
        </>
    )
}