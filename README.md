# Buen Provecho 🍽️ — Recetario con React

Aplicación web de recetas desarrollada como proyecto escolar con **React + Vite**. Contiene dos recetas estáticas, diseño adaptable a móvil y escritorio e interacciones sin base de datos.

## Funcionalidades

- 2 recetas: **Pasta cremosa al pesto** y **Tacos de pollo al chipotle**.
- Buscador por nombre, categoría o ingredientes.
- Filtros de recetas rápidas y favoritas.
- Vista detallada con ingredientes, cantidades ajustables por porciones y preparación paso a paso.
- Lista de ingredientes marcada y barra de progreso de los pasos.
- Diseño responsive, etiquetas accesibles y arte SVG local (no depende de imágenes externas).
- Los datos de las recetas están en `src/data/recipes.js`. No hay API ni base de datos.

## Requisitos

Node.js 18 o superior y npm.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre la URL local mostrada por Vite (habitualmente http://localhost:5173).

## Ejecutar los 2 casos de prueba

```bash
npm test
```

Sin instalar dependencias también puedes verificar las reglas de negocio:

```bash
npm run test:logic
```

El proyecto incluye **Vitest + React Testing Library**:

- **CP-01:** buscar `chipotle` filtra los resultados hasta mostrar solo los tacos.
- **CP-02:** cambiar de 2 a 4 porciones de pasta duplica de 200 g a 400 g y de 60 g a 120 g.

Los resultados esperados, pasos y evidencias están en `docs/CASOS_DE_PRUEBA.md`.

## Generar versión para entrega

```bash
npm run build
npm run preview
```

## Estructura

```text
src/
  components/FoodArt.jsx  # Ilustraciones locales
  data/recipes.js         # Dos recetas estáticas
  App.jsx                 # Vistas e interacciones
  App.test.jsx            # Dos pruebas de interfaz (Vitest)
  styles.css              # UX/UI responsive
  main.jsx                # Entrada React
tests/
  recipes.node.test.mjs   # Dos pruebas de lógica (Node.js)
docs/
  HISTORIAS_DE_USUARIO.md
  CASOS_DE_PRUEBA.md
  COMANDOS_GIT.md
```

## Subir a GitHub

Para un repositorio nuevo, crea primero el repositorio vacío en GitHub y usa:

```bash
git init
git add .
git commit -m "feat: recetario React con pruebas y documentación"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

Reemplaza `TU_USUARIO/TU_REPOSITORIO`. No subas `node_modules` (se excluye mediante `.gitignore`). Si el repositorio ya existe, clónalo y copia el proyecto antes de confirmar cambios, o consulta `docs/COMANDOS_GIT.md`.
