<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link> | 
            </li>
            <li>
                <router-link to="/numerodoble">Número doble SIN</router-link> | 
            </li>
            <li>
                <router-link to="/numerodoble/77">Doble 77</router-link> | 
            </li>
            <li>
                <router-link to="/deportes/14">Deportes</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>
<style>
    ul#menu li {
        display: inline
    }
</style>