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
        <div class="content">
          <p class="is-300 is-size-5">
            Las visualizaciones de esta web se basan en el informe realizado por ACIJ sobre el cumplimiento de la Ley de Acceso a la Información Pública — <a href="#" target="_blank" class="has-text-black is-400"><u>proximamente</u> 🔗</a>
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
