import { useState } from 'react'
import {sanitize} from '../../utils/utils.js';

//este en particular lo defino como variable porque necesito referenciarlo en el handleChange
const fechaLimite = "fechaLimite";

const formVacia = {
  titulo: "",
  descripcion: "",
  [fechaLimite]: "",
  categoria: ""
};

export const useAddTaskForm = () => {
    const [form, setForm] = useState(formVacia);

    const [fechaWarning, setFechaWarning] = useState(false);

    const sePuedeEnviar = (titulo, fecha) => {
        if(titulo == "" || fecha == ""){
        return false
        }
        return true;
    }

    const handleChange = (e) => {
        let { name, value } = e.target;

        //me aseguro que la fecha límite esté en el futuro
        if (name == fechaLimite) {
        if (new Date(value) < new Date()){
            value = "";
            setFechaWarning(true);
        } else if (fechaWarning == true) {
            setFechaWarning(false);
        }
        }

        setForm({
        ...form,
        [name]: value
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        form.titulo = sanitize(form.titulo);
        form.descripcion = sanitize(form.descripcion);

        //TODO: Hacer que esto funcione - coordinar con grupo de endpoints
        //const nuevaTarea = agregarTarea(form);

        //TODO: Hacer que esto funcione - coordinar con View de Tareas
        //agregarNuevaTarea(nuevaTarea)

        setForm(formVacia);
    }

    return {
        handleChange,
        handleSubmit,
        form,
        fechaWarning,
        sePuedeEnviar
    }
}