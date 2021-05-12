<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-2 is-700 is-spaced line-height-150">
          Hay distintas formas de influenciar los resultados de los concursos para beneficiar a algún o alguna postulante:
        </h1>
        <br>
        <div class="columns is-centered is-multiline">
          <div class="column is-6 py-5">
            <h1 class="title is-4 is-700">
              <i class="fas fa-users has-text-secondary fa-3x" />
            </h1>
            <p class="is-size-5 line-height-150">
              <span class="is-700">Que algún postulante logre romper el anonimato en la corrección y consiga una nota más favorable gracias a su afinidad con la persona del jurado que debe corregirlos</span>
              <br>(se puede hacer utilizando algún código convenido en el escrito que presenta)
            </p>
          </div>
          <div class="column is-6 py-5">
            <h1 class="title is-4 is-700">
              <i class="fas fa-gavel has-text-secondary fa-3x" />
            </h1>
            <p class="is-size-5 line-height-150">
              <span class="is-700">Las impugnaciones de la evaluación de antecedentes suele ser otro momento en el que aparecen discrecionalidades y se otorgan aumentos de puntajes arbitrarios</span>
              <br>(la impugnación no la resuelve el mismo jurado sino consejeros de la Magistratura).
            </p>
          </div>
          <div class="column is-6 py-5">
            <h1 class="title is-4 is-700">
              <i class="fas fa-comments has-text-secondary fa-3x" />
            </h1>
            <p class="is-size-5 line-height-150">
              <span class="is-700">La entrevista personal no tiene criterios objetivos de evaluación preestablecidos. Es una instancia en la que es muy fácil mejorar la posición de alguna o algún candidato gracias a la utilización de criterios subjetivos.</span>
            </p>
          </div>
          <div class="column is-6 py-5">
            <h1 class="title is-4 is-700">
              <i class="fas fa-balance-scale has-text-secondary fa-3x" />
            </h1>
            <p class="is-size-5 line-height-150">
              <span class="is-700">El plenario tiene potestades para revisar todo lo actuado durante las instancias de evaluación y modificar el orden de mérito con amplios márgenes de discrecionalidad.</span>
            </p>
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
