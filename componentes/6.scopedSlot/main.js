Vue.component('mis-tareas', {
  props: ['listado'],
  template: `#mis-tareas-template`
});

new Vue({ 
  el: 'main',
  data: {
    tareas:[
      {titulo: 'salir a correr'},
      {titulo: 'aprender'},
      {titulo: 'hacer la comprar'},
      {titulo: 'leer libros'},
    ]
  }
});


