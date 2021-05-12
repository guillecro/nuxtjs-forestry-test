<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container" style="width: 100%;">
        <h1 class="subtitle is-4 line-height-150">
          En el cuadro que sigue encontrarás los puntajes de cada concurso en marcha (algunos anteriores también) y qué candidatos/as se beneficiaron con las impugnaciones y entrevistas personales:
        </h1>
        <div class="field has-addons mx-6">
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select v-model="sheetSelected">
                <option v-for="place in lugares" :key="`lugar-${place.key}`" :disabled="place.disabled" :value="place.key">
                  {{ place.label }} ({{ place.status }})
                </option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-primary" :class="{'is-outlined': type !== 'table'}" @click="type = 'table'">
              Tabla
            </button>
          </div>
          <div class="control">
            <button class="button is-primary" :class="{'is-outlined': type !== 'graph'}" @click="type = 'graph'">
              Gráfico
            </button>
          </div>
        </div>
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
          <div v-if="type == 'graph'">
            <client-only>
              <v-parallel-chart class="chart" :option="parallelChartOptions" />
            </client-only>
          </div>
          <div v-else-if="type == 'table'" class="is-flex is-flex-direction-row my-5 px-6">
            <div class="first-table">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p,i) in data" :key="`orden-${i}`">
                    <td>{{ p.nombre }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="second-table">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th class="is-uppercase">
                      Puntaje Oposición
                    </th>
                    <th class="is-uppercase">
                      Puntaje Antecedentes
                    </th>
                    <th class="is-uppercase">
                      Sumatoria Puntajes
                    </th>
                    <th class="is-uppercase has-background-orange">
                      Orden de<br>Mérito
                    </th>
                    <th class="is-uppercase">
                      Impugnación
                    </th>
                    <th class="is-uppercase">
                      Impugnación Oposición
                    </th>
                    <th class="is-uppercase">
                      Impugnación Antecedentes
                    </th>
                    <th class="is-uppercase">
                      Sumatoria Impugnación
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p,i) in data" :key="`orden-${i}`">
                    <td>{{ p.oposicion != null ? p.oposicion : '-' }}</td>
                    <td>{{ p.antecedentes != null ? p.antecedentes : '-' }}</td>
                    <td>{{ p.primerasum != null ? p.primerasum : '-' }}</td>
                    <td class="has-background-warning">
                      {{ p.primerordenmerito != null ? p.primerordenmerito : '-' }}
                    </td>
                    <td class="is-uppercase" :class="{'has-text-orange': p.impugnacion == 'si'}">
                      {{ p.impugnacion != null ? p.impugnacion : '-' }}
                    </td>
                    <td>{{ p.impugnacionopocision != null ? p.impugnacionopocision : '-' }}</td>
                    <td>{{ p.impugnacionantecedentes != null ? p.impugnacionantecedentes : '-' }}</td>
                    <td>{{ p.nuevasumatoria != null ? p.nuevasumatoria : '-' }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="third-table">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th class="is-uppercase has-background-orange">
                      Nuevo<br>Orden<br>de Mérito
                    </th>
                    <th class="is-uppercase has-background-orange">
                      Entrevista
                    </th>
                    <th class="is-uppercase has-background-orange">
                      Terna<br>comisión
                    </th>
                    <th class="is-uppercase has-background-orange">
                      Terna<br>plenario
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p,i) in data" :key="`orden-${i}`">
                    <td class="has-background-warning">
                      {{ p.nuevoordenmerito != null ? p.nuevoordenmerito : '-' }}
                    </td>
                    <td class="has-background-warning">
                      {{ p.entrevista != null ? p.entrevista : '-' }}
                    </td>
                    <td class="has-background-warning">
                      {{ p.ternacomision != null ? p.ternacomision.toUpperCase() : '-' }}
                    </td>
                    <td class="has-background-warning">
                      {{ p.ternaplenario != null ? p.ternaplenario : '-' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chroma from 'chroma-js'

export default {
  components: {},
  props: {
    scrollId: {
      type: String,
      required: false,
      default: () => 'default-id'
    }
  },
  async fetch () {
    if (this.status == null) {
      const dataStatus = await fetch(
        'https://spreadsheets.google.com/feeds/list/1SCyb2UYkO6JWrVaOhf3gUT6lQRtw1uH21YHsmAa61gU/1/public/full?alt=json'
      ).then((res) => {
        return res.json()
      })
      this.status = this.extractDataStatus(dataStatus)
      this.fillLugares(this.status)
    }
    const data = await fetch(
      `https://spreadsheets.google.com/feeds/list/1SCyb2UYkO6JWrVaOhf3gUT6lQRtw1uH21YHsmAa61gU/${this.sheetSelected}/public/full?alt=json`
    ).then((res) => {
      return res.json()
    })
    this.data = this.extractData(data)
    this.prepareChart(this.data)
  },
  fetchOnServer: false,
  data () {
    return {
      data: null,
      type: 'table',
      status: null,
      statusKeys: [
        'nombre',
        'id',
        'estado',
        'mostrar'
      ],
      lugares: [
        { disabled: false, key: '2', label: 'Cargando' }
      ],
      sheetSelected: '2',
      keys: [
        'nombre',
        'oposicion',
        'antecedentes',
        'primerasum',
        'primerordenmerito',
        'impugnacion',
        'impugnacionopocision',
        'impugnacionantecedentes',
        'nuevasumatoria',
        'nuevoordenmerito',
        'ordenentrevista',
        'ternacomision',
        'ternaplenario',
        'nota',
        'sum-opo',
        'sum-opo-ant',
        'sum-opo-ant-iopo',
        'sum-opo-ant-iopo-iant',
        'orden-opo',
        'orden-opo-ant',
        'orden-opo-ant-iopo',
        'orden-opo-ant-iopo-iant'
      ],
      parallelChartOptions: {
        toolbox: {
          show: true,
          feature: {
            dataView: {
              readOnly: false,
              emphasis: {
                iconStyle: {
                  textAlign: 'center'
                }
              }
            },
            saveAsImage: {
              emphasis: {
                iconStyle: {
                  textAlign: 'right'
                }
              }
            }
          }
        },
        parallelAxis: [
          { dim: 0, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: -20, align: 'left', formatter: v => `${v}°`, color: 'black', fontWeight: 600, fontSize: 14, padding: [2, 4], backgroundColor: 'white', borderColor: '#CACACA', borderRadius: 4, borderWidth: 1 }, name: 'Orden de Merito' },
          { dim: 1, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: 0, align: 'center', formatter: v => `${v}°`, color: 'black', fontWeight: 600, fontSize: 14, padding: [2, 4], backgroundColor: 'white', borderColor: '#CACACA', borderRadius: 4, borderWidth: 1 }, name: 'Impugnación' },
          { dim: 2, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: 0, align: 'center', formatter: v => `${v}°`, color: 'black', fontWeight: 600, fontSize: 14, padding: [2, 4], backgroundColor: 'white', borderColor: '#CACACA', borderRadius: 4, borderWidth: 1 }, name: 'Entrevista' },
          { dim: 3, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: 0, align: 'center', formatter: v => `${v}°`, color: 'black', fontWeight: 600, fontSize: 14, padding: [2, 4], backgroundColor: 'white', borderColor: '#CACACA', borderRadius: 4, borderWidth: 1 }, name: 'Terna Comisión' },
          { dim: 4, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { formatter: v => `${v}°`, color: 'black', fontWeight: 600, fontSize: 14, padding: [2, 4], backgroundColor: 'white', borderColor: '#CACACA', borderRadius: 4, borderWidth: 1 }, name: 'Terna Plenario' }
        ],
        color: ['#f0d001', '#3257ab'],
        legend: {
          top: 10,
          // orient: 'vertical',
          data: [],
          // left: 0,
          // width: 100,
          itemWidth: 30,
          formatter: '{name}',
          type: 'scroll'
          // itemGap:
        },

        parallel: { // Definition of a parallel coordinate system.
          top: 90,
          parallelAxisDefault: { // A pattern for axis definition, which can avoid repeating in `parallelAxis`.
            type: 'value',
            nameLocation: 'start',
            nameGap: 20
          }
        },
        tooltip: {
          padding: 10,
          borderWidth: 1,
          formatter: (a) => {
            const personData = this.getDataByNombre(a.data.name)
            let aux = `
            <p style="font-size:16px; font-weight: bold; margin-bottom: 10px; text-align: left;">${a.data.name}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Orden de Mérito</b>: ${a.data.value[0]}°</p>
            <p style="font-size:9px; text-align: left; line-height: normal; padding-left:12px;"><b>Oposicion</b>:&nbsp;&nbsp;&nbsp;${personData.oposicion}</p>
            <p style="font-size:9px; text-align: left; line-height: normal; padding-left:12px;"><b>Antecedentes</b>:&nbsp;&nbsp;&nbsp;${personData.antecedentes}</p>
            <p style="font-size:9px; text-align: left; line-height: normal; padding-left:12px; padding-bottom: 10px;"><b>Sumatoria</b>:&nbsp;&nbsp;&nbsp;${personData.primerasum}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>¿Impugnaciones?</b>:&nbsp;&nbsp;&nbsp;${personData.impugnacion != null ? personData.impugnacion.toUpperCase() : '-'}</p>`
            if (personData.impugnacion != null && personData.impugnacion.toLowerCase() === 'si') {
              aux += `
                <p style="font-size:10px; text-align: left; line-height: normal; padding-left:12px;"><b>Oposicion</b>:&nbsp;&nbsp;&nbsp;${personData.impugnacionopocision}</p>
                <p style="font-size:10px; text-align: left; line-height: normal; padding-left:12px;"><b>Antecedentes</b>:&nbsp;&nbsp;&nbsp;${personData.impugnacionantecedentes}</p>
                <p style="font-size:10px; text-align: left; line-height: normal; padding-left:12px; padding-bottom: 10px;"><b>Sumatoria</b>:&nbsp;&nbsp;&nbsp;${personData.nuevasumatoria}</p>
              `
            }
            aux += `
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Nuevo Orden de Mérito</b>:&nbsp;&nbsp;&nbsp;${a.data.value[1]}°</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Entrevista</b>:&nbsp;&nbsp;&nbsp;${a.data.value[2] ?? 'No pasó / Sin datos'}${a.data.value[2] ? '°' : ''}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Terna comisión</b>:&nbsp;&nbsp;&nbsp;${a.data.value[3] ?? 'No pasó / Sin datos'}${a.data.value[3] ? '°' : ''}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Terna plenario</b>:&nbsp;&nbsp;&nbsp;${a.data.value[4] ?? 'No pasó / Sin datos'}${a.data.value[4] ? '°' : ''}</p>
            `
            if (personData.ordenentrevista === '*') {
              aux += `
              <p style="font-size:11px; text-align: left; line-height: normal; padding-top: 10px; ">* Participante renuncio o no se presentó a entrevista</p>
              `
            }
            if (personData.nota !== null) {
              aux += `
              <p style="font-size:11px; text-align: left; line-height: normal; padding-top: 10px; ">${personData.nota}</p>
              `
            }
            return aux
          }
        },
        series: []
      },
      chartOptions: {
        legend: {
          type: 'scroll'
        },
        xAxis: {
          type: 'category',
          data: [
            'Oposicion',
            'Antecedentes',
            'Impugnacion oposición',
            'Impugnacion Antecedentes',
            'Entrevista',
            'Merito Final'
          ]
        },
        yAxis: {
          name: 'Orden de Merito',
          inverse: true,
          min: 0
        },
        series: []
      }
    }
  },
  watch: {
    sheetSelected () {
      this.$fetch()
    }
  },
  methods: {
    extractDataStatus (data) {
      // eslint-disable-next-line prefer-const
      let output = []
      data.feed.entry.forEach((entry) => {
        // eslint-disable-next-line prefer-const
        let marker = {}
        this.statusKeys.forEach((key) => {
          marker[key] = entry[`gsx$${key}`].$t !== '' ? entry[`gsx$${key}`].$t : null
        })
        output.push(marker)
      })
      return output
    },
    fillLugares (data) {
      const output = []
      data.forEach((l) => {
        const aux = {
          disabled: l.mostrar !== 'TRUE',
          key: l.id,
          label: l.nombre,
          status: l.estado
        }
        output.push(aux)
      })
      this.lugares = output
    },
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
    getDataByNombre (name) {
      return this.data.find(p => p.nombre === name)
    },
    prepareChart (data) {
      const serieImpugnacionTrue = {
        name: 'Impugnaron',
        type: 'parallel',
        data: [],
        smooth: false,
        emphasis: {
          lineStyle: {
            color: '#fc8312',
            opacity: 0.75,
            width: 5,
            type: 'dotted',
            cap: 'butt',
            join: 'round',
            dashOffset: 10
          }
        }
      }
      const serieImpugnacionFalse = {
        name: 'No impugnaron',
        type: 'parallel',
        data: [],
        smooth: false,
        emphasis: {
          lineStyle: {
            color: '#4017f5',
            opacity: 0.75,
            width: 5,
            type: 'dotted',
            cap: 'butt',
            join: 'round',
            dashOffset: 10
          }
        }
      }
      let theMax = 1
      data.forEach((d, index) => {
        // console.log((index / data.length).toFixed(2))
        const theData = {
          name: d.nombre,
          value: [
            parseInt(d.primerordenmerito) ? parseInt(d.primerordenmerito) : null,
            parseInt(d.nuevoordenmerito) ? parseInt(d.nuevoordenmerito) : null,
            parseInt(d.ordenentrevista) ? parseInt(d.ordenentrevista) : null,
            parseInt(d.ternacomision) ? parseInt(d.ternacomision) : null,
            parseInt(d.ternaplenario) ? parseInt(d.ternaplenario) : null
          ],
          lineStyle: {
            // color: this.getColor(parseFloat(index) / this.data.length),
            color: d.impugnacion === 'si' ? '#f0d001' : '#3257ab',
            opacity: 0.75,
            width: 4
          }
        }
        if (d.impugnacion === 'si') {
          serieImpugnacionTrue.data.push(theData)
        } else {
          serieImpugnacionFalse.data.push(theData)
        }
        const auxMax = Math.max(...theData.value)
        theMax = theMax > auxMax ? theMax : auxMax
      })
      this.parallelChartOptions.parallelAxis.forEach((d, i) => {
        this.parallelChartOptions.parallelAxis[i].max = theMax
      })
      this.parallelChartOptions.series = [serieImpugnacionTrue, serieImpugnacionFalse]
      this.parallelChartOptions.legend.data = ['Impugnaron', 'No impugnaron']
    },
    getColor (value) {
      const scale = chroma.scale(['#f0d001', '#3257ab'])
      return scale(value).hex()
    },
    getValue (key) {
      return (this.data.find(d => d.clave === key)).valor
    }
  }
}
</script>

