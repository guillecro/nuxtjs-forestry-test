<template>
  <b-navbar wrapper-class="container" transparent>
    <template slot="end">
      <b-navbar-item tag="nuxt-link" to="/">
        Inicio
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/articulos">
        Artículos
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/procesos-disciplinarios">
        Disciplina
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/concursos">
        Concursos
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/transparencia">
        Transparencia
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/corrupcion">
        Corrupcion
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/quienes-somos">
        JusTA
      </b-navbar-item>
      <!-- <a href="/corrupcion">
        Corrupción
      </a> -->
    </template>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar-item{
  font-weight: 600;
  // text-transform: uppercase;
  font-family: 'Raleway', $family-primary;
}
</style>
