<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-2 is-700 is-spaced">
          Desagregación de los índices
        </h1>
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
                <th class="has-text-centered is-size-5">
                  CMN
                </th>
                <th class="has-text-centered is-size-5">
                  CSJN
                </th>
                <th class="has-text-centered is-size-5">
                  MPD
                </th>
                <th class="has-text-centered is-size-5">
                  MPF
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(area,i) in data" :key="`area-${i}`">
                <td class="has-text-right is-size-5">
                  {{ area.area }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${area.cmn ? getColor(area.cmn) : '#777'}`">
                  {{ area.cmn ? area.cmn : '-' }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${area.csjn ? getColor(area.csjn) : '#777'}`">
                  {{ area.csjn ? area.csjn : '-' }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${area.mpd ? getColor(area.mpd) : '#777'}`">
                  {{ area.mpd ? area.mpd : '-' }}
                </td>
                <td class="data-value has-text-centered is-size-4" :style="`color: ${area.mpf ? getColor(area.mpf) : '#777'}`">
                  {{ area.mpf ? area.mpf : '-' }}
                </td>
              </tr>
            </tbody>
            <tfoot v-if="promedio">
              <tr>
                <td />
                <td class="data-value has-text-centered is-size-5" :style="`color: ${promedio.cmn ? getColor(promedio.cmn) : '#777'}`">
                  {{ promedio.cmn }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${promedio.csjn ? getColor(promedio.csjn) : '#777'}`">
                  {{ promedio.csjn }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${promedio.mpd ? getColor(promedio.mpd) : '#777'}`">
                  {{ promedio.mpd }}
                </td>
                <td class="data-value has-text-centered is-size-5" :style="`color: ${promedio.mpf ? getColor(promedio.mpf) : '#777'}`">
                  {{ promedio.mpf }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="content">
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
      'https://spreadsheets.google.com/feeds/list/14MCUztXQC4eP1xcAae-J0xb61cixFIMVESDia0kIyX4/1/public/full?alt=json'
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
  computed: {
    promedio () {
      if (!this.data) { return {} }
      const promedio = {
        cmn: 0,
        csjn: 0,
        mpd: 0,
        mpf: 0
      }
      this.data.forEach((d) => {
        promedio.cmn += parseFloat(d.cmn ? d.cmn : 0)
        promedio.csjn += parseFloat(d.csjn ? d.csjn : 0)
        promedio.mpd += parseFloat(d.mpd ? d.mpd : 0)
        promedio.mpf += parseFloat(d.mpf ? d.mpf : 0)
      })
      promedio.cmn = (promedio.cmn / this.data.length).toFixed(2)
      promedio.csjn = (promedio.csjn / this.data.length).toFixed(2)
      promedio.mpd = (promedio.mpd / this.data.length).toFixed(2)
      promedio.mpf = (promedio.mpf / this.data.length).toFixed(2)
      return promedio
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
  tfoot{
    td{
      border-color: black
    }
    tr th:first-child{
      border-top: 2px solid black;
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
