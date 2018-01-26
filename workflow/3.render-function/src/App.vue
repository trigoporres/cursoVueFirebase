<template>
    <div>
      <!-- de manera sencilla se puede añadir mas tag segun lo indiquemos en tipo -->
        <elemento tipo="footer">Hola footer</elemento>
        <elemento tipo="header">Hola header</elemento>
        <elemento tipo="aside">Hola aside</elemento>
        <elemento tipo="nav">Hola nav</elemento>
        <elemento tipo="main">Hola main</elemento>
        <elemento tipo="esteEsElTagQueSeRenderiza">Prueba</elemento>
    </div>
  
</template>

<script>
  import elemento from './components/Elemento.vue';
    export default {
        components: { elemento }
    }
</script>

<style>

</style>
