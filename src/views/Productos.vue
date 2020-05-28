<template>
    <div class="productos">
        <h1>Productos</h1>
        <b-container>
        <div
          v-for="instrumento in instrumentosData"
          :key="instrumento.id"
          class="cards"
        >
          <instrumento-item :instrumentoParam="instrumento"></instrumento-item>
        </div>
    </b-container>
    </div>
</template>
<script>
import Instrumento from "@/components/Instrumento.vue";
export default {
   name:"Productos",
   components:{
       "instrumento-item": Instrumento
   },
   mounted(){
       this.getInstrumentos();
   },data(){
       return{
           instrumentosData: []
       };
   },
   methods:{
       async getInstrumentos(){
           const res = await fetch("/instrumentos.json");
           const resJson = await res.json();
           console.log(resJson);
           this.instrumentosData = resJson.instrumentos;
       }
   }
}
</script>
<style>
    .productos{
        padding:2%;
    }
</style>