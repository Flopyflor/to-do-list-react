# Historial de desarrollo

1. Se especificó la versión de **Node** utilizando `v18`.
1. Se instaló **ESLint** y se configuraron las reglas básicas para el proyecto.
1. Se creó script de **npm** para revisar errores de **ESLint** (`npm run eslint`).
1. Se creó script de **npm** para arreglar errores de **ESLint** (`npm run eslint-fix`).
1. Se agregó la extensión `.jsx` a los scripts de **ESLint**.
1. Se corrigieron los archivos del proyecto en base a las reglas de **ESLint**.
1. Se modificaron los nombres de carpetas y archivos de los componentes.
1. Se agregó **Husky** para utilizar los *git hooks*.
1. Se agregó el Git Hook `post-merge` para ejecutar `npm install` luego de hacer pull en una rama.
1. Se agregó el Git Hook `post-checkout` para ejecutar `npm install` luego de cambiar a otra rama.
1. Se agregó el archivo `.env` al archivo `.gitignore`.
1. Se añadió instrucciones al archivo `README.md` para instalar `husky` para correr los git hooks.
1. Se modificó el archivo `README.md` para cambiar los nombres de categorias.
1. Se cambiaron los nombres de categorias a sus contrapartes en ingles.
1. Se añadió el módulo `axios` para poder realizar peticiones HTTP hacia el *back-end*.
1. Se crearon los contextos `NewTaskContext` y `TasksContext` para obtener los estados de la creación de tareas y de tareas existentes, respectivamente. Estos definen los `states`.
1. Se crearon los hooks `useNewTaskForm` y `useTasks` para manejar los estados de la creación de tareas y manejo de estados existentes, respectivamente. Estos manipulan los `states`.
1. Se estandarizaron los nombres de los componentes a usar el prefijo `NewTask` para todo componente que tenga que ver con la creación de tareas.
1. Se crearon las llamadas correspondientes al `back-end` para poder vincular y sincronizar la aplicación correctamente.
1. Se implementó la misma estructura de tareas que el *back-end*.
1. Se actualizaron las dependencias para arreglar un problema de seguridad alto en una de las dependencias.
