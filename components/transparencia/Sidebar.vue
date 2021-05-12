<template>
  <scrollactive active-class="active" class="my-nav" :offset="0" :duration="1000" bezier-easing-value=".5,0,.35,1">
    <a href="#ley" class="scrollactive-item">Ley 27.275</a>
    <a href="#transparencia-activa" class="scrollactive-item">Transparencia Activa</a>
    <a href="#transparencia-pasiva" class="scrollactive-item">Transparencia Pasiva</a>
    <a href="#sujetos-obligados" class="scrollactive-item">Sujetos Obligados</a>
    <a href="#organos-garantes" class="scrollactive-item">Organos Garantes</a>
    <a href="#cumplimiento" class="scrollactive-item">Cumplimiento</a>
    <a href="#grafico-indices" class="scrollactive-item">Indices </a>
    <a href="#grafico-cumplimiento" class="scrollactive-item">Indice T.A.</a>
    <a href="#grafico-desagregacion" class="scrollactive-item">Desagregación de indices</a>
    <a href="#glosario" class="scrollactive-item">Glosario</a>
    <a href="#sobre-pa" class="scrollactive-item">Conclusiones</a>
    <a href="#informacion-adicional" class="scrollactive-item">Información adicional</a>
    <a href="#fuentes" class="scrollactive-item">Fuentes y notas</a>
    <a href="#creditos" class="scrollactive-item">Créditos</a>
  </scrollactive>
</template>

<style lang="scss" scoped>
.my-nav{
  position: sticky;
  top: 50px;
  .scrollactive-item{
    display:block;
    padding: 0px 10px 0px 0px;
    text-transform: uppercase;
    text-align: right;
    color: #6b6b6b;
    margin: 5px 0px;
    &.active{
    padding: 0px 5px 0px 0px;
      color: #ec6961;
      font-weight: 800;
      border-right: 5px solid #ec6961;
    }
  }
}
</style>
