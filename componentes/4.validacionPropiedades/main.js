Vue.component('candidato', {
  // props: ['nombre', 'correoe', 'imagen'],
  props: {
    nombre: {
      type: [String, Array], // puede haber varios tipos, si queremos poner todos los tipos seria null
      required: true,
    },
    correoe: {
      type: String,
      default: 'santiagotrigoporres@gmail.com'
    },
    imagen: String,
    location: {
      type: Object,
      default(){
        return{
          ciudad: 'Madrid'
        }
      }
    },
  },
  template: `#candidato-template`,
})

new Vue({ 
  el: 'main',
  mounted() {
    this.obtenerCandidatos();
  },
  data: {
    candidatos: []
  },
  methods: {
    obtenerCandidatos(){
      axios.get('https://randomuser.me/api/?results=100')
        .then((res) => {
          this.candidatos = res.data.results;
        })
    }
  }
  
});


