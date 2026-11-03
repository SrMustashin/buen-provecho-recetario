# Control de versiones con Git y GitHub

Desde la carpeta `recetario-react`:

```bash
npm install
npm test
npm run build
git init
git add .
git commit -m "feat: recetario React con 2 recetas, casos de prueba e historias"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

**Importante:** `git remote add origin ...` requiere que hayas creado un repositorio vacío en GitHub y sustituyas `TU_USUARIO` y `TU_REPOSITORIO` por los valores reales. La autenticación puede solicitar credenciales desde Git Credential Manager o un token.

Para subir cambios posteriores:

```bash
git status
git add .
git commit -m "docs: actualizar casos de prueba y presentación"
git push
```

Si vas a trabajar en un **repositorio existente**, primero ejecuta `git clone URL_DEL_REPOSITORIO`, coloca los archivos dentro de esa carpeta y omite `git init` y `git remote add origin`.

**Evidencia solicitada:** al exponer, muestra la URL de tu repositorio, el último commit y la ejecución de `npm test`.
