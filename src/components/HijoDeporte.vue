<template>
    <div>
        <li style="color:red">
            {{nombredeporte}}
            <button @click="seleccionarFavorito()">
                Seleccionar favorito
            </button>
        </li>
    </div>
</template>

<script>
    export default {
        name: "HijoDeporte",
        props: [ "nombredeporte" ],
        methods: {
            seleccionarFavorito() {
                console.log("Soy el hijo");
                //DEBEMOS REALIZAR LA LLAMADA AL PADRE
                //DICHA LLAMADA SE HACE MEDIANTE string "nombreMetodoParent"
                //PARA ENVIAR INFORMACION, SE REALIZA CON COMAS POR CADA PARAMETRO
                //QUE TENGAMOS EN LA RECEPCION
                this.$emit("seleccionarFavoritoParent", this.nombredeporte);
            }
        },
        mounted() {
            console.log(this.nombredeporte)
        }
    }
</script>