<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <h1 class="title is-3">
            Transparencia del sistema de justicia argentino
          </h1>
          <div class="line-violeta" />
          <div class="content is-size-5">
            <p>
              Medimos la transparencia de los órganos del sistema de justicia nacional según el cumplimiento de la <b>Ley de Acceso a la Información Pública Argentina.</b>
            </p>
            <router-link to="/transparencia" class="button  red-bg">
              Ver más
            </router-link>
          </div>
        </div>
        <div class="column">
          <img src="~/assets/img/transparencia.svg" width="325" class="image transparencia-pic" alt="Transparencia">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section{
background-color: #ffeeed;
}
.red-bg{
  color: white;
  background-color: #b7342c;
}
.line-violeta {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 3px;
    margin-top: 1rem;
    background-color: #3B1C62;
    margin-bottom: 1rem;
    .filler{
      position: absolute;
      right: 100%;
      height: 3px;
      background-color: #3B1C62;
      width: 100vw;
      top: 0;
    }
 }
 .transparencia-pic{
   margin: 0 auto;
    @include from($desktop) {
   margin-left: auto;
   margin-right: 0;
    }
 }
</style>
