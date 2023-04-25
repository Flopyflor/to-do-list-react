/*
NOTAS:
Style: 
- creé un module, porque creí que por ahí era conveniente. Son libres de borrarlo o editarlo.
- Hay una alerta que aparece cuando la fecha límite elegida está en el pasado. Es un span con la clase 'warning'.

Validaciones:
- La fecha límite debe estar en el futuro. Validación dinámica con un span que se hace visible.
- No se puede enviar si el título o la fecha están vacíos. El botón explica porque en un hover.
- Los inputs de texto son sanitizados con la función 'sanitize'.
- La categoría no puede estar vacía.

TODO:
- Enviar la información al backend.
- Mandar tarea a View? - creé el espacio para la función pero si no sirve la sacan

Para mejorar:
- la información de las categorías se declaran como constantes al principio de este código. Considerando 
que son las mismas que se usan al filtrar, quizá sería conveniente que se obtubieran de otro lado. Quizá como 
prop? Coordinar.
- Las opciones para categorías no se renderizan dinámicamente porque usan emojis. Si se cambiaran las categorías
habría que cambiar el formulario a mano. No creo que valga la pena cambiarlo igual.
- La Fecha aparece en formato aaaa-mm-dd por default. Es decir, un string '2023-04-25'. Si conviene se puede cambiar.

*/
import React, { useState } from 'react'
import "./AddTaskForm.module.css"


// Consts ---------
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

//este en particular lo defino como variable porque necesito referenciarlo en el handleChange
const fechaLimite = "fechaLimite";

const formVacia = {
  titulo: "",
  descripcion: "",
  [fechaLimite]: "",
  categoria: ""
};


// La Lógica ------------
function AddTaskForm( {agregarNuevaTarea} ) {
  //Esta propiedad es opcional si decidimos que este form deba pasarle a la
  //vista la información de la nueva tarea, es como me imagino que podría ser.

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

  // La Vista -----------
  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="titulo">Título: </label>
      <input name='titulo' type="text" value={form.titulo} onChange={handleChange} />
      <br />

      <label htmlFor="descripcion">Descripción: </label>
      <input name='descripcion' type="text" value={form.descripcion} onChange={handleChange} />
      <br />

      <label htmlFor="categoria">Categoría: </label>
      <select name="categoria" onChange={handleChange} defaultValue={CATEGORIAS.verde}>
        <option value={CATEGORIAS.rojo}>🟥</option>
        <option value={CATEGORIAS.amarillo}>🟨</option>
        <option value={CATEGORIAS.verde}>🟩</option>
      </select>
      <br />

      <label htmlFor="fechaLimite">Fecha límite: </label>
      <input name='fechaLimite' type="date" value={form.fechaLimite} onChange={handleChange} />
      <span className='warning' hidden={!fechaWarning}>La fecha límite debe encontrarse en el futuro.</span>
      <br />

      <input 
      type="submit" 
      value="Agregar Tarea" 
      disabled={!sePuedeEnviar(form.titulo, form.fechaLimite)}
      title={sePuedeEnviar(form.titulo, form.fechaLimite) ? "" : "La tarea debe tener un título y una fecha límite."}
      />
    </form>
  )
}

export default AddTaskForm