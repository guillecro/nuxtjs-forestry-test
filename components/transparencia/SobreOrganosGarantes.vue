<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-4 is-700 is-spaced">
          Sobre órganos garantes
        </h1>
        <br>
        <div class="columns is-centered">
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-balance-scale has-text-orange fa-2x" />
            </h1>
            <p>La Corte Suprema de Justicia de la Nación no creó una Agencia de Acceso a la Información Pública, incumpliendo con lo establecido en la ley 27.275.</p>
          </div>
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-search has-text-orange fa-2x" />
            </h1>
            <p>Únicamente las reglamentaciones de los órganos garantes del MPD y CMN prevén convocatorias abiertas para la designación de su autoridad.</p>
          </div>
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-exclamation-triangle has-text-orange fa-2x" />
            </h1>
            <p>Ninguna de las reglamentaciones contiene garantías contra la remoción arbitraria de sus titulares.</p>
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