<style lang="scss" scoped>
.chart{
  height: 75vh;
}
.field .control select {
  background: transparent;
  border-color: #467CF6;
  color: #f0d001;
  color: #467CF6;
}
.first-table{
  margin-bottom: 0;
  width: 170px;
  .table{
    tbody {
      box-shadow: 5px 1px 4px -2px #00000078;
    }
    width: 100%
    thead th {
      border-right: 1px solid black;
    }
    tbody td{
      text-align: left;
      border-right: 1px solid black;
      max-width: 170px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.second-table{
  overflow: auto;
  thead th {
    width: 100px;
    font-size: 0.75rem;
  }
  tbody td{
    border-right: 1px solid black;
    width: 100px;
  }
}
.third-table{
  margin-bottom: 0;
  width: 250px;
  .table {
    width: 100%;
  }
  tbody {
    box-shadow: -5px 1px 4px -2px #00000078;
  }
  thead th {
    font-size: 0.75rem;
  }
  tbody td{
    border-left: 1px solid black;
  }
}
.table{
  background-color: transparent;
  font-size: 1rem;

  td {
    padding: 2px 5px;
    color: black;
    vertical-align: middle;
    border-bottom: 0;
  }
  thead{
    th{
      border-color: black;
      height: 80px;
      vertical-align: middle;
      line-height: normal;
    }
  }
  tfoot{
    td{
      border-color: black
    }
  }
}
</style>
