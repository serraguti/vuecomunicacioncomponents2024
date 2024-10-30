<template>
    <div>
        <h1 style="color:red">Padre números</h1>
        <h3 style="color:fuchsia">
            Las suma es {{suma}}
        </h3>
        <button @click="generarNumero()">
            Nuevo número
        </button>
        <div v-for="num in numeros" :key="num">
            <HijoNumero :numero="num"
            v-on:sumarNumeros="sumarNumeros"/>
        </div>
    </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue'
    export default {
        name: "PadreNumeros",
        components: {
            HijoNumero
        }
        , data() {
            return {
                numeros: [7 , 22, 55], 
                suma: 0
            }
        },
        methods: {
            generarNumero() {
                let random = parseInt(Math.random() * 100) + 1;
                this.numeros.push(random);
            },
            sumarNumeros(numero) {
                this.suma += numero;
            }
        }
    }
</script>