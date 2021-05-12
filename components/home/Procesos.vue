<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title is-3">
        Procesos disciplinarios<br>a jueces y juezas
      </h1>
      <hr>
      <p class="count-number my-5">
        <span class="is-600 is-size-3">3770</span><br><span class="is-400">DENUNCIAS TOTALES</span>
      </p>
      <p class="is-900 is-size-5 my-5">
        Desde 1998
      </p>
      <div class="columns is-centered">
        <div class="column is-2">
          <p class="count-number my-2">
            <span class="is-400 is-size-3 color-green">3360</span><br><span class="is-400">DESESTIMADAS<br></span>
          </p>
        </div>
        <div class="column is-2">
          <p class="count-number my-2">
            <span class="is-400 is-size-3 color-green">245</span><br><span class="is-400">CADUCADAS POR EL<br>PASO DEL TIEMPO</span>
          </p>
        </div>
        <div class="column is-2">
          <p class="count-number my-2">
            <span class="is-400 is-size-3 color-green">42</span><br><span class="is-400">SANCIONES</span>
          </p>
        </div>
        <div class="column is-2">
          <p class="count-number my-2">
            <img src="~/assets/img/shiny-left.png" class="thingy" alt=""><span class="is-400 is-size-3 color-red">25</span><img src="~/assets/img/shiny-right.png" class="thingy" alt=""><br><span class="is-400">DENUNCIAS ACTIVAS<br>POR CADUCAR</span>
          </p>
        </div>
      </div>
      <img src="~/assets/img/procesos-dots.svg" class="image is-centered" alt="Procesos">
      <br>
      <router-link to="/procesos-disciplinarios" class="button is-primary-dark">
        Ver más
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
