Vue.component('mis-tareas', {
  props: ['tareas'],
  template: `<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>`
});

new Vue({
  el: 'main',
  mounted(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
         .then((res) => this.tareasAjax = res.data)
  },

  data: {
    tareasAjax: [],
    tareasLocales: [
      {title: 'hacer la compra'},
      {title: 'hacer la projecto'},
      {title: 'hacer la ejercicio'},
    ]
  },
  
});
