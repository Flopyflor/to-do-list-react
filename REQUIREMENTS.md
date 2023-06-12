# Proyecto de Lista de tareas

## Vista principal

- Se listan todas las tareas creadas. Cada tarea muestra su categoría, si está completa o no y un botón para borrar la misma.
- Al hacer click en el título se muestran los detalles de la tarea. Aquí abre una nueva ventana (vista de tarea).
- Debe haber un filtro arriba de la lista que permita filtrar por categoría.

## Crear una tarea

- Muestra un modal que permite ingresar título de la tarea, categoría (en forma de color), una fecha límite y una descripción.
- Los datos obligatorios para crear una tarea son: título, categoría y fecha límite. Categorías son color YELLOW, RED y GREEN. La fecha límite es un objeto Date convertido a string que se obtiene como `fecha.toISOString()`.
- Los datos opcionales son la descripción de la tarea.
- Al hacer click en el botón "Agregar tarea" se cierra el modal y se agrega la nueva tarea a la lista (vista principal).

## Completar una tarea

- Al hacer click en el checkbox de una tarea en la vista principal se marca la tarea y se tacha el título.
- Al hacer click en el checkbox de una tarea ya completada la vuelve a su estado original.

## Borrar una tarea

- Al presionar el botón "Borrar" de una tarea en la lista principal se elimina la tarea de la lista y no se puede recuperar.

## Ver una tarea

- Al hacer click en el título de una tarea se abre un modal que muestra los datos de la tarea que son: título, descripción, categoría, fecha de finalización y si esta completa.

## Estructura de una tarea

```json
{
  "id": "uuid generado en mongodb",
  "title": "Una tarea a realizar",
  "description": "Con mucho esfuerzo",
  "category": "AMARILLO" | "VERDE" | "ROJO",
  "endDate": "2011-10-05T14:48:00.000Z",
  "isCompleted": true | false
}
```

> Sólo se puede cambiar el campo `isCompleted`. Los demás no se pueden modificar una vez creada la tarea.
