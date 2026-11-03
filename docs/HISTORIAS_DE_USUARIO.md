# Historias de usuario — Buen Provecho

**Visión:** como persona interesada en cocinar, quiero encontrar dos recetas sencillas y seguir instrucciones claras desde mi celular o computadora.

| ID | Historia de usuario | Criterios de aceptación | Prioridad |
|---|---|---|---|
| HU-01 | Como visitante, quiero ver las recetas disponibles para elegir qué cocinar. | La pantalla inicial muestra 2 tarjetas con nombre, duración, dificultad y botón «Ver receta». | Alta |
| HU-02 | Como visitante, quiero buscar por nombre o ingrediente para encontrar rápido una receta. | La búsqueda ignora mayúsculas; `chipotle` muestra únicamente la receta de tacos y se actualiza al teclear. | Alta |
| HU-03 | Como cocinero, quiero consultar ingredientes y pasos para preparar el plato sin confusiones. | Al abrir una tarjeta aparecen cantidades, instrucciones ordenadas, duración y consejo de cocina. | Alta |
| HU-04 | Como cocinero, quiero cambiar el número de porciones para adaptar las cantidades. | Los botones + y − cambian entre 1 y 12 porciones; cada ingrediente se recalcula proporcionalmente. | Alta |
| HU-05 | Como cocinero, quiero marcar ingredientes y pasos completados para no perder mi avance. | Los elementos se pueden marcar/desmarcar; el progreso alcanza el 100% al terminar todos los pasos. | Media |
| HU-06 | Como visitante, quiero guardar recetas favoritas para ubicarlas más fácilmente durante mi sesión. | El corazón añade o quita favoritos y el filtro «Favoritas» muestra solo esos elementos. | Media |
| HU-07 | Como visitante que usa celular, quiero una interfaz adaptable para leer y usar los controles cómodamente. | A 375 px la interfaz se muestra en una sola columna, sin desplazamiento horizontal y con botones operables. | Alta |

## Consideraciones de alcance

- Solo existen dos recetas precargadas en `src/data/recipes.js`.
- No hay inicio de sesión, base de datos ni conexión a servidor.
- Los favoritos se mantienen durante la sesión abierta en la aplicación; el avance de cada receta se reinicia al salir de su detalle. No se guardan en una cuenta ni base de datos.

## Priorización

Primero HU-01 a HU-04 y HU-07 (MVP). Después HU-05 y HU-06 para mejorar la experiencia de uso.
