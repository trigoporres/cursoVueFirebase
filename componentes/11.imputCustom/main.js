// ref="pass" lo utilizamos para poderle pasar como referencia el template al componente
// this.$refs.pass.value = contrasena = ''; hace que si la contraseña es no valida la borre y quede el imput vacio
// this.$emit('imput', contrasena) lanza el evento y lo actualiza en la instancia vue
Vue.component('contrasena', {
  props: ['contrasena'],
  template: `<input :value="contrasena" @input="comprobarContrasena($event.target.value)" ref="pass">`,
  methods: {
      comprobarContrasena(contrasena) {
          if (this.noValidas.includes(contrasena)) {
              this.$refs.pass.value = contrasena = '';
          }
          this.$emit('input', contrasena);
      }
  },
  data() {
      return {
          noValidas: ['abc', 'admin', '123456', 'root'],
      }
  }
});

new Vue({
  el: 'main',
  data: {
      contrasena: 'es3Es653!*&__',
  },
});