<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <p class="is-size-4 line-height-150">
          La <b>selección</b> de jueces , juezas y fiscales  es un proceso con una enorme trascendencia en el sistema democrático. Los integrantes del Poder Judicial y el Ministerio Público tienen cargos casi de por vida y deciden cuestiones importantísimas en conflictos particulares y sobre cuestiones que afectan a la ciudadanía en su conjunto
        </p>
        <br>
        <p class="is-size-4 line-height-150">
          Las <b>demoras</b> en los procesos de selección favorecen formas de ocupar cargos judiciales que afectan la independencia de jueces, juezas y fiscales (como las subrogancias y los traslados).
        </p>
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
