<!--Esta seria la manera de hacerlo con template pero es largo repetitivo y poco mantenible, mejor hacerlo con la funcion render.
  <template>
    <div>
        <article v-if="tipo === 'article'">
            <slot></slot>
        </article>
        <section v-if="tipo === 'section'">
            <slot></slot>
        </section>
        <aside v-if="tipo === 'aside'">
            <slot></slot>
        </aside>
        <nav v-if="tipo === 'nav'">
            <slot></slot>
        </nav>
        <header v-if="tipo === 'header'">
            <slot></slot>
        </header>
        <footer v-if="tipo === 'footer'">
            <slot></slot>
        </footer>
    </div>
</template>-->
<script>
    export default {
        props: ['tipo'],
        render(createElement) {
          //crea un elemento especificado por this.tipo y accedemos al texto con this.$slots.default
            return createElement(
                this.tipo,
                this.$slots.default,
            )
        }
    }
</script>
<style>
</style>