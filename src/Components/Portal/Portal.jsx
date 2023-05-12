import React from 'react'
import styles from './portal.module.css'

//Portal que muestra, en este caso, el formulario para agregar una nueva tarea.

export const Portal = ({setClosed, children}) => {

    return (
        <>
            <div id={styles.portalBackground}> 
                <div id={styles.portalContent}>
                    <button id={styles.portalBtnClose} onClick={setClosed}>X</button>
                    {children}
                </div>
            </div>
        </>
    )
}