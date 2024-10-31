<template>
    <div>
        <h2>{{personaje.nombre}}</h2>
        <button @click="seleccionarFavorito()">
            Seleccionar favorito
        </button>
        <p>{{personaje.pelicula}}</p>
        <img :src="personaje.imagen"/>
    </div>
</template>

<script>
    export default {
        name: "PersonajeComponent",
        props: [ "personaje", "index" ],
        methods: {
            seleccionarFavorito() {
                this.$emit("seleccionarFavorito", this.personaje)
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilocomic.css';
</style>