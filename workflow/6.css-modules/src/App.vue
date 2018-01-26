<template>
    <!--<h1 :class="[$style.rojo]">Hola CSS Modules</h1>-->
    <h1 :class="{[$style.subrayado] : subrayado}">Hola CSS Modules</h1>
</template>

<script>
    export default {
        data() {
            return {
                subrayado: false
            }
        }
    }
</script>

<style module>
/* module nos ayuda a encasular, los podemos importar, y asociar a un componente, template... cambia el valor de dinamicamente para asegurarse de que son unicos */
    .subrayado {
        text-decoration: underline;
    }
    .rojo {
        color: red;
    }
</style>