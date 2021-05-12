<template>
  <section id="vacantes" class="section">
    <div class="container has-text-centered">
      <h1 class="title is-3">
        Concursos de jueces, <br>juezas y fiscales
      </h1>
      <hr>
      <p class="count-number my-5">
        <span class="is-600 is-size-3">368</span><br><span class="is-400">VACANTES TOTALES</span>
      </p>
      <div class="columns is-centered my-10">
        <div class="column is-6-tablet ">
          <img src="~/assets/img/jueves-image.svg" height="50" alt="">
          <h3 class="blue title is-size-3 has-text-weight-bold mb-10">
            Jueces y juezas
          </h3>
          <div class="columns">
            <div class="column">
              <span class="blue is-size-2">240</span><br>
              <span class="">VACANTES</span>
            </div>
            <div class="column">
              <span class="blue is-size-2">236*</span><br>
              <span>TRÁMITES <br>EN CURSO</span>
            </div>
          </div>
        </div>
        <div class="column is-6-tablet ">
          <img src="~/assets/img/fiscales-image.svg" height="50" alt="">
          <h3 class="is-size-3 title has-text-weight-bold violet">
            Fiscales
          </h3>
          <div class="columns">
            <div class="column">
              <span class="violet is-size-2">128</span><br>
              <span>VACANTES</span>
            </div>
            <div class="column">
              <span class="violet is-size-2">63*</span><br>
              <span>TRÁMITES <br>EN CURSO</span>
            </div>
          </div>
        </div>
      </div>
      <p class="my-5 is-raleway">
        <strong class="has-text-weight-bold">(*)</strong> Los trámites en curso son aquellas vacantes cuyos concursos ya comenzaron o ya fueron realizados y elevados al Poder Ejecutivo o el Senado. Las restantes vacantes no cuentan aún con trámite de selección iniciado.
      </p>
      <p class="mb-5 violet">
        Ingresá para ver el detalle de los concursos
      </p>
      <router-link to="/concursos" class="button is-primary-dark violet-bg">
        Ver más
      </router-link>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title{
  margin-bottom: 20px;
}
.blue{
  color: #467cf6;
}
.violet{
  color: #3157ac;
}
.violet-bg{
  background: #3157ac;
}
#seleccion {
  background: #edf2fe;
  overflow: hidden;
}
#vacantes{
  background: #EDF2FE;
}
hr{
  height: 2px;
  width: 170px;
  margin: 0 auto;
  background-color: $dark
}
.count-number{
  line-height: normal;
}
.color-red{
  color: #EF1D1D;
}
.color-green{
  color: #5CCBC9;
}
.thingy{
  margin-bottom: -7px;
}
</style>
