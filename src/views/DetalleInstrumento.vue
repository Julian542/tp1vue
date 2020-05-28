<template>
    <div>
        <h1>Que onda con la people</h1>
            <b-container class="mt-5 tarjeta">
    <b-row>
      <b-col>
        <img
          :src="'/images/' + instrumentoxid.imagen"
          width="80%"
          height="80%"
        />
      </b-col>
      <b-col>
        <b-row>
          <h6>{{ instrumentoxid.cantidadVendida }} vendidos</h6>
        </b-row>
        <b-row>
          <h1>{{ instrumentoxid.instrumento }}</h1>
        </b-row>
        <b-row>
          <h2>$ {{ instrumentoxid.precio }}</h2>
        </b-row>
        <b-row>
          <h4>Marca: {{ instrumentoxid.marca }}</h4>
        </b-row>
        <b-row>
          <h4>Modelo: {{ instrumentoxid.modelo }}</h4>
        </b-row>
        <b-row>
          <h5 style="color:green" v-if="instrumentoxid.costoEnvio === 'G'">
         <img src="/images/camion.png"/> 
         Envio Gratis a todo el pais
        </h5>
        <h5 style="color:orangered" v-else>
          Costo de Envio ${{instrumentoxid.costoEnvio}}
        </h5>
        </b-row>
        <b-row>
          <b-button href="/" variant="outline-primary"
            >Agregar al carrito</b-button
          >
        </b-row>
      </b-col>
      <b-row class="ml-5 mr-5">
        <h4>Descripción: {{ instrumentoxid.descripcion }}</h4>
      </b-row>
    </b-row>
            </b-container>
        <b-button href="/productos">Volver</b-button>
    </div>
</template>
<script>
export default {
    name:"DetalleInstrumento",
    components:{},
    mounted(){
        this.getInstrumento();
    },
    data(){
        return{
            instrumentoxid:[]
        };
    },
    methods:{
        async getInstrumento(){
            const parametroId = this.$route.params.id;
            const res = await fetch("/instrumentos.json");
            const resJson = await res.json();
            this.instrumentoxid = await resJson.instrumentos.find(
                instrumento => instrumento.id === parametroId
            );
        }
    }
}
</script>