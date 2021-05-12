<template>
  <section :id="scrollId" class="hero is-fullheight my-6">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-2 is-700 is-spaced">
          Indices
        </h1>
        <br>
        <div v-if="$fetchState.pending" class="p-6 has-text-centered">
          <h1 class="title is-3 is-700">
            <i class="fas fa-sync fa-spin fa-2x has-text-orange" />
          </h1>
          <h1 class="title is-3 is-700 is-spaced">
            Cargando...
          </h1>
        </div>
        <div v-else-if="$fetchState.error" class="p-6 has-text-centered">
          <h1 class="title is-3 is-700">
            <i class="fas fa-times fa-2x has-text-orange" />
          </h1>
          <h1 class="title is-3 is-700 is-spaced">
            Error al cargar los datos... Intente nuevamente
          </h1>
        </div>
        <div v-else>
          <table class="table">
            <thead>
              <tr>
                <th />
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
              <tr>
                <td class="has-text-right is-size-4">
                  Transparencia Pasiva (TP)*
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[0].cmn)}`">
                  {{ data[0].cmn }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[0].csjn)}`">
                  {{ data[0].csjn }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[0].mpd)}`">
                  {{ data[0].mpd }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[0].mpf)}`">
                  {{ data[0].mpf }}
                </td>
              </tr>
              <tr>
                <td class="has-text-right is-size-4">
                  Promedio Transparencia Activa (TA)
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[1].cmn)}`">
                  {{ data[1].cmn }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[1].csjn)}`">
                  {{ data[1].csjn }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[1].mpd)}`">
                  {{ data[1].mpd }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[1].mpf)}`">
                  {{ data[1].mpf }}
                </td>
              </tr>
              <tr>
                <td class="has-text-right is-size-5">
                  Disponibilidad y completitud
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[2].cmn)}`">
                  {{ data[2].cmn }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[2].csjn)}`">
                  {{ data[2].csjn }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[2].mpd)}`">
                  {{ data[2].mpd }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[2].mpf)}`">
                  {{ data[2].mpf }}
                </td>
              </tr>
              <tr>
                <td class="has-text-right is-size-5">
                  Formato
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[3].cmn)}`">
                  {{ data[3].cmn }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[3].csjn)}`">
                  {{ data[3].csjn }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[3].mpd)}`">
                  {{ data[3].mpd }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[3].mpf)}`">
                  {{ data[3].mpf }}
                </td>
              </tr>
              <tr>
                <td class="has-text-right is-size-5">
                  Actualización
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[4].cmn)}`">
                  {{ data[4].cmn }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[4].csjn)}`">
                  {{ data[4].csjn }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[4].mpd)}`">
                  {{ data[4].mpd }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${getColor(data[4].mpf)}`">
                  {{ data[4].mpf }}
                </td>
              </tr>
              <tr>
                <td class="has-text-right is-size-4">
                  Organos Garantes OG
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[5].cmn)}`">
                  {{ data[5].cmn }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[5].csjn)}`">
                  {{ data[5].csjn }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[5].mpd)}`">
                  {{ data[5].mpd }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${getColor(data[5].mpf)}`">
                  {{ data[5].mpf }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="content">
          <p class="is-size-4 line-height-150">
            <b>El nivel de cumplimiento de las obligaciones de Transparencia Activa se clasifica en función de tres componentes:</b> Disponibilidad y completitud de la información, Formato de la información y Actualización de la información.
          </p>
          <p class="is-size-5">
            <b>(*) El indicador no mide la calidad de las respuestas, para ver un análisis sobre la forma en la que responde cada organismo ingresa al siguiente artículo (próximamente)</b>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chroma from 'chroma-js'

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
      'https://spreadsheets.google.com/feeds/list/1l1OuR2hhKVZ8QFpqmgryqthn9iUzSTcV_uiTvDqqoKU/1/public/full?alt=json'
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
      const scale = chroma.scale(['#EC6961', '#e29231', '#D9BE00', '#79C45E'])
      return scale(value).hex()
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
