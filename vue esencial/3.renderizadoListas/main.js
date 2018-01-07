new Vue({
  el: 'main',
  data: {
    laborales: ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'],
    tareas: [
      {nombre: 'hacer la compra', prioridad: 'baja'},
      {nombre: 'aprender vue', prioridad: 'alta'},
      {nombre: 'hacer ejercicio', prioridad: 'alta'},
    ],
    persona: {
      nombre: 'Santiago',
      profesión: 'dev',
      ciudad: 'Madrid',
    },
  }
});
