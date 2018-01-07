const vm1 = new Vue({
  el: 'main',
  data: {
    mensaje: 'Instancia Vue 1'
  },
  methods: {
    alReves(){
      this.mensaje = this.mensaje.split('').reverse().join('');
      vm2.mensaje = "hola desde tu vecino de arriba";
    }
  },
  computed: {
    mensajeMayusculas(){
      return this.mensaje.toUpperCase();
    }
  }
});

const vm2 = new Vue({
  el: '#app',
  data: {
    mensaje: 'Instancia Vue 2'
  },

});

//puede haber tantas instancias vue como quieras pero hay que guardarlas en alguna constante...
