Vue.component('elegir-ganador', {
  props: ['listado'],
  //opcion 3 inline-template en tag 
  //opcion 2 desde script en index html
  //template: '#elegir-ganador-template',
  // en template solo puede haber un elmento principal por eso añadimos div que lo envuelva todo
  // opcion 1
  // template: `<div>
  //             <h1 v-if="ganador">El ganador es: {{ ganador }}</h1>
  //             <template v-else>
  //               <h1>Partcipantes</h1>
  //               <ul>
  //                 <li v-for="persona in listado">{{ persona }}</li>
  //               </ul>
  //             </template>
  //             <button @click="elegirGanador">Elegir ganador</button>
  //           </div>`,
  methods: {
    elegirGanador(){
      let cantidad = this.participantes.length;
      let indice = Math.floor(Math.random() * cantidad);
      this.ganador = this.participantes[indice-1];
    }
  },
  data() {
    return {
      ganador: false,
      participantes: this.listado,
    }
  }
});

new Vue({
  el: 'main',
  
  data: {
    personas: [
      'Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'
    ]
  },
  
});


