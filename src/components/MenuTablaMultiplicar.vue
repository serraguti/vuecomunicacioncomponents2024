<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link> | 
            </li>
            <li v-for="num in numeros" :key="num">
                <router-link :to="'/tablamultiplicar/' + num">
                    Tabla {{num}} | 
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuTablaMultiplicar",
        data() {
            return {
                numeros: []
            }
        },
        mounted() {
            for (var i = 1; i <= 5; i++){
                let random = parseInt(Math.random() * 100) + 1;
                this.numeros.push(random);
            }
        }
    }
</script>

<style>
    ul#menu li {
        display: inline
    }
</style>