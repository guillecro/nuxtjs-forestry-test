<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="subtitle is-5">
          En el cuadro que sigue encontrarás los puntajes de cada concurso en marcha (algunos anteriores también) y qué candidatos/as se beneficiaron con las impugnaciones y entrevistas personales:
        </h1>
        <div class="field has-addons mx-6">
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select v-model="sheetSelected">
                <option v-for="place in lugares" :key="`lugar-${place.key}`" :value="place.key">
                  {{ place.label }}
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
            <button class="button is-primary" :class="{'is-outlined': type !== 'graph'}" @click="type = 'nono'">
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
        <div v-if="!$fetchState.pending && !$fetchState.error && type == 'graph'" class="py-6 has-text-centered">
          <h1 class="subtitle is-5">
            Próximamente
          </h1>
        </div>
        <div v-else-if="!$fetchState.pending && !$fetchState.error && type == 'nono'">
          <v-chart class="chart" :option="chartOptions" />
        </div>
        <div v-if="!$fetchState.pending && !$fetchState.error && type == 'table'">
          <div class="is-flex is-flex-direction-row">
            <div style="max-width: 150px;">
              <div class="py-2 px-4">
                {{ table.headers[0].label }}
              </div>
              <div v-for="(header,i) in table.headers" :key="`row-${i}`" class="py-2 px-4">
                {{ data[0].label }}
              </div>
            </div>
            <div class="is-flex" style="overflow-x: scroll">
              <div v-for="header in table.headers.slice(1,table.headers.length)" :key="`header-${header.key}`">
                <div class="py-2 px-4">
                  {{ header.label }}
                </div>
                <div v-for="(p,i) in data" :key="`row-${i}`" class="py-2 px-4">
                  {{ p[header.key] }}
                </div>
              </div>
            </div>
            <div>
              <div class="py-2 px-4">
                {{ table.headers[0].label }}
              </div>
              <div v-for="(header,i) in table.headers" :key="`row-${i}`" class="py-2 px-4">
                {{ data[0][header.key] }}
              </div>
            </div>
          </div>
          <!-- <div class="tile is-ancestor">
            <div v-for="header in table.headers" :key="`header-${header.key}`" class="tile is-parent">
              <div class="tile is-child py-2 px-4">
                {{ header.label }}
              </div>
            </div>
          </div>
          <div v-for="(p,i) in data" :key="`row-${i}`" class="tile is-ancestor">
            <div v-for="(header,j) in table.headers" :key="`cell-${i}-${j}`" class="tile is-parent">
              <div class="tile is-child py-2 px-4">
                {{ p[header.key] }}
              </div>
            </div>
          </div> -->
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
    const data = await fetch(
      `https://spreadsheets.google.com/feeds/list/1SCyb2UYkO6JWrVaOhf3gUT6lQRtw1uH21YHsmAa61gU/${this.sheetSelected}/public/full?alt=json`
    ).then((res) => {
      return res.json()
    })
    // console.log(data)
    this.data = this.extractData(data)
    // this.data = this.createLabels(this.data)
    this.chartOptions.series = this.createDatasets(this.data)
    // console.log(this.data)
  },
  data () {
    return {
      data: null,
      type: 'table',
      lugares: [
        { key: '1', label: '412-CN Crim y Corr Federal - Sala' }
      ],
      sheetSelected: '1',
      table: {
        headers: [
          { label: 'Nombre y Apellido', key: 'nombre' },
          { label: 'Puntaje Oposición', key: 'oposicion' },
          { label: 'Puntaje Antecedentes', key: 'antecedentes' },
          { label: 'Sumatoria Puntajes', key: 'primerasum' },
          { label: 'Orden de Mérito', key: 'primerordenmerito' },
          { label: 'Impugnación', key: 'impugnacion' },
          { label: 'Impugnación Oposición', key: 'impugnacionopocision' },
          { label: 'Impugnación Antecedentes', key: 'impugnacionantecedentes' },
          { label: 'Sumatoria', key: 'nuevasumatoria' },
          { label: 'Nuevo Orden de Mérito', key: 'nuevoordenmerito' }
        ]
      },
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
        'ordenmeritooposicion',
        'ordenmeritoantecedentes'
      ],
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
      // barChartData: {
      //   // labels: [
      //   //   'Orden de Merito',
      //   //   'Orden de Merito Final'
      //   // ],
      //   labels: [
      //     'Orden de Merito - Oposicion',
      //     'Orden de Merito - Antecedentes',
      //     'Orden de Merito - Merito Final'
      //   ],
      //   // labels: [
      //   //   'Oposicion',
      //   //   'Antecedentes',
      //   //   'Impugnacion Oposicion',
      //   //   'Orden de Merito Final'
      //   // ],
      //   datasets: [
      //     {
      //       label: 'Visits',
      //       data: [10, 15, 20, 30, 40, 50, 60, 70, 34, 45, 11, 78, 45],
      //       backgroundColor: '#003f5c'
      //     },
      //     {
      //       label: 'Pages Views',
      //       data: [30, 24, 57, 23, 68, 72, 25, 64, 133, 143, 165, 33, 56],
      //       backgroundColor: '#2f4b7c'
      //     },
      //     {
      //       label: 'Users',
      //       data: [45, 65, 30, 53, 34, 35, 26, 37, 34, 45, 67, 87, 98],
      //       backgroundColor: '#665191'
      //     }
      //   ]
      // },
      // barChartOptions: {
      //   responsive: true,
      //   legend: {
      //     display: true,
      //     position: 'bottom',
      //     align: 'start'
      //   },
      //   title: {
      //     display: true,
      //     text: 'Orden de merito',
      //     fontSize: 24,
      //     fontColor: '#6b7280'
      //   },
      //   tooltips: {
      //     backgroundColor: '#17BF62'
      //   },
      //   scales: {
      //     xAxes: [
      //       {
      //         gridLines: {
      //           display: true
      //         }
      //       }
      //     ],
      //     yAxes: [
      //       {
      //         ticks: {
      //           stepSize: 1,
      //           beginAtZero: false
      //         },
      //         gridLines: {
      //           display: false
      //         }
      //       }
      //     ]
      //   }
      // }
    }
  },
  watch: {
    sheetSelected () {
      this.$fetch()
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
    // prepareChart (data) {
    //   const theSerie = []
    //   const theLegend = []
    //   let theMax = 1
    //   data.forEach((d, index) => {
    //     // console.log((index / data.length).toFixed(2))
    //     const theData = [
    //       parseInt(d.primerordenmerito) ? parseInt(d.primerordenmerito) : null,
    //       parseInt(d.nuevoordenmerito) ? parseInt(d.nuevoordenmerito) : null,
    //       parseInt(d.ordenentrevista) ? parseInt(d.ordenentrevista) : null,
    //       parseInt(d.ternacomision) ? parseInt(d.ternacomision) : null,
    //       parseInt(d.ternaplenario) ? parseInt(d.ternaplenario) : null
    //     ]
    //     theLegend.push(d.nombre)
    //     const auxMax = Math.max(...theData)
    //     theMax = theMax > auxMax ? theMax : auxMax
    //     theSerie.push({
    //       name: d.nombre,
    //       type: 'parallel',
    //       lineStyle: {
    //         color: this.getColor(parseFloat(index) / this.data.length),
    //         opacity: 0.75,
    //         width: 4
    //       },
    //       emphasis: {
    //         lineStyle: {
    //           color: "rgba(255, 0, 191, 1)",
    //           width: 5,
    //           type: "dotted",
    //           cap: "butt",
    //           join: "round",
    //           dashOffset: 10
    //         }
    //       },
    //       data: [theData]
    //       // data: [parseInt(d.primerordenmerito), (parseInt(d.nuevoordenmerito))],
    //       // data: [parseInt(d.ordenmeritooposicion), parseInt(d.primerordenmerito), parseInt(d.nuevoordenmerito)],
    //       // fill: false,
    //       // lineTension: 0,
    //       // spanGasps: true,
    //       // backgroundColor: d.impugnacion === 'si' ? 'pink' : this.getColor((index / data.length)),
    //       // backgroundColor: this.getColor((index / data.length)),
    //       // borderColor: d.impugnacion === 'si' ? 'pink' : this.getColor((index / data.length))
    //       // borderColor: this.getColor((index / data.length))
    //     })
    //   })
    //   this.parallelChartOptions.parallelAxis.forEach((d, i) => {
    //     this.parallelChartOptions.parallelAxis[i].max = theMax
    //   })
    //   this.parallelChartOptions.series = theSerie
    //   this.parallelChartOptions.legend.data = theLegend
    //   console.log(theSerie)
    // },
    createDatasets (data) {
      const theDataset = []
      data.forEach((d, index) => {
        // console.log((index / data.length).toFixed(2))
        theDataset.push({
          name: d.nombre,
          type: 'line',
          data: [
            parseInt(d.oposicion),
            (parseInt(d.oposicion) + parseInt(d.antecedentes)),
            (parseInt(d.oposicion) + parseInt(d.antecedentes) + parseInt(d.impugnacionopocision)),
            (parseInt(d.oposicion) + parseInt(d.antecedentes) + parseInt(d.impugnacionopocision) + parseInt(d.impugnacionantecedentes)),
            (parseInt(d.oposicion) + parseInt(d.antecedentes) + parseInt(d.impugnacionopocision) + parseInt(d.impugnacionantecedentes))
          ]
          // data: [parseInt(d.primerordenmerito), (parseInt(d.nuevoordenmerito))],
          // data: [parseInt(d.ordenmeritooposicion), parseInt(d.primerordenmerito), parseInt(d.nuevoordenmerito)],
          // fill: false,
          // lineTension: 0,
          // spanGasps: true,
          // backgroundColor: d.impugnacion === 'si' ? 'pink' : this.getColor((index / data.length)),
          // backgroundColor: this.getColor((index / data.length)),
          // borderColor: d.impugnacion === 'si' ? 'pink' : this.getColor((index / data.length))
          // borderColor: this.getColor((index / data.length))
        })
      })
      return theDataset
    },
    getColor (value) {
      const scale = chroma.scale(['#fbeb7c', '#3257ab'])
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
  height: 400px;
}
.field .control select {
  background: transparent;
  border-color: #467CF6;
  color: #467CF6;
}
.first-table{
  width: 25%;
  overflow-x: scroll;
  .table{
    width: 100%
    thead th {
      // width: 400px;
    }
    tbody td{
      text-align: right;
      // font-size: 0.9rem;
      border-right: 1px solid black;
    }
  }
}
.second-table{
  width: 65%;
  overflow: auto;
  .table {
    width: 600px;
  }
  thead th {
    // width: 200px;
    text-overflow: ellipsis;
    font-size: 0.5rem;
    // writing-mode: vertical-rl;
    // text-orientation: sideways;
  }
  tbody td{
    border-right: 1px solid black;
  }
}
.third-table{
  width: 10%;
  .table {
    width: 100%;
  }
  thead th {
    // width: 200px;
    font-size: 0.7rem;
    // writing-mode: vertical-rl;
    // text-orientation: sideways;
  }
  tbody td{
    border-left: 1px solid black;
  }
}
.table{
  background-color: transparent;
  // display: block;
  // margin: 0 auto 50px;
  table-layout: fixed;
  font-size: 0.9rem;

  td {
    height: 50px;
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
    // tr th:first-child{
      // border-right: 2px solid black;
    // }
  }
  tfoot{
    td{
      border-color: black
    }
    // tr th:first-child{
    //   // border-top: 2px solid black;
    // }
  }
  // tbody{
  //   // tr td:first-child{
  //   //   // border-right: 2px solid black;
  //   //   font-weight: 300;
  //   // }
  //   // tr td{
  //   //   border-bottom: 0;
  //   // }
  // }
}
</style>
