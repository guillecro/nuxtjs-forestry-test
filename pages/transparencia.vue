<template>
  <section class="specialbg">
    <div class="py-6">
      <div class="container my-6 py-6">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <Header scroll-id="ley" />
            <TransparenciaActiva scroll-id="transparencia-activa" />
            <TransparenciaPasiva scroll-id="transparencia-pasiva" />
            <SujetosObligados scroll-id="sujetos-obligados" />
            <OrganosGarantes scroll-id="organos-garantes" />
            <Cumplimiento scroll-id="cumplimiento" />
            <GraficoIndices scroll-id="grafico-indices" />
            <GraficoCumplimiento scroll-id="grafico-cumplimiento" />
            <GraficoDesagregacion scroll-id="grafico-desagregacion" />
            <Glosario scroll-id="glosario" />
            <Conclusiones scroll-id="conclusiones" />
            <InformacionAdicional scroll-id="informacion-adicional" />
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
import Sidebar from '~/components/transparencia/Sidebar'
import Header from '~/components/transparencia/Header'
import TransparenciaActiva from '~/components/transparencia/TransparenciaActiva'
import TransparenciaPasiva from '~/components/transparencia/TransparenciaPasiva'
import SujetosObligados from '~/components/transparencia/SujetosObligados'
import OrganosGarantes from '~/components/transparencia/OrganosGarantes'
import Cumplimiento from '~/components/transparencia/Cumplimiento'
import GraficoIndices from '~/components/transparencia/GraficoIndices'
import GraficoCumplimiento from '~/components/transparencia/GraficoCumplimiento'
import GraficoDesagregacion from '~/components/transparencia/GraficoDesagregacion'
import Glosario from '~/components/transparencia/Glosario'
import Conclusiones from '~/components/transparencia/Conclusiones'
import InformacionAdicional from '~/components/transparencia/InformacionAdicional'
import Fuentes from '~/components/transparencia/Fuentes'
import Creditos from '~/components/transparencia/Creditos'

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    Header,
    Sidebar,
    OrganosGarantes,
    SujetosObligados,
    TransparenciaActiva,
    TransparenciaPasiva,
    Cumplimiento,
    GraficoIndices,
    GraficoCumplimiento,
    GraficoDesagregacion,
    Glosario,
    Conclusiones,
    InformacionAdicional,
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
  background-color: #ffeeed;
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
