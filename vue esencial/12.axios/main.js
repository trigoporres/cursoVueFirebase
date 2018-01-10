//de esta manera se puede seguir utilizando $http con axios, importante cambiar body por data
Vue.prototype.$http = axios

new Vue({
  el: 'main',
  mounted(){
    this.cargarPersonas()
  },

  data: {
    personas: []
  },
  // api que devuelve users https://randomuser.me/
  methods: {
    //vue resource
    cargarPersonas(){
      this.$http.get('https://randomuser.me/api/?results=500')
        .then((res) => this.personas = res.data.results)
    }

    //axios
    // cargarPersonas(){
    //   axios.get('https://randomuser.me/api/?results=500')
    //     .then((res) => this.personas = res.data.results)
    // }
  }
});
