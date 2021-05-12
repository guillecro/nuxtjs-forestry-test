<template>
  <div>
    <div class="footer">
      <div class="">
        <div class="container">
          <div class="columns is-mobile is-multiline mb-5 is-vcentered">
            <div class="column is-12-mobile is-3-desktop">
              <img src="~/assets/img/acij-logo.png" width="167" class="image acij-logo">
            </div>
            <div class="column is-6-mobile is-3-desktop links-columns">
              <ul>
                <li><a href="/articulos" class="has-text-white">Artículos</a></li>
                <li><a href="/seleccion" class="has-text-white">Selección</a></li>
                <li><router-link to="/transparencia" class="has-text-white">Transparencia</router-link></li>
                <li><router-link to="/concursos" class="has-text-white">Concursos</router-link></li>
              </ul>
            </div>
            <div class="column is-6-mobile is-3-desktop links-columns">
              <ul>
                <li><a href="/quienes-somos" class="has-text-white">¿Qué es iniciativa justa?</a></li>
                <li><a href="/procesos-disciplinarios" class="has-text-white">Disciplina</a></li>
                <li><a href="mailto:info@acij.org.ar" class="has-text-white">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div class="columns">
              <div class="column">
                <a herf="https://democraciaenred.org"><img src="~/assets/img/logo-der.svg" class="image der-logo" alt=" Desarrollado con ♥ por Democracia en Red"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-top{
  color: #FFF;
  // .image{
  //   // max-width: 120px;
  //   margin: 0 auto;
  //   @media screen and (min-width: $tablet){
  //     margin: 0 auto 0 0;
  //   }
  // }
 }
 .der-logo, .acij-logo{
    margin: 0 auto;
    @include from($desktop) {
        margin: 0 auto 0 0;
    }
 }
 .der-logo {
   width: 160px;
 }
 .links-columns{
  text-align: center;
    @include from($desktop) {
      text-align: left;
    }
 }
</style>
