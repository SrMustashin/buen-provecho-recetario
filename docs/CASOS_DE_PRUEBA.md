# Casos de prueba — Buen Provecho

**Ambiente:** pruebas de lógica con Node.js 22; pruebas de interfaz disponibles con React 18, Vitest 2, React Testing Library y jsdom.  
**Tipo:** pruebas funcionales de interfaz automatizadas.  
**Archivos ejecutables:** `tests/recipes.node.test.mjs` (sin dependencias) y `src/App.test.jsx` (interfaz).  
**Comandos:** `npm run test:logic` para lógica y `npm test` para interfaz (después de `npm install`).

## CP-01 — Búsqueda por ingrediente

| Campo | Descripción |
|---|---|
| Historia relacionada | HU-02 |
| Objetivo | Verificar que el buscador filtre las recetas utilizando un ingrediente. |
| Precondición | Abrir la pantalla principal con las 2 recetas visibles y búsqueda vacía. |
| Datos de entrada | `chipotle` |
| Pasos | 1. Verificar dos tarjetas. 2. Escribir «chipotle» en «Buscar recetas». 3. Contar tarjetas y revisar el título. |
| Resultado esperado | Aparece 1 tarjeta: «Tacos de pollo al chipotle». «Pasta cremosa al pesto» no aparece. |
| Resultado obtenido | **APROBADO**, verificado mediante `npm run test:logic`. |
| Estado | **PASS** |

## CP-02 — Ajuste proporcional de porciones

| Campo | Descripción |
|---|---|
| Historia relacionada | HU-04 |
| Objetivo | Verificar el cálculo automático de cantidades cuando se cambia el número de porciones. |
| Precondición | Abrir el detalle de «Pasta cremosa al pesto» con 2 porciones iniciales. |
| Datos de entrada | Pulsar dos veces «Aumentar porciones»; de 2 a 4. |
| Pasos | 1. Abrir «Ver receta». 2. Confirmar 2 porciones y 200 g de pasta. 3. Pulsar + dos veces. 4. Revisar cantidades. |
| Resultado esperado | El contador indica 4 porciones, la pasta cambia a 400 g y el pesto a 120 g. |
| Resultado obtenido | **APROBADO**, verificado mediante `npm run test:logic`. |
| Estado | **PASS** |

## Evidencia y reproducibilidad

Ejecutar `npm run test:logic` para comprobar las 2 reglas del negocio (sin instalar paquetes). Para probar también la interfaz, ejecutar `npm install && npm test` en una computadora con acceso a npm. Si se modifica el proyecto, volver a correr ambos comandos antes de entregar.
