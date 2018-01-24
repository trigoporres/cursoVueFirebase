Vue.component('usuarios', {
  template:``,
  mounted(){
    axios.get('https://randomuser.me/api/?results=500')
      .then((datos) => {
        
      })
  }
})

new Vue({
  el:newFunction(),
})


