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
