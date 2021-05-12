<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-2 is-700 is-spaced">
          Información adicional
        </h1>
        <br>
        <div class="columns is-vcentered is-centered my-6">
          <div class="column is-narrow">
            <i class="far fa-file-pdf has-text-orange fa-5x" />
          </div>
          <div class="column has-text-left is-9">
            <h1 class="subtitle is-4">
              ¿Cuál fue la metodología utilizada para medir el cumplimiento de la Ley de Acceso a la Información Pública de los órganos de justicia nacionales?
            </h1>
            <h1 class="title is-5">
              <a href="/pdf/metodologia-medicion-transparencia.pdf" target="_blank">Descargar</a>
            </h1>
          </div>
        </div>
        <div class="columns is-vcentered is-centered my-6">
          <div class="column is-narrow">
            <i class="far fa-file-pdf has-text-orange fa-5x" />
          </div>
          <div class="column has-text-left is-9">
            <h1 class="subtitle is-4">
              ¿Cómo presentar una solicitud de acceso a la información pública a los órganos del sistema de justicia?
            </h1>
            <h1 class="title is-5">
              <a href="/pdf/como-presentar-una-solicitud-de-aip.pdf" target="_blank">Descargar</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    scrollId: {
      type: String,
      required: false,
      default: () => 'default-id'
    }
  }
}
</script>
