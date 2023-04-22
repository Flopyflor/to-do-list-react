import React, { useState } from 'react'
import "./AddTaskForm.module.css"
import { postTasks } from '../../../service/controller/tasksController';

const CATEGORIAS = {
  rojo: "rojo",
  amarillo: "amarillo",
  verde: "verde"
}

function AddTaskForm() {

  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    fechaLimite: "",
    categoria: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //TODO: agregar validaciones

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //TODO: agregar validaciones

    // Hacer que esto funcione - coordinar con grupo de endpoints
    //const res = postTasks(form);

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
      <select name="categoria" id="categoria" onChange={handleChange}>
        <option value={CATEGORIAS.rojo}>🟥</option>
        <option value={CATEGORIAS.amarillo}>🟨</option>
        <option value={CATEGORIAS.verde}>🟩</option>
      </select>
      <br />

      <label htmlFor="fechaLimite">Fecha límite: </label>
      <input id="fechaLimite" name='fechaLimite' type="date" value={form.fechaLimite} onChange={handleChange} />
      <br />

      <input type="submit" value="Agregar Tarea" />
    </form>
  )
}

export default AddTaskForm