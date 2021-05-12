<template>
  <section :id="scrollId" class="hero is-medium">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-2 is-700 line-height-150">
          Transparencia y Acceso a la Información en el Poder Judicial y Ministerio Público
        </h1>
        <div class="py-6">
          <h1 class="title is-3 is-700 is-spaced">
            ¿Qué garantiza la Ley 27.275?
          </h1>
          <h1 class="subtitle is-4 line-height-150">
            En 2016 se sancionó la Ley Acceso a la Información Pública de Argentina que garantiza el derecho de acceso a la información pública y se promueve la participación ciudadana y transparencia de la gestión pública.
          </h1>
          <br>
          <h1 class="title is-4">
            <a href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/265000-269999/265949/norma.htm" target="_blank" class="has-text-danger"><u>Ir a la Ley</u></a>
          </h1>
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
