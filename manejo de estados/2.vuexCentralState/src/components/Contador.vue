<template>
    <div>
        <h1>Contador: {{ cantidad }}</h1>
        <button @click="aumentar">Aumentar</button>
        <button @click="reducir">Reducir</button>
    </div>
</template>
<script>
//al utilizar vuex ya no necesitamos hacer referencia a ninguna propiedad y por lo tant ya no neceita emitir eventos ya que accedemos directamente al almacen principal donde tenemos declarada la propiedad compartida.
    export default {
        //props: ['cantidad'],
        methods: {
            aumentar() {
                //this.$emit('aumentar');
                this.$store.state.cantidad++;
            },
            reducir() {
                //this.$emit('reducir');
                this.$store.state.cantidad--;
            }
        },
        //de esta manera cuando hacemos referencia en template a cantidad que tenemos guardada en store y se lo devolvemos con el valor en ese momento
        computed: {
            cantidad() {
                return this.$store.state.cantidad;
            }
        }
    }
</script>
