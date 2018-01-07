const vm = new Vue({
  el: 'main',
  data: {
    nuevaTarea: null,
    tareas: [
      'aprender vue',
      'hacer la compra',
      'leer',
    ]
  },
  methods: {
    agregarTarea(){
      // this hace referencia a la instancia vue
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea = null;
    }
  },
});

//vanilla js

// function agregarTarea(){
//   const input = document.querySelector('input[type=text]');
//   vm.tareas.unshift(input.value);
//   input.value = '';
// }
