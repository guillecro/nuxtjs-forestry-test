<template>
  <scrollactive active-class="active" class="my-nav" :offset="0" :duration="1000" bezier-easing-value=".5,0,.35,1">
    <a href="#ley" class="scrollactive-item">Concursos</a>
    <a href="#seleccion" class="scrollactive-item">Selección</a>
    <a href="#vacantes" class="scrollactive-item">Vacantes</a>
    <a href="#proceso" class="scrollactive-item">Proceso</a>
    <a href="#puntajes" class="scrollactive-item">Puntajes</a>
    <a href="#influencias" class="scrollactive-item">Influencias</a>
    <a href="#conclusiones" class="scrollactive-item">Conclusiones</a>
    <a href="#lexico" class="scrollactive-item">Léxico no especialistas</a>
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
      color: #3157ac;
      font-weight: 800;
      border-right: 5px solid #3157ac;
    }
  }
}
</style>
