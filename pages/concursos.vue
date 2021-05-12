<template>
  <section class="specialbg">
    <div class="py-6">
      <div class="container my-6 py-6">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <Header scroll-id="ley" />
            <Seleccion scroll-id="seleccion" />
            <Vacantes scroll-id="vacantes" />
            <Proceso scroll-id="proceso" />
            <Puntajes scroll-id="puntajes" />
            <Influencias scroll-id="influencias" />
            <Conclusiones scroll-id="conclusiones" />
            <Lexico scroll-id="lexico" />
            <Fuentes scroll-id="fuentes" />
            <Creditos scroll-id="creditos" />
          </div>
          <div class="column is-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from '~/components/concursos/Sidebar'
import Header from '~/components/concursos/Header'
import Seleccion from '~/components/concursos/Seleccion'
import Vacantes from '~/components/concursos/Vacantes'
import Proceso from '~/components/concursos/Proceso'
import Puntajes from '~/components/concursos/Puntajes'
import Influencias from '~/components/concursos/Influencias'
import Conclusiones from '~/components/concursos/Conclusiones'
import Lexico from '~/components/concursos/Lexico'
import Fuentes from '~/components/concursos/Fuentes'
import Creditos from '~/components/concursos/Creditos'

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    Header,
    Sidebar,
    Seleccion,
    Vacantes,
    Proceso,
    Puntajes,
    Influencias,
    Conclusiones,
    Lexico,
    Fuentes,
    Creditos
  }
}
</script>

<style lang="scss" scoped>
.line {
display:inline-block;
width: 100px;
height: 6px;
margin: 1em 0em 2em 0em;
background-color: #00B1AF;
}
.count-number{
  line-height: normal;
}
.the-graphs{
  width: 100%;
  // width: 100vw;
  height: 100vh;
  max-height: 1080px;
  overflow-y: hidden;
}
.specialbg{
  background-color: #edf2fe;
}
.overlay-graphs{
  // min-height: 100vh;
  // width: 100vw;
  .the-buttons{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .column{
    position: relative
  }
}
.go-fullscreen{
  position: absolute;
  top: 20px;
  right: 27px;
}
.go-fullscreen-bottom{
  position: absolute;
  bottom: 20px;
  right: 40px;
  color: #6b6b6b;
}
</style>
