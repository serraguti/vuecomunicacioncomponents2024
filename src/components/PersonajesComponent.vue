<template>
    <div>
        <h5 style="color:blue">Personajes Component</h5>
        <div v-if="personajeFavorito" class="verde">
            <h2 style="color:blue">{{personajeFavorito.nombre}}</h2>
            <img :src="personajeFavorito.imagen"/>
        </div>
        <div id="personajes" v-for="(personaje, index) in personajes" :key="personaje">
            <PersonajeComponent :personaje="personaje" :index="index"
            v-on:seleccionarFavorito="seleccionarFavorito"/>
        </div>
    </div>
</template>

<script>
import PersonajeComponent from './PersonajeComponent.vue';
    export default {
        name: "PersonajesComponent",
        components: {
            PersonajeComponent
        },
        methods: {
            seleccionarFavorito(personaje){
                this.personajeFavorito = personaje;
            }, 
        }
        ,data() {
            return {
                personajeFavorito: null, 
                personajes: [
                    {
                    nombre: "Michael Myers",
                    imagen:
                        "https://upload.wikimedia.org/wikipedia/en/e/e9/MichaelMyers2018.jpg",
                    pelicula: "Halloween"
                    , year: 1978
                    },
                    {
                    nombre: "Pennywise",
                    imagen:
                        "https://media.vogue.es/photos/5cc6fcdea6e1179f7253f451/master/w_1600%2Cc_limit/disfraces_halloween_inspirados_en_peliculas_terror_145567452.jpg",
                    pelicula: "It"
                    , year: 2017
                    },
                    {
                    nombre: "Anabelle",
                    imagen:
                        "https://media.vogue.es/photos/670f863f0ad5ec9f27d6f5c1/master/w_1600%2Cc_limit/MCDANCO%2520EC028_H.jpg",
                    pelicula: "The Conjuring"
                    , year: 2012
                    },
                    {
                    nombre: "Chucky",
                    imagen:
                        "https://i.ytimg.com/vi/3W4HzJHvVjc/maxresdefault.jpg",
                    pelicula: "Chucky el muñeco diabólico"
                    , year: 1989
                    },
                    {
                    nombre: "Freddy Krueger",
                    imagen:
                        "https://upload.wikimedia.org/wikipedia/en/e/eb/Freddy_Krueger_%28Robert_Englund%29.jpg",
                    pelicula: "Pesadilla en Elm Street"
                    , year: 1998
                    },
                    {
                    nombre: "Art el payaso",
                    imagen:
                        "https://es.gizmodo.com/app/uploads/2024/10/Diseno-sin-titulo-11-6.jpg",
                    pelicula: "Terrifier"
                    , year: 2016
                    }
                ]
            }
        }
    }
</script>