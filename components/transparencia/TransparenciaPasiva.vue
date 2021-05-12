<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-3 is-700">
          <i class="fas fa-search has-text-orange fa-2x" />
        </h1>
        <h1 class="title is-3 is-700 is-spaced line-height-150">
          ¿Qué es la Transparencia Pasiva (TP)?
        </h1>
        <h1 class="subtitle is-4 line-height-150">
          La TP es la obligación de las instituciones prevista en la ley de entregar la información pública que le sea solicitada por las personas en forma completa, oportuna y comprensible y, de ser posible, en formatos electrónicos abiertos.
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
