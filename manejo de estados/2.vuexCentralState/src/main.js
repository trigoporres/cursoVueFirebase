import Vue from 'vue'
import App from './App.vue'

//importamos store donde usamos vuex
import {store} from './store/store'

//de esta manera la instancia principal de vue ya puede usar nuestro almacen "store"
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
