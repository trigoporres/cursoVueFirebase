const vm1 = new Vue({
  el: 'main',
  data: {
    tareas: [
      { titulo: 'hacer la compra', completado: false},
      { titulo: 'aprender vue', completado: false},
      { titulo: 'hacer ejercicio', completado: false},
      { titulo: 'escribir', completado: false},
      { titulo: 'buscar trabajo', completado: false},
    ]
  },
  methods: {
    completarTarea(tarea){
      tarea.completado = !tarea.completado;
    }
  },
  computed: {
    tareasCompletadas(){
      return this.tareas.filter((tarea) => tarea.completado)
    }
  }
});
