<template>
  <div>
    <!-- puede haber tantos componentes como queramos -->
    <persona></persona>
    <persona></persona>
    <persona></persona>
    <persona></persona>
    <persona></persona>
    <persona></persona>
    <persona></persona>
    <persona></persona>
  </div>
  

</template>

<script>
// importamos el componente persona
  import persona from './component/persona.vue'

  export default {
    //declaramos el componente para poder usarlo en el template
    components: { persona },
    data () {
      return {
      }
    }
  } 
</script>

<style>

</style>
