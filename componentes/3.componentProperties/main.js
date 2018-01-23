Vue.component('autor', {
  props: ['nombre', 'edad'],
  mounted(){
    //las props son accesible desde this
    console.log(this.nombre),
    console.log(typeof this.edad)
  },
  template: `<div><h1> {{ nombre }}</h1> <button @click="cambiarProps">Cambiar Props</button></div>`,
  methods: {
    //el flow solo se debe cambiar de padre a hijo, si se hace al reves y luego se cambia el valor desde el padre el valor se sobrescribira y no se actializara
    cambiarProps() {
      this.nombre = this.nombre.toUpperCase();
    }
  }
})

new Vue({ 
  el: 'main',
  data: {
    autor: 'Santigo Trigo Porres'
  },
  
});


