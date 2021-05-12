<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-2 is-700 is-spaced">
          Fuentes
        </h1>
        <br>
        <h6 class="subtitle is-4">
          Última actualización
        </h6>
        <h6 class="title is-5 is-800">
          {{ $config.dataDateUpdated }}
        </h6>
        <div class="content is-size-5">
          <p class="is-300">
            Las visualizaciones de esta web se basan en los datos oficiales publicados o facilitados por el Consejo de la Magistratura y el Ministerio Público Fiscal.
          </p>
          <p class="is-300">
            Data set original de concursos — <a href="#" target="_blank" class="has-text-black is-400"><u>proximamente</u> 🔗</a>
          </p>
          <p class="is-300">
            En caso de detectar algún error, escribinos a <a href="mailto:info@acij.org.ar" target="_blank" class="has-text-black is-400"><u>info@acij.org.ar</u></a>
          </p>
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
