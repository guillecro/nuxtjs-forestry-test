<template>
  <section :id="scrollId" class="hero is-fullheight my-6">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-4 is-400 is-spaced line-height-150">
          Datos sobre el cumplimiento de la obligación de <span class="is-700">transparencia activa</span> según tipo de información que exige la ley
        </h1>
        <br>
        <div class="columns">
          <div class="column">
            <i class="fas fa-circle fa-2x mb-2" :style="`color: ${getColor('4')}`" /><br>Si publica
          </div>
          <div class="column">
            <i class="fas fa-circle fa-2x mb-2" :style="`color: ${getColor('3')}`" /><br>Publica parcialmente
          </div>
          <div class="column">
            <i class="fas fa-circle fa-2x mb-2" :style="`color: ${getColor('2')}`" /><br>Publica de manera limitada
          </div>
          <div class="column">
            <i class="fas fa-circle fa-2x mb-2" :style="`color: ${getColor('1')}`" /><br>No publica
          </div>
        </div>
        <br>
        <div v-if="$fetchState.pending" class="p-6 has-text-centered">
          <h1 class="title is-4 is-700">
            <i class="fas fa-sync fa-spin fa-2x has-text-orange" />
          </h1>
          <h1 class="title is-4 is-700 is-spaced">
            Cargando...
          </h1>
        </div>
        <div v-else-if="$fetchState.error" class="p-6 has-text-centered">
          <h1 class="title is-4 is-700">
            <i class="fas fa-times fa-2x has-text-orange" />
          </h1>
          <h1 class="title is-4 is-700 is-spaced">
            Error al cargar los datos... Intente nuevamente
          </h1>
        </div>
        <div v-else>
          <table class="table">
            <thead>
              <tr>
                <th width="40%" />
                <th class="has-text-centered">
                  CMN
                </th>
                <th class="has-text-centered">
                  CSJN
                </th>
                <th class="has-text-centered">
                  MPD
                </th>
                <th class="has-text-centered">
                  MPF
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(area,i) in data" :key="`area-${i}`">
                <td class="has-text-right">
                  {{ area.area }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(area.cmn)}`">
                  <i class="fas fa-circle fa-lg" />
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(area.csjn)}`">
                  <i class="fas fa-circle fa-lg" />
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(area.mpd)}`">
                  <i class="fas fa-circle fa-lg" />
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(area.mpf)}`">
                  <i class="fas fa-circle fa-lg" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="content mb-6">
          <p class="is-size-4 line-height-150">
            <b>El nivel de cumplimiento de las obligaciones de Transparencia Activa se clasifica en función de tres componentes:</b> Disponibilidad y completitud de la información, Formato de la información y Actualización de la información.
          </p>
          <p class="is-size-5 line-height-150">
            <b>(*) El indicador no mide la calidad de las respuestas, para ver un análisis sobre la forma en la que responde cada organismo ingresa al siguiente artículo (próximamente)</b>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import chroma from 'chroma-js'

export default {
  props: {
    scrollId: {
      type: String,
      required: false,
      default: () => 'default-id'
    }
  },
  async fetch () {
    const data = await fetch(
      'https://spreadsheets.google.com/feeds/list/1634V3BFRSSoBWPH4Cu4uPPsJ28clDJhnyso9zHI-M-I/1/public/full?alt=json'
    ).then(res => res.json())
    this.data = this.extractData(data)
  },
  data () {
    return {
      data: null,
      keys: [
        'area',
        'cmn',
        'csjn',
        'mpd',
        'mpf'
      ]
    }
  },
  methods: {
    extractData (data) {
      // eslint-disable-next-line prefer-const
      let output = []
      data.feed.entry.forEach((entry) => {
        // eslint-disable-next-line prefer-const
        let marker = {}
        this.keys.forEach((key) => {
          marker[key] = entry[`gsx$${key}`].$t !== '' ? entry[`gsx$${key}`].$t : null
        })
        output.push(marker)
      })
      return output
    },
    getColor (value) {
      // const scale = chroma.scale(['#EC6961', '#D9BE00', '#79C45E'])
      // return scale(value).hex()
      switch (value) {
        case '1':
          return '#EC6961'
        case '2':
          return '#e29231'
        case '3':
          return '#D9BE00'
        case '4':
          return '#79C45E'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table{
  background-color: transparent;
  margin: 0 auto 50px;
  th, td {
    color: black;
    vertical-align: middle;
  }
  thead{
    th{
      border-color: black
    }
    tr th:first-child{
      border-right: 2px solid black;
    }
  }
  tbody{
    tr td:first-child{
      border-right: 2px solid black;
      font-weight: 300;
    }
    tr td{
      border-bottom: 0;
    }
  }
}
.data-value{
  font-weight: 700;
}
</style>
