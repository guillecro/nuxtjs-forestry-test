<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-3 is-700">
          <i class="fas fa-search has-text-orange fa-2x" />
        </h1>
        <h1 class="title is-3 is-700 is-spaced line-height-150">
          ¿Cómo cumplieron el Poder Judicial y el Ministerio Público estas obligaciones?
        </h1>
        <h1 class="subtitle is-4 line-height-150">
          Para medir el cumplimiento desarrollamos una serie de indicadores que permiten cuantificar el grado de cumplimiento de estas obligaciones para el Consejo de la Magistratura de la Nación (CMN), la Corte Suprema de Justicia de la Nación (CSJN), el Ministerio Público de la Defensa (MPD) y el Ministerio Público Fiscal (MPF).
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
