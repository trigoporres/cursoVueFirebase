//instancia de Vue que ejercera de puente entre componentes
const eventBus = new Vue();

Vue.component('listado-productos', {
    props: ['productos'],
    template: `
        <section>
            <ul>
                <li v-for="producto in productos">
                    {{ producto.nombre }} - 
                    <small>{{ producto.precio.toFixed(2) }} €</small>
                    <button @click="eliminarProducto(producto.precio)">-</button>
                    <button @click="anadirProducto(producto.precio)">+</button>
                </li>
            </ul>
        </section>`,
    methods: {
        //creamos eventos custom que usaremos en el carrito
        anadirProducto(precio){
            eventBus.$emit('anadir', precio);
        },
        eliminarProducto(precio) {
            eventBus.$emit('eliminar', precio);
        },
    }
});

Vue.component('carrito-compra', {
    template: `
        <section>
            <h1> {{ total.toFixed(2) }} € </h1>
            <h3> {{ cantidadProductos }} productos </h3>
        </section>`,
    data() {
        return {
            cantidadProductos: 0,
            total: 0,
        }
    },

    //momento en que el componente esta listo
    created() {
        //lanzamos el evento del puente
        eventBus.$on('anadir', (precio) => {
            if (this.total >= 0) {
                this.total += precio;
                this.cantidadProductos++;
            }
        });
        eventBus.$on('eliminar', (precio) => {
            if (this.total > 0) {
                this.total -= precio;
                this.cantidadProductos--;
            }
        });
    }
});

new Vue({
    el: 'main',
    data: {
        productos: [
            {nombre: 'Libro ES6', precio: 39},
            {nombre: 'Portátil', precio: 1300},
            {nombre: 'Café', precio: 2},
            {nombre: 'Auriculares', precio: 80},
            {nombre: 'Moleskine', precio: 19},
        ]
    }
});