//importar vue y vuex(anteriormente hay que instalarlo con npm) y le decimos a la instancia vue que use vuex

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//exportamos la creacion del "almacen central" que creamos con el metodo Vuex.Store
// state asigna el estado de esa propiedad que queremos compartir
export const store = new Vuex.Store({
   state: {
       cantidad: 0,
   }
});