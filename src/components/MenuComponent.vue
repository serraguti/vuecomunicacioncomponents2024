<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link> | 
            </li>
            <li>
                <router-link to="/personajes">Personajes</router-link> | 
            </li>            
            <li>
                <router-link to="/numerodoble">Número doble SIN</router-link> | 
            </li>
            <li v-for="num in numeros" :key="num">
                <router-link :to="'/numerodoble/' + num">Doble {{num}}</router-link> | 
            </li>
            <li>
                <router-link to="/deportes/14">Deportes</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent",
        data() {
            return {
                numeros: [55,66,77,88]
            }
        }
    }
</script>
<style>
    ul#menu li {
        display: inline
    }
</style>