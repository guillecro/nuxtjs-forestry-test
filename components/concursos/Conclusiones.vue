<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9">
            <h1 class="subtitle is-4 is-spaced line-height-150">
              La participación de la sociedad civil en este mecanismo es vital para evitar abusos, modificaciones discrecionales e irregularidades. Los resultados de muchos concursos son consecuencia de negociaciones entre operadores judiciales (los famosos “padrinos”). Para reducir esto y asegurar que las ternas sean conformadas según el mérito de las y los concursantes, hay que transparentar lo más posible estos procesos
            </h1>
            <h1 class="subtitle is-4 is-700 is-spaced line-height-150">
              Si tenés información sobre cualquier problema en cualquier concurso, contactate con nosotros<br><a href="mailto:info@acij.org.ar" class="has-text-primary">info@acij.org.ar</a>
            </h1>
          </div>
        </div>
        <br>
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
