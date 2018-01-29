<template>
    <h1>Hola me llamo {{ nombre }} {{ apellidos}} y me dedico a {{profesion}}</h1>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
/*        computed: {
            nombre() {
                return this.$store.state.nombre;
            }
        }*/
/*        
        mapState provee acceso a la instancia de vuex para poder crear computed de manera mas sencilla
        computed: mapState({
            nombre: (state) => state.nombre,
            apellidos: (state) => state.apellidos,

        })*/
        computed: mapState(['nombre', 'apellidos', 'profesion']),
    }
</script>
