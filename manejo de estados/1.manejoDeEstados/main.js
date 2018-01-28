// se puede sacar fuera el objeto a una constante y pasarselo directamente al data de ambas instancias. de esta manera ambas instancias compartiran el mismo objeto pudiendo modificarlo y cambiaria en cada instancia que lo comparta
const compartido =  {
  usuario: {
      nombre: 'Juan Andrés',
  }
};

new Vue({
  el: '#app1',
  data: compartido,
});

new Vue({
  el: '#app2',
  data: compartido,
});

//esta es una posible manera de hacerlo que puede valer para app pequeñas pero a medida que van creciendo se hara dificil de mantener, para arreglar eso debemos usar VUEX.