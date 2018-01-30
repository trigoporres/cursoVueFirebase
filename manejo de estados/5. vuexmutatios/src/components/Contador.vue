<template>
    <section>
        <h1>Cantidad: {{ cantidad }}</h1>
        <button @click="aumentar">Aumentar</button>
        <button @click="reducir">Reducir</button>
    </section>
</template>
<script>
    import {mapState, mapMutations} from 'vuex';
    // mapMutations accede a store y despues a las mutaciones de este
    export default {
        computed: mapState(['cantidad']),
        methods: mapMutations(['aumentar', 'reducir']),
/*        
        metodo para aumentar y reducir contador
        methods: {
            aumentar() {
                this.$store.state.cantidad++;
                //invoca a store con el metodo commit
                this.$store.commit('aumentar');
            },
            reducir() {
                this.$store.state.cantidad--;
                this.$store.commit('reducir');
            }
        }*/
    }
</script>