const vm = new Vue({
  el: 'main',
  data: {
    mensaje: 'hola mundo mundial',
    nuevaTarea: null,
    tareas: [
      {
        titulo: 'aprender vue',
        prioridad: true,
        antiguedad: 10,
      },
      {
        titulo: 'Hacer la compra',
        prioridad: true,
        antiguedad: 18,
      },
      {
        titulo: 'publicar',
        prioridad: true,
        antiguedad: 10,
      },
    ]
  },
  methods: {
    agregarTarea(){
      // this hace referencia a la instancia vue
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea = null;
    }
  },
  computed: {
    mensajeAlReves(){
      return this.mensaje.split('').reverse().join('');
      },
    tareasConPrioridad(){
      return this.tareas.filter((tarea) => tarea.prioridad);
    },
    tareasPorAntiguedad(){
      return this.tareas.sort((a,b) => b.antiguedad - a.antiguedad);
    }
  }
});

// la gran diferencia entre un metodo y una propiedad computada es que el metodo se evalua cada vez que se llama, mientras que las propiedades computadas solo se evaluan cuando cambian sus dependencias. En el caso de que no hayan cambiado se usaria una version cacheada.
