<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0">
      <div class="container">
        <h1 class="title is-2 has-text-centered">
          Léxico para no especialistas
        </h1>
        <div class="my-4 has-background-white px-6 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                ✏️
                <span class="is-size-5">Oposición</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>Exámen escrito</p>
            </div>
          </div>
        </div>
        <div class="my-4 has-background-white px-6 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                📖
                Antecedentes
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>Evaluación del CV de los postulantes</p>
            </div>
          </div>
        </div>
        <div class="my-4 has-background-white px-6 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                💼
                <span class="is-size-5">Impugnación</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>
                Apelación por la nota del examen o la evaluación de los antecedentes
              </p>
            </div>
          </div>
        </div>
        <div class="my-4 has-background-white px-6 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                👩‍⚖️
                <span class="is-size-5">Impugnación oposición</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>
                Apelación por la nota del examen
              </p>
            </div>
          </div>
        </div>
        <div class="my-4 has-background-white px-6 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                👨‍⚖️
                <span class="is-size-5">Impugnación de antecedentes</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>
                Apelación por la nota de la evaluación del CV
              </p>
            </div>
          </div>
        </div>
        <div class="my-4 has-background-white px-6 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                🏛️
                <span class="is-size-5">Consejo de la Magistratura</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>
                Organismo público que se dedica a seleccionar magistrados/as, llevar adelante procesos de disciplina o remoción y la administración del Poder Judicial
              </p>
            </div>
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
