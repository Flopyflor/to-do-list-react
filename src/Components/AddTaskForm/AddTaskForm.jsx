/*
NOTAS:
Style: 
- creé un module, porque creí que por ahí era conveniente. Son libres de borrarlo o editarlo.
- Hay una alerta que aparece cuando la fecha límite elegida está en el pasado. Es un span con la clase 'warning'.

Validaciones:
- La fecha límite debe estar en el futuro. Validación dinámica con un span que se hace visible.
- Si al enviar el título está vacío hay una alert.
- Los inputs de texto son sanitizados con la función 'sanitize'.
- La categoría no puede estar vacía.

TODO:
- Enviar la información al backend.

Para mejorar:
- la información de las categorías se declaran como constantes al principio de este código. Considerando 
que son las mismas que se usan al filtrar, quizá sería conveniente que se obtubieran de otro lado. Quizá como 
prop? Coordinar.

*/


import React, { useState } from 'react'
import "./AddTaskForm.module.css"
import { postTasks } from '../../../service/controller/tasksController';

const CATEGORIAS = {
  rojo: "rojo",
  amarillo: "amarillo",
  verde: "verde"
}

function sanitize(string) {
  //agregar sustitutos a caracteres especiales acá
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
      "`": "&grave;",
      "\\": "&#92;"
  };
  const reg = /[&<>"'/`\\]/ig; //agregar caracteres que hay que reemplazar acá
  string = string.replace(reg, (match)=>(map[match]));
  return string.trim();
}

function AddTaskForm() {

  //este en particular lo defino como variable porque necesito referenciarlo en el handleChange
  const fechaLimite = "fechaLimite";

  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    [fechaLimite]: "",
    categoria: ""
  });

  const [fechaWarning, setFechaWarning] = useState(false);

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

    if(form.titulo == ""){
      alert("El título no puede estar vacío");
      return
    }

    form.titulo = sanitize(form.titulo);
    form.descripcion = sanitize(form.descripcion);

    //TODO: Hacer que esto funcione - coordinar con grupo de endpoints
    //const res = postTasks(form);
    console.log(form);
  }

  // La Vista -----------
  return (
    <form action="" onSubmit={handleSubmit}>

      <label htmlFor="titulo">Título: </label>
      <input id="titulo" name='titulo' type="text" value={form.titulo} onChange={handleChange} />
      <br />

      <label htmlFor="descripcion">Descripción: </label>
      <input id="descripcion" name='descripcion' type="text" value={form.descripcion} onChange={handleChange} />
      <br />

      <label htmlFor="categoria">Categoría: </label>
      <select name="categoria" id="categoria" onChange={handleChange} defaultValue={CATEGORIAS.verde}>
        <option value={CATEGORIAS.rojo}>🟥</option>
        <option value={CATEGORIAS.amarillo}>🟨</option>
        <option value={CATEGORIAS.verde}>🟩</option>
      </select>
      <br />

      <label htmlFor="fechaLimite">Fecha límite: </label>
      <input id="fechaLimite" name='fechaLimite' type="date" value={form.fechaLimite} onChange={handleChange} />
      <span className='warning' hidden={!fechaWarning}>La fecha límite debe encontrarse en el futuro.</span>
      <br />

      <input type="submit" value="Agregar Tarea" />
    </form>
  )
}

export default AddTaskForm