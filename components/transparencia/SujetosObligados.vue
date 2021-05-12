<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-3 is-700">
          <i class="fas fa-search has-text-orange fa-2x" />
        </h1>
        <h1 class="title is-3 is-700 is-spaced is-500 line-height-150">
          ¿Quiénes son los Sujetos Obligados?
        </h1>
        <h1 class="subtitle is-4 line-height-150">
          Son sujetos obligados por la ley los poderes del Estado (el Poder Ejecutivo Nacional, el Poder Legislativo, el Poder Judicial, el Consejo de la Magistratura, el Ministerio Público Fiscal y el Ministerio Público de la Defensa),  así como organismos autárquicos, empresas y sociedades con participación estatal y otras dependencias.
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
