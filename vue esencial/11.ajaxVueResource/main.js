const vm1 = new Vue({
  el: 'main',
  mounted(){
    this.cargarPersonas()
  },

  data: {
    personas: []
  },
  // api que devuelve users https://randomuser.me/
  methods: {
    cargarPersonas(){
      this.$http.get('https://randomuser.me/api/?results=500')
        .then((res) => this.personas = res.body.results)
    }
  }
});
