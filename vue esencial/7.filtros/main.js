const vm = new Vue({
  el: 'main',
  data: {
    minimo: 5,
    busqueda: '',
    juegos: [
      {
        titulo: 'tetris',
        genero: 'arcade',
        puntuacion: 7,
      },
      {
        titulo: 'fifa',
        genero: 'sport',
        puntuacion: 10,
      },
      {
        titulo: 'final fantasy',
        genero: 'rpg',
        puntuacion: 9,
      }
    ]
  },
  methods: {

  },
  computed: {
    mejoresJuegos(){
      return this.juegos.filter((juego) => juego.puntuacion >= this.minimo );
    },
    buscarJuego(){
      return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda))
    },
  }
});
