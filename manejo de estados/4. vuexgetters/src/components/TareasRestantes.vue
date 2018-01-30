<template>
    <h1>{{tareasCompletadas}} tareas completadas.</h1>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default {
/*      Seria la manera mas larga y complicada de mantener para decir cantidad de tareas completadas
        computed: {
            tareasCompletadas() {
                    return this.$store.state.tareas.filter((tarea) => {
                    return tarea.completado;
                }).length;

                return this.$store.getters.tareasCompletadas;
            }
        }*/
        //acceso a getters en store, es posible hacerlo como arriba, pero es buena practica hacerlo con mapGetter
        computed: mapGetters(['tareasCompletadas'])
    }
</script>