import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cantidad: 0,
    },
    mutations: {
        aumentar: (state, cantidad) => state.cantidad += cantidad,
        reducir: (state, cantidad) => state.cantidad -=cantidad,
    },
    //action lanza una mutacion solo cuando se resuelve facorablemente
    actions: {
        aumentarAsync: (context, cantidad) => {
            setTimeout(() => context.commit('aumentar', cantidad), 2000);
        },
        reducirAsync: ({commit}, {cantidad}) => {
            setTimeout(() => commit('reducir', cantidad), 2000);
        }
    }
});
