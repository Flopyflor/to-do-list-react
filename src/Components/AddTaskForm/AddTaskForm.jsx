import React from 'react';
import PropTypes from 'prop-types';
import './AddTaskForm.css';
import style from './AddTaskForm.css?inline';
import useAddTaskForm from './useAddTaskForm';

/*
NOTAS:
Validaciones:
- La fecha límite debe estar en el futuro. Se borra y el estilo y title cambian.
- No se puede enviar si el título o la fecha están vacíos. El botón explica por qué en un hover.
- Los inputs de texto son sanitizados con la función 'sanitize'.
- La categoría no puede estar vacía.

TODO:
- Enviar la información al backend.
- Mandar tarea a View? - creé el espacio para la función pero si no sirve la sacan

Para tener en cuenta:
- Las opciones para categorías no se renderizan dinámicamente porque usan emojis. Si se cambiaran las categorías
habría que cambiar el formulario a mano. No creo que valga la pena cambiarlo igual.
- La Fecha aparece en formato aaaa-mm-dd por default. Es decir, un string '2023-04-25'. Si conviene se import {useAddTaskForm} from './useAddTaskForm';
*/

// Consts ---------
import {CATEGORIAS} from '../../constants/Categorias';

// La Lógica ------------
function AddTaskForm( {alEnviar} ) {
    //Esta propiedad es opcional si decidimos que este form deba pasarle a la
    //vista la información de la nueva tarea, es como me imagino que podría ser.

    const {
        handleChange, 
        handleSubmit, 
        sePuedeEnviar,
        form,
        fechaWarning
    } = useAddTaskForm({ alEnviar });

    return (
        <form onSubmit={handleSubmit}>

            <p>
                <label htmlFor="titulo">Título: </label>
                <input id='titulo' name='titulo' type="text" value={form.titulo} onChange={handleChange} />
            </p>
      
            <p>
                <label htmlFor="categoria">Categoría: </label>
                <select id='categoria' name="categoria" onChange={handleChange} defaultValue={CATEGORIAS.verde}>
                    <option value={CATEGORIAS.rojo}>🟥</option>
                    <option value={CATEGORIAS.amarillo}>🟨</option>
                    <option value={CATEGORIAS.verde}>🟩</option>
                </select>

                <label htmlFor="fechaLimite">Fecha límite: </label>
                <input id='fechaLimite' name='fechaLimite' type="date" value={form.fechaLimite} onChange={handleChange} 
                    className={fechaWarning ? style.warning : ''}
                    title={fechaWarning? 'La fecha debe encontrarse en el futuro' : ''}
                />
            </p>

            <p>
                <label htmlFor="descripcion">Descripción: </label>
            </p>
            <textarea id='descripcion' name='descripcion' type="text" value={form.descripcion} onChange={handleChange}></textarea>

            <p>
                <input 
                    type="submit" 
                    value="Agregar Tarea" 
                    disabled={!sePuedeEnviar(form.titulo, form.fechaLimite)}
                    title={sePuedeEnviar(form.titulo, form.fechaLimite) ? '' : 'La tarea debe tener un título y una fecha límite.'}
                />
            </p>

        </form>
    );
}

AddTaskForm.propTypes = {
    alEnviar: PropTypes.func.isRequired
};

export default AddTaskForm;

