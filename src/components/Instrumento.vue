<template>
    <div>
    <b-card
      tag="article"
    >
    <div class="caja">
    <div class ="imagen">
      <a :href="'/detalle/' + instrumentoParam.id">
      <b-card-img
        :src="'/images/' + instrumentoParam.imagen"
        alt="Imagen"
        style="min-height:200px; max-height:200px"
      ></b-card-img>
      </a>
      </div>
      <div class="info">
      <b-card-title :title="instrumentoParam.instrumento"></b-card-title>
      <b-card-text>
        <strong> $ {{ instrumentoParam.precio }} </strong>
        <br/><br/>
        <span style="color:green" v-if="instrumentoParam.costoEnvio === 'G'">
         <img src="/images/camion.png"/> 
         Envio Gratis a todo el pais
        </span>
        <span style="color:orangered" v-if="instrumentoParam.costoEnvio != 'G'">
          Costo de Envio ${{instrumentoParam.costoEnvio}}
        </span>
        <br/><br/>
        <span>
          {{instrumentoParam.cantidadVendida}} vendidos.
        </span>
      </b-card-text>
      <div style="text-align:center">
      </div>
      </div>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
    props: ["instrumentoParam"]
}
</script>
<style>
  .caja{
    box-sizing: border-box;
    width: 100%;
  }
  .imagen{
     float: left;
     margin-right: 1%;
  }
</style>