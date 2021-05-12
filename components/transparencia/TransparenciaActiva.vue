<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-3 is-700">
          <i class="fas fa-search has-text-orange fa-2x" />
        </h1>
        <h1 class="title is-3 is-700 is-spaced line-height-150">
          ¿Qué es la Transparencia Activa (TA)?
        </h1>
        <h1 class="subtitle is-4 line-height-150">
          La TA es la obligación de las instituciones previstas en la norma de
          publicar sin necesidad de que nadie se la pida la información
          establecida en la ley y cualquier otra de carácter relevante que se
          encuentre en su poder, en forma completa, actualizada, por medios
          digitales y en formatos abiertos que permitan su reutilización.
        </h1>
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
