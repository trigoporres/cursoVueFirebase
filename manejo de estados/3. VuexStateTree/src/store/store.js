import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
       nombre: 'Santiago',
       apellidos: 'Trigo Porres',
       profesion: 'Developer',
       ciudad: 'Madrid'
   }
});
